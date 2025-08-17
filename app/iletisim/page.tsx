import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim | Edirne Çocuk Hakları Derneği',
  description: 'Bizimle iletişime geçin. Adres, telefon, e-posta bilgileri ve iletişim formu.',
};

export default function IletisimPage() {
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
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                    📍
                  </div>
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
                        Xxxxxxx Mahallesi, Xxxxxx Sokak No:XX<br/>
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
                        <a href="mailto:info@edirnecochakhakları.org" className="hover:text-red-600 transition-colors">
                          info@edirnecochakhakları.org
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Çalışma Saatleri */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white">
                    🕐
                  </div>
                  Çalışma Saatleri
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Pazartesi - Cuma</span>
                    <span className="text-gray-600">09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Cumartesi</span>
                    <span className="text-gray-600">10:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-700">Pazar</span>
                    <span className="text-red-600 font-medium">Kapalı</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    💡 <strong>Not:</strong> Resmi tatil günlerinde kapalıyız. 
                    Acil durumlar için WhatsApp hattımızdan ulaşabilirsiniz.
                  </p>
                </div>
              </div>

              {/* Sosyal Medya */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                    📱
                  </div>
                  Sosyal Medya
                </h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="#" 
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl hover:from-pink-600 hover:to-red-600 transition-all"
                  >
                    <span className="text-xl">📷</span>
                    <span className="font-medium">Instagram</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all"
                  >
                    <span className="text-xl">👤</span>
                    <span className="font-medium">Facebook</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-sky-400 to-sky-500 text-white rounded-xl hover:from-sky-500 hover:to-sky-600 transition-all"
                  >
                    <span className="text-xl">🐦</span>
                    <span className="font-medium">Twitter</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all"
                  >
                    <span className="text-xl">📺</span>
                    <span className="font-medium">YouTube</span>
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
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white">
                  💬
                </div>
                Bize Yazın
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Ad *
                    </label>
                    <input 
                      type="text" 
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0555 123 45 67"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Konu *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
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
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="text-gray-600 text-sm">
                    Kişisel verilerimin işlenmesini ve tarafıma geri dönüş yapılmasını kabul ediyorum. *
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Mesajı Gönder
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

          {/* Harita */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                  🗺️
                </div>
                Konum
              </h2>
            </div>
            
            {/* Harita Placeholder */}
            <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  📍
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  Edirne Çocuk Hakları Derneği
                </h3>
                <p className="text-gray-600">
                  Xxxxxxx Mahallesi, Xxxxxx Sokak No:XX<br/>
                  22030 Merkez/Edirne
                </p>
                <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
                  Google Maps'te Aç
                </button>
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

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  ❓ Gönüllü olarak nasıl katkıda bulunabilirim?
                </h3>
                <p className="text-gray-600">
                  "Destek" sayfasından gönüllü başvuru formunu doldurarak 
                  eğitim, etkinlik ve diğer faaliyetlerde yer alabilirsiniz.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  ❓ Eşya bağışı için nelere dikkat etmeliyim?
                </h3>
                <p className="text-gray-600">
                  Bağışladığınız eşyaların temiz ve kullanılabilir durumda olması önemli. 
                  Kabul ettiğimiz eşya türleri için "Bağış Yap" sayfasını inceleyin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
