import logo from "/logo.svg"
import { useState, useEffect, useRef } from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillX } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

// About
// Experience
// What I'm up to now
// Projects
//

function Header() {
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    function onScroll() {
      const currentY = window.scrollY || window.pageYOffset
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          // hide when scrolling down, show when scrolling up
          if (currentY > lastScrollY.current && currentY > 50) {
            setHidden(true)
          } else {
            setHidden(false)
          }
          lastScrollY.current = currentY
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`sticky top-0 z-50 w-screen max-h-15 md:max-h-30 shadow-2xl flex flex-row items-center p-4 md:p-9 bg-[#1f0e07] transform transition-transform duration-300 ease-in-out ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <img src={logo} className="w-12 md:w-24" alt="EAO Logo"/>
    </div>
  )
}

export default function Home() {
    
    return (
      <div className="w-screen h-dvh flex flex-col bg-[#1f0e07]">
        <Header/>
        <div className='flex flex-col md:flex-row'>
          <div className='h-[60vh] md:h-[calc(100vh-7.5rem)] md:w-[60vw] flex items-center mx-10 md:mx-15 lg:mx-32 relative'>
            <div>
              <h1>Hi, I'm</h1>
              <h3 className='text-[#8b3923] font-semibold text-[5rem] md:text-[7rem] lg:text-[11rem] tracking-[-0.06em] leading-24 md:leading-30 lg:leading-40'>
                Ebuka.
              </h3>
              <h1>I build stuff with computers.</h1>
              <br/>
              <div className="md:text-2xl text-[#ab795e]">This is my site, here you can find out about my projects, experience and 
                other cool stuff.
              </div>
              <div className="flex flex-row gap-3 items-center">
                <a href="https://github.com/EbukaAmadiObi" target="_blank"><AiFillGithub className="text-[#cd9272] size-7 md:size-11"/></a>
                <a href="https://www.linkedin.com/in/ebuka-amadi-obi/" target="_blank"><AiFillLinkedin size={45} className="text-[#cd9272] size-7 md:size-11"/></a>
                <a href="https://www.instagram.com/ebuka_amadi_obi/" target="_blank"><AiFillInstagram size={45} className="text-[#cd9272] size-7 md:size-11"/></a>
                <a href="https://x.com/ebuka_dot_exe" target="_blank"><FaXTwitter size={45} className="text-[#cd9272] size-7 md:size-11"/></a>
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
          <div className="flex flex-row gap-10 w-[calc(0.625*100%)] min-h-screen my-auto mx-auto items-center">
            <div>
              <h2>
                About Me
              </h2>
              <div className="my-5 border-b-3 opacity-25 h-1"/>
              <p>
                I'm a recent graduate of electronic engineering from UCD, now I'm working my way 
                into the software industry.<br/> Currently, I'm working on streamlining the CV 
                tailoring process with <a href="https://resumate.cv" target="_blank">Resumate.</a>
              </p>
            </div>
            <img
              src="/images/duotone (1).png"
              className="ml-auto md:w-[20vw]"
              alt="Personal Portrait"
              loading="lazy"
            />
          </div>
        <div>

        </div>
      </div>
    )
};