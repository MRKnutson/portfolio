import styles from "../../styles/Footer.module.css";
import Image from "next/image";
import github from "../../public/images/github_blue.png"
import linkedIn from "../../public/images/linkedin.png"
import { useState } from "react";

const Footer = () => {
  const [hovergh, setHovergh] = useState(false)
  const [hoverli, setHoverli] = useState(false)

  return(
    <footer className={styles.footer}>
        <a href="/Knutson_Resume_2022.pdf" download >
          <span className={styles.download}>Download Resume</span>
        </a>
        <a href="/Knutson_Resume_2022.pdf"  onMouseOver={()=>setHovergh(true)} onMouseOut={()=>setHovergh(false)}>
          <span>
            <Image src={github} height={hovergh ? 40 : 30} width={hovergh ? 40 : 30} />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/michaelrknutson/"  onMouseOver={()=>setHoverli(true)} onMouseOut={()=>setHoverli(false)}>
          <span>
            <Image src={linkedIn} height={hoverli ? 40 : 30} width={hoverli ? 40 : 30} />
          </span>
        </a>
      </footer>
  )
};

export default Footer;