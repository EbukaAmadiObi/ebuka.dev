import logo from "/logo.svg"
import { useState, useEffect, useRef } from 'react'

export default function Header() {
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
      className={`sticky top-0 z-50 w-screen max-h-12 md:max-h-12 shadow-2xl flex flex-row items-center p-4 md:p-9 bg-[#1f0e07]/40 backdrop-blur border-[#e5e5f7] transform transition-transform duration-300 ease-in-out ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <img src={logo} className="w-12 md:w-20" alt="EAO Logo"/>
    </div>
  )
}