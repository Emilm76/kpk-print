import { ButtonPrimary } from '@/ui/button/button-primary';
import { TextField } from '@/ui/input/text-field';
import clsx from 'clsx';
import styles from './fos.module.scss';

export function FosSection() {
  return (
    <section className={clsx(styles.section, 'section-pt')}>
      <div className={clsx(styles.container, 'container')}>
        <div className={styles.text}>
          <h2 className="h2 h-pb">Оставьте заявку</h2>
          <p>
            Менеджер свяжется с вами, проконсультирует и поможет сделать заказ.
          </p>
        </div>

        <form className={styles.form}>
          <TextField
            type="text"
            name="name"
            placeholder="Ваше имя"
            autoComplete="off"
            required
          />
          <TextField
            type="tel"
            name="tel"
            placeholder="Номер телефона"
            autoComplete="off"
            required
          />
          <ButtonPrimary type="submit">Отправить</ButtonPrimary>
        </form>
      </div>
    </section>
  );
}
