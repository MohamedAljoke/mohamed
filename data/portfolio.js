import imagesData from './images';

const portfolioData = {
  name: 'Mohamed',
  headerTaglineTwo: 'Mohamed Ibrahim',
  headerTaglineThree: 'Full Stack Software Engineer',
  headerTaglineFour: '',
  showCursor: true,
  showBlog: true,
  darkMode: true,
  showResume: true,
  socials: [
    {
      id: '1',
      title: 'Github',
      link: 'https://github.com/MohamedAljoke',
    },
    {
      id: '2',
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/mohamed-aljoke-a23217186/',
    },
    {
      id: '3',
      title: 'Youtube',
      link: 'https://www.youtube.com/channel/UCkUgsd4IUob6IUVF1EP13eA',
    },
    {
      id: '4',
      title: 'Blog',
      link: 'https://devmohami.hashnode.dev/',
    },
    { id: '5', title: 'Email', link: 'mailto:mohammed.maljoke@gmail.com' },
  ],
  projects: [
    {
      id: '1',
      title: 'Mext Plataform frontEnd',
      description: `This is an application made to help students of the mext scholarship to study, this is the frontEnd where the students can login, view some topics, material and answer questions.
        It is made with NextJs. You can use this login to test the webSite
          username: teste@email.com and
          password: teste123
`,
      imageSrc: imagesData.mextFront,
      url: 'https://github.com/MohamedAljoke/mext-front',
      webSite: 'https://mext-front.vercel.app/',
    },
    {
      id: '2',
      title: 'Mext Project Admin Plataform',
      description: `This is the admin project for the mext, where i can used it to add subjects, videos, questions, materials and answers. It is made with NextJs.You can use this login to test the webSite
      username: teste@email.com and
      password: teste123`,
      imageSrc: imagesData.mextAdmin,
      url: 'https://github.com/MohamedAljoke/mext-admin',
      webSite: 'https://mext-admin.vercel.app/',
    },
    {
      id: '3',
      title: 'Mext Project API',
      description: `This is the server for the mext project made with NodeJS using adonis frameWork and a MySql database, it has auth middleware and was deployed to heroku, EC2 and Fly.io. The database is hosted on amazon RDS.
      It has swagger docs and postman collection.
      The application as a hole is in a container.
      Also this application has a gitHub actions work flow for CI.
      `,
      imageSrc: imagesData.mextApi,
      url: 'https://github.com/MohamedAljoke/mext-plataform-api',
      webSite: 'https://mext.fly.dev/docs/index.html',
    },
    {
      id: '4',
      title: 'Coffee Shops',
      description:
        'A project i did to learn Next.js and AIRTABLE with SSR && SWR for up voting, it fetches data from an external api and imgs from UNSPLASH api. add up votes and find more stores near me buttons',
      imageSrc: imagesData.coffeShop,
      url: 'https://github.com/MohamedAljoke/next-coffee',
      webSite: 'https://next-coffee-bay.vercel.app/',
    },
    {
      id: '5',
      title: 'Nextflix',
      description:
        'Netflix clone with next.js, using SSR and auth with magic links, consuming youtube api to show data. i am working on the project TODOS: video detalhes page, watch again section and like videos.',
      imageSrc: imagesData.netflix,
      url: 'https://nextflix-three.vercel.app/',
      webSite: 'https://nextflix-three.vercel.app/',
    },
  ],
  services: [
    {
      id: '1',
      title: 'Art Direction',
      description:
        'We help with the creation and development of online advertising ideas, with particular focus on their visual appearance.',
    },
    {
      id: '2',
      title: 'Branding',
      description:
        'We design key brand elements such as the logo, color scheme, typography, and other design components that makes your brand stand out from competitors.',
    },
    {
      id: '3',
      title: 'Web Design',
      description:
        'We build and optimize your online presence.  Website is the digital entry point into your business and a powerful revenue channel.',
    },
    {
      id: '4',
      title: '3D Design',
      description:
        'We combine creative design and technical skills to build striking 3D visualisations that bring your project to life.',
    },
  ],
  aboutpara: `
Over the past two years, I've immersed myself in the realm of web development, specializing in ReactJs and NodeJs with TypeScript. My expertise spans diverse UI/CSS libraries like Tailwind, Material UI, antd, and bootstrap, resulting in captivating user interfaces.

I seamlessly integrated Redux/react-query for integrating the frontEnd with the backEnd, employed testing tools like jest and vitest, and optimized form handling using react-hook-form and zod for data integrity.

I've also learned NextJs for server-side rendering and static site generation, enhancing performance and SEO. I've even ventured into mobile development using Flutter, successfully launching MVPs.

On the backend, I've adeptly used NodeJs with express, NestJs, and AdonisJs, integrating SQL/NoSQL databases. I've also navigated CI/CD pipelines with GitLab and GitHub, ensuring seamless development and deployment.

In summary, my journey showcases a versatile developer skilled in crafting captivating and efficient web applications across the stack.
    `,
  resume: {
    tagline: "👋  I'm a software engineer, product designer.",
    description:
      'I have delivered world-class user experiences to millions of people. Well-versed with React, Javascript, and most of the Web frameworks.',
    experiences: [
      {
        id: '1',
        dates: 'March 2022 - Present',
        type: 'Full Time',
        position: 'Frontend Engineer at X',
        bullets: 'Bullet One, Bullet Two',
      },
      {
        id: 'd495c23b-4f65-479a-9b8a-cfbc1c089725',
        dates: 'July 2020 - March 2022',
        type: 'Full Time',
        position: 'Frontend Engineer at X',
        bullets:
          'Worked on the frontend of a React application, Worked on the frontend of a React application',
      },
    ],

    languages: ['Javascript', 'HTML5', 'CSS', 'Python', 'Go'],
    frameworks: ['React', 'Typescript', 'NodeJs'],
    others: ['Figma', 'AdobeXD', 'AWS'],
  },
};
export default portfolioData;
