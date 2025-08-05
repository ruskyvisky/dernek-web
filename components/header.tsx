'use client';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaHeart, FaUsers, FaHandsHelping } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 shadow-xl sticky top-0 z-50">
      {/* Üst Banner */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-pink-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            {/* Sol: Slogan */}
            <div className="flex items-center gap-2 text-purple-600 font-medium">
              <FaHeart className="text-pink-500 animate-pulse" />
              <span className="hidden sm:block">Her Çocuğun Hakkı Var</span>
            </div>
            
            {/* Sağ: Sosyal medya */}
            <div className="flex items-center gap-3">
              <span className="text-gray-600 text-xs hidden md:block">Bizi Takip Edin:</span>
              <div className="flex gap-2">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  className="text-pink-500 hover:text-pink-600 hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-pink-50"
                >
                  <FaInstagram size={16} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  className="text-blue-500 hover:text-blue-600 hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-blue-50"
                >
                  <FaFacebookF size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ana Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Sol: Logo ve Başlık */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="bg-white rounded-full p-3 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full">
                <FaUsers className="text-white text-xl" />
              </div>
            </div>
            
            {/* Başlık */}
            <div>
              <h1 className="text-white font-bold text-xl md:text-2xl drop-shadow-lg">
                Edirne Çocuk Hakları Derneği
              </h1>
              <p className="text-white/90 text-sm font-medium drop-shadow">
                Çocukların Geleceği İçin Birlikte
              </p>
            </div>
          </div>

          {/* Sağ: Desktop Menü */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link 
              href="/" 
              className="text-white hover:text-yellow-200 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm"
            >
              Anasayfa
            </Link>
            
            {/* Hakkımızda Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setHovered('hakkimizda')}
              onMouseLeave={() => setHovered(null)}
            >
              <button className="text-white hover:text-yellow-200 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm flex items-center gap-1">
                Hakkımızda
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {hovered === 'hakkimizda' && (
                <div className="absolute left-0 top-full pt-2 w-56">
                  <div className="bg-white/95 backdrop-blur-sm border border-purple-200 shadow-xl rounded-xl overflow-hidden transform transition-all duration-300 animate-fadeIn">
                    <div className="bg-gradient-to-r from-pink-400 to-purple-400 h-1"></div>
                    <Link href="/hakkimizda/biz-kimiz" className="block px-4 py-3 hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition-colors border-b border-gray-100">
                      Biz Kimiz
                    </Link>
                    <Link href="/hakkimizda/basinda-biz" className="block px-4 py-3 hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition-colors border-b border-gray-100">
                      Basında Biz
                    </Link>
                    <Link href="/hakkimizda/tuzuk" className="block px-4 py-3 hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition-colors border-b border-gray-100">
                      Dernek Tüzüğümüz
                    </Link>
                    <Link href="/hakkimizda/neler-yapiyoruz" className="block px-4 py-3 hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition-colors">
                      Neler Yapıyoruz?
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Çalışmalarımız Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setHovered('calismalar')}
              onMouseLeave={() => setHovered(null)}
            >
              <button className="text-white hover:text-yellow-200 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm flex items-center gap-1">
                Çalışmalarımız
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {hovered === 'calismalar' && (
                <div className="absolute left-0 top-full pt-2 w-56">
                  <div className="bg-white/95 backdrop-blur-sm border border-purple-200 shadow-xl rounded-xl overflow-hidden transform transition-all duration-300 animate-fadeIn">
                    <div className="bg-gradient-to-r from-pink-400 to-purple-400 h-1"></div>
                    <Link href="/calismalar/projeler" className="block px-4 py-3 hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition-colors border-b border-gray-100">
                      Projeler
                    </Link>
                    <Link href="/calismalar/etkinlikler" className="block px-4 py-3 hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition-colors border-b border-gray-100">
                      Etkinlikler
                    </Link>
                    <Link href="/calismalar/duyurular" className="block px-4 py-3 hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition-colors">
                      Duyurular
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/destek" 
              className="text-white hover:text-yellow-200 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm"
            >
              Destek
            </Link>
            
            {/* Özel Bağış Butonu */}
            <Link 
              href="/bagis-yap" 
              className="bg-yellow-400 hover:bg-yellow-300 text-purple-800 font-bold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 animate-pulse"
            >
              <FaHeart className="text-red-500" />
              Bağış Yap
            </Link>
            
            <Link 
              href="/iletisim" 
              className="text-white hover:text-yellow-200 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm"
            >
              İletişim
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-pink-400 to-purple-400 h-1"></div>
            <div className="p-4 space-y-2">
              <Link href="/" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Anasayfa
              </Link>
              
              <div className="border-t border-gray-200 pt-2">
                <span className="block py-2 font-medium text-gray-800">Hakkımızda</span>
                <div className="pl-4 space-y-1">
                  <Link href="/hakkimizda/biz-kimiz" className="block py-1 text-gray-600 hover:text-purple-600 transition-colors">
                    Biz Kimiz
                  </Link>
                  <Link href="/hakkimizda/basinda-biz" className="block py-1 text-gray-600 hover:text-purple-600 transition-colors">
                    Basında Biz
                  </Link>
                  <Link href="/hakkimizda/tuzuk" className="block py-1 text-gray-600 hover:text-purple-600 transition-colors">
                    Dernek Tüzüğümüz
                  </Link>
                  <Link href="/hakkimizda/neler-yapiyoruz" className="block py-1 text-gray-600 hover:text-purple-600 transition-colors">
                    Neler Yapıyoruz?
                  </Link>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-2">
                <span className="block py-2 font-medium text-gray-800">Çalışmalarımız</span>
                <div className="pl-4 space-y-1">
                  <Link href="/calismalar/projeler" className="block py-1 text-gray-600 hover:text-purple-600 transition-colors">
                    Projeler
                  </Link>
                  <Link href="/calismalar/etkinlikler" className="block py-1 text-gray-600 hover:text-purple-600 transition-colors">
                    Etkinlikler
                  </Link>
                  <Link href="/calismalar/duyurular" className="block py-1 text-gray-600 hover:text-purple-600 transition-colors">
                    Duyurular
                  </Link>
                </div>
              </div>
              
              <Link href="/destek" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors border-t border-gray-200 pt-2">
                Destek
              </Link>
              
              <div className="border-t border-gray-200 pt-2">
                <Link 
                  href="/bagis-yap" 
                  className="block bg-yellow-400 hover:bg-yellow-300 text-purple-800 font-bold px-4 py-3 rounded-lg transition-all text-center"
                >
                  💝 Bağış Yap
                </Link>
              </div>
              
              <Link href="/iletisim" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">
                İletişim
              </Link>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;