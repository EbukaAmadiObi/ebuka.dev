import logo from "/logo.svg"
import { Sofa } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="w-full border-t border-[#3e1e0f] bg-[#1f0e07] px-6 md:px-12 py-5 flex items-center justify-between">
      <a href="/">
        <img src={logo} className="w-10 md:w-14" alt="EAO Logo" />
      </a>

      <p className="text-[#ab795e] text-sm md:text-base">made with &lt;3 by Ebuka</p>

      <button
        onClick={() => navigate("/lounge")}
        className="text-[#cd9272] hover:text-[#ab795e] transition-colors cursor-pointer"
        aria-label="Go to the lounge"
      >
        <Sofa className="size-7 md:size-9" />
      </button>
    </footer>
  )
}
