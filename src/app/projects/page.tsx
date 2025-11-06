"use client";

import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Layers, ExternalLink } from "lucide-react";
import Link from "next/link";
import { portfolioConfig } from "@/config/portfolio.config";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProjectsPage = () => {
  return (
    <div className="relative flex flex-col items-start gap-5 w-full h-full overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 p-6 pt-5 sm:pt-20 rounded-3xl">
      
      {/* Header */}
      <FramerWrapper y={10} scale={0.95} delay={0.0} duration={0.25}>
        <Badge variant="secondary" className="gap-1.5 py-1">
          <Layers className="h-4 w-4" />
          Projects
        </Badge>
      </FramerWrapper>

      <div className="flex flex-col gap-2">
        {/* العنوان بدون أنيميشن */}
        <Heading className="text-3xl max-sm:text-3xl">
          My Projects
        </Heading>

        
          <p className="text-gray-600 text-base leading-relaxed">
            Explore my collection of creative and impactful projects. Each one represents 
            a unique challenge solved through innovation, dedication, and continuous learning.
          </p>
        
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full auto-rows-fr">
        {portfolioConfig.projects.map((project, indx) => (
          <FramerWrapper
            key={indx}
            y={10}
            scale={0.95}
            delay={indx / 5}
            duration={0.25}
          >
            <Card className="relative w-full h-full flex flex-col border border-gray-200 bg-gradient-to-br from-white to-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out rounded-2xl">
              <CardHeader className="flex flex-row items-start gap-4 min-h-[100px] pb-0">
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2 mb-0">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="flex-1 min-h-[80px] flex items-start pb-0 pt-0">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>

              <CardFooter className="mt-auto pt-2">
                <Link
                  href={project.link}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "w-full gap-2 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-black hover:to-gray-900 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] font-semibold group"
                  )}
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </CardFooter>
            </Card>
          </FramerWrapper>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
