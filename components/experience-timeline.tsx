"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"
import { useInView } from "react-intersection-observer"

const experiences = [
  {
    title: "Software Engineer and Web Developer",
    company: "Walmart Global Tech India",
    location: "Bengaluru, Karnataka, India",
    period: "Dec 2024 - Present",
    description:
      "• Contributed to building a custom Design Language System(bluesteel). Implemented a CODEMOD for automatic migration and refactoring code to Bluesteel lib which reduced manual effort by 80%." +
      "• Implemented UI features on Tires and Battery Centre module and implemented advanced error handling for cart and checkout page." +
      "• Implemented new immunization vaccine features in the Sam’s club Pharmacy platform." +
      "• Spearheaded the 'Multi-Patient Single RX Order' feature for Sam’s Pharmacy, collaborating with cross-functional teams to enhance user experience and increase order value by 20%" +
      "• Improved UX and system reliability for the Sam's Club Next web app using modern technologies (Next JS, Tailwind CSS on Nx).",
    tags: ["React.js", "Redux.js", "Node.js", "Next.js", "HTML/CSS"],
  },
  {
    title: "Senior Software Engineer",
    company: "Altran Technologies | Capgemini",
    location: "Bengaluru, Karnataka, India",
    period: "April 2021 - May 2022",
    description:
      "• Modernized user interface for SSP|SEAS (IBM) enterprise application, improving usability." +
      "• Collaborated with cross-functional teams to deliver scalable solutions." +
      "• Conducted 50+ Interviews to buid a team.",
    tags: ["React.js", "Redux.js", "Node.js", "HTML/CSS"],
  },
  {
    title: "Software Engineer",
    company: "6D Technologies",
    location: "Bengaluru, Karnataka, India",
    period: "November 2019 - February 2021",
    description:
      "• Implemented Digital Network Services: Successfully developed prepaid, postpaid, and device management features for the Ooredoo project which boosted orders by 20%." +
      "• Led production bug fixes, ensuring timely issue resolution.",
    tags: ["React.js", "Redux.js", "Node.js", "Next.js", "HTML/CSS"],
  },
  {
    title: "Software Engineer",
    company: "Vunet Systems",
    location: "Bengaluru, Karnataka, India",
    period: "July 2017 - November 2019",
    description:
      "• Implemented new adapters in the VuSmartMaps platform to collect data for dashboard visualizations using the ELK stack." +
      "• Implemented a new visualization called Unified Transaction Map to show the network of all routers and its status using D3.js." +
      "• Contributed to the migration of Kibana features from version 4 to 6.1 for the VuSmartMaps platform.",
    tags: ["React.js", "Redux.js", "Node.js", "Next.js", "HTML/CSS"],
  }
]

const education = [
  {
    degree: "Master of Science in  Computer Science",
    institution: "Chicago State University, Chicago, IL",
    period: "January 2025 - May 2026",
    location: "Chicago, IL, USA",
    description:
      "Pursuing a Master’s in Computer Science with a strong focus on problem-solving, database systems, artificial intelligence, and machine learning. Currently maintaining a 4.0 GPA, with advanced coursework in Python, AI, and ML.",
    tags: ["Computer Science", "Mathematics", "Artificial Intelligence", "Honors College", "4.0 GPA"],
    courses: [
      "CPTR.5360: Machine Learning",
      "CPTR.5600: Advance Database Design and Implementation",
      "CPTR.5800: Advance Software Engineering",
      "CPTR.5820: Alg Software Eng Web App",
    ],
  },
  {
    degree: "Bachelor of Engineering - BE, Computer Science",
    institution: "Visvesvaraya Technological University, Bengaluru, India",
    period: "August 2013 - May 2017",
    description:
      "Completed a Bachelor's degree in Computer Science with a 3.65 GPA, emphasizing a comprehensive understanding of core computer science principles and technologies.",
    tags: ["Computer Science", "Artificial Intelligence", "Machine Learning", "Honors College"],
    location: "Bengaluru, INDIA",
  },
]

interface ExperienceTimelineProps {
  type: "experience" | "education"
}

export default function ExperienceTimeline({ type }: ExperienceTimelineProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const items = type === "experience" ? experiences : education
  const Icon = type === "experience" ? Briefcase : GraduationCap
  const color = type === "experience" ? "primary" : "secondary"

  return (
    <div ref={ref} className="relative pb-20">
      {/* Center line */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-${color}/80 via-${color}/50 to-${color}/20`}
      ></div>

      <div className="relative z-10">
        {items.map((item, index) => {
          const isEven = index % 2 === 0
          // Create a truly unique key by combining type, index, and a specific property
          const uniqueKey = `${type}-${index}-${item.title || item.degree}-${Date.now()}-${index}`

          return (
            <motion.div
              key={uniqueKey}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-start mb-24 ${isEven ? "md:flex-row flex-col" : "md:flex-row-reverse flex-col"}`}
            >
              {/* Timeline dot - visible only on medium screens and above */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-background border-2 border-${color} flex items-center justify-center hidden md:flex`}
              >
                <Icon className={`h-3 w-3 text-${color}`} />
              </div>

              {/* Timeline dot - visible only on small screens */}
              <div
                className={`relative w-6 h-6 rounded-full bg-background border-2 border-${color} flex items-center justify-center md:hidden mx-auto mb-4`}
              >
                <Icon className={`h-3 w-3 text-${color}`} />
              </div>

              {/* Content */}
              <div className={`md:w-5/12 w-full ${isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                <Card className={`glass-effect border-${color}/10 overflow-hidden h-full`}>
                  <div className={`h-1 w-full bg-${color}`}></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{type === "experience" ? item.title : item.degree}</h3>
                    <p className={`text-${color} font-medium mb-1`}>
                      {type === "experience" ? item.company : item.institution}
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">{item.location}</p>
                    <p className="text-sm text-muted-foreground mb-4">{item.period}</p>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div
                      className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end justify-start" : "justify-start"}`}
                    >
                      {item.tags.map((tag, tagIndex) => (
                        <Badge
                          key={`${uniqueKey}-tag-${tagIndex}-${tag}`}
                          variant="secondary"
                          className={`bg-${color}/10 text-${color}-foreground mb-1`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {type === "education" && item.courses && (
                      <div className="mt-4">
                        <h4
                          className={`text-sm font-semibold mb-2 ${isEven ? "md:text-right text-left" : "text-left"}`}
                        >
                          Key Courses:
                        </h4>
                        <ul
                          className={`text-xs text-muted-foreground space-y-1 ${isEven ? "md:text-right text-left" : "text-left"
                            }`}
                        >
                          {item.courses &&
                            item.courses
                              .slice(0, 5)
                              .map((course, courseIndex) => (
                                <li key={`${uniqueKey}-course-${courseIndex}-${course.substring(0, 10)}`}>{course}</li>
                              ))}
                          {item.courses && item.courses.length > 5 && (
                            <li className="text-primary cursor-pointer hover:underline">
                              +{item.courses.length - 5} more courses
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Empty space for the other side - only on medium screens and above */}
              <div className="md:w-5/12 w-full md:block hidden"></div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

