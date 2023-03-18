import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5"; import img1
from './assets/images/ds1.jpg';
import  img2  from './assets/images/ds2.jpg';
import  img3  from './assets/images/ds3.jpg';
import  img4  from './assets/images/ds4.jpg';
import  img5  from './assets/images/ds5.jpg';
import img6 from './assets/images/ds6.jpg';
import img7 from './assets/images/ds7.jpg';
import img8 from './assets/images/ds8.jpg';
import img9 from './assets/images/ds9.png';

import { GrCertificate,GrBook } from 'react-icons/gr';
import { IoIosSchool } from 'react-icons/io';

export const Experience = [
    {
        id: 1,
        date: "2022 - present",
        iconsSrc: <IoCodeWorking className="text-white"/>,
        title: "Intern",
        location: "Chennai,India",
        description:
          "Full stack web-developer at Virtusa Private Ltd.",
      },
      {
        id: 2,
        date: "2019 - 2023",
        iconsSrc: <IoIosSchool  className="text-white"/>,
        title: "UG-Degree",
        location: "Chennai,India",
        description:
          "Vel Tech Multi Tech Dr.Rangarajan Dr.sakunthala Engineering College",
      },
      {
        id: 3,
        date: "2017 - 2019",
        iconsSrc: <GrCertificate className="bg-white" />,
        title: "High School",
        location: "Chennai,India",
        description:
          "Vijayantha model Higher Secondary School",
      },
      {
        id: 4,
        date: "2016 - 2017",
        iconsSrc: <GrBook className="bg-white" />,
        title: "School",
        location: "Chennai,India",
        description:
          "Nabi crescent maticultion School",
      },
]


export const Projects = [
    {
      id: 1,
      name: "Job Recommender Application",
      imageSrc: img1,
      techs: "Tailwind CSS, Flask, Firebase",
      github: "https://github.com/prakash-aathi/Skill-Job-Recommender-Application",
      live:"https://job-app-y5a9.onrender.com/"
    },
    {
      id: 2,
      name: "Flames App",
      imageSrc: img2,
      techs: "Tailwind CSS, React Js",
      github: "https://github.com/prakash-aathi/flames",
      live:"https://prakash-aathi.github.io/flames/"
    },
    {
      id: 3,
      name: "Meme Creator App",
      imageSrc: img3,
      techs: "Tailwind CSS, React Js, API",
      github: "https://github.com/prakash-aathi/meme-creator-app",
      live:"https://prakash-aathi.github.io/meme-creator-app/"
    },
    {
      id: 4,
      name: "Modern Landing Page",
      imageSrc: img4,
      techs: "SASS, Vanilla Js",
      github: "https://github.com/prakash-aathi/Landing-Page",
      live:"https://prakash-aathi.github.io/Landing-Page/"
  },
  {
    id: 8,
    name: "Task Manage app backend",
    imageSrc: img8,
    techs: "Sprig Boot,Hiberanete,MySql",
    github: "https://github.com/prakash-aathi/Task-Management-backend",
  }, {
    id: 9,
    name: "Phone Book app backend",
    imageSrc: img9,
    techs: "Sprig Boot,Hiberanete,MySql",
    github: "https://github.com/prakash-aathi/Task-Management-backend",
  },
    {
      id: 5,
      name: "Simple modern calci",
      imageSrc: img5,
      techs: "Tailwind CSS, Vanilla Js",
      github: "https://github.com/prakash-aathi/Simple-Modern-Calci",
      live:"https://prakash-aathi.github.io/Simple-Modern-Calci/"
    },
    {
      id: 6,
      name: "Stop Watch",
      imageSrc: img6,
      techs: "Tailwind CSS, React Js",
      github: "https://github.com/prakash-aathi/stop-watch",
      live:"https://csb-thff3i.netlify.app/"
  },
  {
    id: 7,
    name: "Quiz App",
    imageSrc: img7,
    techs: "Tailwind CSS, Vanilla Js",
    github: "https://github.com/prakash-aathi/Quiz-app",
    live:"https://prakash-aathi.github.io/Quiz-app/"
  },
 
];
  

export const SocialLinks = [
    {
      id: 1,
      iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
      name: "GitHub",
      link: "https://github.com/prakash-aathi",
    },
    {
      id: 2,
      iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
      name: "YouTube",
      link: "https://www.youtube.com/channel/UCJVqt6Q9ZOu0qnKenDkps2g",
    },
    {
      id: 3,
      iconSrc: (
        <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
      ),
      name: "Twitter",
      link: "https://twitter.com/Prakash66561050",
    },
    {
      id: 4,
      iconSrc: (
        <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
      ),
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/prakash971/",
    },
    {
      id: 5,
      iconSrc: (
        <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
      ),
      name: "Whatsapp",
      link: "https://web.whatsapp.com/send?phone=+919710838457",
    },
  ];
  