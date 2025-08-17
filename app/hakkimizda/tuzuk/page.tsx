import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dernek Tüzüğümüz | Edirne Çocuk Hakları Derneği',
  description: 'Edirne Çocuk Hakları Derneği tüzüğü ve kuralları.',
};

export default function TuzukPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Başlık */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Dernek Tüzüğümüz
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg">
              Derneğimizin kuruluş amacı, işleyişi ve kuralları
            </p>
            <div className="mt-8 p-6 bg-purple-50 rounded-xl">
  <h3 className="text-lg font-bold text-purple-800 mb-3">📄 Tam Tüzük Metni</h3>
  <p className="text-purple-700 mb-4">
    Dernek tüzüğünün tam metnine ulaşmak için dernek merkezimize başvurabilir 
    veya aşağıdaki bağlantıdan PDF olarak indirebilirsiniz.
  </p>

  <a
    href="/tuzuk.pdf"
    download
    className="inline-block px-4 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-700 transition"
  >
    📥 PDF İndir
  </a>
</div>
          </div>

          {/* Tüzük İçeriği */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">BÖLÜM I - GENEL HÜKÜMLER</h2>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Madde 1 - Ad ve Merkez</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Derneğin adı "Edirne Çocuk Hakları Derneği"dir. Merkezi Edirne'dedir.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">Madde 2 - Amaç</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Derneğin amacı; çocukların temel haklarını korumak, geliştirmek ve bu konuda toplumsal farkındalık yaratmaktır.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">Madde 3 - Faaliyet Alanları</h3>
              <ul className="text-gray-600 leading-relaxed mb-6 space-y-2">
                <li>• Çocuk hakları konusunda eğitim ve bilinçlendirme faaliyetleri</li>
                <li>• Muhtaç çocuklara eğitim ve sağlık desteği</li>
                <li>• Çocuk istismarı ve ihmalinin önlenmesi</li>
                <li>• Araştırma ve yayın faaliyetleri</li>
                <li>• Ulusal ve uluslararası işbirlikleri</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">BÖLÜM II - ÜYELİK</h2>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Madde 4 - Üyelik Şartları</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                18 yaşını doldurmuş, medeni hakları kullanma ehliyetine sahip, dernek amacına uygun hareket edecek kişiler üye olabilir.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">Madde 5 - Üye Hakları</h3>
              <ul className="text-gray-600 leading-relaxed mb-6 space-y-2">
                <li>• Genel kurul toplantılarına katılma</li>
                <li>• Seçme ve seçilme hakkı</li>
                <li>• Dernek faaliyetlerine katılma</li>
                <li>• Bilgi alma hakkı</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-3">Madde 6 - Üye Yükümlülükleri</h3>
              <ul className="text-gray-600 leading-relaxed mb-6 space-y-2">
                <li>• Dernek tüzüğüne uymak</li>
                <li>• Aidat ve yükümlülüklerini zamanında ödemek</li>
                <li>• Dernek kararlarına uymak</li>
                <li>• Derneğin amaçlarına uygun davranmak</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">BÖLÜM III - ORGANLAR</h2>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Madde 7 - Dernek Organları</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dernek organları; Genel Kurul, Yönetim Kurulu ve Denetleme Kuruludur.
              </p>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
