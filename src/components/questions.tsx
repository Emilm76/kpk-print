'use client';
import clsx from 'clsx';
import { ReactNode, useState } from 'react';
import styles from './questions.module.scss';

export function QuestionsSection() {
  return (
    <section id="questions" className="section-pt">
      <div className="container">
        <h2 className="h2 h-pb ">Часто задаваемые вопросы</h2>

        <Spoiler title="Как сделать заказ?">
          Чтобы сделать заказ, просто напишите или позвоните нам. <br />
          Или заполните форму и отправьте её. Мы свяжемся с вами для обсуждения
          заказа.
        </Spoiler>
        <Spoiler title="Сколько времени занимает выполнение заказа?">
          Для цифровой печати возможны самые сжатые сроки, они достигаются
          оперативными действиями наших сотрудников. Стандартное время
          изготовления заказов в типографии – 1-2 дня, но в случае необходимости
          мы можем изготовить срочную продукцию за считанные минуты, прямо в
          присутствии заказчика. Это зависит от конкретного заказа,
          загруженности типографии и момента размещения заказа.
        </Spoiler>
        <Spoiler title="Можно ли заказать срочную печать?">
          Да, можно. Мы выполним ваш заказ как можно скорее
        </Spoiler>
        <Spoiler title="Есть ли минимальный объем заказа?">
          Нет. Минимальный объем заказа печатной продукции, с которого мы
          начинаем расчет - 1 экземпляр
        </Spoiler>
      </div>
    </section>
  );
}

function Spoiler({ title, children }: { title: string; children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(styles.block, isOpen && styles.open)}
      onClick={() => setIsOpen((ls) => !ls)}
    >
      <div className={styles.blockWrapper}>
        <div className={styles.title}>
          <h3 className="h3">{title}</h3>
          <ArrowDown className={styles.arrow} />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

function ArrowDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 18.6624L23 31.6624L36 18.6624"
        stroke="#3079ca"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
