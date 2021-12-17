from flask import Flask, json, request, jsonify, render_template
from flask_jwt_extended.utils import get_jwt
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from models import Evento
from models import db
from models import Usuario
from models import Perfil
from datetime import datetime

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

@app.route("/usuarios", methods=["GET" , "POST"])
@app.route("/usuarios/<int:id>", methods=["GET" , "POST", "DELETE"])
def usuarios(id=None):
    if request.method == "GET":
        if id is not None:
            usuarios= Usuario.query.get(id)
            if not usuarios: return jsonify({"msg": "Usuario no encontrado"}), 404
            return jsonify(usuarios), 200
        else:
            usuarios = Usuario.query.all()
            usuarios = list(map(lambda user: user.serialize(), usuarios))
            return jsonify(usuarios)
        
    if request.method == 'POST':
        name = request.json.get("name", "")
        lastName = request.json.get("lastName", "")
        email = request.json.get("email")
        password = request.json.get("password")
        companyName = request.json.get("companyName", "")

        usuario_exist = Usuario.query.filter_by(email=email).first()
        if usuario_exist: return jsonify({"error": "el email ya esta registrado!"}), 400

        usuario = Usuario()
        usuario.email = email
        usuario.password = generate_password_hash(password)
        usuario.active = True
            
        perfil = Perfil()
        perfil.name = name
        perfil.lastName = lastName
        perfil.companyName = companyName
        
        usuario.perfil = perfil
        usuario.save()
    

        return jsonify(usuario.serialize())





   
    
@app.route("/login", methods=['POST'])
def login():
        email = request.json.get("email")
        password = request.json.get("password")

        usuario_exist = Usuario.query.filter_by(email=email).first()
        if not usuario_exist: return jsonify({"msg": "email/password son incorrectos"}), 400

        if not check_password_hash(usuario_exist.password, password):
            return jsonify({"msg": "email/password son incorrectos"}), 400

        expires = datetime.timedelta(days=1)

        accesses_token = create_access_token(identity=usuario_exist.id, expires_delta = expires)

        data = {
            "access_token": accesses_token,
            "usuario": usuario_exist.serialize()
        }

        return jsonify(data),200

@app.route("/registro", methods=['POST'])
def register():
    if request.method == 'POST':
        name = request.json.get("name", "")
        lastName = request.json.get("lastName", "")
        email = request.json.get("email")
        password = request.json.get("password")
        companyName = request.json.get("companyName", "")

        usuario_exist = Usuario.query.filter_by(email=email).first()
        if usuario_exist: return jsonify({"error": "el email ya esta registrado!"}), 400

        usuario = Usuario()
        usuario.email = email
        usuario.password = generate_password_hash(password)
        usuario.active = True
            
        perfil = Perfil()
        perfil.name = name
        perfil.lastName = lastName
        perfil.companyName = companyName
        
        usuario.save()
    

        if not usuario: jsonify({"msg": "Registro fallido"}), 400

        expires = datetime.timedelta(days=1)

        accesses_token = create_access_token(identity=usuario.id, expires_delta = expires)

        data = {
            "access_token": accesses_token,
            "usuario": usuario.serialize()
        }

        return jsonify(data),200

@app.route('/perfil', methods=["GET"])
@jwt_required()
def perfil():
    id = get_jwt_identity()
    user = Usuario.query.get(id)
    return jsonify(user.serialize()), 200


@app.route("/eventos", methods=["GET" , "POST"])
@app.route("/eventos/<int:id>", methods=["GET" , "POST", "DELETE"])
def eventos(id=None):
    if request.method == "GET":
        if id is not None:
            eventos= Evento.query.get(id)
            if not eventos: return jsonify({"msg": "Evento no encontrado"}), 404
            return jsonify(eventos.serialize()), 200
        else:
            eventos = Evento.query.all()
            eventos = list(map(lambda evento: evento.serialize(), eventos))
            return jsonify(eventos)
        
        
    if request.method == 'POST':
        nombre = request.json.get("nombre")
        imagen = request.json.get("imagen")
        fecha = request.json.get("fecha")
        descripcion = request.json.get("descripcion")
        #estado = request.json.get("estado")
        ubicacion = request.json.get("ubicacion")
        valor = request.json.get("valor")
        valoracion = request.json.get("valoracion")
        
        eventos = Evento()
        eventos.nombre = nombre
        eventos.imagen = imagen
        eventos.fecha = fecha
        eventos.descripcion = descripcion
        #eventos.estado = estado
        eventos.ubicacion = ubicacion
        eventos.valor = valor
        eventos.valoracion = valoracion
        
        eventos.save()

        return jsonify(eventos.serialize()), 200


if __name__ == '__main__':
    app.run()