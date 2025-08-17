import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bağış Yap | Edirne Çocuk Hakları Derneği',
  description: 'Çocukların geleceği için bağış yapın. Online bağış imkanları ve projeler.',
};

export default function BagisYapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Başlık */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              💝 Bağış Yap
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              Çocukların daha iyi bir gelecek yaşaması için bağışınızla 
              onların hayatlarına dokunun
            </p>
          </div>
          {/* Banka Hesap Bilgileri */}
                    </div>
         {/* Banka Hesap Bilgileri */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Banka Hesap Bilgileri
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Aşağıdaki hesap numarasına bağış yapabilirsiniz
              </p>
              
              <div className="max-w-2xl mx-auto">
                <div className="border-2 border-blue-200 rounded-xl p-6 bg-blue-50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl text-white text-lg font-bold flex items-center justify-center">
                      Z
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">T.C İş Bankası</h3>
                      <p className="text-blue-600 font-medium">Edirne Merkez Şubesi</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <span className="font-medium text-gray-700">IBAN:</span>
                        <span className="font-mono text-base sm:text-lg font-bold text-gray-800 break-all">
                          TR96 0006 4000 0011 3030 2642 16
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <span className="font-medium text-gray-700">Hesap Adı:</span>
                        <span className="font-bold text-gray-800 sm:text-right">
                          Edirne Çocuk Hakları Derneği
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <span className="font-medium text-gray-700">Şube:</span>
                        <span className="font-bold text-gray-800">
                          Edirne Merkez
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
         
             
        </div>
      </div>
          {/* Bağış Motivasyonu */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Neden Bağış Yapmalısınız?
              </h2>
              <p className="text-gray-600 text-lg">
                Her bağışınız, bir çocuğun daha iyi bir gelecek kurmasına yardımcı olur
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  📚
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Eğitim Desteği</h3>
                <p className="text-gray-600 text-sm">
                  Çocukların eğitim masraflarına, kitap ve kırtasiye ihtiyaçlarına destek
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🍎
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Beslenme Yardımı</h3>
                <p className="text-gray-600 text-sm">
                  Sağlıklı beslenme imkanı sunan gıda yardımları ve beslenme programları
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🏥
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Sağlık Hizmetleri</h3>
                <p className="text-gray-600 text-sm">
                  Sağlık kontrolü, tedavi masrafları ve ilaç yardımları
                </p>
              </div>
            </div>
          </div>

 
    </div>
    </div>
  );
}
