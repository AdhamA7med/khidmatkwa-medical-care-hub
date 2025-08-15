
import { MapPin, Phone, MessageCircle, Clock, Mail } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "العنوان",
      details: "القاهرة، مصر",
      color: "text-red-600"
    },
    {
      icon: Phone,
      title: "رقم الهاتف",
      details: "01032766086",
      link: "tel:01032766086",
      color: "text-blue-600"
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      details: "01032766086",
      link: "https://wa.me/201032766086?text=مرحباً، أرغب في الاستفسار عن خدمات التمريض المنزلي",
      color: "text-green-600"
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: "24 ساعة - 7 أيام في الأسبوع",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            تواصل معنا
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لخدمتك على مدار الساعة. تواصل معنا الآن لحجز موعد أو للاستفسار عن خدماتنا
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-primary-800 mb-8">معلومات التواصل</h3>
            
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover-lift animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${info.color} bg-opacity-10`}>
                    <info.icon className={`w-7 h-7 ${info.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`${info.color} hover:underline font-medium`}
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-gray-600 font-medium">{info.details}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">تواصل سريع</h4>
              <div className="space-y-4">
                <a 
                  href="tel:01008481613"
                  className="block bg-white/20 backdrop-blur-md rounded-xl p-4 hover:bg-white/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">اتصال مباشر</div>
                      <div className="text-sm opacity-90">للحالات العاجلة</div>
                    </div>
                  </div>
                </a>
                
                <a 
                  href="https://wa.me/201032766086?text=مرحباً، أرغب في الاستفسار عن خدمات التمريض المنزلي"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/20 backdrop-blur-md rounded-xl p-4 hover:bg-white/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">واتساب</div>
                      <div className="text-sm opacity-90">للاستفسارات والحجز</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in">
              <h3 className="text-2xl font-bold text-primary-800 mb-6">خدماتنا تشمل</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">تمريض منزلي</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">رعاية المسنين</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">إعطاء الحقن</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">قياس العلامات الحيوية</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">العناية بالجروح</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">المتابعة الطبية</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">لماذا تختارنا؟</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  فريق طبي مؤهل ومرخص
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  خدمة على مدار الساعة
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  أسعار مناسبة ومنافسة
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  استجابة سريعة للطوارئ
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  سرية تامة للمعلومات
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
