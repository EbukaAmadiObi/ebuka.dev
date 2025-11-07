import logo from "/logo.svg"
import hero from "/hero.webp"
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
      className={`sticky top-0 z-50 w-screen max-h-30 shadow-2xl flex flex-row items-center p-9 bg-[#1f0e07] transform transition-transform duration-300 ease-in-out ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <img src={logo} className="w-24" alt="EAO Logo"/>
    </div>
  )
}

export default function Home() {
    
    return (
      <div className="flex flex-col">
        <Header/>
        <div className='w-full flex flex-row'>
          <div className='max-h-[calc(100vh-10rem)] w-[60vw] flex items-center ml-32 mr-16'>
            <div>
              <h1>Hi, I'm</h1>
              <h3 className='text-[#8b3923] font-semibold text-[11rem] tracking-tighter leading-42'>
                <span className='tracking-[-0.07em]'>E</span>
                <span className='tracking-[-0.05em]'>b</span>
                <span className='tracking-[-0.08em]'>u</span>
                <span className='tracking-[-0.05em]'>k</span>
                <span className='tracking-[-0.05em]'>a.</span>
              </h3>
              <h1>I build stuff with computers.</h1>
              <br/>
              <p>I'm a recent graduate of electronic engineering from UCD, 
now I'm working my way into the software industry. <br/>
Currently, working on streamlining the CV tailoring 
process with <a href="https://resumate.cv" target="_blank">Resumate.</a></p>
            </div>
          </div>
          <img src={hero} className="ml-auto w-[40vw] h-auto object-contain" alt="Letter pattern" />
        </div>

      </div>
    )
};