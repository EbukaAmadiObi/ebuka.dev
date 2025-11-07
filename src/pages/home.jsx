import logo from "/logo.svg"
import { useState, useEffect, useRef } from 'react'

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
      <div className="flex flex-col">
        <Header/>
        <div className='w-full flex flex-col md:flex-row bg-[#1f0e07]'>
          <div className='h-[calc(100vh-10rem)] md:w-[60vw] flex items-center mx-10 md:mx-15 lg:mx-32'>
            <div>
              <h1>Hi, I'm</h1>
              <h3 className='text-[#8b3923] font-semibold text-[5rem] md:text-[11rem] tracking-[-0.06em] leading-24 md:leading-40'>
                Ebuka.
              </h3>
              <h1>I build stuff with computers.</h1>
              <br/>
              <div className="md:text-2xl text-[#ab795e]">I'm a recent graduate of electronic engineering from UCD, 
now I'm working my way into the software industry.
Currently, working on streamlining the CV tailoring 
process with <a href="https://resumate.cv" target="_blank">Resumate.</a></div>
            </div>
          </div>
          {/*<img src={hero} className="ml-auto md:w-[40vw] h-auto object-contain" alt="Letter pattern" />*/}
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
        </div>

      </div>
    )
};