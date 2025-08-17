import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Basında Biz | Edirne Çocuk Hakları Derneği',
  description: 'Basında çıkan haberlerimiz ve medya yansımalarımız.',
};

export default function BasindaBizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Başlık */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Basında Biz
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg">
              Medyada yer alan haberlerimiz ve faaliyetlerimiz
            </p>
          </div>

          {/* Haber Kartları */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Örnek Haber 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-400"></div>
              <div className="p-6">
                <span className="text-sm text-purple-600 font-medium">20 Kasım 2024</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                  Dünya Çocuk Hakları Günü Etkinliği
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Derneğimiz tarafından düzenlenen etkinlik büyük ilgi gördü...
                </p>
              </div>
            </div>

            {/* Örnek Haber 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-400"></div>
              <div className="p-6">
                <span className="text-sm text-purple-600 font-medium">15 Ekim 2024</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                  Eğitim Desteği Projesi Başladı
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Muhtaç çocuklara eğitim desteği sağlayan projemiz hayata geçti...
                </p>
              </div>
            </div>

            {/* Örnek Haber 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-blue-400"></div>
              <div className="p-6">
                <span className="text-sm text-purple-600 font-medium">5 Eylül 2024</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                  Okul Öncesi Eğitim Semineri
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Veliler için düzenlenen seminer büyük katılım sağladı...
                </p>
              </div>
            </div>
          </div>

          {/* Medya İletişim */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Medya İletişim
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Basın İletişim</h3>
                <p className="text-gray-600 mb-4">
                  Basın açıklamaları ve medya işbirlikleri için bizimle iletişime geçin.
                </p>
                <p className="text-purple-600 font-medium">
                  📧 basin@edirnecochakhakları.org<br/>
                  📞 +90 284 XXX XX XX
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Sosyal Medya</h3>
                <p className="text-gray-600 mb-4">
                  Güncel haberlerimizi sosyal medya hesaplarımızdan takip edebilirsiniz.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
