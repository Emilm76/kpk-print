import clsx from 'clsx';
import { EmblaCarouselType } from 'embla-carousel';
import { DotButton, useDotButton } from './embla-dot-button';

export function EmblaPagination({
  emblaApi,
  className,
}: {
  emblaApi: EmblaCarouselType | undefined;
  className?: string;
}) {
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className={clsx(className, 'pagination')}>
      {scrollSnaps.map((_, index) => (
        <DotButton
          onClick={() => onDotButtonClick(index)}
          className={clsx(
            'embla__dot',
            index === selectedIndex && 'embla__dot--selected'
          )}
          aria-label={clsx('Перейти к слайду', index + 1)}
          key={index}
        />
      ))}
    </div>
  );
}
