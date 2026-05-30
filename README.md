# WebWirausaha - Company Profile & Agency Digital

Aplikasi website company profile & digital agency modern bernama WebWirausaha.

## Fitur
- Modern startup UI dengan Glassmorphism & Gradient premiums
- Next-Gen layout optimization and responsiveness
- Admin Dashboard Terintegrasi Supabase
- Seamless Form & Kontak system dengan real-time record di DB

## Setup & Deployment

1. Set Environment Variables
Buat file `.env` di root direktori berdasarkan `.env.example`:
```
VITE_SUPABASE_URL="YOUR_SUPABASE_URL"
VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
```

2. Jalankan Perintah Dev:
```bash
npm install
npm run dev
```

3. Supabase Schema (SQL Editor)
Jalankan query ini di pg_sql editor Supabase Anda:
```sql
CREATE TABLE kontak (
  id uuid default uuid_generate_v4() primary key,
  nama text not null,
  email text not null,
  whatsapp text not null,
  layanan text not null,
  pesan text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tambahkan tabel lainnya sesuai kebutuhan (artikel, layanan, dll)
```

4. Deploy ke Vercel
Project ini sudah dilengkapi dengan file `vercel.json` untuk SPA routing support. Cukup import repo GitHub ke Vercel dan tambahkan Environment Variables Supabase. Cukup pastikan Build Command di Vercel menggunakan `npm run build` dan Output Directory `dist`.
