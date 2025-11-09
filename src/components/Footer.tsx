import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const Footer = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
  <footer className="site-footer border-t border-border py-12" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div>
            <div className="text-2xl font-bold text-white mb-4 tracking-wider transition-transform duration-300 hover:scale-105">
              <span className="text-white">Justice Capital</span>
            </div>
            <p className="text-white/80">{t('footer.description')}</p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">{t('nav.services')}</h4>
            <ul className="space-y-2 text-white/80">
              <li className="transition-colors duration-300 hover:text-white cursor-pointer">{t('services.corporate.title')}</li>
              <li className="transition-colors duration-300 hover:text-white cursor-pointer">{t('services.litigation.title')}</li>
              <li className="transition-colors duration-300 hover:text-white cursor-pointer">{t('services.international.title')}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">{t('contact.info.address')}</h4>
            <ul className="space-y-2 text-white/80">
              <li>{t('contact.info.addressText')}</li>
              <li>+998 (94) 241-21-02</li>
              <li>contact@justicecapital.uz</li>
            </ul>
          </div>
        </div>

        <div className={`border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <p className="text-white/70 text-sm">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};
