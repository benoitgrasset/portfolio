import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const projects = [
    {
      title: "strava-dashboard",
      description: "Description 1",
      image: "/images/1.jpg",
      link: "https://strava-dashboard.netlify.app/",
    },
    {
      title: "strava-dashboard-compare",
      description: "Description 2",
      image: "/images/2.jpg",
      link: "https://strava-dashboard-compare.netlify.app/",
    },
    {
      title: "ZWO editor",
      description: "Description 3",
      image: "/images/3.jpg",
      link: "https://silver-unicorn-691fa9.netlify.app/",
    },
    {
      title: "life-game",
      description: "Description 4",
      image: "/images/4.jpg",
      link: "https://benoitgrasset.github.io/life-game/",
    },
    {
      title: "Project 5",
      description: "Description 5",
      image: "/images/5.jpg",
      link: "https://example.com/project5",
    },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Hi, I&apos;m{" "}
          <span className="text-[var(--geist-foreground)]">Benoit</span>, a
          software engineer.
        </h1>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-xxl"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <p className="mt-4 text-sm text-gray-500">
                        {project.description}
                      </p>
                      <p>
                        <a
                          href={project.link}
                          className="text-blue-500 hover:underline"
                        >
                          {project.link}
                        </a>
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
