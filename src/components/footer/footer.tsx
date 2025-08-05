import clsx from 'clsx';
import styles from './footer.module.scss';

export function Footer() {
  return (
    <footer className={clsx(styles.footer, 'section-pt')}>
      <div className="container"></div>

      <div className={clsx(styles.bottom, 'info')}>
        <div className={clsx(styles.bottomContainer, 'container')}>
          <span>ИП Карпова Ольга Александровна</span>
          <span>ИНН 260707502721</span>
          <span>ОГРНИП 316265100142248</span>
        </div>
      </div>
    </footer>
  );
}
