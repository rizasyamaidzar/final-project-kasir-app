# Panduan Instalasi Project Express dan React

## Prasyarat
Pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org) 
- [postgres](https://www.postgresql.org/download) (DB engine)
- Paket manajer npm atau yarn (termasuk dengan Node.js)

## Langkah-langkah Instalasi

### 1. Clone Repository
Jika Anda memiliki akses ke repository, jalankan perintah berikut di terminal:
```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Instalasi Backend (Express.js)
1. Pindah ke direktori backend:
   ```bash
   cd kasir
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Migrate database dan jalankan seeder :
   ```bash
   npx sequelize db:create
   ```
   ```bash
   npx sequelize-cli db:seed:all
   ```

4. Jalankan server development:
   ```bash
   npm run dev
   ```
   Server akan berjalan di `http://localhost:5000` secara default (atau sesuai konfigurasi file `.env`).

### 3. Instalasi Frontend (React.js)
1. Pindah ke direktori frontend:
   ```bash
   cd ../kasir-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan server development:
   ```bash
   npm start
   ```
   Aplikasi akan berjalan di `http://localhost:3000` secara default.

### 4. Memulai Proyek
- Pastikan backend dan frontend berjalan bersamaan.
- Buka browser dan navigasikan ke `http://localhost:3000` untuk melihat aplikasi React Anda.

## Skrip NPM yang Tersedia

### Backend
| Perintah         | Deskripsi                                |
|------------------|------------------------------------------|
| `npm run dev`    | Menjalankan server dalam mode development |
| `npm run start`  | Menjalankan server dalam mode production |

### Frontend
| Perintah         | Deskripsi                                |
|------------------|------------------------------------------|
| `npm start`      | Menjalankan aplikasi React               |
| `npm build`      | Membuat build production aplikasi React  |

## Catatan Tambahan
- Untuk masalah instalasi dependencies, gunakan perintah berikut untuk membersihkan cache npm:
  ```bash
  npm cache clean --force
  ```
- Gunakan `yarn` jika lebih nyaman:
  ```bash
  yarn install
  yarn start
  ```

Jika ada pertanyaan lebih lanjut, silakan menghubungi pengembang melalui email atau kanal komunikasi yang telah disediakan.
