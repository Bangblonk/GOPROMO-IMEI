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
import {
  CreditCard,
  Smartphone,
  ArrowLeft,
  CheckCircle,
  Copy,
  Clock
} from "lucide-react";

import Link from "next/link";

export default function CheckoutPage() {

  const { state, clearCart } = useCart();

  const [selectedPayment, setSelectedPayment] =
    useState('seabank');

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    imei: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [isCompleted, setIsCompleted] =
    useState(false);

  const [showConfirmation, setShowConfirmation] =
    useState(false);

  const [timeLeft, setTimeLeft] =
    useState(300);

  const [modalSelectedPayment, setModalSelectedPayment] =
    useState('seabank');

  // TIMER
  useEffect(() => {

    let timer: NodeJS.Timeout;

    if (showConfirmation && timeLeft > 0) {

      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

    } else if (showConfirmation && timeLeft === 0) {

      setShowConfirmation(false);
      setTimeLeft(300);

      alert(
        'Waktu konfirmasi pembayaran telah habis.'
      );
    }

    return () => {
      if (timer) clearTimeout(timer);
    };

  }, [showConfirmation, timeLeft]);

  // PAYMENT METHODS
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
      description:
        'OVO, GoPay, ShopeePay, DANA, AlloBank'
    }
  ];

  // FORMAT PRICE
  const formatPrice = (price: number) => {

    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);

  };

  // HANDLE INPUT
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {

    const { name, value } = e.target;

    if (name === 'imei') {

      const numericValue =
        value.replace(/\D/g, '');

      setCustomerInfo(prev => ({
        ...prev,
        [name]: numericValue
      }));

    } else {

      setCustomerInfo(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // SUBMIT
  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (state.items.length === 0) {

      alert(
        'Keranjang belanja kosong.'
      );

      return;
    }

    if (
      !customerInfo.name ||
      !customerInfo.phone ||
      !customerInfo.email ||
      !customerInfo.imei
    ) {

      alert(
        'Mohon lengkapi semua field.'
      );

      return;
    }

    // EMAIL VALIDATION
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailRegex.test(customerInfo.email)
    ) {

      alert(
        'Format email tidak valid'
      );

      return;
    }

    // PHONE VALIDATION
    const phoneRegex =
      /^08\d{8,11}$/;

    if (
      !phoneRegex.test(customerInfo.phone)
    ) {

      alert(
        'Format nomor HP tidak valid'
      );

      return;
    }

    // IMEI VALIDATION
    if (
      customerInfo.imei.length !== 15
    ) {

      alert(
        'IMEI harus 15 digit'
      );

      return;
    }

    setShowConfirmation(true);
    setTimeLeft(300);

    setModalSelectedPayment(
      selectedPayment
    );
  };

  // WHATSAPP MESSAGE
  const generateWhatsAppMessage = (
    data: any
  ) => {

    return `*INVOICE GOPROMO-IMEI*

Invoice: ${data.invoiceNumber}
Tanggal: ${new Date(
      data.timestamp
    ).toLocaleDateString('id-ID')}

*Data Pelanggan*
Nama: ${data.customer.name}
No HP: ${data.customer.phone}
Email: ${data.customer.email}
IMEI: ${data.customer.imei}

*Pembayaran*
Metode: ${data.payment.name}
Rekening: ${data.payment.account}

*Total*: ${formatPrice(data.total)}

Saya sudah melakukan pembayaran dan akan mengirim bukti transfer.`;

  };

  // FORM VALIDATION
  const isFormValid = () => {

    return (
      customerInfo.name &&
      customerInfo.phone &&
      customerInfo.email &&
      customerInfo.imei &&
      customerInfo.imei.length === 15 &&
      state.items.length > 0
    );

  };

  // COPY
  const copyToClipboard = async (
    text: string
  ) => {

    try {

      await navigator.clipboard.writeText(
        text
      );

      alert(
        'Nomor berhasil disalin'
      );

    } catch (error) {

      console.error(
        'Gagal copy:',
        error
      );
    }
  };

  // FORMAT TIME
  const formatTime = (
    seconds: number
  ) => {

    const mins =
      Math.floor(seconds / 60);

    const secs = seconds % 60;

    return `${mins}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  // CONFIRM PAYMENT
  const handleConfirmPayment =
    async () => {

      setIsSubmitting(true);

      setShowConfirmation(false);

      try {

        const invoiceData = {

          invoiceNumber:
            `INV-${Date.now()}`,

          customer: {
            ...customerInfo,
            imei:
              customerInfo
                .imei
                .trim()
          },

          items: state.items,

          total: state.total,

          payment:
            paymentMethods.find(
              p =>
                p.id ===
                modalSelectedPayment
            ),

          timestamp:
            new Date().toISOString()
        };

        const whatsappMessage =
          generateWhatsAppMessage(
            invoiceData
          );

        // NOMOR ADMIN
        const adminNumber =
          '6281374736624';

        // URL WA
        const whatsappUrl =
          `https://wa.me/${adminNumber}?text=${encodeURIComponent(
            whatsappMessage
          )}`;

        clearCart();

        setIsSubmitting(false);

        setIsCompleted(true);

        // REDIRECT WA
        window.location.href =
          whatsappUrl;

      } catch (error) {

        console.error(
          'Error confirming payment:',
          error
        );

        alert(
          'Terjadi kesalahan saat konfirmasi pembayaran.'
        );

        setIsSubmitting(false);
      }
    };

  // SUCCESS PAGE
  if (isCompleted) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <Card className="max-w-md w-full">

          <CardHeader className="text-center">

            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />

            <CardTitle>
              Pesanan Berhasil
            </CardTitle>

            <CardDescription>
              Anda akan diarahkan ke WhatsApp
            </CardDescription>

          </CardHeader>

          <CardContent>

            <Button
              asChild
              className="w-full"
            >

              <Link href="/">
                Kembali
              </Link>

            </Button>

          </CardContent>

        </Card>

      </div>
    );
  }

  // EMPTY CART
  if (state.items.length === 0) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <Card className="max-w-md w-full">

          <CardHeader className="text-center">

            <CardTitle>
              Keranjang Kosong
            </CardTitle>

            <CardDescription>
              Tambahkan layanan terlebih dahulu
            </CardDescription>

          </CardHeader>

          <CardContent>

            <Button
              asChild
              className="w-full"
            >

              <Link href="/layanan">
                Lihat Layanan
              </Link>

            </Button>

          </CardContent>

        </Card>

      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">

      {/* NAVBAR */}
      <nav className="bg-card shadow-sm border-b">

        <div className="container mx-auto px-4 py-4">

          <div className="flex items-center justify-between">

            <Link
              href="/"
              className="text-2xl font-bold text-primary"
            >
              GOPROMO-IMEI
            </Link>

            <div className="flex items-center gap-4">

              <Link href="/layanan">

                <Button variant="ghost">
                  Layanan
                </Button>

              </Link>

              <CartDrawer />

            </div>

          </div>

        </div>

      </nav>

    </div>
  );
}
