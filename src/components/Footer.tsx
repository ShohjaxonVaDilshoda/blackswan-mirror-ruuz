import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const Footer = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
  <footer className="site-footer py-12 sm:py-14 md:py-16 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-6 sm:mb-8 items-start ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Column 1: Company Information */}
          <div className="space-y-3 sm:space-y-4">
            <div className="text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-3 sm:mb-4 font-serif">
              <span className="text-white">Justice Capital</span>
            </div>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans font-normal">{t('footer.description')}</p>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide font-sans">{t('nav.solutions')}</h4>
            <ul className="space-y-2 sm:space-y-3 text-white/90 font-sans font-light text-xs sm:text-sm">
              <li className="cursor-pointer hover:text-white transition-colors duration-300">
                {t('solutions.singleCase.title')}
              </li>
              <li className="cursor-pointer hover:text-white transition-colors duration-300">
                {t('solutions.portfolio.title')}
              </li>
              <li className="cursor-pointer hover:text-white transition-colors duration-300">
                {t('solutions.judgment.title')}
              </li>
            </ul>
          </div>
        </div>

        {/* Separator line */}
        <div className="border-t border-white/20 my-6 sm:my-8"></div>

        {/* Copyright */}
        <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <p className="text-white/70 text-xs sm:text-sm font-sans font-normal">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};
