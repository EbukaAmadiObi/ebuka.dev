import Header from "../../components/header";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  TouchHoverCard,
} from "../../components/ui/hover-card"
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillX } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
    
    return (
      <div className="w-screen h-dvh flex flex-col bg-[#1f0e07]">
        <Header/>
        <div className='flex flex-col md:flex-row'>
          <div className='h-[60vh] md:h-[calc(100vh-7.5rem)] md:w-[60vw] flex items-center mx-10 md:mx-15 lg:mx-32 relative'>
            <div>
              <header className="header">Hi, I'm</header>
              <span className='text-[#8b3923] font-semibold text-[5rem] md:text-[7rem] lg:text-[11rem] tracking-[-0.06em] leading-24 md:leading-30 lg:leading-50'>
                Ebuka.
              </span>
              <h1 className="header">I build stuff with computers.</h1>
              <br/>
              <div className="text-[#ab795e]">This is my site, here you can find out about my projects, experience and 
                other cool stuff.
              </div>
              <div className="flex flex-row gap-3 md:gap-6 items-center">
                <a href="https://github.com/EbukaAmadiObi" target="_blank"><AiFillGithub className="text-[#cd9272] size-7 md:size-11"/></a>
                <a href="https://www.linkedin.com/in/ebuka-amadi-obi/" target="_blank"><AiFillLinkedin size={45} className="text-[#cd9272] size-7 md:size-11"/></a>
                <a href="https://www.instagram.com/ebuka_amadi_obi/" target="_blank"><AiFillInstagram size={45} className="text-[#cd9272] size-7 md:size-11"/></a>
                <a href="https://x.com/ebuka_dot_dev" target="_blank"><FaXTwitter size={45} className="text-[#cd9272] size-7 md:size-11"/></a>
                <div className="mx-5 md:mx-10 my-10 border-b-3 opacity-25 w-full h-1"/>
              </div>
            </div>
          </div>
          <div className="ml-auto w-screen md:w-[40vw] md:h-[calc(100vh-7.5rem)] overflow-hidden relative">
            <picture>
              <source
                media="(min-width:768px)"
                type="image/webp"
                srcSet="/hero.webp"
              />

              <source
                type="image/webp"
                srcSet="/hero-hor.webp"
              />

              <img
                src="/images/hero-mobile.webp"
                className="ml-auto md:w-[40vw] h-auto object-contain"
                alt="Hero illustration"
                loading="lazy"
              />
            </picture>
            <div className="pointer-events-none absolute left-0 bottom-0 w-full h-24 md:h-32 bg-[linear-gradient(to_bottom,#1f0e0700,#1f0e07ff)]" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-10 my-auto mx-auto items-center colsection">
          <div>
            <h2>
              About Me
            </h2>
            <div className="my-5 border-b-3 opacity-25 h-1"/>
            <p>
              I'm <a href="https://www.linkedin.com/in/ebuka-amadi-obi/" target="_blank">Ebuka Amadi-Obi</a>,
              22, born and living in Dublin, Ireland, save for a few years of my childhood spent in {" "}
              <TouchHoverCard trigger="The US" triggerClassName="text-[#ab795e]">
                <HoverCardContent className="w-80 bg-[#2a1308] border-[#3e1e0f]">
                  <div className="flex justify-between gap-4">
                    Maryland, specifically. I spent 8 years there from age 2 to 10, before moving 
                    back to Ireland. Despite my efforts I still haven't fully shaken off the accent.
                  </div>
                </HoverCardContent>
              </TouchHoverCard>.
            </p>
            <br/>
            <p>
              I'm currently working on building community and engaging with startup ecosystems 
              worldwide as a Special Projects Associate at <a href="https://websummit.com" target="_blank">Web Summit</a>.
            </p>
            <br/>
            <p>
              I hold a BEng. in Electronic Engineering from UCD. My bachelor's thesis was titled: 
              "Edge AI as a Service (EAIaaS) Platform for Launching AI/ML Services." 
            </p>
            <br/>
            <p>
              I was a Software Engineering Intern at Arista Networks (May 2024), working on their
              cloud management platform to improve user experience and functionality. (I also learned
              Go, great fun.)
            </p>
            <br/>
            <p>
              Last year, I did the{" "}
              <TouchHoverCard trigger="Production Engineering" triggerClassName="text-[#ab795e]">
                <HoverCardContent className="w-80 bg-[#2a1308] border-[#3e1e0f]">
                  <div className="flex justify-between gap-4">
                    Honestly one of the most productive summers I've had so far, PE is such an important
                    field for anyone interested in indie hacking or running SaaS products.
                  </div>
                </HoverCardContent>
              </TouchHoverCard> Fellowship with Meta & MLH (Jun 2025), where I worked 
              with a CentOS VPS, and containerized services.
            </p>
            <br/>
            <p>
              In my free time, I enjoy building projects.
              Currently, I'm building an app to streamline the CV 
              tailoring process. It's called <a href="https://resumate.cv" target="_blank">Resumate.</a>
            </p>
            <br/>
            <p>
              You're likely to find me at one of the few tech meetups in Dublin, including the ones 
              I help organise at <a href="https://giveago.co/" target="_blank">Give(a)Go</a>, and the
               ones I started at {" "} <a href="https://dockyard.info/" target="_blank">Dockyard</a>
            </p>
            <br/>
            <p className="font-bold pb-1">
              Some other cool things I've done:
            </p>
            <ul className="list-disc space-y-1 px-6 list-outside">
              <li>I was one of 52 student countrywide to be selected as a {" "}
                <TouchHoverCard trigger="Web Summit Scholar" triggerClassName="text-[#ab795e]">
                <HoverCardContent className="w-80 bg-[#2a1308] border-[#3e1e0f]">
                    <p>Great experience, got to attend Web Summit 2025 in Lisbon, meet loads of
                    interesting people and it's what led to my current role.</p> <br/> Check it out <a href="https://websummit.com/scholarship-programme/" target="_blank">here.</a>
                </HoverCardContent>
              </TouchHoverCard></li>
              <li>I was also one of 20 students selected worldwide to attend {" "}<TouchHoverCard trigger="Invisible College" triggerClassName="text-[#ab795e]">
                <HoverCardContent className="w-80 bg-[#2a1308] border-[#3e1e0f]">
                  <p>Spent a week discussing topics like urbanism, the industrial revolution and metascience.</p> <br/> <p>Surrounded by insanely intelligent and articulate people, felt very stupid.</p> <br/>Check it out <a href="https://www.worksinprogress.news/p/apply-for-invisible-college-2025" target="_blank">here.</a>
                </HoverCardContent>
              </TouchHoverCard> in Cambridge, hosted by Works in Progress</li>
              <li>I won third in the Dublin Google Hackathon in 2024 and was the regional winner for the {" "}<TouchHoverCard trigger="National AI Challenge 2024" triggerClassName="text-[#ab795e]">
                <HoverCardContent className="w-80 bg-[#2a1308] border-[#3e1e0f]">
                    Won me three months of membership to Dogpatch Labs, you'd better believe I made the most of that.
                </HoverCardContent>
              </TouchHoverCard></li>
            </ul>
          </div>
          <img
            src="/images/duotone (1).png"
            className="mx-auto w-[60vw] md:w-[20vw]"
            alt="Personal Portrait"
            loading="lazy"
          />
        </div>
        <div className="colsection"></div>
      </div>
    )
};