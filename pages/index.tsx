import Image from "next/image";
import styles from "./index.module.css";

const primary1 = "#648dae";

function Home() {
  return (
    <span>
      {/* <Image src="/beach.jpeg" layout="fill" className={styles.background} /> */}
      <h1 className={styles.title}>Welcome to Starlight Counseling</h1>
      <p className={styles.description}>This site is under construction.</p>
    </span>
  );
}

export default Home;
