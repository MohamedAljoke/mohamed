import { useRef } from 'react';
import Header from '../components/Header';
import Socials from '../components/Socials';
import WorkCard from '../components/WorkCard';
import { useIsomorphicLayoutEffect } from '../utils';
import { stagger } from '../animations';
import Footer from '../components/Footer';
import Head from 'next/head';

// Local Data
import data from '../data/portfolio';

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: 'scale(0.95) skew(10deg)' },
      { y: 0, x: 0, transform: 'scale(1)' }
    );
  }, []);

  return (
    <div className={`relative`}>
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="">
            <p
              ref={textTwo}
              className="tablet:text-6xl laptop:text-6xl laptopl:text-[70px] font-semibold text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </p>
            <p
              ref={textThree}
              className="tablet:text-6xl laptop:text-6xl laptopl:text-[30px] text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </p>
            <div className="p-2 laptop:p-0 w-full" ref={aboutRef}>
              <p className="mt-2 text-lg laptop:text-lg laptop:w-4/5">
                {data.aboutpara}
              </p>
            </div>
          </div>
          <Socials className="" />
        </div>

        <div className="p-2 laptop:mt-20 mt-10" ref={workRef}>
          <p className="tablet:text-6xl laptop:text-6xl laptopl:text-[30px] font-semibold w-full laptop:w-4/5">
            Work Experience
          </p>
          <div className="mt-2">
            <p className="text-[18px] font-bold mt-2">
              IDIP Tecnologia (2022/10 - now)
            </p>
            <p className="text-lg laptop:text-lg laptop:w-4/5">
              As a Fullstack Developer with expertise in Node.ts, React.ts,
              Next.ts, NoSQL, and SQL, I have been actively engaged in diverse
              projects since October 2022. My involvement spans across various
              technology stacks including node.ts with Express, Adonis, and Nest
              frameworks, all structured under DDD and MVC architectures. I have
              adeptly contributed to microfrontend initiatives and harnessed the
              power of Graphql and Hasura, employing Hasura actions for seamless
              queries bridging both front and back-end domains. I've
              successfully managed data transformations by facilitating the
              import and export of CSV, JSON, and PDF files, while also
              orchestrating efficient email delivery services. My commitment to
              documentation has been paramount, demonstrated through meticulous
              documentation using Postman and Swagger. Embracing the evolution
              of technology, I've skillfully transitioned a JavaScript-based
              back-end project to TypeScript, ensuring codebase integrity and
              maintainability. My proficiency extends to comprehensive unit
              testing across React front-end and Node back-end frameworks.
              Moreover, I've innovatively crafted lambda functions utilizing the
              principles of OOP and DDD, capitalizing on AWS's AppSync service.
              My repertoire includes orchestrating the migration from Firebase
              to MongoDB as the backend database for a project. I've also been
              an integral part of a Next.js project that implements accelerated
              mobile pages, as per the AMP specification. My toolkit encompasses
              both Material UI and Tailwind, enabling me to design dynamic and
              visually appealing user interfaces. To streamline project setup,
              I've automated the creation of new back-end projects, integrating
              Swagger and Docker for efficient database provisioning. Docker has
              been instrumental in my endeavors, allowing me to encapsulate
              Hasura and database instances within containers, thus optimizing
              deployment processes and created gitlab piplines for continuous
              integration. With a proven track record of adaptability and
              innovation, I am poised to continue delivering impactful solutions
              as a Fullstack Developer.
            </p>
          </div>
          <div>
            <p className="text-[18px] font-bold mt-2">
              Skule Tecnologia (2023/03 - 2023/07)
            </p>
            <p className="text-lg laptop:text-lg laptop:w-4/5">
              This role involves mentoring six programming interns, overseeing
              their project utilizing Node.js and React, addressing merge
              conflicts in pull requests, offering direction for code
              enhancement. The mentoring sessions were conducted in English.
            </p>
          </div>
          <div>
            <p className="text-[18px] font-bold mt-2">
              ADVANCED DIGITA (2022/02 - 2022/10)
            </p>
            <p className="text-lg laptop:text-lg laptop:w-4/5">
              I utilized React.js in conjunction with Redux for crafting
              e-commerce front-ends and ADMIN projects, seamlessly integrated
              payment systems through custom React.js hooks for Mercado-Livre
              and Cielo, developed two minimum viable product (MVP) applications
              using Flutter (Dart) and GetX for state management, established
              Node.js controllers, designed scripts for web scraping utilizing
              Node.js, and effectively utilized SCSS and Bootstrap for styling
              purposes.
            </p>
          </div>
        </div>

        <div className="p-2 laptop:mt-20 mt-10" ref={workRef}>
          <p className="tablet:text-6xl laptop:text-6xl  font-semibold laptopl:text-[30px] text-bold w-full laptop:w-4/5">
            Projects
          </p>

          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4 mt-2">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                repository={project.url}
                webSite={project.webSite}
                onClick={() => window.open(project.webSite)}
              />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
