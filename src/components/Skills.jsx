import React from "react";
import styles from "../styles";
import java from "../assets/java.svg";
import react from "../assets/react.svg";
import angular from "../assets/angular.svg";
import javascript from "../assets/javascript.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import springboot from "../assets/springboot.svg";
import nodejs from "../assets/nodejs.svg";
import postgresql from "../assets/postgresql.svg";
import mysql from "../assets/mysql.svg";
import vscode from "../assets/vscode.svg";
import intellij from "../assets/intellij.svg";
import github from "../assets/github.svg";
import jira from "../assets/jira.svg";
import azure from "../assets/azure.svg";

const FrontEndSkills = [
  {
    id: "angular",
    name: "Angular",
    icon: angular,
  },
  {
    id: "react",
    name: "React",
    icon: react,
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: javascript,
  },
  {
    id: "html",
    name: "HTML",
    icon: html,
  },
  {
    id: "css",
    name: "CSS",
    icon: css,
  },
];

const BackEndSkills = [
  {
    id: "springboot",
    name: "Spring Boot",
    icon: springboot,
  },
  {
    id: "java",
    name: "Java",
    icon: java,
  },
  {
    id: "nodejs",
    name: "Node JS",
    icon: nodejs,
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: mysql,
  },
  {
    id: "psql",
    name: "PostgreSQL",
    icon: postgresql,
  },
];

const Tools = [
  {
    id: "vsc",
    name: "VS Code",
    icon: vscode,
  },
  {
    id: "intellij",
    name: "IntelliJ",
    icon: intellij,
  },
  {
    id: "github",
    name: "GitHub",
    icon: github,
  },
  {
    id: "jira",
    name: "Jira",
    icon: jira,
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    icon: azure,
  },
];

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
