import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
         <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I &apos;m Ishika Dutta</h1>
                <p className={styles.description}>Engineering Student and Aspiring Software Developer. To know more...</p>
                <a href="mailto:i.ishikadutta@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>

            <img src={getImageUrl("hero/heroImage.png")} alt="hero"  className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
}
