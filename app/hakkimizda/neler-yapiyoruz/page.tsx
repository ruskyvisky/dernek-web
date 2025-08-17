import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Neler Yapıyoruz? | Edirne Çocuk Hakları Derneği',
  description: 'Derneğimizin yürüttüğü faaliyetler ve hizmetler.',
};

export default function NelerYapiyoruzPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Başlık */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Neler Yapıyoruz?
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg">
              Çocukların haklarını korumak için yürüttüğümüz faaliyetler
            </p>
          </div>

          {/* Faaliyet Alanları */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Eğitim Desteği */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                📚
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Eğitim Desteği</h3>
              <p className="text-gray-600 leading-relaxed">
                Muhtaç çocuklara eğitim materyali, kitap ve kırtasiye desteği sağlıyoruz. 
                Burs programları ile eğitimlerine devam etmelerini destekliyoruz.
              </p>
            </div>

            {/* Sağlık Hizmetleri */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                🏥
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sağlık Hizmetleri</h3>
              <p className="text-gray-600 leading-relaxed">
                Çocukların sağlık kontrollerini takip ediyor, gerekli durumlarda 
                tedavi masraflarına destek oluyoruz.
              </p>
            </div>

            {/* Sosyal Etkinlikler */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                🎭
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sosyal Etkinlikler</h3>
              <p className="text-gray-600 leading-relaxed">
                Çocukların sosyal gelişimini desteklemek için kültürel ve sanatsal 
                etkinlikler düzenliyoruz.
              </p>
            </div>

            {/* Psikolojik Destek */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                🧠
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Psikolojik Destek</h3>
              <p className="text-gray-600 leading-relaxed">
                Travma yaşamış çocuklara uzman psikologlar eşliğinde 
                psikolojik destek sağlıyoruz.
              </p>
            </div>

            {/* Hukuki Danışmanlık */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                ⚖️
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Hukuki Danışmanlık</h3>
              <p className="text-gray-600 leading-relaxed">
                Çocuk hakları ihlalleri durumunda ailelere ücretsiz 
                hukuki danışmanlık hizmeti veriyoruz.
              </p>
            </div>

            {/* Farkındalık Çalışmaları */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                📢
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Farkındalık Çalışmaları</h3>
              <p className="text-gray-600 leading-relaxed">
                Toplumda çocuk hakları konusunda farkındalık yaratmak için 
                seminerler ve kampanyalar düzenliyoruz.
              </p>
            </div>
          </div>

          

          {/* Nasıl Yardım Edebilirsiniz */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Siz de Bu Çalışmalara Katılın!
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Çocukların geleceği için bizimle birlikte çalışın. 
              Gönüllü olarak katılabilir veya bağış yapabilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href='/uye-ol' className="bg-white text-purple-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-all">
                Üye Ol
              </a>
              
              <a href='/bagis-yap' className="bg-yellow-400 text-purple-800 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition-all">
                Bağış Yap
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
