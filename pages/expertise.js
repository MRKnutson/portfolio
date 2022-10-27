import Head from "next/head";
import NavBar from "./components/Navbar";
import styles from "../styles/Expertise.module.css";
import Image from "next/image";
import reactLogo from "../public/images/react.png";
import next from "../public/images/nextJS.png";
import js from "../public/images/JS.png";
import html from "../public/images/html.png";
import css from "../public/images/css.png";
import elixir from "../public/images/elixir.png";
import docker from "../public/images/docker.png";
import github from "../public/images/github.png";
import gitlab from "../public/images/gitlab.png";
import gql from "../public/images/graphQL.png";
import jira from "../public/images/Jira.png";
import postgreSQL from "../public/images/postgreSQL.png";
import rails from "../public/images/rails.png";
import ruby from "../public/images/ruby.png";
import vsc from "../public/images/VScode.png";
import Footer from "./components/Footer";

const Expertise = () => {
  return (
    <div>
      <Head>
        <title>Skills and Expertise</title>
        <meta name="Expertise" content="Technology I have expertise with." />
      </Head>
      <NavBar />
      <main>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Frontend</h3>
          <div className={styles.sectionContent}>
            <div className={styles.skillContainer}>
              <p className={styles.skill}>React</p>
              <Image src={reactLogo} alt="React logo" width={90} height={83} />
            </div>
            <div className={styles.skillContainer}>
              <p className={styles.skill}>nextJS</p>
              <Image src={next} alt="nextJS logo" width={90} height={83} />
            </div>
            <div className={styles.skillContainer}>
              <p className={styles.skill}>React Native</p>
              <Image src={reactLogo} alt="React logo" width={90} height={83} />
            </div>
            <div className={styles.skillContainer}>
              <p className={styles.skill}>Javascript</p>
              <Image src={js} alt="Javascript logo" width={90} height={83} />
            </div>
            <div className={styles.skillContainer}>
              <p className={styles.skill}>HTML</p>
              <Image src={html} alt="HTML logo" width={90} height={83} />
            </div>
            <div className={styles.skillContainer}>
              <p className={styles.skill}>CSS</p>
              <Image src={css} alt="HTML logo" width={90} height={83} />
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Backend</h3>
          <div className={styles.sectionContent}>
            <div className={styles.skillContainer}>
              <p className={styles.skill}>Elixir</p>
              <Image src={elixir} alt="Elixir logo" width={90} height={83} />
            </div>
            <div className={styles.skillContainer}>
              <p className={styles.skill}>PostgreSQL</p>
              <Image
                src={postgreSQL}
                alt="postgreSQL logo"
                width={90}
                height={83}
              />
            </div>
            <div className={styles.skillContainer}>
              <p className={styles.skill}>Ruby</p>
              <Image src={ruby} alt="Ruby logo" width={90} height={83} />
            </div>
            <div className={styles.skillContainer}>
              <p className={styles.skill}>Rails</p>
              <Image src={rails} alt="Rails logo" width={90} height={83} />
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Supporting skills</h3>
          <div className={styles.sectionContent}>
            <div className={styles.skillContainer}>
              <p className={styles.skill}>GraphQL</p>
              <Image src={gql} alt="GraphQL logo" width={90} height={83} />
            </div>
            <div className={styles.skillContainer}>
              <p className={styles.skill}>Docker</p>
              <Image src={docker} alt="docker logo" width={90} height={83} />
            </div>
            <div className={styles.skillContainer}>
              <p className={styles.skill}>Jira</p>
              <Image src={jira} alt="Jira logo" width={90} height={83} />
            </div>
            <div className={styles.skillContainer}>
              <p className={styles.skill}>GitHub</p>
              <Image src={github} alt="GitHub logo" width={90} height={83} />
            </div>
            <div className={styles.skillContainer}>
              <p className={styles.skill}>GitLab</p>
              <Image src={gitlab} alt="Gitlab logo" width={90} height={83} />
            </div>
            <div className={styles.skillContainer}>
              <p className={styles.skill}>VScode</p>
              <Image src={vsc} alt="VScode logo" width={90} height={83} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Expertise;
