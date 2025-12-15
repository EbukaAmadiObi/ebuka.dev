import Divider from "../../components/divider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import experienceData from "./experience-data.json";


export default function Experience() {
  return (
  <div className="flex-col my-10 mx-auto colsection pb-20 md:pb-32">
    <h2 className="text-left">
      Experience
    </h2>
    <Divider />
    <Carousel>
      <CarouselContent>
        {experienceData.map((experience, index) => (
          <CarouselItem key={index} className="basis-9/10 md:basis-4/10">
            <div className="p-1">
              <Card className="h-full bg-[#2a1308] border-[#3e1f0f]">
                <CardHeader>
                  <div className="grid md:grid-cols-2 md:gap-2">
                    <div className="text-[1.67rem] md:text-[2rem] tracking-tight font-semibold">
                      <CardTitle>{experience.title}</CardTitle>
                    </div>
                    <div className="pt-2 md:pt-0 md:justify-self-end italic">{experience.duration}</div>
                  </div>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                <ul className="list-disc px-4 py-0">
                  {experience.description.map((item, idx) => (
                    <li key={idx} className="mb-2">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
  )
}