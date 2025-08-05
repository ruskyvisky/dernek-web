"use client"
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaClock } from 'react-icons/fa';

const EventsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Örnek etkinlik verileri
  const events = [
    {
      id: 1,
      title: "Çocukların Sesi Festivali",
      time: "14:00",
      location: "Edirne Kültür Merkezi",
      participants: "500+ Çocuk",
      description: "Çocukların yaratıcılığını ve seslerini duyurabileceği özel bir festival",
      image: "https://images.unsplash.com/photo-1544776527-7ad5ac882d5d?w=800&h=500&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Okul Öncesi Eğitim Semineri",
      time: "10:00",
      location: "Trakya Üniversitesi",
      participants: "200 Eğitimci",
      description: "Çocuk hakları odaklı eğitim yaklaşımları üzerine uzman semineri",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=500&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Çocuk Hakları Atölyesi",
      date: "29 Eylül 2024",
      time: "13:30",
      location: "Edirne Belediyesi",
      participants: "150 Aile",
      description: "Aileler için çocuk hakları farkındalık atölyesi ve interaktif etkinlikler",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=500&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Sokak Oyunları Şenliği",
      date: "6 Ekim 2024",
      time: "15:00",  
      location: "Saraçlar Parkı",
      participants: "300+ Çocuk",
      description: "Geleneksel sokak oyunlarını yeniden keşfedelim, çocukluğu sokağa taşıyalım",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=500&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Çocuk Parlamentosu Toplantısı",
      date: "13 Ekim 2024",
      time: "16:00",
      location: "Belediye Meclis Salonu",
      participants: "50 Çocuk Temsilci",
      description: "Çocukların kendi haklarını savunduğu ve seslerini duyurduğu özel toplantı",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=500&fit=crop&crop=center"
    }
  ];

  // Otomatik slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, events.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="relative w-full bg-gradient-to-br from-pink-50 to-purple-50 py-12">
      {/* Başlık Bölümü */}
      

      {/* Slider Container */}
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          {/* Slides */}
          <div 
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {events.map((event) => (
              <div
                key={event.id}
                className="min-w-full h-full relative"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="max-w-4xl">
                    {/* Event Title */}
                    <h3 className="text-4xl font-bold mb-4 drop-shadow-lg">
                      {event.title}
                    </h3>
                    
                   
                    
                    {/* Description */}
                    <p className="text-xl text-gray-200 mb-6 max-w-3xl">
                      {event.description}
                    </p>
                    
                    {/* CTA Button */}
                    <button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-purple-800 font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-xl">
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-6">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>

    
     
    </div>
  );
};

export default EventsSlider;
