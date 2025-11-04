"use client";

import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Layers, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { portfolioConfig } from "@/config/portfolio.config";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProjectsPage = () => {
  return (
    <div className="relative flex flex-col items-start w-full h-full overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-gray-100/50 via-blue-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 w-full p-8 pt-5 sm:pt-10 space-y-10">
        {/* Header Section */}
        <div className="flex flex-col gap-6 w-full max-w-4xl">
          <FramerWrapper y={-20} delay={0.1}>
            <Badge variant="secondary" className="gap-1.5 py-1">
              <Layers className="h-4 w-4" />
              Projects
            </Badge>
          </FramerWrapper>

          <div className="flex flex-col gap-4">
            <FramerWrapper y={-20} delay={0.15}>
              <Heading className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                My Projects
              </Heading>
            </FramerWrapper>
            
            <FramerWrapper y={-20} delay={0.2}>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl font-poppins">
                Explore my collection of creative and impactful projects. Each one represents 
                a unique challenge solved through innovation, dedication, and continuous learning.
              </p>
            </FramerWrapper>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full pb-12">
          {portfolioConfig.projects.map((project, indx) => (
            <FramerWrapper
              key={indx}
              y={15}
              scale={0.98}
              delay={indx * 0.05}
              duration={0.3}
            >
              <Card className="group relative w-full h-full flex flex-col border-0 shadow-md hover:shadow-2xl transition-all duration-300 ease-out rounded-3xl bg-white/80 backdrop-blur-sm overflow-hidden">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-3xl transition-all duration-500 pointer-events-none" />
                <div className="absolute inset-[1px] bg-white rounded-3xl" />
                
                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100/50 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10 pb-4 pt-8 px-8">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-950 transition-colors duration-300 leading-tight">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gray-900 transition-all duration-300 flex-shrink-0">
                      <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  
                  {/* Decorative line */}
                  <div className="w-16 h-1 bg-gradient-to-r from-gray-900 to-gray-400 rounded-full group-hover:w-24 transition-all duration-500" />
                </CardHeader>

                <CardContent className="relative z-10 flex-grow pb-6 px-8">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 group-hover:text-gray-700 transition-colors">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 text-xs rounded-full font-semibold border border-gray-200/60 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="relative z-10 pt-0 pb-8 px-8">
                  <Link
                    href={project.link}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "w-full gap-2 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-black hover:to-gray-900 text-white rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] font-semibold"
                    )}
                  >
                    <span>Explore Project</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </CardFooter>
              </Card>
            </FramerWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;