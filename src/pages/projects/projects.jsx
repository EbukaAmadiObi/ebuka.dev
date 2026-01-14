import Header from "../../components/header";
import Divider from "../../components/divider";
import ProjectEntry from "./project_entry";

export default function Projects() {
    
  return (
    <div>
      <Header />
      <div className='w-screen h-[85dvh]items-center flex flex-col bg-[#1f0e07]'>
        <div className="mx-auto colsection pb-20 md:pb-32">
          <h2 className="text-left">
            Projects
          </h2>
          <Divider />
          <div className="flex flex-wrap md:grid-cols-2">
            <ProjectEntry image="/images/resumate-clip.png" title="Resumate" description="An 
            AI-powered CV tailoring web application that helps users create customized CVs for 
            specific job applications quickly and efficiently."/>
            
          </div>
        </div>
      </div>
    </div>

    
  )
};