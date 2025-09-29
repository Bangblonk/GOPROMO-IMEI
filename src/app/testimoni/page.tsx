'use client';

// Updated: Removed testimonial navigation from this page

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle, ArrowLeft, MessageCircle, Smartphone, Wifi } from "lucide-react";
import { CartDrawer } from "@/components/cart-drawer";
import Link from "next/link";

export default function TestimoniPage() {
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

      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ytimg.com/vi/fSU-JZRSRhs/maxresdefault.jpg"
            alt="Background"
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 z-10"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-20">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
              TESTIMONI PELANGGAN
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bukti Kepuasan Pelanggan
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/80 max-w-3xl mx-auto">
              Lihat langsung pengalaman pelanggan kami melalui screenshot percakapan asli
            </p>
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
              <Link href="/layanan">Coba Layanan Kami</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimoni Asli Pelanggan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Berikut adalah screenshot percakapan asli dengan pelanggan yang telah menggunakan layanan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 - WhatsApp Chat */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      <span className="font-semibold">WhatsApp Chat</span>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Terverifikasi
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <div className="relative aspect-[9/16] w-full mb-4 rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src="https://image2url.com/images/1759027099721-ea7da864-89bc-4e92-9eb3-f202a5114442.jpg"
                      alt="WhatsApp Chat with Costumer 34"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-lg">Costumer 34</h4>
                      <p className="text-sm text-muted-foreground">WhatsApp • 15:52 - 15:55</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      "Mohon di ss jaringan nya buat testi kk... Bentar kk... Amanah bangettt! Layanan yang sangat memuaskan dan prosesnya cepat."
                    </p>
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>Percakapan Asli • Terverifikasi</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 - Chat with Control Center */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5" />
                      <span className="font-semibold">Device Screenshot</span>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Terverifikasi
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <div className="relative aspect-[9/16] w-full mb-4 rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src="https://image2url.com/images/1759027154129-75f8b9fe-6c9d-4fd1-a870-ed10fc95e084.jpg"
                      alt="Chat with Costumer 36"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-lg">Costumer 36</h4>
                      <p className="text-sm text-muted-foreground">Chat • Control Center Visible</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      "Sudh kk coba di cek kk... Mohon di ss ya kk buat testi. Proses pembayaran mudah dan hasilnya memuaskan. Recommended!"
                    </p>
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>Screenshot Asli • Terverifikasi</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 - CS Cinta Chat */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      <span className="font-semibold">WhatsApp Testimonial</span>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Terverifikasi
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <div className="relative aspect-[9/16] w-full mb-4 rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src="https://image2url.com/images/1759027190161-be76962d-99ad-4cfa-80fa-1e813ccb523a.jpg"
                      alt="WhatsApp Chat with CS Cinta"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-lg">CS Cinta</h4>
                      <p className="text-sm text-muted-foreground">WhatsApp • Customer Service</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      "Terima kasih atas pelayanannya yang ramah dan profesional. Prosesnya cepat dan hasilnya sesuai ekspektasi. Puas sekali!"
                    </p>
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>CS Interaction • Terverifikasi</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 4 - Technical Support */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wifi className="h-5 w-5" />
                      <span className="font-semibold">Technical Support</span>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Terverifikasi
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <div className="relative aspect-[9/16] w-full mb-4 rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src="https://image2url.com/images/1759027214819-1ba545a5-5050-40f9-8e5b-532386ddcdfd.jpg"
                      alt="Technical Support Chat"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-lg">Technical Support</h4>
                      <p className="text-sm text-muted-foreground">Chat • 2 Unread Messages</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      "Okey baik sebatar... Okay kak... Done... Cek lagi... Mode pesawat 2x. Terima kasih atas bantuan dan layanannya!"
                    </p>
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>Tech Support • Terverifikasi</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 5 - iOS Device */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5" />
                      <span className="font-semibold">iOS Device</span>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Terverifikasi
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <div className="relative aspect-[9/16] w-full mb-4 rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src="https://image2url.com/images/1759027489116-5504304e-cba9-4217-9789-f1eb8ead03b9.jpg"
                      alt="iOS Device Chat"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-lg">iOS User</h4>
                      <p className="text-sm text-muted-foreground">WhatsApp • iPhone Customer</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      "Aman untuk 3 bulan dan iOS update. Layanan IMEI yang sangat handal dan aman untuk perangkat iOS. Terpercaya!"
                    </p>
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>iOS Verified • Terverifikasi</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 6 - WeChat Chat */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      <span className="font-semibold">WeChat Chat</span>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Terverifikasi
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <div className="relative aspect-[9/16] w-full mb-4 rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src="https://image2url.com/images/1759027474218-0a1e15d9-8068-43db-931f-9ed25aa027ce.jpg"
                      alt="WeChat Chat with Hamdan Habib"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-lg">Hamdan Habib</h4>
                      <p className="text-sm text-muted-foreground">WeChat • Verified User</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      "Tq bg... Ini bg wkwk... Haha 🤣 oke siap! Terima kasih atas layanannya yang cepat dan hasil yang memuaskan. Recommended!"
                    </p>
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>WeChat Verified • Terverifikasi</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 7 - Tech Discussion */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      <span className="font-semibold">Tech Discussion</span>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Terverifikasi
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <div className="relative aspect-[9/16] w-full mb-4 rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src="https://image2url.com/images/1759027514476-57052e5f-50dc-4c19-823f-99df77a221bf.jpg"
                      alt="Tech Discussion Chat"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-lg">Auri Gen Z</h4>
                      <p className="text-sm text-muted-foreground">Chat • Tech Support</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      "Mahal bener canva 30k... Tester itu bang, soalnya bot gua pake waktu pembayaran 3 menit secara real time... Good... Done om!"
                    </p>
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>Tech Chat • Terverifikasi</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 8 - Network Test */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wifi className="h-5 w-5" />
                      <span className="font-semibold">Network Test</span>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Terverifikasi
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <div className="relative aspect-[9/16] w-full mb-4 rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src="https://image2url.com/images/1759027540361-d24762d7-1904-4809-aad5-0b0c4c432cc9.jpg"
                      alt="Network Test Screenshot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-lg">Costumer 34</h4>
                      <p className="text-sm text-muted-foreground">WhatsApp • Network Testing</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      "Mohon di ss jaringan nya buat testi kk... Bentar kk... Amanah bangettt! Layanan yang sangat terpercaya dan prosesnya cepat."
                    </p>
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>Network Test • Terverifikasi</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* QRIS Transaction */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Bukti Transaksi</h3>
              <p className="text-muted-foreground">Screenshot bukti pembayaran dan transaksi</p>
            </div>
            
            <div className="max-w-md mx-auto">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-5 w-5" />
                        <span className="font-semibold">QRIS Transaction</span>
                      </div>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        Payment Proof
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="relative aspect-[3/4] w-full mb-4 rounded-lg overflow-hidden bg-gray-100">
                      <img 
                        src="https://image2url.com/images/1759029258973-d9c8a9c0-b244-4d3e-9c3a-ab019cc62f8f.jpg"
                        alt="QRIS Transaction Proof"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-lg">QRIS Payment</h4>
                        <p className="text-sm text-muted-foreground">PT.GOPROMO.ID • Transaction Complete</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground text-sm">
                        "Transaksi QRIS berhasil diproses. Pembayaran diverifikasi dan layanan segera aktif."
                      </p>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span>Payment Verified • Transaction Complete</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Siap Bergabung?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Bergabunglah dengan pelanggan puas dan dapatkan layanan perbaikan IMEI Anda hari ini
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/layanan">Perbaiki IMEI Sekarang</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Kembali ke Beranda
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}