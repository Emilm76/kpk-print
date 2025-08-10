'use client';
import clsx from 'clsx';
import { ChangeEvent, InputHTMLAttributes, useRef, useState } from 'react';
import styles from './text-field.module.scss';

export function TextField({
  className,
  ...props
}: {
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [filled, setFilled] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilled(e.target.value.length > 0);
  };

  return (
    <input
      {...props}
      className={clsx(styles.input, className, filled && styles.fill)}
      onChange={handleChange}
      ref={inputRef}
    />
  );
}
