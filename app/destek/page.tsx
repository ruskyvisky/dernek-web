import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Destek | Edirne Çocuk Hakları Derneği',
  description: 'Bize nasıl destek olabileceğinizi öğrenin. Gönüllülük, bağış ve işbirliği imkanları.',
};

export default function DestekPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Başlık */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Destek Olun
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              Çocukların daha iyi bir gelecek yaşaması için farklı şekillerde 
              bizimle birlikte çalışabilirsiniz
            </p>
          </div>

          {/* Destek Türleri */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Bireysel Destek */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center text-white text-2xl">
                  👤
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Bireysel Destek
                </h2>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    💰 Mali Destek
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Düzenli veya tek seferlik bağışlarla çocukların eğitim, 
                    sağlık ve temel ihtiyaçlarına destek olun.
                  </p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Bağış Yap →
                  </button>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    🤝 Gönüllülük
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Zamanınızı ayırarak etkinliklerde, projelerde ve 
                    eğitim faaliyetlerinde yer alın.
                  </p>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                    Gönüllü Ol →
                  </button>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    📢 Farkındalık
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Sosyal medyada paylaşımlar yaparak, arkadaşlarınızı 
                    bilgilendirerek farkındalık yaratın.
                  </p>
                  <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                    Paylaş →
                  </button>
                </div>

                <div className="border-l-4 border-orange-400 pl-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    🎁 Eşya Bağışı
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Kullanmadığınız kitap, kıyafet, oyuncak ve 
                    elektronik cihazları bağışlayın.
                  </p>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Bağışla →
                  </button>
                </div>
              </div>
            </div>

            {/* Kurumsal Destek */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-2xl flex items-center justify-center text-white text-2xl">
                  🏢
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Kurumsal Destek
                </h2>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    🤝 İşbirliği Anlaşmaları
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Şirketinizin sosyal sorumluluk projelerine dahil olmak 
                    için uzun vadeli işbirlikleri kuralım.
                  </p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    İletişime Geç →
                  </button>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    🎯 Proje Sponsorluğu
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Belirli projelerimize sponsor olarak çocukların 
                    hayatında kalıcı değişiklikler yaratın.
                  </p>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                    Projeler →
                  </button>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    💼 Çalışan Gönüllülüğü
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Çalışanlarınızın gönüllü olarak katılabileceği 
                    takım etkinlikleri düzenleyin.
                  </p>
                  <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                    Organizasyon →
                  </button>
                </div>

                <div className="border-l-4 border-orange-400 pl-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    📈 Uzmanlık Desteği
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Şirketinizin uzmanlık alanında pro bono danışmanlık 
                    ve eğitim hizmetleri verin.
                  </p>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Destek Ver →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Gönüllülük Alanları */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Gönüllülük Alanları
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  📚
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Eğitim Desteği
                </h3>
                <p className="text-gray-600 mb-4">
                  Çocuklara ders verme, ödev yardımı yapma ve 
                  eğitim materyali hazırlama.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Matematik dersi</li>
                  <li>• Türkçe dersi</li>
                  <li>• İngilizce dersi</li>
                  <li>• Fen bilimleri</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🎨
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Sanat ve Kültür
                </h3>
                <p className="text-gray-600 mb-4">
                  Sanatsal etkinlikler düzenleme ve 
                  çocukların yaratıcılığını geliştirme.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Resim atölyesi</li>
                  <li>• Müzik dersleri</li>
                  <li>• El sanatları</li>
                  <li>• Tiyatro</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  ⚽
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Spor ve Aktivite
                </h3>
                <p className="text-gray-600 mb-4">
                  Spor etkinlikleri organize etme ve 
                  çocukların fiziksel gelişimini destekleme.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Futbol antrenmanı</li>
                  <li>• Basketbol</li>
                  <li>• Yüzme</li>
                  <li>• Atletizm</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🧠
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Psikolojik Destek
                </h3>
                <p className="text-gray-600 mb-4">
                  Çocukların duygusal gelişimine destek olma 
                  ve rehberlik hizmetleri.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Mentörlük</li>
                  <li>• Danışmanlık</li>
                  <li>• Grup terapisi</li>
                  <li>• Aile danışmanlığı</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  📋
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  İdari Destek
                </h3>
                <p className="text-gray-600 mb-4">
                  Dernek faaliyetlerinin organizasyonu 
                  ve yönetimsel işlerde destek.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Etkinlik organizasyonu</li>
                  <li>• Sosyal medya yönetimi</li>
                  <li>• Muhasebe desteği</li>
                  <li>• Proje yazımı</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🔧
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Teknik Destek
                </h3>
                <p className="text-gray-600 mb-4">
                  Teknoloji konularında destek ve 
                  çocuklara bilgisayar eğitimi.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Bilgisayar dersi</li>
                  <li>• Web tasarım</li>
                  <li>• Robotik kodlama</li>
                  <li>• IT altyapı</li>
                </ul>
              </div>
            </div>
          </div>

          {/* İletişim Formu */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Destek Olmak İstiyorum
            </h2>
            
            <form className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Ad Soyad *
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    E-posta *
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="email@örnek.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Telefon
                </label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="0555 123 45 67"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Destek Türü *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="">Seçiniz</option>
                  <option value="gonullu">Gönüllülük</option>
                  <option value="bagis">Mali Bağış</option>
                  <option value="esya">Eşya Bağışı</option>
                  <option value="kurumsal">Kurumsal İşbirliği</option>
                  <option value="sponsor">Proje Sponsorluğu</option>
                  <option value="uzmanlik">Uzmanlık Desteği</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  İlgi Alanınız
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="">Seçiniz</option>
                  <option value="egitim">Eğitim Desteği</option>
                  <option value="sanat">Sanat ve Kültür</option>
                  <option value="spor">Spor ve Aktivite</option>
                  <option value="psikoloji">Psikolojik Destek</option>
                  <option value="idari">İdari Destek</option>
                  <option value="teknik">Teknik Destek</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Mesajınız
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Nasıl destek olmak istediğinizi açıklayın..."
                ></textarea>
              </div>

              <div className="text-center">
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold px-8 py-4 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Başvuru Gönder
                </button>
              </div>
            </form>
          </div>

          {/* Teşekkür */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Desteğiniz İçin Teşekkürler! 🙏
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Her türlü desteğiniz çocukların hayatında büyük fark yaratıyor. 
              Birlikte daha güzel bir gelecek inşa ediyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-all">
                Projelerimizi İncele
              </button>
              <button className="bg-yellow-400 text-purple-800 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition-all">
                Başarı Hikayelerimiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
