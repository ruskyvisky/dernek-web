"use client";

import type { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";
import { IoCopy } from "react-icons/io5";


export default function BagisYapPage() {
  const iban = "TR96 0006 4000 0011 3030 2642 16";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(iban);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2 saniye sonra resetle
    } catch (err) {
      console.error("Kopyalama başarısız:", err);
    }
  };

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Başlık */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              💝 Bağış Yap
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              Çocukların daha iyi bir gelecek yaşaması için bağışınızla onların
              hayatlarına dokunun.
            </p>
          </div>
        </div>

        {/* Banka Hesap Bilgileri */}
        <div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Banka Hesap Bilgileri
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Aşağıdaki hesap numarasına bağış yapabilirsiniz
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="border-2 border-blue-200 rounded-xl p-6 bg-blue-50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl text-white text-lg font-bold flex items-center justify-center">
                    <Image
                      src={"/isbankasi.png"}
                      alt="Bank Logo"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      T.C İş Bankası
                    </h3>
                    <p className="text-blue-600 font-medium">
                      Edirne Merkez Şubesi
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* IBAN */}
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <span className="font-medium text-gray-700">IBAN:</span>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-base sm:text-lg font-bold text-gray-800 break-all">
                          {iban}
                        </span>
                        <button
                          onClick={handleCopy}
                          className="px-3 py-1 text-white text-sm rounded-lg hover:bg-gray-200 transition"
                        >
                          <IoCopy size={24} color="black"/>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Hesap Adı */}
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <span className="font-medium text-gray-700">Hesap Adı:</span>
                      <span className="font-bold text-gray-800 sm:text-right">
                        Edirne Çocuk Hakları Derneği
                      </span>
                    </div>
                  </div>

                  {/* Şube */}
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <span className="font-medium text-gray-700">Şube:</span>
                      <span className="font-bold text-gray-800">Edirne Merkez</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
