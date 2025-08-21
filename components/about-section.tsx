'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaHeart, FaUsers, FaHandsHelping } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Dekoratif Arka Plan Elemanları */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-400/10 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400/10 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-400/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Bölüm Başlığı */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Hakkımızda
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          {/* Ana İçerik */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Sol: Resim */}
            <div className="relative group">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder resim - gerçek resminizi buraya koyabilirsiniz */}
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center">
                 <Image
                  src="/about-photo.webp" // Resim yolunuzu buraya yazın
                  alt="Edirne Çocuk Hakları Derneği çalışmaları"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                </div>
                

                
                
               
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Dekoratif Kartlar */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <FaHeart className="text-red-500" />
                  <span className="font-bold text-gray-800">2016'dan beri</span>
                </div>
              </div>
              
           
            </div>

            {/* Sağ: İçerik */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                  Çocukların Geleceği İçin 
                  <span className="block bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Birlikte Çalışıyoruz
                  </span>
                </h3>
                
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    <strong className="text-gray-800">Edirne Çocuk Hakları Derneği</strong> olarak, 2016 yılından beri 
                    çocukların haklarını korumak ve onlara daha iyi bir gelecek sunmak için 
                    kararlılıkla çalışıyoruz.
                  </p>
                  
                  <p>
                    Birleşmiş Milletler Çocuk Hakları Sözleşmesi'ni rehber edinerek, 
                    hiçbir ayrım gözetmeksizin tüm çocukların temel haklarına erişimini 
                    sağlamaya odaklanıyoruz.
                  </p>
                </div>
              </div>

       

              {/* Daha Fazla Bilgi Butonu */}
              <div className="pt-4">
                <Link 
                  href="/hakkimizda/biz-kimiz"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 hover:from-purple-700 hover:via-pink-600 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  <span>Daha Fazla Bilgi</span>
                  <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Ek Bilgi */}
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border border-purple-200">
                <p className="text-purple-800 font-medium">
                  <FaHeart className="inline w-4 h-4 text-red-500 mr-2" />
                  "Her çocuğun güvenli, sağlıklı ve mutlu bir yaşam hakkı vardır. Biz bu hakkın korunması için buradayız."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;