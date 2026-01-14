import Divider from "../../components/divider";

export default function ProjectEntry({ image, title, description, link }) {
  return (
  <div className="w-full p-3 pt-0 inline-block">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={`${title} image`} className="w-full mb-4"/>
    </a>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-[#ab795e]">
      {description}
    </p>
    <Divider/>
  </div>
  )
}