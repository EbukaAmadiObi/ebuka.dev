export default function ProjectEntry({ image, title, description }) {
  return (
  <div className="w-full md:w-1/2 p-4">
    <img src={image} alt={`${title} image`} className="w-full mb-4"/>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-[#ab795e]">
      {description}
    </p>
  </div>
  )
}