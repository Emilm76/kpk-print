import Img1 from '@/images/icons/w1.jpg';
import Img2 from '@/images/icons/w2.jpg';
import Img3 from '@/images/icons/w3.jpg';
import Img4 from '@/images/icons/w4.jpg';
import Img5 from '@/images/icons/w5.jpg';
import Img6 from '@/images/icons/w6.jpg';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './why.module.scss';

export function WhySection() {
  return (
    <section className="section-pt">
      <div className={clsx(styles.container, 'container')}>
        <h2 className="h2 h-pb">Почему мы?</h2>

        <div className={styles.grid}>
          <div className={styles.block}>
            <Image className={styles.img} src={Img1} alt="" />
            <p>Форматы любой сложности</p>
          </div>
          <div className={styles.block}>
            <Image className={styles.img} src={Img2} alt="" />
            <p>Высокая скорость</p>
          </div>
          <div className={styles.block}>
            <Image className={styles.img} src={Img3} alt="" />
            <p>Точность деталей</p>
          </div>
          <div className={styles.block}>
            <Image className={styles.img} src={Img4} alt="" />
            <p>Дополнительные инструменты</p>
          </div>
          <div className={styles.block}>
            <Image className={styles.img} src={Img5} alt="" />
            <p>Удобное расположение</p>
          </div>
          <div className={styles.block}>
            <Image className={styles.img} src={Img6} alt="" />
            <p>Доставка по стране</p>
          </div>
        </div>
      </div>
    </section>
  );
}
