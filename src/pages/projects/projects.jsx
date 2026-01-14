import Header from "../../components/header";
import Divider from "../../components/divider";
import ProjectEntry from "./project_entry";

export default function Projects() {
    
  return (
    <div>
      <Header />
      <div className='w-screen h-[85dvh] items-center flex flex-col bg-[#1f0e07]'>
        <div className="mx-auto colsection pb-20 md:pb-32">
          <h2 className="text-left">
            Projects
          </h2>
          <Divider />
          <div className="columns-1 md:columns-2 gap-6 text-justify [column-fill:balance]
          *:break-inside-avoid *:mb-6">
            <ProjectEntry image="/images/resumate-clip.png" title="Resumate" description="An 
            AI-powered CV tailoring web application that helps users create customized CVs for 
            specific job applications quickly and efficiently." link="http://resumate.cv"/>
            <ProjectEntry image="/images/thesis-clip.png" title="Bachelor's Thesis" description="
            Developed an edge AI platform by designing ML models, containerizing and orchestrating 
            AI/ML services with Docker on Linux virtual machines, and created a prototype edge 
            server for deploying virtualized services with ultra-low latency for IoT applications." 
            link="https://drive.google.com/file/d/1CObOupGIsmvqgRlFmV0RNyo7Pyt69baF/view?usp=sharing"/>
            <ProjectEntry image="/images/lighthouse-clip.png" title="Lighthouse" description="In a 
            team of 4, developed Lighthouse, a project that helps users interpret tonality, social 
            cues, and emotions in real time during video calls and meetings. Uses Deepface, 
            ChatGPT-o4 and Whisper to provide real-time advice." 
            link="https://devpost.com/software/lighthouse-ai-i8wv9r"/>
            <ProjectEntry image="/images/backgammon-clip.png" title="CLI Backgammon" description="A 
            Java-based Backgammon game, emphasizing OOP principles and the use of data structures. 
            Designed and implemented features such as dice rolling, legal move validation, and 
            dynamic board updates while ensuring high code quality and 80% test coverage with JUnit." 
            link="https://drive.google.com/file/d/1CtjqGYiy1izN5gmHtDMP_xGtONhxj7Xp/view?usp=sharing"/>
            <ProjectEntry image="/images/apollo-clip.png" title="Agent Apollo" description="Google 
            Hackathon winner: full-stack Gemini enabled customer sentiment analysis tool in Python 
            and React to provide actionable insights based on user data. Uses Google Cloud’s Natural 
            Language Processing API and GCP Gemini API." link="https://github.com/EbukaAmadiObi/BGN-Hackathon"/>
            <div>
              <h2>There's more to come! Check back soon for updates.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  )
};