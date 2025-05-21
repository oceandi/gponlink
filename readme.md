# Mevcut veritabanını sil
rm instance/envanter.db

# Yeni tabloları oluştur
flask shell
>>> from app import db
>>> db.create_all()
>>> exit()


from flask_migrate import Migrate
migrate = Migrate(app, db)
flask db init
flask db migrate -m "Add role and is_active to User"
flask db upgrade


# Admin Kullanıcısı Oluştur
flask shell
>>> from app import db, User
>>> admin = User(username='admin', email='admin@example.com', team='IT', role='admin', is_active=True)
>>> admin.set_password('admin') # Şifreyi hash'ler
>>> db.session.add(admin)
>>> db.session.commit()
>>> exit()

# Veritabanını Kontrol Et
flask shell
>>> from app import User
>>> admin = User.query.filter_by(username='admin').first()
>>> print(admin.username, admin.email, admin.role)  # Bilgileri görüntüle
>>> exit()


# Admin şifresini değiştirmek için

flask shell
>>> admin = User.query.filter_by(username='admin').first()
>>> admin.set_password('yeni_guclu_sifre')  # Örneğin: 'fabulousLasVegas51!'
>>> db.session.commit()
>>> exit()

