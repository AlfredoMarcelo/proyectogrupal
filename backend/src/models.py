from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import backref

db=SQLAlchemy()

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    comment = db.Column(db.String(200))
    date = db.Column(db.DateTime)
    id_user = db.Column(db.Integer, db.ForeignKey('user.id'))#
    user = db.relationship('User', backref="comment", lazy=True)
    id_event = db.Column(db.Integer, db.ForeignKey('event.id'))#


    def serialize(self):
        return{
            "id": self.id,
            "comment": self.comment,
            "date": self.date,
            "name_user": self.user.name
        }

    #listo


class Profile(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(50))
    lastname = db.Column(db.String(50))
    companyname = db.Column(db.String(150))
    #imagen = db.Column(db.String(120))##como subir imagenes a la base de datos?,para después.
    id_user = db.Column(db.Integer, db.ForeignKey('user.id'))#
    
    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "companyname": self.companyname         
        }
        
    def save(self):
        db.session.add(self)
        db.session.commit()
        
    def update(self):
        db.session.commit()
        
    def delete(self):
        db.session.delete(self)
        db.session.commit()
        
    #listo

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(100), nullable = False, unique = True)
    password = db.Column(db.String(250), nullable = False)
    active = db.Column(db.Boolean, default = True)#caducacion de sesion, token
    role_id= db.Column(db.Integer, db.ForeignKey("role.id"))
    profile = db.relationship("Profile", backref="user", lazy=True, uselist=False, cascade="all, delete")
    event = db.relationship("Event", backref="user", lazy=True, cascade="all, delete")
    favorite_event = db.relationship("Favorite_Event", backref="user", lazy=True, cascade="all, delete")


    def serialize(self):
        print(self.event)
        return{
            "id":self.id,
            "email": self.email,
            "password": self.password,
            "active": self.active,
            "role": self.role_id,##COMPLETAR
            "profile": self.profile.serialize(),
            "event": self.get_event(),
            #"favorite_event": self.favorite_event.serialize()
        }
    
    def get_event(self):
        return list(map(lambda event: event.serialize(), self.event))
    
    def get_role(self):
        return list(map(lambda role: role.serialize(), self.role))
        
    def save(self):
        db.session.add(self)
        db.session.commit()
        
    def update(self):
        db.session.commit
        
    def delete(self):
        db.session.delete(self)
        db.session.commit()

#listoo falta cambiar el serialize del rol para traerlo

class Role(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True) # usuario o promotor
    users = db.relationship("User", backref="role", lazy=True)

    def serialize(self):
        return{
            "id": self.id,
            "name": self.name 
        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()
        
    def update(self):
        db.session.commit
        
    def delete(self):
        db.session.delete(self)
        db.session.commit()
        

#listo falta verificar mejor el serialize

class Event(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(120), nullable = False)
    image = db.Column(db.String(120), nullable = False)#como subir imagen
    description = db.Column(db.Text, nullable = False)
    status = db.Column(db.Boolean, default = True)
    date = db.Column(db.String(120), nullable=False)
    location = db.Column(db.String(120), nullable=False)
    value = db.Column(db.Integer)
    id_usuario = db.Column(db.Integer, db.ForeignKey('user.id'))#

    def serialize(self):
        return{
            "name": self.name,
            "image": self.image,
            "description": self.description,
            "status": self.status,
            "date": self.date,
            "location": self.location,
            "value": self.value
        }
        
    def save(self):
        db.session.add(self)
        db.session.commit()
        
    def update(self):
        db.session.commit
        
    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Favorite_Event(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    favorite_events = db.Column(db.String(120))##es el evento.nombre
    id_user = db.Column(db.Integer, db.ForeignKey('user.id'))#
    id_event = db.Column(db.Integer, db.ForeignKey('event.id'))#

    def serialize(self):
        return{
            "id": self.id,
            "favorite_events": {self.event.name} #REVISAR SI ESTA CORRECTO TRAER EL NOMBRE DEL EVENTO
        }
        
    def save(self):
        db.session.add(self)
        db.session.commit()
        
    def update(self):
        db.session.commit
        
    def delete(self):
        db.session.delete(self)
        db.session.commit()

#CASI LISTO REVISAR SERIALIZACION