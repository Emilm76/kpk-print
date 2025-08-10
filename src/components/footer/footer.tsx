import { TelegramIcon } from '@/images/icons/telegram';
import { WhatsappIcon } from '@/images/icons/whatsapp';
import clsx from 'clsx';
import styles from './footer.module.scss';

export function Footer() {
  return (
    <footer id="contacts" className="section-pt">
      <div className="container">
        <h2 className={clsx(styles.title, 'h3 h-pb-sm')}>Контактные данные</h2>

        <div className={styles.content}>
          <h3 className="subtitle">
            г. Ставрополь, ул. Пирогова, 68А, офис 24
          </h3>
          <div className={styles.right}>
            <div className={styles.text}>
              <a href="tel:89283108445" className="subtitle">
                8 (928) 310-84-45
              </a>
              <a href="mailto:kpk-print@mail.ru" className="subtitle">
                kpk-print@mail.ru
              </a>
            </div>
            <div className={styles.social}>
              <a
                href="https://t.me/kpk_print"
                target="_blank"
                aria-label="Перейти в Telegram КПК-Принт"
              >
                <TelegramIcon />
              </a>
              <a
                href="https://wa.me/79283108445"
                target="_blank"
                aria-label="Перейти в Whatsapp КПК-Принт"
              >
                <WhatsappIcon />
              </a>
            </div>
          </div>
        </div>

        <div id="map"></div>
      </div>

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
