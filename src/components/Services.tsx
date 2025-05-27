
import { Stethoscope, Heart, Syringe, Thermometer, Pill, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "الفحص الطبي المنزلي",
      description: "فحص شامل للحالة الصحية وقياس العلامات الحيوية في راحة منزلك",
      features: ["قياس الضغط والسكر", "فحص القلب والرئتين", "تقييم الحالة العامة"]
    },
    {
      icon: Syringe,
      title: "الحقن والإبر",
      description: "إعطاء الحقن العضلية والوريدية بأمان تام وبأيدي متخصصة",
      features: ["حقن عضلية ووريدية", "سحب عينات دم", "تركيب المحاليل"]
    },
    {
      icon: Heart,
      title: "رعاية المرضى المزمنين",
      description: "متابعة ورعاية مرضى السكري والضغط وأمراض القلب والكلى",
      features: ["متابعة دورية", "خطة علاجية محكمة", "تقارير طبية مفصلة"]
    },
    {
      icon: Pill,
      title: "إدارة الأدوية",
      description: "تنظيم وإعطاء الأدوية في مواعيدها المحددة حسب الوصفة الطبية",
      features: ["جدولة الأدوية", "متابعة الاستجابة", "تذكير بالمواعيد"]
    },
    {
      icon: Thermometer,
      title: "العناية بالجروح",
      description: "تنظيف وتضميد الجروح والعناية بها لضمان الشفاء السريع",
      features: ["تنظيف الجروح", "تغيير الضمادات", "متابعة الشفاء"]
    },
    {
      icon: Clock,
      title: "خدمة 24 ساعة",
      description: "متوفرون على مدار الساعة لحالات الطوارئ والرعاية المستمرة",
      features: ["خدمة مستمرة", "استجابة سريعة", "فريق ليلي ونهاري"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 via-white to-sky-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            خدماتنا الطبية
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات الطبية والتمريضية المتخصصة في منزلك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover-lift group transition-all duration-300 animate-slide-in-right border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto lg:mx-0">
                <service.icon className="w-10 h-10 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-primary-800 mb-4 text-center lg:text-right">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 text-center lg:text-right">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="mt-6 pt-6 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow duration-300">
                  اطلب الخدمة الآن
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Call Section */}
        <div className="mt-16 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 md:p-12 text-center text-white animate-fade-in">
          <h3 className="text-3xl font-bold mb-4">حالات الطوارئ</h3>
          <p className="text-xl mb-8 opacity-90">
            في حالات الطوارئ، نحن متوفرون على مدار الساعة لتقديم المساعدة الفورية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:01008481613"
              className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-50 transition-colors duration-300 flex items-center gap-3"
            >
              <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
              اتصال طوارئ: 01008481613
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
