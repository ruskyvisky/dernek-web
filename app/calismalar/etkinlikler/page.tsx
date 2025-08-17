import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Etkinlikler | Edirne Çocuk Hakları Derneği',
  description: 'Derneğimiz tarafından düzenlenen etkinlikler ve programlar.',
};

export default function EtkinliklerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Başlık */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Etkinliklerimiz
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg">
              Çocuklar için düzenlediğimiz eğitici ve eğlenceli etkinlikler
            </p>
          </div>

          {/* Yaklaşan Etkinlikler */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Yaklaşan Etkinlikler
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Etkinlik 1 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-400 relative">
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-bold text-purple-600">
                    25 Aralık
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Yeni Yıl Şenliği
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Çocuklarımızla birlikte yeni yılı karşılama etkinliği. Oyunlar, hediyeler ve sürprizler...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600 font-medium">📍 Dernek Merkezi</span>
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                      Katıl
                    </button>
                  </div>
                </div>
              </div>

              {/* Etkinlik 2 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-400 relative">
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-bold text-green-600">
                    15 Ocak
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Kitap Okuma Atölyesi
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Çocukların okuma alışkanlığı kazanmaları için interaktif kitap okuma etkinliği...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600 font-medium">📍 Kütüphane</span>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                      Katıl
                    </button>
                  </div>
                </div>
              </div>

              {/* Etkinlik 3 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-pink-400 to-orange-400 relative">
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-bold text-pink-600">
                    22 Ocak
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Sanat Atölyesi
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Çocukların yaratıcılıklarını geliştirmek için resim ve el sanatları atölyesi...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-pink-600 font-medium">📍 Sanat Merkezi</span>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                      Katıl
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Geçmiş Etkinlikler */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Geçmiş Etkinliklerimiz
            </h2>
            <div className="space-y-6">
              {/* Etkinlik Timeline */}
              <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl"></div>
                </div>
                <div className="md:w-3/4">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                      20 Kasım 2024
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">Dünya Çocuk Hakları Günü</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Çocuk Hakları Farkındalık Etkinliği
                  </h3>
                  <p className="text-gray-600">
                    Dünya Çocuk Hakları Günü kapsamında düzenlediğimiz etkinlikte çocuklarımız 
                    haklarını öğrendi ve eğlenceli aktiviteler gerçekleştirdi. 150+ çocuğun katıldığı 
                    etkinlik büyük beğeni topladı.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="h-32 bg-gradient-to-br from-blue-400 to-green-400 rounded-xl"></div>
                </div>
                <div className="md:w-3/4">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      15 Ekim 2024
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">Eğitim Semineri</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Anne-Baba Eğitim Semineri
                  </h3>
                  <p className="text-gray-600">
                    Uzman psikologlar eşliğinde düzenlenen seminerde anne-babalar çocuk psikolojisi 
                    konusunda bilgilendirildi. 80+ ailenin katıldığı seminer interaktif atölyelerle desteklendi.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl"></div>
                </div>
                <div className="md:w-3/4">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                      23 Nisan 2024
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">Ulusal Egemenlik ve Çocuk Bayramı</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    23 Nisan Şenliği
                  </h3>
                  <p className="text-gray-600">
                    23 Nisan Ulusal Egemenlik ve Çocuk Bayramı kapsamında düzenlenen şenlikte 
                    çocuklarımız çeşitli yarışmalar ve etkinlikler düzenledi. Müze ziyareti ve piknik 
                    programı ile tamamlanan etkinlik unutulmaz anlar yaşattı.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Etkinlik Katılımı */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Etkinliklerimize Katılın!
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Çocuklarınızla birlikte etkinliklerimize katılabilir, 
              gönüllü olarak organizasyonlarda yer alabilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-all">
                Etkinlik Takvimi
              </button>
              <button className="bg-yellow-400 text-blue-800 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition-all">
                Gönüllü Ol
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
