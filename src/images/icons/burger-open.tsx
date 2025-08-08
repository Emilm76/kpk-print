export function BurgerOpenIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
    >
      <circle cx="6" cy="6" r="3" fill="currentColor" />
      <circle cx="6" cy="16" r="3" fill="currentColor" />
      <circle cx="6" cy="26" r="3" fill="currentColor" />
      <circle cx="16" cy="6" r="3" fill="currentColor" />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
      <circle cx="16" cy="26" r="3" fill="currentColor" />
      <circle cx="26" cy="6" r="3" fill="currentColor" />
      <circle cx="26" cy="16" r="3" fill="currentColor" />
      <circle cx="26" cy="26" r="3" fill="currentColor" />
    </svg>
  );
}
