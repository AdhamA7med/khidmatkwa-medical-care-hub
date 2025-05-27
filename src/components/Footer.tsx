
import { Heart, Phone, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  const handleDeveloperWhatsApp = () => {
    window.open('https://wa.me/201153903786?text=مرحباً، أرغب في الاستفسار عن خدمات تطوير المواقع', '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-primary-800 to-primary-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">خدماتكوا الطبية</h3>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6 max-w-md">
              نقدم أفضل خدمات التمريض المنزلي في محافظة الشرقية، مصر. 
              فريق طبي مؤهل ومتخصص لضمان أفضل رعاية صحية في منزلك.
            </p>
            <div className="flex gap-4">
              <a 
                href="tel:01008481613"
                className="bg-white/20 backdrop-blur-md p-3 rounded-xl hover:bg-white/30 transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/201008481613"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500/20 backdrop-blur-md p-3 rounded-xl hover:bg-green-500/30 transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-blue-100 hover:text-white transition-colors duration-200">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-white transition-colors duration-200">
                  عنّا
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors duration-200">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors duration-200">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-300" />
                <span className="text-blue-100">الشرقية، مصر</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-300" />
                <a href="tel:01008481613" className="text-blue-100 hover:text-white transition-colors duration-200">
                  01008481613
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <a 
                  href="https://wa.me/201008481613" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  واتساب: 01008481613
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-blue-100 text-center md:text-right">
              © 2024 خدماتكوا الطبية. جميع الحقوق محفوظة.
            </div>
            
            <div className="text-blue-100 text-center md:text-left">
              تم تطوير الموقع بواسطة{' '}
              <button 
                onClick={handleDeveloperWhatsApp}
                className="text-white font-semibold hover:text-blue-200 transition-colors duration-200 underline"
              >
                أدهم أحمد
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
