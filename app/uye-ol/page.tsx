import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Üye Ol | Edirne Çocuk Hakları Derneği',
  description: 'Edirne Çocuk Hakları Derneği üyelik başvuru formu.',
};

export default function UyeOlPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Başlık */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Üye Ol
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg">
              Çocukların geleceği için bizimle birlikte çalışın
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Sol: Üyelik Avantajları */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Neden Üye Olmalısınız?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                    🤝
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Toplumsal Fayda
                    </h3>
                    <p className="text-gray-600">
                      Çocukların haklarını koruma ve geliştirme konularında aktif rol alarak 
                      topluma fayda sağlayın.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                    📚
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Eğitim İmkanları
                    </h3>
                    <p className="text-gray-600">
                      Çocuk hakları, psikoloji ve sosyal hizmetler konularında 
                      ücretsiz eğitim ve seminer imkanları.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                    🌟
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Gönüllülük Deneyimi
                    </h3>
                    <p className="text-gray-600">
                      Çeşitli projelerde gönüllü olarak çalışma ve 
                      sosyal sorumluluk bilinci geliştirme fırsatı.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                    💼
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Kariyer Gelişimi
                    </h3>
                    <p className="text-gray-600">
                      STK deneyimi, sertifika programları ve 
                      profesyonel ağ geliştirme imkanları.
                    </p>
                  </div>
                </div>
              </div>

              {/* Üyelik Türleri */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Üyelik Türleri
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="text-lg font-bold text-purple-600 mb-2">
                      Aktif Üyelik
                    </h4>
                    <p className="text-gray-600 mb-3">
                      Tüm hakları kullanabilir, yönetimde görev alabilir.
                    </p>
                    <span className="text-purple-800 font-bold">100 TL/Yıl</span>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="text-lg font-bold text-blue-600 mb-2">
                      Destek Üyeliği
                    </h4>
                    <p className="text-gray-600 mb-3">
                      Etkinliklere katılabilir, bağış yapabilir.
                    </p>
                    <span className="text-blue-800 font-bold">50 TL/Yıl</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ: Üyelik Formu */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Üyelik Başvuru Formu
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Ad *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Soyad *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="email@örnek.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Telefon *
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="0555 123 45 67"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Doğum Tarihi *
                  </label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Adres
                  </label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Adresiniz"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Üyelik Türü *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option value="">Seçiniz</option>
                    <option value="aktif">Aktif Üyelik (100 TL/Yıl)</option>
                    <option value="destek">Destek Üyeliği (50 TL/Yıl)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Neden Üye Olmak İstiyorsunuz?
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Motivasyonunuzu paylaşın..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label className="text-gray-600 text-sm">
                    <a href="/hakkimizda/tuzuk" className="text-purple-600 hover:text-purple-800">
                      Dernek tüzüğünü
                    </a> okudum ve kabul ediyorum. *
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label className="text-gray-600 text-sm">
                    Kişisel verilerimin işlenmesini kabul ediyorum. *
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-4 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Başvuru Gönder
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm">
                  📝 <strong>Not:</strong> Başvurunuz değerlendirildikten sonra 
                  e-posta ile bilgilendirileceksiniz. Onay sonrası aidat ödeme 
                  bilgileri gönderilecektir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
