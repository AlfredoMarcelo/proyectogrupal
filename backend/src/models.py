from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Comentario(db.Model):
    __tablename__ = 'comentarios'
    id = db.Column(db.Integer, primary_key = True)
    comentario = db.Column(db.String(200))
    fecha = db.Column(db.DateTime)
    id_usuario = db.Column(db.Integer, db.ForeignKey('usuarios.id'))
    id_evento = db.Column(db.Integer, db.ForeignKey('eventos.id'))

class Perfil(db.Model):
    __tablename__ = 'perfiles'
    id = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(50))
    apellido = db.Column(db.String(50))
    facebook = db.Column(db.String(150), nullable = True, default = "")
    instagram = db.Column(db.String(150), nullable = True, default = "")
    nombre_empresa = db.Column(db.String(150))
    imagen = db.Column(db.String(120))
    agregar_evento = db.Column(db.String(120))
    editar_evento = db.Column(db.String(120))
    eliminar_evento = db.Column(db.String(120))
    id_usuario = db.Column(db.Integer, db.ForeignKey('usuarios.id'))   

class Usuario(db.Model):
    __tablename__ = 'usuarios'
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(100), nullable = False, unique = True)
    password = db.Column(db.String(250), nullable = False)
    lastName = db.Column(db.String(250), nullable = False)
    companyName = db.Column(db.String(250), nullable = True)
    #activo = db.Column(db.Boolean, default = True)
    #rol = db.Column(db.Integer)

class Rol(db.Model):
    ___tablename__ = 'roles'
    id = db.Column(db.Integer, db.ForeignKey('usuarios.rol'), primary_key = True)
    nombre = db.Column(db. String(100))


class Evento(db.Model):
    __tablename__ = 'eventos'
    id = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(120), nullable = False, unique = True)
    imagen = db.Column(db.String(120), nullable = False)
    descripcion = db.Column(db.Text, nullable = False)
    estado = db.Column(db.Boolean, default = True)
    fecha = db.Column(db.String(120))
    ubicacion = db.Column(db.String(120))
    valor = db.Column(db.String(120))
    valoracion = db.Column(db.String(120))
    id_usuario = db.Column(db.Integer, db.ForeignKey('usuarios.id'))


class Evento_Favorito(db.Model):
    __tablename__ = 'eventos_favoritos'
    id = db.Column(db.Integer, primary_key = True)
    evento_favorito = db.Column(db.String(120))
    id_usuario = db.Column(db.Integer, db.ForeignKey('usuarios.id'))
    id_eventos = db.Column(db.Integer, db.ForeignKey('eventos.id'))
