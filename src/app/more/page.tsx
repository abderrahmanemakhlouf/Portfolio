"use client";

import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import FramerWrapper from "@/components/animation/FramerWrapper";

const certifications = [
  {
    title: "Technical Support Fundamentals",
    issuer: "Google / Coursera",
    description:
      "Covers troubleshooting, networking, operating systems, system administration, and security foundations.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    link: "https://coursera.org/verify/6AQB51OE0FOD",
  },
  {
    title: "The Bits and Bytes of Computer",
    issuer: "Google / Coursera",
    description:
      "Covers computer networking concepts, including protocols, network layers, IP addressing, and data transmission.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    link: "https://coursera.org/verify/OOKQ9PDO293N",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    description:
      "Introduces the principles of cybersecurity, including threats, vulnerabilities, network defense, and risk management.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg",
    link: "https://www.credly.com/badges/aeadd8a3-6966-4bae-9915-256db4e70629",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    description:
      "Introduction to AI concepts, applications, and ethical considerations.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    link: "https://www.credly.com/badges/8c37d255-94b1-468f-b72d-5a7063fdef2d",
  },
];

const MorePage = () => {
  return (
    <div className="relative flex flex-col items-start gap-6 w-full h-full overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 p-6 pt-5 sm:pt-20 rounded-3xl">
      {/* Header */}
      <Badge variant="secondary" className="gap-1.5 py-1">
        <Award className="h-4 w-4" />
        Certifications
      </Badge>

      <div className="flex flex-col gap-2">
  <Heading className="text-3xl max-sm:text-2xl">
    Technical Certifications
  </Heading>
  <p className="text-gray-600 text-base leading-relaxed">
    Verified certifications earned from global technology leaders.
  </p>
</div>



      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full auto-rows-fr">
        {certifications.map((cert, indx) => (
          <FramerWrapper
            key={indx}
            y={10}
            scale={0.95}
            delay={indx / 5}
            duration={0.25}
          >
            <Card className="relative w-full h-full flex flex-col border border-gray-200 bg-gradient-to-br from-white to-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out rounded-2xl">
              <CardHeader className="flex flex-row items-start gap-4 min-h-[100px]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-12 h-12 object-contain rounded-md bg-gray-50 p-1 border border-gray-100 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {cert.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500">{cert.issuer}</p>
                </div>
              </CardHeader>

              <CardContent className="flex-1 min-h-[80px] flex items-start pb-2">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </CardContent>

              <CardFooter className="mt-auto pt-2">
                <Link
                  href={cert.link}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "w-full gap-2 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-black hover:to-gray-900 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] font-semibold group"
                  )}
                >
                  <span>View Certificate</span>
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

export default MorePage;