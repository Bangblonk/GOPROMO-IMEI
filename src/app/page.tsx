'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CartDrawer } from "@/components/cart-drawer";
import { Smartphone, Shield, Zap, Globe, CheckCircle, Star, Clock, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Navigation */}
      <nav className="bg-card shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary">
              GOPROMO-IMEI
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/layanan">
                <Button variant="ghost">Layanan</Button>
              </Link>
              <CartDrawer />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-accent text-primary-foreground">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ytimg.com/vi/fSU-JZRSRhs/maxresdefault.jpg"
            alt="Background"
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 z-10"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
              #1 Penyedia Layanan IMEI
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              GOPROMO-IMEI
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/80 max-w-3xl mx-auto">
              Layanan profesional perbaikan IMEI untuk semua perangkat mobile. Cepat, aman, dan solusi terpercaya di seluruh dunia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                <Link href="/layanan">Lihat Layanan</Link>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>100% Aman</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Hasil Instan</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>1J+ Pelanggan Puas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan IMEI Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Solusi IMEI komprehensif untuk semua kebutuhan perangkat mobile Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className={`hover:shadow-lg transition-shadow ${true ? 'opacity-60' : ''}`}>
              <CardHeader>
                <Smartphone className="h-12 w-12 text-gray-400 mb-4" />
                <div className="flex items-center gap-2">
                  <CardTitle className="text-gray-500">Cek IMEI</CardTitle>
                  <Badge variant="destructive" className="text-xs">TUTUP</Badge>
                </div>
                <CardDescription className="text-gray-400">
                  Verifikasi keaslian perangkat Anda dan dapatkan informasi detail
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Model dan spesifikasi perangkat</li>
                  <li>• Status garansi</li>
                  <li>• Informasi operator</li>
                  <li>• Status daftar hitam</li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full bg-gray-400 cursor-not-allowed" disabled>
                  Layanan Tidak Tersedia
                </Button>
              </div>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Perbaikan IMEI</CardTitle>
                <CardDescription>
                  Perbaiki nomor IMEI yang rusak atau tidak valid secara profesional
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pulihkan IMEI asli</li>
                  <li>• Perbaiki masalah IMEI null</li>
                  <li>• Layanan profesional</li>
                  <li>• Tingkat keberhasilan 100%</li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full" asChild>
                  <Link href="/layanan">Pilih Layanan</Link>
                </Button>
              </div>
            </Card>

            <Card className={`hover:shadow-lg transition-shadow ${true ? 'opacity-60' : ''}`}>
              <CardHeader>
                <Zap className="h-12 w-12 text-gray-400 mb-4" />
                <div className="flex items-center gap-2">
                  <CardTitle className="text-gray-500">Pembukaan Kunci HP</CardTitle>
                  <Badge variant="destructive" className="text-xs">TUTUP</Badge>
                </div>
                <CardDescription className="text-gray-400">
                  Buka kunci perangkat Anda dari pembatasan operator apa pun
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Pembukaan kunci jaringan</li>
                  <li>• Pembukaan kunci SIM</li>
                  <li>• Solusi permanen</li>
                  <li>• Semua operator didukung</li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full bg-gray-400 cursor-not-allowed" disabled>
                  Layanan Tidak Tersedia
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih GOPROMO-IMEI?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kami menyediakan layanan IMEI paling andal dan efisien di industri
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Layanan Global</h3>
              <p className="text-muted-foreground">Tersedia di 195+ negara dengan dukungan lokal</p>
            </div>
            
            <div className="text-center">
              <Star className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tim Ahli</h3>
              <p className="text-muted-foreground">Profesional bersertifikat dengan pengalaman 10+ tahun</p>
            </div>
            
            <div className="text-center">
              <Clock className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dukungan 24/7</h3>
              <p className="text-muted-foreground">Layanan pelanggan dan bantuan sepanjang waktu</p>
            </div>
            
            <div className="text-center">
              <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">100% Aman</h3>
              <p className="text-muted-foreground">Keamanan level bank untuk semua data Anda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              TESTIMONI PELANGGAN
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Mereka?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dengarkan pengalaman langsung dari pelanggan yang telah menggunakan layanan kami
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold mr-4">
                    C34
                  </div>
                  <div>
                    <h4 className="font-semibold">Costumer 34</h4>
                    <p className="text-sm text-muted-foreground">Verified User</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Mohon di ss jaringan nya buat testi kk... Bentar kk... Amanah bangettt! Layanan yang sangat memuaskan dan prosesnya cepat."
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  <span>Terverifikasi • WhatsApp Chat</span>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold mr-4">
                    C36
                  </div>
                  <div>
                    <h4 className="font-semibold">Costumer 36</h4>
                    <p className="text-sm text-muted-foreground">Verified User</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Sudh kk coba di cek kk... Mohon di ss ya kk buat testi. Proses pembayaran mudah dan hasilnya memuaskan. Recommended!"
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  <span>Terverifikasi • Chat Screenshot</span>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold mr-4">
                    CSC
                  </div>
                  <div>
                    <h4 className="font-semibold">CS Cinta</h4>
                    <p className="text-sm text-muted-foreground">Verified User</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Terima kasih atas pelayanannya yang ramah dan profesional. Prosesnya cepat dan hasilnya sesuai ekspektasi. Puas sekali!"
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  <span>Terverifikasi • WhatsApp Testimonial</span>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 4 */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold mr-4">
            TS
          </div>
                  <div>
                    <h4 className="font-semibold">Verified User</h4>
                    <p className="text-sm text-muted-foreground">Tech Support</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Okey baik sebatar... Okay kak... Done... Cek lagi... Mode pesawat 2x. Terima kasih atas bantuan dan layanannya!"
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  <span>Terverifikasi • Technical Support</span>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 5 */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold mr-4">
                    iOS
                  </div>
                  <div>
                    <h4 className="font-semibold">iOS User</h4>
                    <p className="text-sm text-muted-foreground">iPhone Customer</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Aman untuk 3 bulan dan iOS update. Layanan IMEI yang sangat handal dan aman untuk perangkat iOS. Terpercaya!"
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  <span>Terverifikasi • iOS Device</span>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 6 */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold mr-4">
                    HH
                  </div>
                  <div>
                    <h4 className="font-semibold">Hamdan Habib</h4>
                    <p className="text-sm text-muted-foreground">Verified User</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Tq bg... Ini bg wkwk... Haha 🤣 oke siap! Terima kasih atas layanannya yang cepat dan hasil yang memuaskan. Recommended!"
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  <span>Terverifikasi • WeChat Chat</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-primary-foreground">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">1,250+</div>
                <div className="text-primary-foreground/80">Pelanggan Puas</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">4.9/5</div>
                <div className="text-primary-foreground/80">Rating Rata-rata</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
                <div className="text-primary-foreground/80">Tingkat Keberhasilan</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <div className="text-primary-foreground/80">Dukungan Pelanggan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cara Kerjanya</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dapatkan layanan IMEI Anda hanya dalam 3 langkah sederhana
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Masukkan IMEI</h3>
              <p className="text-muted-foreground">Tekan *#06# pada perangkat Anda dan masukkan nomor IMEI 15 digit</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Pilih Layanan</h3>
              <p className="text-muted-foreground">Pilih dari berbagai layanan IMEI kami yang sesuai dengan kebutuhan Anda</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Dapatkan Hasil</h3>
              <p className="text-muted-foreground">Terima hasil instan dan selesaikan layanan Anda</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ytimg.com/vi/fSU-JZRSRhs/maxresdefault.jpg"
            alt="Background"
            className="w-full h-full object-cover object-center opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-accent/85 z-10"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Memulai?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Bergabunglah dengan pelanggan puas dan dapatkan layanan perbaikan IMEI Anda hari ini
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
              <Link href="/layanan">Perbaiki IMEI Sekarang</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Hubungi Dukungan
            </Button>
          </div>
        </div>
      </section>

      {/* Quick IMEI Check */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Perbaiki IMEI Anda</CardTitle>
                <CardDescription>
                  Masukkan nomor IMEI 15 digit Anda untuk memulai proses perbaikan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Input 
                    placeholder="Masukkan nomor IMEI 15 digit" 
                    className="flex-1"
                    maxLength={15}
                  />
                  <Button className="bg-primary hover:bg-primary/90" asChild>
                    <Link href="/layanan">Perbaiki Sekarang</Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Tekan *#06# pada ponsel Anda untuk menemukan nomor IMEI
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background text-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GOPROMO-IMEI</h3>
              <p className="text-muted-foreground">
                Mitra terpercaya Anda untuk semua layanan terkait IMEI di seluruh dunia.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="line-through text-muted-foreground/50">Cek IMEI</li>
                <li>Perbaikan IMEI</li>
                <li className="line-through text-muted-foreground/50">Pembukaan Kunci HP</li>
                <li>Cek Operator</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Dukungan</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Pusat Bantuan</li>
                <li>Hubungi Kami</li>
                <li>Live Chat</li>
                <li>FAQ</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Kebijakan Privasi</li>
                <li>Syarat & Ketentuan</li>
                <li>Kebijakan Pengembalian</li>
                <li>Penafian</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 GOPROMO-IMEI. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}