'use client';
import { City } from '@/app/constants';
import { BurgerCloseIcon } from '@/images/icons/burger-close';
import { BurgerOpenIcon } from '@/images/icons/burger-open';
import LogoImg from '@/images/icons/logo-2-crop.jpg';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { CitySelect } from '../city-select/city-select';
import styles from './header.module.scss';

export function Header({ city }: { city: City }) {
  const header = useRef<HTMLDivElement>(null);
  const burger = useRef<HTMLDivElement>(null);

  function handleOpenClick() {
    if (header.current && burger.current) {
      burger.current.classList.add(styles.open);
      document.body.classList.add('locked');
    }
  }

  function handleCloseClick() {
    if (header.current && burger.current) {
      burger.current.classList.remove(styles.open);
      document.body.classList.remove('locked');
    }
  }

  return (
    <>
      <header className={styles.header} ref={header}>
        <div className={clsx(styles.container, 'container')}>
          <Link href="/" className={styles.logo}>
            <Image src={LogoImg} alt="Логотип КПК-Принт" />
          </Link>

          <HeaderLinks />
          <HeaderAction city={city} />

          <button
            className={styles.burgerOpenBtn}
            onClick={handleOpenClick}
            type="button"
          >
            <BurgerOpenIcon />
          </button>
        </div>
        <div className={styles.shadow}></div>
      </header>

      <div className={styles.burger} ref={burger}>
        <div className={clsx(styles.burgerContainer, 'container')}>
          <button
            className={styles.burgerCloseBtn}
            onClick={handleCloseClick}
            type="button"
          >
            <BurgerCloseIcon />
          </button>
          <HeaderLinks />
          <HeaderAction city={city} />
        </div>
        <div className={styles.bg}></div>
      </div>
    </>
  );
}

function HeaderLinks() {
  return (
    <nav className={styles.nav}>
      <ul role="list">
        <li>
          <a className="link" href="#services">
            Услуги
          </a>
        </li>
        <li>
          <a className="link" href="#feedbacks">
            Отзывы
          </a>
        </li>
        <li>
          <a className="link" href="#questions">
            Вопросы
          </a>
        </li>
        <li>
          <a className="link" href="#contacts">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
}

function HeaderAction({ city }: { city: City }) {
  return (
    <div className={styles.navAction}>
      <CitySelect className={styles.select} currentCity={city} />

      <a href="tel:89283108445" className="subtitle">
        8 (928) 310-84-45
      </a>
    </div>
  );
}
