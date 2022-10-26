import NavBar from "./components/Navbar";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>A bunch of stuff about me</h1>
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
      </main>
    </div>
  );
};

export default About;