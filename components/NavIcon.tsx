type NavIconProps = {
  className?: string;
};

export default function NavIcon({ className }: NavIconProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.8284 10.9999L13.1924 5.63589L11.7782 4.22168L4 11.9999L11.7782 19.778L13.1924 18.3638L7.8284 12.9999H20V10.9999H7.8284Z" />
    </svg>
  );
}
