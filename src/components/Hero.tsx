
import { Phone, MessageCircle } from 'lucide-react';

const Hero = () => {
  const handleCall = () => {
    window.open('tel:01008481613', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/201008481613?text=مرحباً، أرغب في الاستفسار عن خدمات التمريض المنزلي', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 medical-gradient">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Medical Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md floating-animation">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.83 8L12 1.18L5.17 8H18.83ZM12 3.82L15.18 7H8.82L12 3.82ZM20 10V21H4V10H20ZM22 8H2V23H22V8ZM12 12C13.1 12 14 12.9 14 14S13.1 16 12 16 10 15.1 10 14 10.9 12 12 12ZM12 13C11.45 13 11 13.45 11 14S11.45 15 12 15 13 14.55 13 14 12.55 13 12 13Z"/>
              </svg>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            خدماتكوا الطبية
          </h1>
          
          {/* Subheading */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-100">
            خدمات التمريض المنزلي المتميزة
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl mb-12 text-blue-50 leading-relaxed max-w-3xl mx-auto">
            نقدم أفضل خدمات الرعاية الطبية والتمريض في منزلك بأيدي مختصين مؤهلين
            <br />
            لضمان راحتك وراحة أحبائك
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={handleCall}
              className="group bg-white text-primary-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover-lift animate-glow flex items-center gap-3 min-w-[200px] justify-center"
            >
              <Phone className="w-6 h-6 group-hover:animate-bounce-gentle" />
              اتصل الآن
            </button>
            
            <button 
              onClick={handleWhatsApp}
              className="group bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all duration-300 hover-lift flex items-center gap-3 min-w-[200px] justify-center"
            >
              <MessageCircle className="w-6 h-6 group-hover:animate-bounce-gentle" />
              واتساب
            </button>
          </div>

          {/* Trust Badge */}
          <div className="mt-16 glass-effect rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 text-white/90">
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm">خدمة مستمرة</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm">رضا العملاء</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">سنوات خبرة</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
