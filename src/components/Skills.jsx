import React from "react";
import styles from "../styles";
import { FrontEndSkills, BackEndSkills, Tools } from "../constants";

const Skills = () => {
  return (
    <section id="skills" className="text-secondary p-10 flex justify-center">
      <section className="w-full md:w-[1020px] text-center">
        <h2 className={`${styles.heading2}`}>Skills.</h2>
        <hr className="w-48 h-1 mx-auto my-4 bg-primary border-0 rounded md:my-5 \" />
        <section
          className={`${styles.flexCenter} flex-col md:flex-row md:items-start gap-[2.56rem]`}
        >
          <section className="md:basis-1/3 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-[1.75rem] pt-[1.21rem] pb-[2.61rem] px-[1.26rem] md:px-[2.06rem]">
            <h3 className={`${styles.heading3}`}>Frontend</h3>
            <hr className="w-72 md:w-48 h-1 mx-auto bg-primary border-0 rounded mb-3 \" />
            <ul className="py-1">
              {FrontEndSkills.map((skill) => (
                <li
                  key={skill.id}
                  className={`${styles.paragraph} flex flex-col items-center`}
                >
                  <img
                    src={skill.icon}
                    alt={skill.id}
                    className="w-[36px] h-[36px]"
                  />
                  <span className="hover:text-primary">{skill.name}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="md:basis-1/3 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-[1.75rem] pt-[1.21rem] pb-[2.61rem] px-[1.26rem] md:px-[2.06rem]">
            <h3 className={`${styles.heading3}`}>Backend</h3>
            <hr className="w-72 md:w-48 h-1 mx-auto bg-primary border-0 rounded mb-3 \" />
            <ul className="py-1">
              {BackEndSkills.map((skill) => (
                <li
                  key={skill.id}
                  className={`${styles.paragraph} flex flex-col items-center`}
                >
                  <img
                    src={skill.icon}
                    alt={skill.id}
                    className="w-[36px] h-[36px]"
                  />
                  <span className="hover:text-primary">{skill.name}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="md:basis-1/3 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-[1.75rem] pt-[1.21rem] pb-[2.61rem] px-[1.26rem] md:px-[2.06rem]">
            <h3 className={`${styles.heading3}`}>Tools</h3>
            <hr className="w-72 md:w-48 h-1 mx-auto bg-primary border-0 rounded mb-3 \" />
            <ul className="py-1">
              {Tools.map((skill) => (
                <li
                  key={skill.id}
                  className={`${styles.paragraph} flex flex-col items-center`}
                >
                  <img
                    src={skill.icon}
                    alt={skill.id}
                    className="w-[36px] h-[36px]"
                  />
                  <span className="hover:text-primary">{skill.name}</span>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Skills;
