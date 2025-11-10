import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const About = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const values = [
    { key: 'integrity' },
    { key: 'transparency' },
    { key: 'discipline' },
    { key: 'partnership' },
  ];

  return (
    <section 
      id="about" 
      className="pt-0 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-white"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-8 sm:mb-10 md:mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-secondary mb-3 sm:mb-4 font-serif">
              {t('about.title')}
            </h2>
            <p className="text-lg sm:text-xl text-secondary/80 mb-6 sm:mb-8 font-sans">{t('about.subtitle')}</p>
          </div>

          {/* Text Blocks */}
          <div className={`space-y-6 sm:space-y-8 mb-8 sm:mb-10 md:mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <p className="text-base sm:text-lg text-secondary/80 leading-relaxed font-sans">
              {t('about.textBlock1')}
            </p>
            <p className="text-base sm:text-lg text-secondary/80 leading-relaxed font-sans">
              {t('about.textBlock2')}
            </p>
          </div>

          {/* Values Grid */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <div
                  key={value.key}
                  className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s`, animationFillMode: 'both' }}
                >
                  <h3 className="text-lg sm:text-xl font-normal text-secondary font-serif mb-2 sm:mb-3 border-b border-secondary/20 pb-2">
                    {t(`about.values.${value.key}.title`)}
                  </h3>
                  <p className="text-sm sm:text-base text-secondary/80 leading-relaxed font-sans mt-2 sm:mt-3">
                    {t(`about.values.${value.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
