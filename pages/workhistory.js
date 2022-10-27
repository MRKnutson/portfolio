import Head from "next/head";
import NavBar from "./components/Navbar";
import styles from "../styles/WorkHistory.module.css";
import Image from "next/image";
import divvy from "../public/images/divvy-logo.png";
import adfg from "../public/images/ADFG.png";
import Footer from "./components/Footer";

const WorkHistory = () => {
  return (
    <div>
      <Head>
        <title>Skills and Expertise</title>
        <meta
          name="Work History"
          content="Current and previous work experience"
        />
      </Head>
      <NavBar />
      <main>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.companyTitle}>Divvy / Bill</h3>
            <Image src={divvy} alt="Divvy company logo" />
          </div>
          <h5 className={styles.jobTitle}>Software Engineer</h5>
          <div className={styles.sectionContent}>
            <p className={styles.jobDescription}>
              Worked as a full-stack software engineer intern for Divvy as it
              transitioned through acquisition by Bill. Focused on the Divvy
              software and prepared the software for integration with Bill
              accounting software.
            </p>
            <ul className={styles.jobList}>
              <li className={styles.jobDuty}>
                Wrote customer facing production code using Javascript, React,
                React Native, Elixir and GraphQL.
              </li>
              <li className={styles.jobDuty}>
                Built instructional components leading to a 10% increase in
                number of customer payments that include correct account
                information.
              </li>
              <li className={styles.jobDuty}>
                Refactored mobile components for readability and adherance to
                the DRY principle.
              </li>
              <li className={styles.jobDuty}>
                Refactored functions to eliminate n + 1 queries by using
                Absinthe and Ecto to batch function calls.
              </li>
              <li className={styles.jobDuty}>
                Created migrations, schemas, resolvers, and changesets for bank
                account information and wrote mutations for manually syncing
                integrated accounts.
              </li>
              <li className={styles.jobDuty}>
                Wrote test functions using Jest and Elixir to ensure test
                coverage met or exceeded Divvy standards and identified areas of
                application where testing needed to be increased.
              </li>
              <li className={styles.jobDuty}>
                Collaborated with agile scrum team contributing to continuous
                integration continuous development workflow (CICD).
              </li>
              <li className={styles.jobDuty}>
                Performed code reviews to improve code function, reliability,
                and adherance to Divvy web standards.
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.companyTitle}>
              Alaska Department of Fish and Game
            </h3>
            <Image
              src={adfg}
              alt="Alaska department of fish and game logo"
              height={60}
              width={75}
            />
          </div>
          <h5 className={styles.jobTitle}>Fisheries Biologist</h5>
          <div className={styles.sectionContent}>
            <p className={styles.jobDescription}>
              Monitored, analyzed, and reported stock sizes for various marine
              commercial fish species. Coordinated marine surveys and survey
              equipment. Managed crew of 5-7 at sea during field collections.
            </p>
            <ul className={styles.jobList}>
              <li className={styles.jobDuty}>
                Visualized, designed, deployed, and troubleshot novel data
                collection software programs that led to a 50% decline in data
                entry errors and data processing time.
              </li>
              <li className={styles.jobDuty}>
                Monitored software functionality in deployed environments and
                tracked user experiences to direct future development.
              </li>
              <li className={styles.jobDuty}>
                Designed and implemented data analysis tools using the R
                framework connected to a PostgreSQL database providing
                biologists with fast and reliable data access.
              </li>
              <li className={styles.jobDuty}>
                Prepared, analyzed, and presented stock status data to managers.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WorkHistory;
