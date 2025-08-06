'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import parse, { DOMNode, Element as DOMElement, domToReact, HTMLReactParserOptions } from 'html-react-parser';
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaUser,
  FaShare,
  FaSpinner,
  FaImage,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn
} from 'react-icons/fa';

interface WPProject {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  author: number;
  featured_media: number;
}

interface WPAuthor {
  id: number;
  name: string;
}

interface WPImage {
  source_url: string;
  alt_text?: string;
}

export default function ProjectDetail() {
  const params = useParams();
  const slug = params?.slug as string | undefined;

  const [project, setProject] = useState<WPProject | null>(null);
  const [author, setAuthor] = useState<WPAuthor | null>(null);
  const [featuredImage, setFeaturedImage] = useState<{ url: string; alt: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [imageError, setImageError] = useState<boolean>(false);

  useEffect(() => {
    if (slug) {
      fetchProject();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const fetchProject = async () => {
    try {
      setLoading(true);

      const response = await fetch(`https://wp.echd.org.tr/wp-json/wp/v2/posts?slug=${slug}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: WPProject[] = await response.json();
      if (data.length === 0) {
        throw new Error('Proje bulunamadı');
      }

      const projectData = data[0];
      setProject(projectData);

      if (projectData.author) {
        fetchAuthor(projectData.author);
      }
      if (projectData.featured_media) {
        fetchFeaturedImage(projectData.featured_media, projectData.title.rendered);
      }
    } catch (err) {
      console.error('Proje yüklenirken hata:', err);
      setError(err instanceof Error ? err.message : 'Bilinmeyen hata');
    } finally {
      setLoading(false);
    }
  };

  const fetchAuthor = async (authorId: number) => {
    try {
      const response = await fetch(`https://wp.echd.org.tr/wp-json/wp/v2/users/${authorId}`);
      if (response.ok) {
        const authorData: WPAuthor = await response.json();
        setAuthor(authorData);
      }
    } catch (err) {
      console.error('Yazar bilgileri yüklenirken hata:', err);
    }
  };

  const fetchFeaturedImage = async (mediaId: number, title: string) => {
    try {
      const response = await fetch(`https://wp.echd.org.tr/wp-json/wp/v2/media/${mediaId}`);
      if (response.ok) {
        const imageData: WPImage = await response.json();
        setFeaturedImage({
          url: imageData.source_url,
          alt: imageData.alt_text || title || 'Proje Resmi'
        });
      } else {
        setImageError(true);
      }
    } catch (err) {
      console.error('Resim yüklenirken hata:', err);
      setImageError(true);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = project?.title?.rendered || 'Proje';

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
  };

  
const parseOptions: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    if (domNode instanceof DOMElement) {
      if (domNode.attribs?.className?.includes('gallery')) {
        // Children array'ini kontrol et ve geçerli olanları filtrele
        const validChildren = (domNode.children || []).filter(
          (child): child is DOMNode => 
            child && (child instanceof DOMElement || child.type === 'text')
        );
        
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8 not-prose">
            {domToReact(validChildren, parseOptions)}
          </div>
        );
      }
      if (domNode.name === 'img') {
        return (
          <img
            {...domNode.attribs}
            className="w-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 my-6 cursor-pointer hover:scale-[1.02]"
          />
        );
      }
    }
    return undefined;
  }
};

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="w-16 h-16 text-purple-500 animate-spin mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Proje Yükleniyor...</h2>
          <p className="text-gray-600">Lütfen bekleyin</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-500 text-2xl">⚠️</span>
            </div>
            <h2 className="text-xl font-bold text-red-800 mb-2">Hata Oluştu</h2>
            <p className="text-red-600 mb-6">{error}</p>
           
          </div>
        </div>
      </div>
    );
  }

  if (!project) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative">
        {/* Geri Dön Butonu */}
       

        {/* Ana Resim */}
        <div className="relative h-96 overflow-hidden">
          {imageError || !featuredImage ? (
            <div className="w-full h-full bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 flex items-center justify-center">
              <div className="text-center text-white">
                <FaImage className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-xl font-semibold opacity-75">Proje Görseli</p>
              </div>
            </div>
          ) : (
            <img
              src={featuredImage.url}
              alt={featuredImage.alt}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* Başlık Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                {project.title.rendered}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="w-5 h-5 text-yellow-400" />
                  <span>{formatDate(project.date)}</span>
                </div>

                {author && (
                  <div className="flex items-center gap-2">
                    <FaUser className="w-5 h-5 text-yellow-400" />
                    <span>{author.name}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* İçerik Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* İçerik */}
            <div className="p-8 md:p-12">
              {/* Paylaşım Butonları */}
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <FaShare className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600 font-medium">Paylaş:</span>
                </div>

                <div className="flex gap-3">
                  <a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                
                 
                </div>
              </div>

              {/* Proje İçeriği */}
              <div className="max-w-none">
                <div
                  className="project-content prose prose-lg prose-headings:text-gray-800 prose-headings:font-semibold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-pink-500 prose-a:no-underline hover:prose-a:text-pink-600 hover:prose-a:underline prose-strong:text-gray-800 prose-ul:text-gray-600 prose-ol:text-gray-600 prose-li:mb-2 prose-blockquote:border-l-4 prose-blockquote:border-pink-400 prose-blockquote:bg-pink-50 prose-blockquote:text-gray-600 prose-blockquote:font-normal prose-blockquote:not-italic prose-img:rounded-xl prose-img:shadow-lg hover:prose-img:shadow-xl prose-img:transition-shadow prose-img:duration-300"
                >
                  {parse(project.content.rendered, parseOptions)}
                </div>
              </div>
            </div>

        
        
          </div>
        </div>
      </div>
    </div>
  );
}
