// components/ProjectCard.js veya projeler sayfanızdaki component içinde

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaCalendarAlt, FaImage, FaExternalLinkAlt, FaSpinner } from 'react-icons/fa';

const ProjectCard = ({ project }: { project: any }) => {
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);
  const [imageError, setImageError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Öne çıkan resmi getir
  useEffect(() => {
    if (project.featured_media) {
      fetchFeaturedImage(project.featured_media);
    } else {
      setLoading(false);
      setImageError(true);
    }
  }, [project.featured_media]);

  const fetchFeaturedImage = async (mediaId: number) => {
    try {
      const response = await fetch(`https://wp.echd.org.tr/wp-json/wp/v2/media/${mediaId}`);
      if (response.ok) {
        const imageData = await response.json();
        setFeaturedImage(imageData.source_url);
      } else {
        setImageError(true);
      }
    } catch (error) {
      console.error('Resim yüklenirken hata:', error);
      setImageError(true);
    } finally {
      setLoading(false);
    }
  };

  // Tarihi düzenle
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // HTML içeriğini temizle ve kısalt
  const getExcerpt = (content: any, maxLength = 150) => {
    const textContent = content.replace(/<[^>]*>/g, '');
    return textContent.length > maxLength 
      ? textContent.substring(0, maxLength) + '...'
      : textContent;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105">
      {/* Proje Resmi */}
      <div className="relative h-64 overflow-hidden">
        {loading ? (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <FaSpinner className="w-8 h-8 text-gray-400 animate-spin" />
          </div>
        ) : imageError ? (
          <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex flex-col items-center justify-center">
            <FaImage className="w-12 h-12 text-gray-400 mb-2" />
            <span className="text-gray-500 text-sm">Resim bulunamadı</span>
          </div>
        ) : (
          <img
            src={featuredImage || '/placeholder-image.png'}
            alt={project.title.rendered}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Proje İçeriği */}
      <div className="p-6">
        {/* Başlık */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {project.title.rendered}
        </h3>

        {/* Tarih */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
          <FaCalendarAlt className="w-4 h-4 text-pink-500" />
          <span>{formatDate(project.date)}</span>
        </div>

      

        {/* Alt Kısım - Detay Butonu */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          </div>
          
          {/* App Router Link - slug kullanımı */}
          <Link
            href={`/calismalar/projeler/${project.slug}`}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-md"
          >
            <span>Oku</span>
            <FaExternalLinkAlt className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;