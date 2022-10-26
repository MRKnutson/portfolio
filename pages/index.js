import Head from "next/head";
import Image from "next/image";
import NavBar from "./components/Navbar";
import styles from "../styles/Home.module.css";
import profilePic from "../public/images/profile_picture.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Michael Knutson</title>
        <meta
          name="portfolio"
          content="General portfolio site for Michael Knutson."
        />
      </Head>

      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Michael Knutson</h1>
        <div className={styles.gridContainer}>
          <div>
            <Image
              className={styles.profile}
              src={profilePic}
              alt="Profile Picture"
              width={225}
              height={300}
            />
          </div>

          <div className={styles.grid}>
            <p className={styles.description}>
              Hi! I'm a US based full-stack engineer focused on crafting clean
              and efficient software for the end user. I am passionate about
              learning and love tinkering with various languages and frameworks.
              I love seeing a good project come together!
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
