'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/components/cart-context";
import { CartDrawer } from "@/components/cart-drawer";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Smartphone, Shield, ArrowLeft, CheckCircle, Copy, Clock } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const { state, clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState('seabank');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    imei: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [modalSelectedPayment, setModalSelectedPayment] = useState('seabank');

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (showConfirmation && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (showConfirmation && timeLeft === 0) {
      // Auto-close when timer reaches 0
      setShowConfirmation(false);
      setTimeLeft(300);
      alert('Waktu konfirmasi pembayaran telah habis. Silakan coba lagi.');
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showConfirmation, timeLeft]);

  const paymentMethods = [
    {
      id: 'seabank',
      name: 'SeaBank',
      account: '901806630835',
      holder: 'Hendra Wijaya',
      icon: CreditCard
    },
    {
      id: 'bca',
      name: 'BCA',
      account: '7870691038',
      holder: 'Hendra Wijaya',
      icon: CreditCard
    },
    {
      id: 'ewallet',
      name: 'E-Wallet',
      account: '082294952008',
      holder: 'Hendra Wijaya',
      icon: Smartphone,
      description: 'OVO, GoPay, ShopeePay, DANA, AlloBank'
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Special handling for IMEI input - only allow numbers
    if (name === 'imei') {
      const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
      setCustomerInfo(prev => ({ ...prev, [name]: numericValue }));
    } else {
      setCustomerInfo(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if cart is empty
    if (state.items.length === 0) {
      alert('Keranjang belanja kosong. Silakan tambahkan layanan terlebih dahulu.');
      return;
    }
    
    // Validate required fields
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.email || !customerInfo.imei) {
      alert('Mohon lengkapi semua field yang diperlukan');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerInfo.email)) {
      alert('Format email tidak valid');
      return;
    }

    // Validate phone format (Indonesian phone number)
    const phoneRegex = /^(^08)(\d{8,11})$/;
    if (!phoneRegex.test(customerInfo.phone)) {
      alert('Format nomor HP tidak valid. Gunakan format 08xxxxxxxxxx');
      return;
    }

    // Validate IMEI length
    if (customerInfo.imei.length !== 15) {
      alert('Nomor IMEI harus 15 digit');
      return;
    }

    // Validate IMEI is numeric only
    if (!/^\d+$/.test(customerInfo.imei)) {
      alert('Nomor IMEI hanya boleh berisi angka');
      return;
    }

    // Show confirmation modal
    setShowConfirmation(true);
    // Reset timer to 5 minutes
    setTimeLeft(300);
    // Set modal selected payment to current selection
    setModalSelectedPayment(selectedPayment);
  };

  const generateWhatsAppMessage = (data: any) => {
    const itemsList = data.items.map((item: any) => 
      `• ${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}`
    ).join('\n');

    return `*INVOICE PEMBAYARAN GOPROMO-IMEI*

Nomor Invoice: ${data.invoiceNumber}
Tanggal: ${new Date(data.timestamp).toLocaleDateString('id-ID')}

*Data Pelanggan:*
Nama: ${data.customer.name}
No. HP: ${data.customer.phone}
Email: ${data.customer.email}
IMEI: ${data.customer.imei}
Catatan: ${data.customer.notes || '-'}

*Rincian Pembelian:*
${itemsList}

*Total Pembayaran: ${formatPrice(data.total)}*

*Metode Pembayaran:*
${data.payment.name}
No. Rekening: ${data.payment.account}
Atas Nama: ${data.payment.holder}

*Status: Menunggu Konfirmasi Pembayaran*

Silakan lakukan pembayaran dan kirim bukti transfer ke nomor WhatsApp ini. Terima kasih!`;
  };

  const isFormValid = () => {
    return customerInfo.name && 
           customerInfo.phone && 
           customerInfo.email && 
           customerInfo.imei && 
           customerInfo.imei.length === 15 &&
           state.items.length > 0;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleConfirmPayment = async () => {
    setIsSubmitting(true);
    setShowConfirmation(false);

    try {
      // Generate invoice data
      const invoiceData = {
        invoiceNumber: `INV-${Date.now()}`,
        customer: customerInfo,
        items: state.items,
        total: state.total,
        payment: paymentMethods.find(p => p.id === modalSelectedPayment),
        timestamp: new Date().toISOString()
      };

      // Send invoice to WhatsApp
      const whatsappMessage = generateWhatsAppMessage(invoiceData);
      const whatsappUrl = `https://wa.link/xr8nec?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');

      // Clear cart after successful order
      clearCart();

      setIsSubmitting(false);
      setIsCompleted(true);
    } catch (error) {
      console.error('Error confirming payment:', error);
      alert('Terjadi kesalahan saat mengkonfirmasi pembayaran. Silakan coba lagi.');
      setIsSubmitting(false);
    }
  };

  const handleCancelConfirmation = () => {
    setShowConfirmation(false);
    setTimeLeft(300);
    setModalSelectedPayment(selectedPayment);
  };

  if (isCompleted) {
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

        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                  <CardTitle>Pesanan Berhasil Dibuat!</CardTitle>
                  <CardDescription>
                    Invoice telah dikirim ke WhatsApp Anda. Silakan lakukan pembayaran.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Cek WhatsApp Anda untuk detail invoice dan instruksi pembayaran.
                  </p>
                  <div className="space-y-2">
                    <Button asChild className="w-full">
                      <Link href="/">Kembali ke Beranda</Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/layanan">Lihat Layanan Lain</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (state.items.length === 0) {
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

        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Keranjang Kosong</CardTitle>
                  <CardDescription>
                    Anda belum memiliki item di keranjang belanja. Silakan pilih layanan terlebih dahulu.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/layanan">Lihat Layanan</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

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

      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <Link href="/layanan" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali ke Layanan
              </Link>
              <h1 className="text-3xl font-bold">Checkout</h1>
              <p className="text-muted-foreground">Lengkapi data Anda dan pilih metode pembayaran</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid lg:grid-cols-3 gap-8">
              {/* Customer Information */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Informasi Pelanggan</CardTitle>
                    <CardDescription>
                      Silakan lengkapi data diri Anda untuk proses layanan
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nama Lengkap</Label>
                        <Input
                          id="name"
                          name="name"
                          value={customerInfo.name}
                          onChange={handleInputChange}
                          placeholder="Masukkan nama lengkap"
                          required
                          minLength={3}
                          pattern="[A-Za-z\s]+"
                          title="Nama hanya boleh berisi huruf dan spasi"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Nomor HP</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={customerInfo.phone}
                          onChange={handleInputChange}
                          placeholder="08xxxxxxxxxx"
                          required
                          pattern="^08\d{8,11}$"
                          title="Format nomor HP: 08 diikuti 8-11 digit"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={customerInfo.email}
                        onChange={handleInputChange}
                        placeholder="email@example.com"
                        required
                        title="Masukkan email yang valid"
                      />
                    </div>
                    <div>
                      <Label htmlFor="imei">Nomor IMEI</Label>
                      <Input
                        id="imei"
                        name="imei"
                        value={customerInfo.imei}
                        onChange={handleInputChange}
                        placeholder="Masukkan 15 digit IMEI"
                        maxLength={15}
                        required
                        pattern="\d{15}"
                        title="IMEI harus 15 digit angka"
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        Tekan *#06# pada ponsel Anda untuk menemukan nomor IMEI
                      </p>
                    </div>
                    <div>
                      <Label htmlFor="notes">Catatan (Opsional)</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={customerInfo.notes}
                        onChange={handleInputChange}
                        placeholder="Masukkan catatan tambahan jika diperlukan"
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle>Metode Pembayaran</CardTitle>
                    <CardDescription>
                      Pilih metode pembayaran yang Anda inginkan
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>
                      <div className="space-y-4">
                        {paymentMethods.map((method) => {
                          const IconComponent = method.icon;
                          return (
                            <div key={method.id} className="flex items-center space-x-2">
                              <RadioGroupItem value={method.id} id={method.id} />
                              <Label htmlFor={method.id} className="flex items-center space-x-3 cursor-pointer flex-1">
                                <IconComponent className="h-5 w-5 text-primary" />
                                <div className="flex-1">
                                  <div className="font-medium">{method.name}</div>
                                  <div className="text-sm text-muted-foreground">
                                    {method.account} - {method.holder}
                                  </div>
                                  {method.description && (
                                    <div className="text-xs text-blue-600 mt-1">
                                      {method.description}
                                    </div>
                                  )}
                                </div>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    copyToClipboard(method.account);
                                  }}
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </Label>
                            </div>
                          );
                        })}
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Ringkasan Pesanan</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-muted-foreground">x{item.quantity}</div>
                        </div>
                        <div className="font-medium">
                          {formatPrice(item.price * item.quantity)}
                        </div>
                      </div>
                    ))}
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Total:</span>
                        <span className="font-bold text-lg text-primary">
                          {formatPrice(state.total)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button 
                  type="submit"
                  disabled={isSubmitting || !isFormValid()}
                  className="w-full bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  {isSubmitting ? 'Memproses...' : 'Konfirmasi Pembayaran'}
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <p>Dengan mengklik tombol di atas, Anda setuju dengan syarat dan ketentuan kami.</p>
                </div>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Payment Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-8 w-8 text-orange-500 mr-2" />
                <CardTitle className="text-xl">Konfirmasi Pembayaran</CardTitle>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  Waktu Tersisa: {formatTime(timeLeft)}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Payment Details */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Jumlah Pembayaran</p>
                <p className="text-2xl font-bold text-primary">{formatPrice(state.total)}</p>
              </div>

              {/* Bank Selection */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-center text-muted-foreground">Pilih Rekening Tujuan:</p>
                <RadioGroup value={modalSelectedPayment} onValueChange={setModalSelectedPayment}>
                  <div className="space-y-2">
                    {paymentMethods.map((method) => {
                      const IconComponent = method.icon;
                      return (
                        <div key={method.id} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                          <RadioGroupItem value={method.id} id={`confirm-${method.id}`} />
                          <Label htmlFor={`confirm-${method.id}`} className="flex items-center space-x-3 cursor-pointer flex-1">
                            <IconComponent className="h-5 w-5 text-primary" />
                            <div className="flex-1">
                              <div className="font-medium">{method.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {method.account}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                a.n {method.holder}
                              </div>
                              {method.description && (
                                <div className="text-xs text-blue-600 mt-1">
                                  {method.description}
                                </div>
                              )}
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.preventDefault();
                                copyToClipboard(method.account);
                              }}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </Label>
                        </div>
                      );
                    })}
                  </div>
                </RadioGroup>
              </div>

              {/* Instructions */}
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <h4 className="font-medium text-blue-900 text-sm">Instruksi Pembayaran:</h4>
                <ol className="text-xs text-blue-800 space-y-1 list-decimal list-inside">
                  <li>Pilih rekening tujuan yang sesuai dengan bank/e-wallet Anda</li>
                  <li>Transfer jumlah {formatPrice(state.total)} ke rekening yang dipilih</li>
                  <li>Untuk E-Wallet: gunakan nomor 082294952008 untuk transfer dari OVO, GoPay, ShopeePay, DANA, atau AlloBank</li>
                  <li>Klik tombol "Sudah Bayar" setelah melakukan transfer</li>
                  <li>Anda akan diarahkan ke WhatsApp untuk mengirim bukti transfer</li>
                  <li>Kirim bukti transfer (screenshot) ke WhatsApp</li>
                </ol>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  onClick={handleCancelConfirmation}
                  variant="outline"
                  className="flex-1"
                >
                  Batal
                </Button>
                <Button 
                  onClick={handleConfirmPayment}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  Sudah Bayar
                </Button>
              </div>

              <div className="text-center text-xs text-muted-foreground">
                <p>Timer akan otomatis berhenti dalam {formatTime(timeLeft)}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}