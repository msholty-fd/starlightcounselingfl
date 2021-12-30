import Head from "next/head";
import styles from "../styles/Home.module.css";

type Props = {
  children: React.ReactChild;
};

export function Layout({ children }: Props) {
  return (
    <div>
      <Head>
        <title>Starlight Counseling</title>
        <meta name="description" content="Generated by create next app" />
        <script type="text/javascript">
          {`bg = new Image(); bg.src="http://starlightcounselingfl.com/beach.jpeg"`}
          ;
        </script>
      </Head>
      <header className={styles.header}>
        <span className={styles.headerText}>
          Starlight Counseling and Wellness
        </span>
        <ul className={styles.menu}>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/about">About Amanda</a>
          </li>
        </ul>
      </header>

      {children}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Coffee
        </a>
      </footer>
    </div>
  );
}
