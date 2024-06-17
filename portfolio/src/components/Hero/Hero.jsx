import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section>
            <div>
                <h1>Hi, I &apos;m Ishika Dutta</h1>
                <p>Engineering Student and Aspiring Software Developer. To know more...</p>
                <a href="mailto:i.ishikadutta@gmail.com">Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="hero" />
        </section>
    );
}
