
import { Heart, Shield, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "رعاية بحب",
      description: "نقدم الرعاية الطبية بكل حب واهتمام لضمان راحة المرضى"
    },
    {
      icon: Shield,
      title: "أمان وثقة",
      description: "فريق طبي مؤهل ومرخص لضمان أعلى معايير السلامة"
    },
    {
      icon: Users,
      title: "فريق متخصص",
      description: "ممرضون وممرضات ذوو خبرة عالية في مختلف التخصصات الطبية"
    },
    {
      icon: Award,
      title: "جودة متميزة",
      description: "نلتزم بأعلى معايير الجودة في تقديم الخدمات الطبية"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            من نحن؟
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن فريق متخصص من الممرضين والممرضات المؤهلين، نقدم خدمات التمريض المنزلي 
            بأعلى معايير الجودة والأمان في محافظة الشرقية، مصر
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center group animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary-800 mb-6">
                رؤيتنا ورسالتنا
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-primary-700 mb-3">رؤيتنا</h4>
                  <p className="text-gray-600 leading-relaxed">
                    أن نصبح الخيار الأول لخدمات التمريض المنزلي في مصر، ونساهم في تحسين 
                    جودة الحياة للمرضى وأسرهم من خلال تقديم رعاية طبية متميزة في بيئة مريحة وآمنة.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary-700 mb-3">رسالتنا</h4>
                  <p className="text-gray-600 leading-relaxed">
                    نلتزم بتقديم خدمات تمريض منزلي عالية الجودة، مع الحرص على الكرامة الإنسانية 
                    وتوفير الراحة النفسية للمرضى وذويهم، باستخدام أحدث الأساليب العلمية والعملية.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 text-white">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">5+</div>
                  <div className="text-lg mb-6">سنوات من الخبرة</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm opacity-90">عميل راضٍ</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">20+</div>
                    <div className="text-sm opacity-90">ممرض مؤهل</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
