import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/index.module.css';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';

interface HomeProps {
  messages: any;
}

const HomePage: React.FC<HomeProps> = ({ messages }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const t = useTranslations();

  const slides = [
    '/images/hall.jpg.avif',
    '/images/hall2.jpg.avif',
    '/images/mid-hall.avif'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.carousel}>
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
              aria-hidden={index !== currentSlide}
            >
              <div className={styles.slideOverlay}></div>
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                fill
                priority={index === 0}
                className={styles.heroImage}
                quality={90}
              />
            </div>
          ))}
        </div>
        <div className={styles.heroContent}>
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.description')}</p>
          <button className={styles.ctaButton}>
            {router.locale === 'it' ? 'Contattaci' : 'Contact Us'}
          </button>
        </div>
      </section>

      {/* Studios Section */}
      <section className={styles.studios}>
        <div className={styles.sectionHeader}>
          <h2>{t('studios.title')}</h2>
          <p className={`${styles.sectionSubtitle} ${styles.subtitle}`}>
            {router.locale === 'it' 
              ? 'Professionalità e competenza al servizio delle aziende' 
              : 'Professionalism and expertise at the service of businesses'}
          </p>
        </div>
        <div className={styles.studiosContainer}>
          <div className={styles.studio}>
            <div className={styles.studioImageWrapper}>
              <Image
                src="/images/lenzi.jpg.avif"
                alt={t('studios.lenzi.name')}
                width={300}
                height={300}
                loading="lazy"
                className={styles.studioImage}
              />
            </div>
            <div className={styles.studioContent}>
              <h3>{t('studios.lenzi.name')}</h3>
              <p>{t('studios.lenzi.description')}</p>
              <div className={styles.contactInfo}>
                <p><strong>{router.locale === 'it' ? 'Telefono' : 'Phone'}:</strong> <a href="tel:0498751356">049-8751356</a></p>
                <p><strong>Email:</strong> <a href="mailto:avvocatolenzi@studicabragadin.it">avvocatolenzi@studicabragadin.it</a></p>
                <p><strong>{t('studios.address')}:</strong> Via G. Belzoni 180, 35121 Padova</p>
              </div>
            </div>
          </div>
          <div className={styles.studio}>
            <div className={styles.studioImageWrapper}>
              <Image
                src="/images/andre.jpg.avif"
                alt={t('studios.maretto.name')}
                width={300}
                height={300}
                loading="lazy"
                className={styles.studioImage}
              />
            </div>
            <div className={styles.studioContent}>
              <h3>{t('studios.maretto.name')}</h3>
              <p>{t('studios.maretto.description')}</p>
              <div className={styles.contactInfo}>
                <p><strong>{router.locale === 'it' ? 'Telefono' : 'Phone'}:</strong> <a href="tel:0499562428">049-9562428</a></p>
                <p><strong>Email:</strong> <a href="mailto:andrea.maretto@studicabragadin.it">andrea.maretto@studicabragadin.it</a></p>
                <p><strong>{t('studios.address')}:</strong> Via G. Belzoni 180, 35121 Padova</p>
              </div>
            </div>
          </div>
          <div className={styles.studio}>
            <div className={styles.studioImageWrapper}>
              <Image
                src="/images/alberto.jpg.avif"
                alt={t('studios.cecolin.name')}
                width={300}
                height={300}
                loading="lazy"
                className={styles.studioImage}
              />
            </div>
            <div className={styles.studioContent}>
              <h3>{t('studios.cecolin.name')}</h3>
              <p>{t('studios.cecolin.description')}</p>
              <div className={styles.contactInfo}>
                <p><strong>{router.locale === 'it' ? 'Telefono' : 'Phone'}:</strong> <a href="tel:0497851468">049-7851468</a></p>
                <p><strong>Email:</strong> <a href="mailto:studio@studiocecolin.com">studio@studiocecolin.com</a></p>
                <p><strong>{t('studios.address')}:</strong> Via G. Belzoni 180, 35121 Padova</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2>{router.locale === 'it' ? 'Cosa dicono i nostri clienti' : 'What our clients say'}</h2>
        <div className={styles.testimonialsContainer}>
          <div className={styles.testimonial}>
            <div className={styles.testimonialContent}>
              <p>"{router.locale === 'it' 
                ? 'Professionalità e competenza eccezionali. Ci hanno guidato con successo attraverso una complessa acquisizione.' 
                : 'Exceptional professionalism and expertise. They successfully guided us through a complex acquisition.'}"</p>
            </div>
            <div className={styles.testimonialAuthor}>
              <Image 
                src="/images/client1.jpg" 
                alt="Client testimonial" 
                width={60} 
                height={60}
                className={styles.testimonialImage}
              />
              <div>
                <h4>Marco Rossi</h4>
                <p>CEO, TechSolutions</p>
              </div>
            </div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.testimonialContent}>
              <p>"{router.locale === 'it' 
                ? 'La loro consulenza fiscale ci ha permesso di ottimizzare notevolmente i nostri costi.' 
                : 'Their tax consulting allowed us to significantly optimize our costs.'}"</p>
            </div>
            <div className={styles.testimonialAuthor}>
              <Image 
                src="/images/client2.jpg" 
                alt="Client testimonial" 
                width={60} 
                height={60}
                className={styles.testimonialImage}
              />
              <div>
                <h4>Laura Bianchi</h4>
                <p>{router.locale === 'it' ? 'Direttore Finanziario' : 'Financial Director'}, RetailGroup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className={styles.contactCTA}>
        <div className={styles.contactContent}>
          <h2>{router.locale === 'it' 
            ? 'Pronto a parlare con un esperto?' 
            : 'Ready to speak with an expert?'}</h2>
          <p>{router.locale === 'it' 
            ? 'Prenota una consulenza gratuita con uno dei nostri professionisti.' 
            : 'Schedule a free consultation with one of our professionals.'}</p>
          <button className={styles.ctaButton}>
            {router.locale === 'it' ? 'Prenota Ora' : 'Book Now'}
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale || 'it';
  return {
    props: {
      messages: require(`../locales/${locale}.json`)
    }
  };
};

export default HomePage;