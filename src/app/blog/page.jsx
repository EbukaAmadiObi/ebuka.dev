import Header from "@/components/header";

// Placeholder page — kept out of the index and sitemap until real posts ship.
export const metadata = {
  title: "Blog — Ebuka Amadi-Obi",
  description: "Technical writing by Ebuka Amadi-Obi. Coming soon.",
  alternates: { canonical: "/blog" },
  robots: { index: false, follow: true },
};

export default function Blog() {

  return (
    <div>
      <Header />
      <div className='w-full h-[85dvh] justify-center items-center flex flex-col bg-[#1f0e07]'>

        <h1>There's nothing here... yet.</h1>
      </div>
    </div>


  )
};
