import Img1 from '@/images/m3.jpg';
import Img2 from '@/images/post-3.jpg';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './services.module.scss';

export function ServicesSection() {
  return (
    <section id="services" className={clsx(styles.section, 'section-pt')}>
      <div className={clsx(styles.container, 'container')}>
        <h2 className="h2 h-pb">Наши услуги</h2>

        <div className={styles.grid}>
          <div className={styles.block}>
            <Image className={styles.img} src={Img1} alt="Инженерная печать" />
            <h3 className="h3">Инженерная печать</h3>
            <ul className="list" role="list">
              <li>Печать проектов</li>
              <li>Печать чертежей форматов А4, А3, А2, А1, А0</li>
              <li>Печать проектной документации</li>
              <li>Печать швейных выкроек и лекал</li>
            </ul>
          </div>
          <div className={styles.block}>
            <Image
              className={styles.img}
              src={Img2}
              alt="Постпечатная обработка"
            />
            <h3 className="h3">Постпечатная обработка</h3>
            <ul className="list" role="list">
              <li>Фальцевание документов под формат А4 и А3</li>
              <li>Брошюрование под пластиковую пружину</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
