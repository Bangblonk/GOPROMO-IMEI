# 🚀 GOPROMO-IMEI Vercel Deployment Guide

## 📋 Prerequisites

Sebelum memulai, pastikan Anda memiliki:
- Akun GitHub (https://github.com)
- Akun Vercel (https://vercel.com)
- Repository GOPROMO-IMEI di GitHub

## 🎯 Deployment Options

### Option 1: Deploy via Vercel Website (Recommended for Beginners)

#### Step 1: Push to GitHub
```bash
# Push semua perubahan ke GitHub terlebih dahulu
git add .
git commit -m "Ready for Vercel deployment"
git push origin master
```

#### Step 2: Deploy ke Vercel
1. Buka [vercel.com](https://vercel.com)
2. Login dengan akun GitHub Anda
3. Klik "New Project"
4. Pilih repository "GOPROMO-IMEI"
5. Klik "Import"

#### Step 3: Konfigurasi Otomatis
Vercel akan otomatis mendeteksi:
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm ci`

#### Step 4: Deploy
- Klik "Deploy"
- Tunggu 2-3 menit
- Website Anda akan live di `*.vercel.app`

### Option 2: Deploy dengan Vercel CLI

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login ke Vercel
```bash
vercel login
```

#### Step 3: Deploy
```bash
# Deploy ke preview (staging)
vercel

# Deploy ke production
vercel --prod
```

### Option 3: Gunakan Deployment Script

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login
```bash
vercel login
```

#### Step 3: Jalankan script
```bash
# Untuk preview deployment
./deploy-to-vercel.sh

# Pilih opsi 1 untuk preview, 2 untuk production
```

## 🔧 Konfigurasi Vercel

### File Konfigurasi yang Telah Dibuat:
- `vercel.json` - Konfigurasi build dan deployment
- `.vercelignore` - File yang di-exclude dari deployment

### Environment Variables (Jika Diperlukan)
Di Vercel dashboard:
1. Pilih project Anda
2. Klik "Settings" → "Environment Variables"
3. Tambahkan variables yang diperlukan

## 📱 Mobile Optimization

Vercel otomatis:
- Optimasi gambar
- Implementasi caching
- Menyediakan CDN global
- Menangani SSL certificates

## 🎉 Setelah Deployment

### Verifikasi Deployment:
1. Buka URL Vercel Anda
2. Cek semua halaman:
   - Homepage (/)
   - Layanan (/layanan)
   - Testimoni (/testimoni)
   - Checkout (/checkout)
3. Test mobile responsiveness
4. Cek semua testimonial images
5. Verifikasi QRIS transaction image

### Custom Domain (Optional):
1. Di Vercel dashboard
2. Settings → Domains
3. Tambahkan custom domain
4. Ikuti instruksi DNS

## 🚨 Troubleshooting

### Jika Build Gagal:
1. Cek build logs di Vercel dashboard
2. Pastikan semua dependencies di `package.json`
3. Verify Node.js version compatibility

### Jika Runtime Error:
1. Cek runtime logs
2. Verify environment variables
3. Test locally dengan `npm run build && npm start`

### Common Issues:
- **Module not found**: Pastikan semua dependencies terinstall
- **Build timeout**: Increase build timeout di vercel.json
- **Image loading**: Verify image URLs are accessible

## 📞 Support

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

## 💰 Pricing

### Free Tier:
- Unlimited projects
- 100GB bandwidth per month
- Automatic HTTPS
- Global CDN

### Pro Tier ($20/month):
- Unlimited bandwidth
- Custom domains
- Advanced analytics
- Priority support

---

**🎉 Selamat! Website GOPROMO-IMEI Anda siap di-deploy ke Vercel!**