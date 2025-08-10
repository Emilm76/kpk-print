'use client';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import { IMaskInput } from 'react-imask';
import styles from './text-field.module.scss';

interface IMaskProps {
  type?: string;
  name?: string;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
  required?: boolean;
}

export function TelField({
  className,
  ...props
}: { className?: string } & IMaskProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [filled, setFilled] = useState(false);

  const handleChange = (value: string) => {
    setFilled(value.length > 0);
  };

  return (
    <IMaskInput
      {...props}
      className={clsx(styles.input, className, filled && styles.fill)}
      mask="+{7} (000) 000-00-00"
      inputRef={inputRef}
      onAccept={handleChange}
    />
  );
}
