'use client';
import LogoImg from '@/images/icons/logo-2-crop.jpg';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import styles from './header.module.scss';

export function Header() {
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
          <HeaderAction />

          <button
            className={styles.burgerOpenBtn}
            onClick={handleOpenClick}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
            >
              <circle cx="6" cy="6" r="3" fill="currentColor" />
              <circle cx="6" cy="16" r="3" fill="currentColor" />
              <circle cx="6" cy="26" r="3" fill="currentColor" />
              <circle cx="16" cy="6" r="3" fill="currentColor" />
              <circle cx="16" cy="16" r="3" fill="currentColor" />
              <circle cx="16" cy="26" r="3" fill="currentColor" />
              <circle cx="26" cy="6" r="3" fill="currentColor" />
              <circle cx="26" cy="16" r="3" fill="currentColor" />
              <circle cx="26" cy="26" r="3" fill="currentColor" />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
            >
              <circle cx="6" cy="6" r="3" fill="currentColor" />
              <circle cx="6" cy="26" r="3" fill="currentColor" />
              <circle cx="16" cy="16" r="3" fill="currentColor" />
              <circle cx="26" cy="6" r="3" fill="currentColor" />
              <circle cx="26" cy="26" r="3" fill="currentColor" />
            </svg>
          </button>
          <HeaderLinks />
          <HeaderAction />
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

function HeaderAction() {
  return (
    <div className={styles.navAction}>
      <button className="" type="button">
        Ставрополь
      </button>
      <a href="tel:89283108445" className="subtitle">
        8 (928) 310-84-45
      </a>
    </div>
  );
}
