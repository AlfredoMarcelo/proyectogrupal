from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Comentario(db.Model):
    __tablename__ = 'comentarios'
    id = db.Column(db.Integer, primary_key = True)
    comentario = db.Column(db.String(200))
    fecha = db.Column(db.DateTime)
    id_usuario = db.Column(db.Integer, db.ForeignKey('usuarios.id'))#
    id_evento = db.Column(db.Integer, db.ForeignKey('eventos.id'))#

    def serialize(self):
        return{
            "id": self.id,
            "comentario": self.comentario,
            "fecha": self.fecha
        }

class Perfil(db.Model):
    __tablename__ = 'perfiles'
    id = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(50))
    apellido = db.Column(db.String(50))
    facebook = db.Column(db.String(150), nullable = True, default = "")
    instagram = db.Column(db.String(150), nullable = True, default = "")
    nombre_empresa = db.Column(db.String(150))
    imagen = db.Column(db.String(120))
    agregar_evento = db.Column(db.String(120))#
    editar_evento = db.Column(db.String(120))#
    eliminar_evento = db.Column(db.String(120))#
    id_usuario = db.Column(db.Integer, db.ForeignKey('usuarios.id'))#
    def serialize(self):
        return{
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "facebook": self.facebook,
            "instagram": self.instagram,
            "nombre_empresa": self.nombre_empresa,
            "imagen": self.imagen          
        }
class Usuario(db.Model):
    __tablename__ = 'usuarios'
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(100), nullable = False, unique = True)
    contraseña = db.Column(db.String(250), nullable = False)
    activo = db.Column(db.Boolean, default = True)#
    rol = db.Column(db.Integer)

    def serialize(self):
        return{
            "id":self.id,
            "email": self.email,
            "contraseña": self.contraseña,
            "activo": self.activo,
            "rol": self.rol
        }

class Rol(db.Model):
    ___tablename__ = 'roles'
    id = db.Column(db.Integer, db.ForeignKey('usuarios.rol'), primary_key = True)
    nombre = db.Column(db. String(100))

    def serialize(self):
        return{
            "id": self.id,
            "nombre": self.nombre
        }


class Evento(db.Model):
    __tablename__ = 'eventos'
    id = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(120), nullable = False)
    imagen = db.Column(db.String(120), nullable = False)
    descripcion = db.Column(db.Text, nullable = False)
    estado = db.Column(db.Boolean, default = True)
    fecha = db.Column(db.String(120), nullable=False)
    ubicacion = db.Column(db.String(120), nullable=False)
    valor = db.Column(db.String(120))
    valoracion = db.Column(db.String(120))
    id_usuario = db.Column(db.Integer, db.ForeignKey('usuarios.id'))#

    def serialize(self):
        return{
            "nombre": self.nombre,
            "imagen": self.imagen,
            "descripcion": self.descripcion,
            "estado": self.estado,
            "fecha": self.fecha,
            "ubicacion": self.ubicacion,
            "valor": self.valor,
            "valoracion": self.valoracion
        }


class Evento_Favorito(db.Model):
    __tablename__ = 'eventos_favoritos'
    id = db.Column(db.Integer, primary_key = True)
    evento_favorito = db.Column(db.String(120))
    id_usuario = db.Column(db.Integer, db.ForeignKey('usuarios.id'))#
    id_eventos = db.Column(db.Integer, db.ForeignKey('eventos.id'))#

    def serialize(self):
        return{
            "id": self.id,
            "evento": self.evento
        }
