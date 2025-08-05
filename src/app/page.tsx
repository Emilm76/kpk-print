import { AboutSection } from '@/components/about';
import { FeedbacksSection } from '@/components/feedbacks';
import { Footer } from '@/components/footer/footer';
import { FosSection } from '@/components/fos';
import { Header } from '@/components/header/header';
import { MainSection } from '@/components/main';
import { ServicesSection } from '@/components/services';
import { WhySection } from '@/components/why';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main>
        <MainSection />
        <AboutSection />
        <ServicesSection />
        <WhySection />
        <FosSection />
        <FeedbacksSection />
      </main>

      <Footer />
    </div>
  );
}
