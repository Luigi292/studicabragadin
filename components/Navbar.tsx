import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import styles from '../styles/index.module.css'

interface NavbarProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu }) => {
  const router = useRouter()
  const t = useTranslations('navbar')

  const changeLanguage = (locale: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale })
  }

  return (
    <nav className={`${styles.navbar} ${isMenuOpen ? styles.active : ''}`}>
      <div className={styles.logo}>
        <Link href="/" aria-label="Studio Ca' Bragadin - Home">
          <Image 
            src="/images/logo.jpg.avif" 
            alt="Studio Commercialisti Ca' Bragadin" 
            width={80} 
            height={60}
            priority
          />
        </Link>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu} aria-label="Menu" aria-expanded={isMenuOpen}>
        <div className={isMenuOpen ? styles.open1 : ''}></div>
        <div className={isMenuOpen ? styles.open2 : ''}></div>
        <div className={isMenuOpen ? styles.open3 : ''}></div>
      </div>

      <ul className={styles.navMenu}>
        <li>
          <Link href="/" className={styles.navLink}>
            {t('home')}
          </Link>
        </li>
        <li>
          <Link href="/chi-siamo" className={styles.navLink}>
            {t('about')}
          </Link>
        </li>
        <li>
          <Link href="/servizi" className={styles.navLink}>
            {t('services')}
          </Link>
        </li>
        <li>
          <Link href="/settori" className={styles.navLink}>
            {t('sectors')}
          </Link>
        </li>
        <li>
          <Link href="/contatti" className={styles.navLink}>
            {t('contact')}
          </Link>
        </li>
      </ul>

      <div className={styles.languageToggle}>
        <button 
          onClick={() => changeLanguage('it')} 
          className={`${styles.languageButton} ${router.locale === 'it' ? styles.active : ''}`}
          aria-label="Italiano"
        >
          IT
        </button>
        <span>|</span>
        <button 
          onClick={() => changeLanguage('en')} 
          className={`${styles.languageButton} ${router.locale === 'en' ? styles.active : ''}`}
          aria-label="English"
        >
          EN
        </button>
      </div>
    </nav>
  )
}

export default Navbar