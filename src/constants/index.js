import { FaPersonCircleQuestion } from "react-icons/fa6";
import { RiListCheck3, RiContactsBook2Line } from "react-icons/ri";
import { MdOutlineWorkOutline } from "react-icons/md";
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

export const navLinks = [
  {
    id: "about",
    title: "About",
    icon: FaPersonCircleQuestion,
  },
  {
    id: "skills",
    title: "Skills",
    icon: RiListCheck3,
  },
  {
    id: "work",
    title: "Work",
    icon: MdOutlineWorkOutline,
  },
  {
    id: "contact",
    title: "Contact",
    icon: RiContactsBook2Line,
  },
];

export const FrontEndSkills = [
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

export const BackEndSkills = [
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

export const Tools = [
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
