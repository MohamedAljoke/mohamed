import { useRef } from 'react';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import Socials from '../components/Socials';
import WorkCard from '../components/WorkCard';
import { useIsomorphicLayoutEffect } from '../utils';
import { stagger } from '../animations';
import Footer from '../components/Footer';
import Head from 'next/head';
import Button from '../components/Button';
import Link from 'next/link';

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
              ref={textOne}
              className="tablet:text-6xl laptop:text-6xl laptopl:text-[70px] p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </p>
            <p
              ref={textTwo}
              className="tablet:text-6xl laptop:text-6xl laptopl:text-[70px] text-bold w-full laptop:w-4/5"
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

        <div className="p-2 laptop:p-0" ref={workRef}>
          <p className="mt-2 tablet:text-6xl laptop:text-6xl laptopl:text-[30px] text-bold w-full laptop:w-4/5">
            Projects.
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
