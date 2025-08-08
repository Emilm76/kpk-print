'use client';
import { Modal } from '@/components/modal/modal';
import BgImg from '@/images/m4.jpg';
import { ButtonText } from '@/ui/button/button-text';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './main.module.scss';

export function MainSection() {
  const section = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (document.documentElement.clientWidth < 768 && section.current) {
      section.current.style.height = `${window.innerHeight}px`;
    }
  }, []);

  return (
    <>
      <section className={styles.section} ref={section}>
        <Image className={styles.img} src={BgImg} alt="Напечатанные чертежи" />

        <div className={styles.wrapper}>
          <div className={clsx(styles.container, 'container')}>
            <div className={styles.content}>
              <h1 className="h1">
                Профессиональная печать чертежей и&nbsp;проектов
              </h1>
              <p>
                Доверьтесь нам, если вам нужна надежная и&nbsp;профессиональная
                печать в&nbsp;короткие сроки.
              </p>
              <ButtonText type="button" onClick={() => setIsModalOpen(true)}>
                СВЯЖИТЕСЬ И ПОЛУЧИТЕ РАСЧЕТ В ТЕЧЕНИЕ 10 МИНУТ
              </ButtonText>
            </div>
          </div>
        </div>
      </section>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}
