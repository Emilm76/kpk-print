import clsx from 'clsx';
import { UseEmblaCarouselType } from 'embla-carousel-react';
import { DotButton, useDotButton } from './embla-dot-button';

export function EmblaPagination({
  emblaApi,
  className,
}: {
  emblaApi: UseEmblaCarouselType;
  className?: string;
}) {
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className={clsx(className, 'pagination')}>
      {scrollSnaps.map((_, index) => (
        <DotButton
          key={index}
          onClick={() => onDotButtonClick(index)}
          className={'embla__dot'.concat(
            index === selectedIndex ? ' embla__dot--selected' : ''
          )}
        />
      ))}
    </div>
  );
}
