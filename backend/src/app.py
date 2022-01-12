from os import name
from flask import Flask,render_template, jsonify, request
from flask_jwt_extended.utils import get_jwt
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User, Profile, Event, Role
import datetime

app = Flask(__name__)
app.url_map.strict_slashes = False # para generar la consulta despues del /
app.config['DEBUG'] = True #permite depurar
app.config['ENV'] = 'development' #indicamos que estaremos en desarrollo
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False # 
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db' # estructura de uri en modo archivo
app.config['JWT_SECRET_KEY'] = '2008a08af45ab042543b95be99be2633'
db.init_app(app)
Migrate(app, db) # db init, db migrate, db upgrade, db downgrade
jwt = JWTManager(app)

CORS(app)

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/api/register', methods=['POST'])
def register():

    email = request.json.get('email')
    password = request.json.get('password')
    name = request.json.get('name')
    lastname = request.json.get('lastname')
    companyname = request.json.get('companyname')
    role_id = request.json.get('role_id')

    user_exist = User.query.filter_by(email=email).first()
    if user_exist: return jsonify({"Error": "Esta cuenta ya existe"}), 400

    user = User()
    user.email = email
    user.password = generate_password_hash(password)
    user.role_id = role_id

    
    profile = Profile()
    profile.name = name
    profile.lastname = lastname
    profile.companyname = companyname
    user.profile = profile

    user.save()

    return jsonify({"msg": "Tu registro se ha realizado con éxito"})

@app.route('/api/login', methods=['POST'])
def login():
    if request.method == 'POST':
        email = request.json.get("email")
        password = request.json.get("password")

        if not email: return jsonify({"msg": "Ingrese su email para iniciar sesión"}), 422
        if not password: return jsonify({"msg": "Ingrese su contraseña para iniciar sesión"}), 422

        user = User.query.filter_by(email=email).first()
        if not user: return jsonify({"Error": "El email o contraseña ingresado son incorrectos"})
        if not check_password_hash(user.password, password): return jsonify({"Error": "El email o contraseña ingresado son incorrectos"}), 401

        expire = datetime.timedelta(days=1)
        access_token = create_access_token(identity=user.email, expires_delta=expire)

        date = datetime.datetime.now()
        timestamp = datetime.datetime.timestamp(date)
        expire_date= datetime.datetime.fromtimestamp(timestamp + expire.total_seconds())

        data= {
            "access_token": access_token,
            "expire_date": expire_date,
            "user": user.serialize()
        }

        return jsonify(data), 200

@app.route('/api/admin', methods=['GET'])
def admin():
    users = User.query.all()
    users = list(map(lambda user: user.serialize(),users))
    return jsonify(users), 200




@app.route('/api/create_event', methods=['POST','DELETE'])
def create():
    if request.method == 'POST':
        name = request.json.get('name')
        image = request.json.get('image')
        description = request.json.get('description')
        date = request.json.get('date')
        location = request.json.get('location')
        value = request.json.get('value')

        event = Event()
        event.name = name
        event.image = image
        event.description = description
        event.date = date
        event.location = location
        event.value = value
        event.save()

        return jsonify({"msg": "La creación del evento se ha realizado con éxito"})
    
    if request.method == 'DELETE':
        event = Event()

if __name__ == '__main__':
    app.run()