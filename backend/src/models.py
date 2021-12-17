from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import backref
db=SQLAlchemy()

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
    name = db.Column(db.String(50))
    lastName = db.Column(db.String(50))
    companyName = db.Column(db.String(150))
    #imagen = db.Column(db.String(120))##como subir imagenes a la base de datos?,para después.
    #agregar_evento = db.Column(db.String(120))#datos que no se guardan, eliminar
    #editar_evento = db.Column(db.String(120))#consulta, eliminar
    #eliminar_evento = db.Column(db.String(120))#consulta, eliminar
    id_usuario = db.Column(db.Integer, db.ForeignKey('usuarios.id'))#
    
    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
            "lastName": self.lastName,
            "facebook": self.facebook,
            "instagram": self.instagram,
            "companyName": self.companyName,
            "imagen": self.imagen          
        }
        
    def save(self):
        db.session.add(self)
        db.session.commit()
        
    def update(self):
        db.session.commit()
        
    def delete(self):
        db.session.delete(self)
        db.session.commit()
        
class Usuario(db.Model):
    __tablename__ = 'usuarios'
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(100), nullable = False, unique = True)
    password = db.Column(db.String(250), nullable = False)
    activo = db.Column(db.Boolean, default = True)#caducacion de sesion, token
    rol = db.Column(db.Integer)
    perfil = db.relationship("Perfil", backref="usuario", lazy=True)

    def serialize(self):
        return{
            "id":self.id,
            "email": self.email,
            "password": self.password,
            "activo": self.activo,
            "rol": self.roluser.serialize(),
            "perfil": self.perfil.serialize() 
        }
        
    def save(self):
        db.session.add(self)
        db.session.commit()
        
    def update(self):
        db.session.commit
        
    def delete(self):
        db.session.delete(self)
        db.session.commit()
        

class Rol(db.Model):
    ___tablename__ = 'roles'
    id = db.Column(db.Integer, db.ForeignKey('usuarios.rol'), primary_key = True)
    nombre = db.Column(db. String(100))#
    users = db.relationship("Usuario", backref="roluser", lazy=True)

    def serialize(self):
        return{
            "id": self.id,
            "nombre": self.nombre 
        }


class Evento(db.Model):
    __tablename__ = 'eventos'
    id = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(120), nullable = False)
    imagen = db.Column(db.String(120), nullable = False)#como subir imagen
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
        
    def save(self):
        db.session.add(self)
        db.session.commit()
        
    def update(self):
        db.session.commit
        
    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Evento_Favorito(db.Model):
    __tablename__ = 'eventos_favoritos'
    id = db.Column(db.Integer, primary_key = True)
    evento_favorito = db.Column(db.String(120))##es el evento.nombre
    id_usuario = db.Column(db.Integer, db.ForeignKey('usuarios.id'))#
    id_eventos = db.Column(db.Integer, db.ForeignKey('eventos.id'))#

    def serialize(self):
        return{
            "id": self.id,
            "evento": self.evento
        }
        
    def save(self):
        db.session.add(self)
        db.session.commit()
        
    def update(self):
        db.session.commit
        
    def delete(self):
        db.session.delete(self)
        db.session.commit()
