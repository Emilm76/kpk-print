import { CITIES, City } from '@/app/constants';
import { ArrowDown } from '@/images/icons/arrow-down';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import styles from './city-select.module.scss';

export function CitySelect({
  currentCity,
  className,
}: {
  currentCity: City;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(styles.wrapper, className, isOpen && styles.open)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={styles.title}>
        <span>{currentCity.name}</span>
        <ArrowDown className={styles.arrow} />
      </div>

      <div className={styles.list}>
        <ul role="list">
          {CITIES.map((c) => (
            <li
              className={clsx(currentCity.url === c.url && styles.current)}
              key={c.url}
            >
              <Link href={c.url}>{c.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
