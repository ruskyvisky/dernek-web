import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Duyurular | Edirne Çocuk Hakları Derneği',
  description: 'Dernek duyuruları, haberler ve güncel gelişmeler.',
};

export default function DuyurularPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Başlık */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Duyurular
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg">
              Derneğimizden haberler, duyurular ve güncel gelişmeler
            </p>
          </div>

          {/* Duyuru Listesi */}
          <div className="space-y-8">
            {/* Önemli Duyuru */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white text-red-500 px-3 py-1 rounded-full text-sm font-bold">
                  ÖNEMLİ
                </span>
                <span className="text-red-100">25 Aralık 2024</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                2025 Yılı Genel Kurul Toplantısı
              </h2>
              <p className="text-red-100 leading-relaxed mb-6">
                Derneğimizin 2025 yılı olağan genel kurul toplantısı 15 Ocak 2025 tarihinde 
                saat 14:00'da dernek merkezimizde gerçekleştirilecektir. Tüm üyelerimizin 
                katılımını bekliyoruz.
              </p>
              <button className="bg-white text-red-500 font-bold px-6 py-3 rounded-full hover:bg-red-50 transition-all">
                Detaylar →
              </button>
            </div>

            {/* Normal Duyurular */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  DUYURU
                </span>
                <span className="text-gray-500">20 Aralık 2024</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Kış Dönemi Eğitim Desteği Başvuruları
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                2024-2025 eğitim-öğretim yılı kış dönemi için eğitim desteği başvuruları 
                başlamıştır. Muhtaç ailelerin çocukları için kırtasiye, kitap ve giyim 
                yardımı yapılacaktır. Başvurular 31 Aralık tarihine kadar kabul edilecektir.
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Başvuru Formu
                </button>
                <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                  Detaylar
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  ETKİNLİK
                </span>
                <span className="text-gray-500">18 Aralık 2024</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Yılbaşı Hediye Kampanyası
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Muhtaç çocuklarımız için yılbaşı hediye kampanyamız başladı. 
                Kitap, oyuncak ve kıyafet bağışlarınızı dernek merkezimize 
                getirebilir veya online bağış yapabilirsiniz.
              </p>
              <div className="flex gap-4">
                <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  Bağış Yap
                </button>
                <button className="border border-green-500 text-green-500 px-6 py-2 rounded-lg hover:bg-green-50 transition-colors">
                  Kampanya Detayları
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                  BAŞARI
                </span>
                <span className="text-gray-500">15 Aralık 2024</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Uluslararası İşbirliği Anlaşması İmzalandı
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Derneğimiz, Balkan ülkelerindeki çocuk hakları dernekleri ile 
                işbirliği anlaşması imzaladı. Bu anlaşma ile bölgesel projelerde 
                birlikte çalışma imkanı elde edildi.
              </p>
              <button className="border border-purple-500 text-purple-500 px-6 py-2 rounded-lg hover:bg-purple-50 transition-colors">
                Haberin Devamı
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                  BİLGİ
                </span>
                <span className="text-gray-500">10 Aralık 2024</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Mesai Saatleri Güncellendi
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Kış dönemi mesai saatlerimiz güncellendi. Dernek merkezimiz 
                hafta içi 09:00-17:00, hafta sonu 10:00-15:00 saatleri arasında 
                hizmet verecektir.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                  TEŞEKKÜR
                </span>
                <span className="text-gray-500">5 Aralık 2024</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Gönüllülerimize Teşekkür
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Kasım ayında düzenlediğimiz etkinliklerde emeği geçen tüm 
                gönüllülerimize ve destekçilerimize teşekkür ederiz. 
                Birlikte daha güzel işlere imza atıyoruz.
              </p>
            </div>
          </div>

          {/* Bülten Aboneliği */}
          <div className="mt-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl shadow-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Duyurularımızdan Haberdar Olun!
            </h2>
            <p className="text-lg mb-8 opacity-90">
              E-posta bültenimize abone olarak tüm duyuru ve etkinliklerden 
              anında haberdar olabilirsiniz.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-yellow-400 text-purple-800 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition-all">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
