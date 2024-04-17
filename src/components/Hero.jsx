import styles from "../styles";
import { avan } from "../assets";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row sm:gap-x-12 h-[520px] sm:h-[720px] items-center m-10"
    >
      <section className={`flex flex-col ${styles.paddingY}`}>
        <h1
          className={`${styles.heading2} italic ss:text-[80px] text-[52px] text-secondary ss:leading-[100.8px] leading-[75px]`}
        >
          Andrew Van
        </h1>
        <p
          className={`font-noto_sans font-normal ${styles.paragraph} text-primary`}
        >
          Experienced Full-Stack Developer
        </p>
        <div className="mt-4">
          <ul className="flex items-center">
            <li className="mr-5 text-xs">
              <a
                className="block hover:text-primary"
                href="https://github.com/avan3"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="w-[24px] h-[24px] hover:text-primary text-secondary" />
              </a>
            </li>
            <li className="mr-5 text-xs">
              <a
                className="block hover:text-primary"
                href="https://www.linkedin.com/in/avan3/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="w-[24px] h-[24px] hover:text-primary text-secondary" />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-primary rounded-full">
        <img
          alt="Andrew Van"
          src={avan}
          className="z-10 border-white border rounded-full w-[260px]"
        />
      </section>
    </section>
  );
};

export default Hero;
