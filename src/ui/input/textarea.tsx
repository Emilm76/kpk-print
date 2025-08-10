'use client';
import clsx from 'clsx';
import { ChangeEvent, TextareaHTMLAttributes, useRef, useState } from 'react';
import styles from './textarea.module.scss';

export function Textarea({
  className,
  ...props
}: {
  className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [filled, setFilled] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFilled(e.target.value.length > 0);
  };

  return (
    <textarea
      {...props}
      className={clsx(styles.input, className, filled && styles.fill)}
      onChange={handleChange}
      ref={inputRef}
    ></textarea>
  );
}
