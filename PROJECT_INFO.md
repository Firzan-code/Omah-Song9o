# Panduan & Tech Stack: Omah Son9o Villa

Dokumen ini berisi informasi mengenai teknologi yang digunakan serta struktur proyek website **Omah Son9o Villa**.

## 🚀 Tech Stack

Proyek ini dibangun dari awal (custom build) menggunakan teknologi web modern:

### Core Framework
- **[React (v19)](https://react.dev/)**: Library utama untuk membangun antarmuka pengguna (UI) yang interaktif dan dinamis.
- **[Vite (v8)](https://vitejs.dev/)**: Build tool dan development server generasi terbaru yang sangat ringan dan cepat, menggantikan Webpack tradisional.
- **[React Router DOM (v7)](https://reactrouter.com/)**: Sistem routing untuk navigasi antar halaman (seperti Beranda ke Detail Villa) tanpa perlu memuat ulang seluruh halaman (Single Page Application).

### Styling & UI/UX
- **Vanilla CSS (Custom)**: Styling murni tanpa framework seperti Bootstrap atau Tailwind. Hal ini memastikan desain yang 100% eksklusif, tidak kaku, dan ukuran file sangat kecil (performa maksimal).
- **[Framer Motion](https://www.framer.com/motion/)**: Library animasi standar industri untuk React. Digunakan untuk membuat transisi halaman, *scroll animations* (elemen muncul perlahan), dan efek interaktif yang mulus.
- **[Lucide React](https://lucide.dev/)**: Koleksi ikon SVG modern, tajam, dan ringan (misalnya ikon WiFi, WhatsApp, dll).
- **[Yet Another React Lightbox](https://yet-another-react-lightbox.com/)**: Library untuk menampilkan galeri foto pop-up layar penuh (mendukung *swipe* di HP/Mobile).

### Deployment & CI/CD
- **[Vercel](https://vercel.com/)**: Platform hosting (production server) yang terintegrasi langsung dengan repositori GitHub. Setiap pembaruan kode akan di-deploy secara otomatis.

---

## 💻 Cara Menjalankan Project (Local Development)

Jika Anda ingin menjalankan atau mengedit website ini di komputer lokal, ikuti langkah-langkah berikut:

### 1. Prasyarat (Prerequisites)
Pastikan Anda sudah menginstal **Node.js** di komputer Anda.

### 2. Instalasi Dependensi
Buka terminal/command prompt, arahkan ke folder proyek ini, dan jalankan perintah:
```bash
npm install
```

### 3. Menjalankan Server Lokal (Development)
Untuk melihat website di browser Anda, jalankan:
```bash
npm run dev
```
Buka link yang muncul di terminal (biasanya `http://localhost:5173/`). Setiap perubahan yang Anda simpan pada kode akan otomatis langsung muncul di browser (Hot Module Replacement).

### 4. Build untuk Production (Opsional)
Jika ingin melakukan build manual:
```bash
npm run build
```

---

## 📂 Struktur Direktori Penting

- `/public/` : Tempat menyimpan aset statis seperti file video (`video-depan.mp4`), gambar/foto galeri (`/images/gallery/`), dan file `logo.svg`.
- `/src/data/villas.js` : File database lokal (JSON) yang berisi daftar seluruh properti villa, harga, deskripsi, urutan foto, dan fasilitas. *Jika ingin mengganti harga atau teks villa, cukup edit file ini!*
- `/src/pages/` : Berisi halaman-halaman utama seperti `Home.jsx` (Beranda) dan `VillaDetail.jsx` (Halaman detail tiap villa).
- `/src/index.css` : File styling utama yang mengatur desain, warna, dan responsivitas untuk Mobile/Desktop.

---

*Custom Developed for Omah Son9o - 2026*
