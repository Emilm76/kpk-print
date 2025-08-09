'use client';
import { ButtonPrimary } from '@/ui/button/button-primary';
import { TelField } from '@/ui/input/tel-field';
import { TextField } from '@/ui/input/text-field';
import clsx from 'clsx';
import { FormEvent, useState } from 'react';
import styles from './form.module.scss';

// id чата -4868787592

const status = {
  wait: 'Заявка отправляется...',
  susses: 'Заявка успешно отправлена. Ожидайте ответа',
  error: 'Произошла ошибка сети при отправке заявки. Попробуйте позже',
  notComplete: 'Пожалуйста, заполните все поля полностью',
};

export function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string | null;
    const tel = formData.get('tel') as string | null;

    if (!name || !tel || tel.length < 18) {
      console.log('notComplete');
      setMessage(status.notComplete);
      return;
    }

    setIsLoading(true);
    setMessage(status.wait);

    const message = `<b>Новая заявка</b>\n${name ? `Имя: ${name}\n` : ''}${
      tel ? `Телефон: <b>${tel}</b>` : ''
    }`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot8264753568:AAGBCMmlaiOUPBmlANmf4uMIzc8HP65Oycw/sendMessage?parse_mode=html`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: '-4868787592',
            text: message,
          }),
        }
      );

      setIsLoading(false);

      if (response.ok) {
        setMessage(status.susses);
      } else {
        console.error(response.statusText);
        setMessage(status.error);
      }
    } catch (error) {
      console.error(error);
      setMessage(status.error);
    }
  }

  return (
    <form method="POST" onSubmit={handleSubmit} className={styles.form}>
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
      <ButtonPrimary type="submit" disabled={isLoading}>
        Отправить
      </ButtonPrimary>

      <p
        className={clsx(
          styles.message,
          message === status.wait && styles.wait,
          message === status.susses && styles.susses,
          message === status.error && styles.error,
          'info'
        )}
      >
        {message}
      </p>
    </form>
  );
}
