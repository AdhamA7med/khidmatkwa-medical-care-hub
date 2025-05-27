
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201008481613?text=مرحباً، أرغب في الاستفسار عن خدمات التمريض المنزلي', '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="group bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce-gentle flex items-center justify-center"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-800 text-white text-sm py-2 px-3 rounded-lg whitespace-nowrap">
            تواصل معنا عبر واتساب
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-800"></div>
          </div>
        </div>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></div>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
