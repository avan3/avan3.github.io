import React from "react";
import styles from "../styles";
import { FaAngular, FaHtml5, FaReact, FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";

const FrontEndSkills = [
  {
    id: "angular",
    name: "Angular",
    icon: FaAngular,
  },
  {
    id: "react",
    name: "React",
    icon: FaReact,
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    id: "html",
    name: "HTML",
    icon: FaHtml5,
  },
  {
    id: "css",
    name: "CSS",
    icon: FaCss3Alt,
  },
];

const BackEndSkills = [
  {
    id: "sb",
    name: "Spring Boot",
  },
  {
    id: "java",
    name: "Java",
  },
  {
    id: "junit",
    name: "Junit",
  },
  {
    id: "nodejs",
    name: "Node JS",
  },
  {
    id: "expressjs",
    name: "ExpressJS",
  },
  {
    id: "psql",
    name: "PostgreSQL",
  },
  {
    id: "mysql",
    name: "MySQL",
  },
];

const Tools = [
  {
    id: "vsc",
    name: "VS Code",
  },
  {
    id: "intellij",
    name: "IntelliJ",
  },
  {
    id: "github",
    name: "GitHub",
  },
  {
    id: "jira",
    name: "Jira",
  },
  {
    id: "jenkins",
    name: "Jenkins",
  },
  {
    id: "azure",
    name: "Microsoft Azure",
  },
  {
    id: "bash",
    name: "Bash",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="text-slate-900 p-10 flex justify-center">
      <section className="w-full md:w-[1020px] text-center">
        <h2 className={`${styles.heading2}`}>Skills.</h2>
        <hr className="w-48 h-1 mx-auto my-4 bg-orange-600 border-0 rounded md:my-5 \" />
        <section
          className={`${styles.flexCenter} flex-col md:flex-row md:items-start`}
        >
          <section className="md:basis-1/3">
            <h3 className={`${styles.heading3}`}>Frontend</h3>
            <hr className="w-72 md:w-48 h-1 mx-auto bg-orange-600 border-0 rounded mb-3 \" />
            <ul className="py-1">
              {FrontEndSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <li
                    key={skill.id}
                    className={`${styles.paragraph} flex flex-col items-center`}
                  >
                    {Icon ? (
                      <Icon className={`w-[36px] h-[36px] text-${skill.id}`} />
                    ) : (
                      ""
                    )}
                    <span className="hover:text-orange-600">{skill.name}</span>
                  </li>
                );
              })}
            </ul>
          </section>
          <section className="md:basis-1/3">
            <h3 className={`${styles.heading3}`}>Backend</h3>
            <hr className="w-72 md:w-48 h-1 mx-auto bg-orange-600 border-0 rounded mb-3 \" />
            <ul className="py-1">
              {BackEndSkills.map((skill) => (
                <li
                  key={skill.id}
                  className={`${styles.paragraph} hover:text-orange-600`}
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </section>
          <section className="md:basis-1/3">
            <h3 className={`${styles.heading3}`}>Tools</h3>
            <hr className="w-72 md:w-48 h-1 mx-auto bg-orange-600 border-0 rounded mb-3 \" />
            <ul className="py-1">
              {Tools.map((skill) => (
                <li
                  key={skill.id}
                  className={`${styles.paragraph} hover:text-orange-600`}
                >
                  {skill.name}
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
