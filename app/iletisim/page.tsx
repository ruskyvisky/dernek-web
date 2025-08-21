'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '@/lib/email-config';

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    // Form validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      setStatusMessage('Lütfen zorunlu alanları doldurun!');
      setIsLoading(false);
      return;
    }

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone || 'Belirtilmemiş',
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email // Yanıt için gönderenin emaili
      };

      // EmailJS service call - to_email parametresini kaldırdık
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId, 
        templateParams,
        emailConfig.publicKey
      );

      setStatusMessage('Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağız.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Email gönderme hatası:', error);
      
      // Daha detaylı hata mesajı
      let errorMessage = 'Mesaj gönderilirken bir hata oluştu.';
      
      if (error.status === 422) {
        errorMessage = 'E-posta ayarlarında bir sorun var. Lütfen daha sonra tekrar deneyin.';
      } else if (error.status === 400) {
        errorMessage = 'Form verilerinde bir hata var. Lütfen tüm alanları kontrol edin.';
      } else if (error.status === 401) {
        errorMessage = 'E-posta servisi yetkilendirme hatası.';
      }
      
      setStatusMessage(errorMessage);
    }

    setIsLoading(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Başlık */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              İletişim
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg">
              Bizimle iletişime geçin, sorularınızı sorun
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Sol: İletişim Bilgileri */}
            <div>
              {/* Adres ve İletişim */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">

                  İletişim Bilgileri
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                      🏢
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Adres</h3>
                      <p className="text-gray-600">
                        Xxxxxxx Mahallesi, Xxxxxx Sokak No:XX<br />
                        22030 Merkez/Edirne
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
                      📞
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Telefon</h3>
                      <p className="text-gray-600">
                        <a href="tel:+902841234567" className="hover:text-green-600 transition-colors">
                          +90 284 123 45 67
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                      📱
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">WhatsApp</h3>
                      <p className="text-gray-600">
                        <a href="https://wa.me/902841234567" className="hover:text-purple-600 transition-colors">
                          +90 284 123 45 67
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0">
                      ✉️
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">E-posta</h3>
                      <p className="text-gray-600">
                        <a href="mailto:cocukhakder22@gmail.com" className="hover:text-red-600 transition-colors">
                          cocukhakder22@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>



              {/* Sosyal Medya */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">

                  Sosyal Medya
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/edirnecocukhaklaridernegi/"
                    className="flex items-center gap-3 p-4 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-xl shadow hover:opacity-90 transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="font-medium">Instagram</span>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/p/Edirne-%C3%87ocuk-Haklar%C4%B1-Derne%C4%9Fi-100069103126208/"
                    className="flex items-center gap-3 p-4 bg-[#1877f2] text-white rounded-xl shadow hover:bg-[#166fe0] transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                    <span className="font-medium">Facebook</span>
                  </a>


                </div>


                <p className="text-gray-600 text-sm mt-4">
                  Güncel haberlerimizi ve etkinliklerimizi sosyal medya hesaplarımızdan takip edebilirsiniz.
                </p>
              </div>
            </div>

            {/* Sağ: İletişim Formu */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">

                Bize Yazın
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Message */}
                {statusMessage && (
                  <div className={`p-4 rounded-lg ${statusMessage.includes('başarıyla') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {statusMessage}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Ad *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Soyad *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Soyadınız"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="email@örnek.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0555 123 45 67"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Konu *
                  </label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Konu seçiniz</option>
                    <option value="uyelik">Üyelik</option>
                    <option value="bagis">Bağış</option>
                    <option value="gonullu">Gönüllülük</option>
                    <option value="kurumsal">Kurumsal İşbirliği</option>
                    <option value="sikayet">Şikayet</option>
                    <option value="oneri">Öneri</option>
                    <option value="bilgi">Bilgi Talebi</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="text-gray-600 text-sm">
                    Kişisel verilerimin işlenmesini ve tarafıma geri dönüş yapılmasını kabul ediyorum. *
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                  }`}
                >
                  {isLoading ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm">
                  📧 <strong>Yanıt Süresi:</strong> Mesajınıza en geç 2 iş günü içinde
                  dönüş yapılacaktır. Acil durumlar için telefon numaramızdan arayabilirsiniz.
                </p>
              </div>
            </div>
          </div>






          {/* SSS */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Sıkça Sorulan Sorular
            </h2>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  ❓ Derneğe nasıl üye olabilirim?
                </h3>
                <p className="text-gray-600">
                  Üyelik için "Üye Ol" sayfasındaki formu doldurabilir veya
                  dernek merkezimize gelip başvuru yapabilirsiniz.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  ❓ Bağış yapmak için hangi yolları kullanabilirim?
                </h3>
                <p className="text-gray-600">
                  Banka havalesi, kredi kartı veya dernek merkezimize gelerek
                  nakit olarak bağış yapabilirsiniz. Detaylar için "Bağış Yap" sayfasını ziyaret edin.
                </p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
