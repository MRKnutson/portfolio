import Image from "next/image";
import Head from "next/head";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import vocal from "../public/images/vocal.png";
import styles from "../styles/Projects.module.css";
const Projects = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta
          name="Projects"
          content="Personal projects that I have developed."
        />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.projectContainer}>
          <h3 className={styles.projectTitle}>Vocal Audio Journal</h3>
          <a
            href="http://vocaljournal.herokuapp.com/landing"
            className={styles.screenshotLink}
          >
            <Image
              src={vocal}
              height={400}
              width={500}
              className={styles.screenshot}
            />
          </a>
          <p className={styles.projectDescription}>
            This project was developed as a capstone project by students at
            DevPoint Labs. It uses React, Ruby on Rails, and PostgreSQL, along
            with various additional libraries such as React Bootstrap.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
