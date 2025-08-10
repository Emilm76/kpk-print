'use client';
import { Form } from '@/components/form/form';
import { CloseCrossIcon } from '@/images/icons/close-cross';
import clsx from 'clsx';
import { Dispatch, MouseEvent, SetStateAction, useEffect } from 'react';
import styles from './modal.module.scss';

export function Modal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('locked');
    } else {
      document.body.classList.remove('locked');
    }

    return () => {
      document.body.classList.remove('locked');
    };
  }, [isOpen]);

  function handleModalClick(e: MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  }

  return (
    <>
      <div className={clsx(styles.shadow, isOpen && styles.open)}></div>
      <div
        className={clsx(styles.modal, isOpen && styles.open)}
        onClick={handleModalClick}
      >
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <button
              className={styles.buttonClose}
              onClick={() => setIsOpen(false)}
              type="button"
              aria-label="Закрыть окно"
            >
              <CloseCrossIcon />
            </button>
            <div className="h3 h-pb-sm">
              Оставьте контактные данные, менеджер свяжется с вами
            </div>

            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
