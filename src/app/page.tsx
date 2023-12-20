import Link from 'next/link';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.navigation}>
        <Link href="/csr">CSR 페이지</Link>
        <Link href="/ssr">SSR 페이지</Link>
        <Link href="/ssg">SSG 페이지</Link>
      </nav>
      <nav className={styles.navigation}>
        <Link href="/basic">기본 페이지</Link>
        <Link href="/composition">Composition 페이지</Link>
      </nav>
    </main>
  );
}
