import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biz Kimiz | Edirne Çocuk Hakları Derneği',
  description: 'Edirne Çocuk Hakları Derneği hakkında bilgiler, misyonumuz ve vizyonumuz.',
};

export default function BizKimizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Başlık */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Biz Kimiz?
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          {/* İçerik */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Edirne Çocuk Hakları Derneği olarak, 11 Mayıs 2016 tarihinde çocuklar için daha iyi bir dünya yaratma hedefiyle yola çıktık. Birleşmiş Milletler Çocuk Hakları Sözleşmesi’ni rehber edinerek, hiçbir ayrım gözetmeksizin tüm çocukların haklarını korumayı ve onların üstün yararını ön planda tutmayı amaçlıyoruz. Çocuklar ve çocuklarla etkileşimde bulunan kişi, kurum ve kuruluşlarla iş birliği yaparak daha adil, güvenli ve sevgi dolu bir gelecek inşa etmek için çalışıyoruz.
 </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Misyonumuz</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Tüm çocukların temel haklarına erişimini sağlamak, onların potansiyellerini özgürce geliştirebilecekleri bir ortam yaratmak ve çocuk hakları konusunda farkındalığı artırmak için etkin, kapsayıcı ve sürdürülebilir çalışmalar yürütmek.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Vizyonumuz</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Çocukların ayrımcılığa uğramadığı, haklarının korunduğu, sevgi ve güvenle büyüyebildiği bir dünya yaratmak.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Değerlerimiz</h2>
              <ul className="text-gray-600 leading-relaxed space-y-2">
                <li><b className='text-gray-800'>Çocuğun Üstün Yararı:</b> Her karar ve eylemde çocuğun iyiliğini öncelik kabul ederiz.</li>
                <li><b className='text-gray-800'>Eşitlik ve Kapsayıcılık:</b> Hiçbir ayrım gözetmeksizin tüm çocuklar için eşit haklar savunuruz.</li>
                <li><b className='text-gray-800'>Şeffaflık ve Güven:</b> Çalışmalarımızda dürüstlük ve hesap verebilirlik ilkesine bağlıyız.</li>
                <li><b className='text-gray-800'>İş Birliği:</b> Çocuklarla ilgili tüm paydaşlarla dayanışma içinde çalışır, ortak hedefler için güç birliği yaparız.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
