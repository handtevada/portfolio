import type { JSX } from 'react';
import { formatDistanceToNow } from 'date-fns';

interface Command {
  name: string;
  alias: string;
  description: string;
  result?: JSX.Element;
}

const bDate = new Date('1990-11-21');
const cDate = formatDistanceToNow(bDate);

export const commands: Command[] = [
  {
    name: 'Introduce Myself',
    alias: 'intro',
    description: 'Learn about me',
    result: (
      <span>
        <br />
        Hello! I'm Keerati Yuonghirun (Tung), <br />
        <br />
        - A passionate software developer with a love for creating innovative solutions. <br />
        <br />- 21 November 1990 ({cDate} old). <br />
        <br />
        - Full Stack Developer with expertise in .Net C#, Node JS, and various web technologies.{' '}
        <br />
        <br />
        - 10+ years of experience in software development, working on diverse projects and teams.
        <br />
        <br />
        Welcome to my portfolio terminal!
        <br />
      </span>
    ),
  },
  {
    name: 'Education',
    alias: 'edu',
    description: 'My educational background',
    result: (
      <span>
        <br />
        Bachelor of Computer Engineering, Naresuan University (Phitsanulok) — GPA: 2.7.
        <br />
      </span>
    ),
  },
  {
    name: 'Language',
    alias: 'lang',
    description: 'Languages I speak',
    result: (
      <span>
        <br />
        - Thai (Native) <br />
        - English (Intermediate) <br />
        - Japanese (Basic) <br />
      </span>
    ),
  },
  {
    name: 'Strong Skill',
    alias: 'strong',
    description: 'My strong skills',
    result: (
      <span>
        <br />
        - Problem Solving <br />
        - Adaptability <br />
        - Teamwork <br />
        - Time Management <br />
      </span>
    ),
  },
  {
    name: 'Programming Skill',
    alias: 'prog',
    description: 'Programming languages I know',
    result: (
      <span>
        <br />
        Now, Expertise about .Net C#, Node JS, Full Stack Developer
        <br />
        <br />
        - Full Stack: Building systems from the ground up, maintaining and evolving existing
        solutions, integrating third-party services, researching and adopting new technologies, and
        coaching team members.
        <br />
        <br />
        - Windows Server: Understanding system operations and knowing how to diagnose and resolve
        issues. <br />
        <br />- Linux Server: Familiar with basic Linux commands and experienced in researching
        solutions. <br />
        <br />
        - Database: Experienced in designing database schemas, writing complex queries, and
        optimizing database performance. Familiar with MySql, MongoDB, MicrosoftSQL and Redis.
        <br />
        <br />
        - Cloud: Experienced in deploying and managing applications on cloud platforms like GCP and
        Azure.
        <br />
        <br />
        - DevOps: Familiar with CI/CD pipelines, containerization using Docker and infrastructure as
        code (IaC) tools.
        <br />
        <br />
        - Web stack & Tools: C#, React, Node.js, Lumen, WordPress, Firebase, Git, Docker, K8s,
        Kafka, Kong, Jenkins and more.
        <br />
      </span>
    ),
  },
  {
    name: 'Hobbies',
    alias: 'hob',
    description: 'My hobbies',
    result: (
      <span>
        <br />
        - Photographer: IG (algobalen0)
        <br />
        - Blogger: medium.com/@directorys (About technology or programming)
        <br />
        - Sport: Football, Running, Table Tennis <br />
        - Game: Go, ROV, Roblox <br />
        - Trader: Stock, Crypto, Gold <br />
      </span>
    ),
  },
  {
    name: 'Experience',
    alias: 'exp',
    description: 'My professional experience',
    result: (
      <span>
        <br />
        - 2024-Present: Team Lead Developer at Clicknext Co.,Ltd. <br />
        <br />
        - 2023-2024: Senior Software Developer at Zortout Co.,Ltd <br />
        <br />
        - 2020-2023: Senior Software Developer at True Co.,Ltd. <br />
        <br />
        - 2019-2020: Software Engineer, Tangerine Co.,Ltd. <br />
        <br />
        - 2015-2019: C#.NET Developer, Piesoft Co.,Ltd. <br />
        <br />
        - 2013-2015: Java Developer, AR Soft - Advanced Research Group Co.,Ltd. <br />
        <br />
        - 2012: Apprentice : TESA Hyper Camp <br />
      </span>
    ),
  },
  {
    name: 'Contact',
    alias: 'contact',
    description: 'How to reach me',
    result: (
      <span>
        <br />
        - Email: algobaleno.un@gmail.com <br />
        - X: @Algobaleno
        <br />
        - Instagram: Directorys <br />
        - Medium: medium.com/@directorys <br />
        - Github: github.com/handtevada <br />
      </span>
    ),
  },
];
