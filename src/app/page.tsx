'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/cart-context";
import { CartDrawer } from "@/components/cart-drawer";
import { Smartphone, Shield, Zap, CheckCircle, Star, Clock, Users, Plus, Globe } from "lucide-react";
import Link from "next/link";

export default function LayananPage() {
  const { addItem } = useCart();

  const services = [
    {
      id: 'imei-check',
      name: 'Cek IMEI',
      price: 0,
      description: 'Verifikasi keaslian perangkat Anda dan dapatkan informasi detail',
      features: [
        'Model dan spesifikasi perangkat',
        'Status garansi',
        'Informasi operator',
        'Status daftar hitam'
      ],
      icon: Smartphone,
      status: 'SEDANG TUTUP'
    },
    {
      id: 'imei-repair',
      name: 'Perbaikan IMEI',
      price: 280000,
      description: 'Perbaiki nomor IMEI yang rusak atau tidak valid secara profesional',
      features: [
        'Pulihkan IMEI asli',
        'Perbaiki masalah IMEI null',
        'Layanan profesional',
        'Tingkat keberhasilan 100%'
      ],
      icon: Shield
    },
    {
      id: 'phone-unlock',
      name: 'Pembukaan Kunci HP',
      price: 0,
      description: 'Buka kunci perangkat Anda dari pembatasan operator apa pun',
      features: [
        'Pembukaan kunci jaringan',
        'Pembukaan kunci SIM',
        'Solusi permanen',
        'Semua operator didukung'
      ],
      icon: Zap,
      status: 'SEDANG TUTUP'
    }
  ];

  const formatPrice = (price: number) => {
    if (price === 0) return 'SEDANG TUTUP';
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = (service: typeof services[0]) => {
    if (service.status === 'SEDANG TUTUP' || service.price === 0) return;
    addItem({
      id: service.id,
      name: service.name,
      price: service.price,
      description: service.description
    });
  };

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
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
              Layanan Profesional IMEI
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Pilih Layanan IMEI Anda
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 max-w-3xl mx-auto">
              Solusi lengkap untuk perbaikan IMEI perangkat mobile Anda. 
              Saat ini hanya layanan Perbaikan IMEI yang tersedia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                <Link href="/">Kembali ke Beranda</Link>
              </Button>
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
              Saat ini hanya layanan Perbaikan IMEI yang tersedia. Pilih layanan yang Anda butuhkan dan tambahkan ke keranjang untuk proses pembayaran
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => {
              const IconComponent = service.icon;
              const isClosed = service.status === 'SEDANG TUTUP' || service.price === 0;
              
              return (
                <Card key={service.id} className={`hover:shadow-lg transition-shadow relative ${isClosed ? 'opacity-60' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className={`h-12 w-12 ${isClosed ? 'text-gray-400' : 'text-primary'}`} />
                      <Badge 
                        variant={isClosed ? 'destructive' : 'secondary'} 
                        className={`text-lg font-bold ${isClosed ? 'bg-red-100 text-red-800 border-red-200' : ''}`}
                      >
                        {formatPrice(service.price)}
                      </Badge>
                    </div>
                    <CardTitle className={isClosed ? 'text-gray-500' : ''}>
                      {service.name}
                      {isClosed && (
                        <Badge variant="destructive" className="ml-2 text-xs">
                          TUTUP
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription className={isClosed ? 'text-gray-400' : ''}>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className={`h-4 w-4 flex-shrink-0 ${isClosed ? 'text-gray-300' : 'text-green-500'}`} />
                          <span className={isClosed ? 'text-gray-400' : ''}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-3">
                      <Button 
                        onClick={() => handleAddToCart(service)}
                        className={`w-full ${isClosed ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary/90'}`}
                        disabled={isClosed}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        {isClosed ? 'Layanan Tidak Tersedia' : 'Tambah ke Keranjang'}
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className={`w-full ${isClosed ? 'border-gray-300 text-gray-400 cursor-not-allowed' : ''}`}
                        disabled={isClosed}
                        asChild={!isClosed}
                      >
                        {isClosed ? (
                          'Layanan Tutup'
                        ) : (
                          <Link href="/checkout">Lanjut ke Pembayaran</Link>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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
    </div>
  );
}