import clsx from 'clsx';
import { Form } from './form/form';
import styles from './fos.module.scss';

export function FosSection() {
  return (
    <section className="section-pt">
      <div className={styles.wrapper}>
        <div className={clsx(styles.container, 'container')}>
          <div className={styles.text}>
            <h2 className="h2 h-pb-sm">Оставьте заявку</h2>
            <p>
              Менеджер свяжется с вами, проконсультирует и поможет сделать
              заказ.
            </p>
          </div>

          <Form />
        </div>
      </div>
    </section>
  );
}
