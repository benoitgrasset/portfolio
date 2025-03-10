"use client";

/* eslint-disable @next/next/no-img-element */
import AtpRanking from "@/assets/atp-ranking.png";
import LifeGame from "@/assets/life-game.gif";
import MineSweeper from "@/assets/mine-sweeper.png";
import StravaDashboardCompare from "@/assets/strava-compare.png";
import StravaDashboard from "@/assets/strava-dashboard.png";
import Movies from "@/assets/themoviedb.png";
import ZwoEditor from "@/assets/zwo-editor.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import { DotButton } from "@/components/DotButtn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function Home() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const scrollSnaps = api?.scrollSnapList() ?? [];

  const projects = [
    {
      title: "strava-dashboard",
      description: "A dashboard to display Strava activities",
      image: StravaDashboard,
      link: "https://strava-dashboard.netlify.app/",
    },
    {
      title: "strava-dashboard-compare",
      description: "A dashboard to compare Strava activities between athletes",
      image: StravaDashboardCompare,
      link: "https://strava-dashboard-compare.netlify.app/",
    },
    {
      title: "ZWO editor",
      description: "A ZWO editor to create custom workouts for Zwift",
      image: ZwoEditor,
      link: "https://silver-unicorn-691fa9.netlify.app/",
    },
    {
      title: "atp-ranking",
      description: "A table to display ATP ranking",
      image: AtpRanking,
      link: "https://atp-ranking.vercel.app/",
    },
    {
      title: "life-game",
      description: "A game of life",
      image: LifeGame,
      link: "https://benoitgrasset.github.io/life-game/",
    },
    {
      title: "mine-swweper",
      description: "A game of mine sweeper",
      image: MineSweeper,
      link: "https://mine-sweeper-front.netlify.app/",
    },
    {
      title: "movies from themoviedb",
      description: "A list of movies from the movie database",
      image: Movies,
      link: "http://canal-plus-technical-test.vercel.app/",
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Hi, I&apos;m{" "}
          <span className="text-[var(--geist-foreground)]">Benoit</span>, a
          front-end engineer.
        </h1>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-xxl"
          setApi={setApi}
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
                        src={project.image.src}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <h2 className="mt-4 text-sm font-semibold w-full">
                        Description
                      </h2>
                      <p className="mt-1 text-sm text-gray-500  w-full">
                        {project.description}
                      </p>
                      <p className="mt-4 text-sm w-full">
                        <a
                          href={project.link}
                          className="text-blue-500 hover:underline"
                          target="_blank"
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
        <div className="flex gap-2 w-full justify-end">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`${
                index === current - 1
                  ? "ring-2 ring-black"
                  : "ring-2 ring-gray-300"
              } h-4 w-4 rounded-full`}
            />
          ))}
        </div>
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
