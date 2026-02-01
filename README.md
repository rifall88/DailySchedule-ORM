**Daily Schedule API**

API ini digunakan untuk aplikasi web maupun mobile dalam melakukan pencatatan jadwal harian.
Pengguna dapat melakukan operasi CRUD (Create, Read, Update, Delete) pada jadwal harian.
Sebelum mengakses fitur tersebut, pengguna diwajibkan melakukan registrasi dan login sebagai proses autentikasi.

**Cara Menjalankan Project**

1. Clone repository ini.
2. Masuk ke folder project, lalu jalankan perintah npm install
   (pastikan Node.js dan npm sudah terpasang).
3. Buat file .env di root project.
4. Lakukan migrasi database dengan masuk ke folder prisma, lalu jalankan:
   ● npx prisma generate
   ● npx prisma migrate dev
5. Jalankan project dengan perintah npm start.

**Isi .env**

DATABASE_URL=""
JWT_SECRET= ""
PORT=
