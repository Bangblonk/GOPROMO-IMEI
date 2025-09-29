'use client';

// Updated: Added new testimonial images from image2url.com

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
              <Link href="/testimoni">
                <Button variant="ghost">Testimoni</Button>
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
                  <img 
                    src="https://ui-avatars.com/api/?name=Budi+Santoso&background=3b82f6&color=fff&size=100"
                    alt="Budi Santoso"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Budi Santoso</h4>
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
                  <img 
                    src="https://ui-avatars.com/api/?name=Siti+Nurhaliza&background=10b981&color=fff&size=100"
                    alt="Siti Nurhaliza"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Siti Nurhaliza</h4>
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
                  <img 
                    src="https://ui-avatars.com/api/?name=Ahmad+Fauzi&background=8b5cf6&color=fff&size=100"
                    alt="Ahmad Fauzi"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Ahmad Fauzi</h4>
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
                  <img 
                    src="https://ui-avatars.com/api/?name=Dewi+Lestari&background=f59e0b&color=fff&size=100"
                    alt="Dewi Lestari"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Dewi Lestari</h4>
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
                  <img 
                    src="https://ui-avatars.com/api/?name=Rizki+Pratama&background=ef4444&color=fff&size=100"
                    alt="Rizki Pratama"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Rizki Pratama</h4>
                    <p className="text-sm text-muted-foreground">Verified User</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Tq bg... Ini bg wkwk... Haha oke siap. Layanan yang sangat profesional dan hasilnya memuaskan. Recommended banget!"
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  <span>Terverifikasi • WhatsApp Chat</span>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 6 */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://ui-avatars.com/api/?name=Maya+Putri&background=06b6d4&color=fff&size=100"
                    alt="Maya Putri"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Maya Putri</h4>
                    <p className="text-sm text-muted-foreground">iPhone User</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Aman untuk 3 bulan dan iOS update. Layanan IMEI yang sangat handal dan prosesnya cepat. Puas sekali dengan hasilnya!"
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  <span>Terverifikasi • iPhone Device</span>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 7 */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://ui-avatars.com/api/?name=Bagus+Wijaya&background=84cc16&color=fff&size=100"
                    alt="Bagus Wijaya"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Bagus Wijaya</h4>
                    <p className="text-sm text-muted-foreground">Verified User</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Mahal bener canva 30k... Tester itu bang, soalnya bot gua pake waktu pembayaran 3 menit secara real time... Good... Done om!"
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  <span>Terverifikasi • Tech Discussion</span>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 8 */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://ui-avatars.com/api/?name=Indah+Sari&background=a855f7&color=fff&size=100"
                    alt="Indah Sari"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Indah Sari</h4>
                    <p className="text-sm text-muted-foreground">Verified User</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Mohon di ss jaringan nya buat testi kk... Bentar kk... Amanah bangettt! Layanan yang sangat terpercaya dan prosesnya cepat."
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  <span>Terverifikasi • Network Test</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/testimoni">Lihat Semua Testimoni</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">GOPROMO-IMEI</h3>
              <p className="text-muted-foreground">
                Solusi terpercaya untuk semua kebutuhan IMEI perangkat mobile Anda.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/layanan" className="hover:text-primary">Perbaikan IMEI</Link></li>
                <li><Link href="/layanan" className="hover:text-primary">Cek IMEI</Link></li>
                <li><Link href="/layanan" className="hover:text-primary">Unlock Device</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/testimoni" className="hover:text-primary">Testimoni</Link></li>
                <li><Link href="#" className="hover:text-primary">Tentang Kami</Link></li>
                <li><Link href="#" className="hover:text-primary">Kontak</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-primary">Kebijakan Privasi</Link></li>
                <li><Link href="#" className="hover:text-primary">Syarat & Ketentuan</Link></li>
                <li><Link href="#" className="hover:text-primary">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 GOPROMO-IMEI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}