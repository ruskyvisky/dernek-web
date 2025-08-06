"use client"
import React, { useState, useEffect } from 'react';
import ProjectCard from '@/components/project-card';
import { FaSpinner } from 'react-icons/fa';
const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://wp.echd.org.tr/wp-json/wp/v2/posts?categories=2');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Projeler yüklenirken hata:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Sayfa Başlığı */}
      <div className="relative py-20 overflow-hidden">
        {/* Dekoratif Arka Plan */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-pink-400/20 rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400/20 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-400/10 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Projelerimiz
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Çocukların haklarını korumak ve geleceklerini güvence altına almak için yürüttüğümüz 
            anlamlı projelerimizi keşfedin. Her proje, bir çocuğun gülümsemesi için atılan önemli bir adımdır.
          </p>
          
          {/* Alt Çizgi Dekorasyon */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-1 bg-pink-400 rounded-full"></div>
              <div className="w-12 h-1 bg-purple-400 rounded-full"></div>
              <div className="w-8 h-1 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Projeler Listesi */}
      <div className="container mx-auto px-4 pb-20">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <FaSpinner className="w-12 h-12 text-purple-500 animate-spin mx-auto mb-4" />
              <p className="text-xl text-gray-600">Projeler yükleniyor...</p>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-500 text-2xl">⚠️</span>
              </div>
              <h3 className="text-xl font-semibold text-red-800 mb-2">Hata Oluştu</h3>
              <p className="text-red-600">{error}</p>
              <button
                onClick={fetchProjects}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-colors"
              >
                Tekrar Dene
              </button>
            </div>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Proje Bulunamadı</h3>
              <p className="text-blue-600">Henüz yayınlanmış bir proje bulunmamaktadır.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: any) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>

      {/* Alt Dekoratif Alan */}
      {!loading && projects.length > 0 && (
        <div className="bg-white/50 backdrop-blur-sm py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Projelerimize Destek Olmak İster Misiniz?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Çocukların daha iyi bir gelecek yaşaması için yürüttüğümüz projelere siz de katkı sağlayabilirsiniz.
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              Bağış Yaparak Destek Ol
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;