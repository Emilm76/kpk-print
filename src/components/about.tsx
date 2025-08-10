import AboutImg from '@/images/o1.jpg';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './about.module.scss';

export function AboutSection({ region }: { region: string }) {
  return (
    <section className={clsx(styles.section, 'section-pt')}>
      <div className={clsx(styles.container, 'container')}>
        <div className={styles.text}>
          <h2 className="h2 h-pb-sm">Инженерная печать</h2>
          <p>
            Центр инженерной печати КПК-Принт предоставляет услуги по
            оперативной печати, фальцеванию и&nbsp;брошюрованию чертежей,
            проектов, графиков, схем. Наша компания производит печать чертежей
            в&nbsp;минимальные сроки по низким и справедливым ценам {region}.
            Наше оборудование позволяет печатать чертежи, проекты формата от А4
            до А0 +. Мы постоянно инвестируем в технологии и наших специалистов,
            чтобы максимально эффективно предоставлять наши услуги заказчикам.
            Любая, даже самая сложная задача для нас выполнима!
          </p>
        </div>
        <Image
          className={styles.img}
          src={AboutImg}
          sizes="(max-width: 1024px) 100vw, 48vw"
          alt="Чертежи на столе"
        />
      </div>
    </section>
  );
}
