'use client';

import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaHeart, FaUsers, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHandsHelping } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      {/* Ana Footer İçeriği */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Logo ve Hakkında */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-full p-3 shadow-lg">
                <FaUsers className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Edirne Çocuk Hakları Derneği</h3>
                <p className="text-gray-300 text-sm">Çocukların Geleceği İçin</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              2016 yılından beri Edirne'de çocukların haklarını korumak, 
              eğitim olanaklarını artırmak ve daha iyi bir gelecek yaratmak 
              için çalışıyoruz.
            </p>
            
            {/* Sosyal Medya */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaInstagram className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaFacebookF className="text-white" />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-300">Hızlı Linkler</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/hakkimizda/biz-kimiz" 
                  className="text-gray-300 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-yellow-300 rounded-full"></span>
                  Biz Kimiz
                </Link>
              </li>
              <li>
                <Link 
                  href="/hakkimizda/neler-yapiyoruz" 
                  className="text-gray-300 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-yellow-300 rounded-full"></span>
                  Neler Yapıyoruz
                </Link>
              </li>
              <li>
                <Link 
                  href="/calismalar/projeler" 
                  className="text-gray-300 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-yellow-300 rounded-full"></span>
                  Projelerimiz
                </Link>
              </li>
              <li>
                <Link 
                  href="/calismalar/etkinlikler" 
                  className="text-gray-300 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-yellow-300 rounded-full"></span>
                  Etkinlikler
                </Link>
              </li>
              <li>
                <Link 
                  href="/calismalar/duyurular" 
                  className="text-gray-300 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-yellow-300 rounded-full"></span>
                  Duyurular
                </Link>
              </li>
            </ul>
          </div>

          {/* Destek */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-300">Destek Olun</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/uye-ol" 
                  className="text-gray-300 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2"
                >
                  <FaUsers className="text-yellow-300 text-sm" />
                  Üye Ol
                </Link>
              </li>
              <li>
                <Link 
                  href="/bagis-yap" 
                  className="text-gray-300 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2"
                >
                  <FaHeart className="text-red-400 text-sm" />
                  Bağış Yap
                </Link>
              </li>
              <li>
                <Link 
                  href="/destek" 
                  className="text-gray-300 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2"
                >
                  <FaHandsHelping className="text-yellow-300 text-sm" />
                  Gönüllü Ol
                </Link>
              </li>
              <li>
                <Link 
                  href="/hakkimizda/basinda-biz" 
                  className="text-gray-300 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-yellow-300 rounded-full"></span>
                  Basında Biz
                </Link>
              </li>
              <li>
                <Link 
                  href="/hakkimizda/tuzuk" 
                  className="text-gray-300 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-yellow-300 rounded-full"></span>
                  Dernek Tüzüğü
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-300">İletişim</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-yellow-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Xxxxxxx Mahallesi, Xxxxxx Sokak No:XX<br />
                    22030 Merkez/Edirne
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FaPhone className="text-yellow-300" />
                <a 
                  href="tel:+902841234567" 
                  className="text-gray-300 hover:text-yellow-300 transition-colors text-sm"
                >
                  +90 284 123 45 67
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-300" />
                <a 
                  href="mailto:cocukhakder22@gmail.com" 
                  className="text-gray-300 hover:text-yellow-300 transition-colors text-sm"
                >
                  cocukhakder22@gmail.com
                </a>
              </div>
            </div>

           
          </div>
        </div>
      </div>

      {/* Alt Footer */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Edirne Çocuk Hakları Derneği. Tüm hakları saklıdır.</p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <Link 
                href="/hakkimizda/tuzuk" 
                className="text-gray-400 hover:text-yellow-300 transition-colors"
              >
                Gizlilik Politikası
              </Link>
              <Link 
                href="/hakkimizda/tuzuk" 
                className="text-gray-400 hover:text-yellow-300 transition-colors"
              >
                Kullanım Şartları
              </Link>
              <Link 
                href="/iletisim" 
                className="text-gray-400 hover:text-yellow-300 transition-colors"
              >
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bağış Butonu (Mobil) */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <Link 
          href="/bagis-yap"
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 transition-all duration-300"
        >
          <FaHeart className="text-yellow-300" />
          <span className="font-bold">Bağış Yap</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
