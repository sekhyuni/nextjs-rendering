import Link from 'next/link';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.navigation}>
        <Link href="/csr">CSR 페이지</Link>
        <a href="/ssr">SSR 페이지</a>
        <a href="/ssg">SSG 페이지</a>
        <a href="/ssg">ISR 페이지</a>
      </nav>
    </main>
  );
}
