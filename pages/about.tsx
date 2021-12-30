import styles from "./about.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <span>
        <img
          src="http://starlightcounselingfl.com/me.jpeg"
          className={styles.me}
        />
      </span>
      <span className={styles.header}>
        <h1>About Amanda</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </span>
    </main>
  );
}
