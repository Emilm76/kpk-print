import { ButtonPrimary } from '@/ui/button/button-primary';
import { TelField } from '@/ui/input/tel-field';
import { TextField } from '@/ui/input/text-field';
import styles from './form.module.scss';

export function Form() {
  return (
    <form className={styles.form}>
      <TextField
        type="text"
        name="name"
        placeholder="Ваше имя"
        autoComplete="off"
        required
      />
      <TelField
        type="tel"
        name="tel"
        placeholder="Номер телефона"
        autoComplete="off"
        required
      />
      <ButtonPrimary type="submit">Отправить</ButtonPrimary>
    </form>
  );
}
