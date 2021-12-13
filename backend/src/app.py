from flask import Flask, request, jsonify, render_template
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from models import db

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
if __name__ == '__main__':
    app.run()