import nova from "../assets/nova.png";
import img1 from "../assets/img1.png";
import gym from "../assets/gym.png";
import imgcodex from "../assets/img-codex.png";
import portfolio from "../assets/portfolio.png";


export const profile = {
name: 'Mithun Halder',
title: 'Full Stack Developer',
location: 'Noida, India',
email: 'mithunhaldar7500@gmail.com',
phone: '+91 63995 19654',
about: `I build fast, accessible and beautiful web experiences using React, Node.js and cloud platforms. I love clean UI, elegant code and shipping products that people use.`,
}

export const skills = [
{name:'React', level:90},
{name:'Node.js', level:85},
{name:'TypeScript', level:70},
{name:'TailwindCSS', level:92},
{name:'Postgres', level:70},
]

export const projects = [
  {
    id: "proj-1",
    title: "Kartik Painter Service",
    desc: "AI powered resume builder and ATS optimizer",
    tags: ["React", "Tailwind", "Vite", "Node"],
    // Unsplash placeholder (unique per project)
    image: img1,
    link: "https://kartikpainterservice.github.io/kartikpainter/",
    repo: "https://github.com/kartikpainterservice/kartikpainter",
  },
  {
    id: "proj-2",
    title: "NovaByte Labs — Company Site",
    desc: "Marketing website and analytics dashboard",
    tags: ["React", "Tailwind", "Vite", "Node", "Express", "Firebase"],
    image: nova,
    link: "#",
    repo: "#",
  },
  {
    id: "proj-3",
    title: "FITNESS GYM — Template",
    desc: "Developer portfolio template built with React + Tailwind",
    tags: ["HTML5", "CSS3", "JS"],
    image: gym,
    link: "https://mithunhalder01.github.io/gym-web/",
    repo: "https://github.com/mithunhalder01/gym-web",
  },
  {
    id: "proj-4",
    title: "Portfolio - web",
    desc: "old portfolio manager with real-time sync and offline support",
    tags: ["HTML5", "CSS3", "Tailwind", "JS"],
    image: portfolio,
    link: "https://mithun-gic.github.io/my-portfolio/",
    repo: "#",
  },
  {
    id: "proj-5",
    title: "Landing — Product Launch",
    desc: "High-converting landing page using modern CSS and animations",
    tags: ["HTML", "CSS", "Tailwind"],
    image: imgcodex,
    link: "https://mithunhalder01.github.io/Codex/",
    repo: "https://github.com/mithunhalder01/Codex",
  },
  {
    id: "proj-6",
    title: "API Dashboard",
    desc: "Monitoring dashboard for backend APIs",
    tags: ["React", "Node", "Vite"],
    image: "https://source.unsplash.com/800x600/?dashboard,analytics",
    link: "#",
    repo: "#",
  },
];

export const experience = [
{ company:'NovaByte Labs', role:'Founder / Fullstack', date:'2024 — Present', bullets:[
'Built product roadmap and frontend dashboards',
'Led small engineering team and shipped v1'
]},
]