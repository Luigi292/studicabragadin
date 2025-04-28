import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import styles from '../styles/index.module.css';

const Footer = () => {
  const router = useRouter();
  const t = useTranslations();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <div className={styles.footerLogo}>
            <Image
              src="/images/logo.jpg.avif"
              alt="Ca' Bragadin Accountants Firm"
              width={120}
              height={40}
              loading="lazy"
            />
          </div>
          <p className={styles.footerTagline}>
            {t('footer.tagline')}
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>{t('footer.contact')}</h3>
          <div className={styles.footerInfo}>
            <p><strong>{t('studios.address')}:</strong> Via G. Belzoni 180, 35121 Padova</p>
            <p><strong>Email:</strong> info@studicabragadin.it</p>
            <p><strong>Tel:</strong> +39 049 1234567</p>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>{t('footer.links')}</h3>
          <div className={styles.footerLinks}>
            <a href="/about">{t('navbar.about')}</a>
            <a href="/services">{t('navbar.services')}</a>
            <a href="/sectors">{t('navbar.sectors')}</a>
            <a href="/contact">{t('navbar.contact')}</a>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>{t('footer.legal')}</h3>
          <div className={styles.footerLinks}>
            <a href="/privacy">{t('footer.privacy')}</a>
            <a href="/terms">{t('footer.terms')}</a>
            <a href="/cookies">{t('footer.cookies')}</a>
          </div>
        </div>

        <div className={styles.footerCopyright}>
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;