import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import styles from './button-primary.module.scss';

export function ButtonPrimary({
  children,
  className,
  ...props
}: {
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={clsx(styles.button, className)}>
      {children}
    </button>
  );
}
