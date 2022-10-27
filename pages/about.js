import Head from "next/head";
import NavBar from "./components/Navbar";
import styles from "../styles/About.module.css";
import Image from "next/image";
import moab from "../public/images/IMG_8463.png";
import heitman from "../public/images/IMG_3221.png";
import crab from "../public/images/IMG_3170.png";
import pillarSnow from "../public/images/IMG_2938.png";
import Footer from "./components/Footer";

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About me</title>
        <meta name="About" content="About me and my background." />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>A little about me</h1>
        <div>
          <p className={styles.paragraph}>
            Growing up in Alaska I was enthralled with all things outdoors. Once
            I began my higher education I had to select a focus and studying
            biology seemed like a natural choice for me. After obtaining a BS in
            Biological Sciences and an MS in Fisheries I worked in Fisheries
            Management with the State of Alaska for almost 10 years. At that
            point I realized I was spending more time behind a computer than
            working out in nature and decided that I really enjoyed working on
            computers. I redirected my career and began to learn software
            engineering. I have been on the constant journey of learning code
            ever since. I have learned that I have a tendency towards being a
            polygot and love working in new languages and continuing to develop
            different skills and learn new ways of completing tasks.
          </p>
          <p className={styles.paragraph}>
            My hobbies still involve playing in the Alaskan outdoors. These days
            I spend a lot of time hiking, camping, and exploring with my two
            dogs. Once the snow starts flying I try to get out on my snowboard.
            When I can't get outside I like to tinker with my guitar or dabble
            with one of my many other hobbies.
          </p>
        </div>
        <div className={styles.photoContainer}>
          <Image
            src={pillarSnow}
            alt="winter dog hike"
            width={333}
            height={250}
          />
          <Image
            src={moab}
            alt="hiking in slot canyon"
            width={176}
            height={250}
          />
          <Image src={crab} alt="holding king crab" width={333} height={250} />
          <Image src={heitman} alt="summer dog hike" width={333} height={250} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
