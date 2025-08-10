'use client';
import clsx from 'clsx';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaPagination } from './embla/embla-pagination';
import styles from './feedbacks.module.scss';

const reviews = [
  {
    name: 'Светлана Матушкина',
    date: '9 июля',
    text: 'Рекомендую!!! Всегда делают качественно, быстро, если надо срочно, идут навстречу. Очень удобно, что можно отправить почтой и потом прийти уже за готовым заказом. Сотрудничаю только с этой компанией и другим рекомендую. Спасибо, с Вами очень приятно работать!!!!',
  },
  {
    name: 'Валерия Мерзликина',
    date: '1 июля',
    text: 'Качественная печать, клиентоориентированность на высоте. Константин профессионал в своем деле. Выгодная и качественная печать',
  },
  {
    name: 'Анастасия К.',
    date: '4 декабря 2024',
    text: 'Все супер! Нужно было срочно распечатать чертежи формата А0 и А4. Так же была нужна услуга фальцевания и брошюрования. Сделали быстро, качественно, недорого! Спасибо вам!)',
  },
  {
    name: 'Валентина Богомолова',
    date: '28 ноября 2024',
    text: 'Очень хорошая организация, цены адекватные, быстро реагируют. Приветливые улыбчивые сотрудники. Печатаю лекала для одежды только у них.',
  },
  {
    name: 'Наталья Мануйлова',
    date: '7 ноября 2024',
    text: 'Отличная компания 👍. Очень быстро выполняются заказы. Особенно когда срочно нужно это спасает. Качественная печать. Мне как клиенту очень приятно с ними сотрудничать. Бывали случаи, когда просила распечатать во вне рабочее время, всегда шли навстречу. Бывало, что находились ошибки в форматах, об этом сразу сообщалось, до печати. Очень довольна)))',
  },
  {
    name: 'Марина Зибарева',
    date: '7 ноября 2024',
    text: 'Заказываю распечатку только здесь. Работают оперативно, очень удобно, что можно заранее отправлять чертежи, сразу посчитают и стоимость и сроки выполнения. Качество печати хорошее!',
  },
];

const reviewsUrl = 'https://yandex.ru/maps/org/kpk_print/137399331691/reviews/';

export function FeedbacksSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, duration: 30 }, [
    Autoplay({ delay: 3500 }),
  ]);

  return (
    <section id="feedbacks" className="section-pt">
      <div className="container">
        <h2 className="h2 h-pb center">Отзывы клиентов</h2>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {reviews.map((r, index) => (
              <a
                href={reviewsUrl}
                target="_blank"
                className={clsx(styles.slide, styles.card, 'embla__slide')}
                key={index}
              >
                <Feedback {...r} />
              </a>
            ))}
            <div
              className={clsx(styles.slide, styles.showMore, 'embla__slide')}
            >
              <a href={reviewsUrl} target="_blank" className="link-blue">
                Читать все отзывы
              </a>
            </div>
          </div>
          <EmblaPagination emblaApi={emblaApi} className={styles.pagination} />
        </div>
      </div>
    </section>
  );
}

function Feedback({
  name,
  date,
  text,
}: {
  name: string;
  date: string;
  text: string;
}) {
  return (
    <div className={styles.item}>
      <div className="subtitle">{name}</div>
      <div className={styles.infoWrapper}>
        <Rating />
        <div className={clsx(styles.date, 'info')}>{date}</div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

function Rating() {
  return (
    <div className={styles.rating}>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}

function Star() {
  return (
    <svg
      className={styles.star}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.985 11.65l-3.707 2.265a.546.546 0 0 1-.814-.598l1.075-4.282L1.42 6.609a.546.546 0 0 1 .29-.976l4.08-.336 1.7-3.966a.546.546 0 0 1 1.004.001l1.687 3.965 4.107.337c.496.04.684.67.29.976l-3.131 2.425 1.073 4.285a.546.546 0 0 1-.814.598L7.985 11.65z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
