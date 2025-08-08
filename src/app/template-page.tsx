import { AboutSection } from '@/components/about';
import { FeedbacksSection } from '@/components/feedbacks';
import { Footer } from '@/components/footer/footer';
import { FosSection } from '@/components/fos';
import { Header } from '@/components/header/header';
import { MainSection } from '@/components/main';
import { QuestionsSection } from '@/components/questions';
import { ServicesSection } from '@/components/services';
import { WhySection } from '@/components/why';
import clsx from 'clsx';
import { City } from './constants';
import styles from './template-page.module.scss';

export function TemplatePage({ city }: { city: City }) {
  return (
    <div className={styles.page}>
      <Header city={city} />

      <main>
        <MainSection region={city.region1} />
        <AboutSection region={clsx(city.region1, city.region2)} />
        <ServicesSection />
        <WhySection />
        <FosSection />
        <FeedbacksSection />
        <QuestionsSection />
      </main>

      <Footer />
    </div>
  );
}
