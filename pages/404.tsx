import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__inner">
        <h2>404</h2>
        <p>This page could not be found.</p>
        <Link href="/" className="not-found__link">
          Asosiy sahifaga o`tish
        </Link>
      </div>
    </section>
  );
}
