"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"
import { useInView } from "react-intersection-observer"

const education = [
  {
    degree: "Master of Science in  Computer Science",
    institution: "Chicago State University, Chicago, IL",
    period: "January 2025 - May 2026",
    description:
      "Pursuing a Master’s in Computer Science with a strong focus on problem-solving, database systems, artificial intelligence, and machine learning. Currently maintaining a 4.0 GPA, with advanced coursework in Python, AI, and ML.",
    tags: ["Computer Science", "Chicago State University", "AI/ML", "Web development"],
  },
  {
    degree: "Bachelor of Engineering - BE, Computer Science",
    institution: "Visvesvaraya Technological University, Bengaluru, India",
    period: "August 2013 - May 2017",
    description:
      "Completed a Bachelor's degree in Computer Science with a 3.65 GPA, emphasizing a comprehensive understanding of core computer science principles and technologies.",
    tags: ["Computer Science", "Artificial Intelligence", "Machine Learning", "Honors College"],
  }
]

export default function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="relative">
      <h2 className="text-3xl font-bold mb-12 flex items-center justify-center">
        <GraduationCap className="mr-3 h-8 w-8 text-secondary" />
        Education
      </h2>

      {/* Center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary/80 via-secondary/50 to-secondary/20"></div>

      <div className="relative z-10">
        {education.map((item, index) => {
          const isEven = index % 2 === 0

          return (
            <motion.div
              key={`${item.degree}-${item.institution}`}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-start mb-16 ${isEven ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-background border-2 border-secondary flex items-center justify-center">
                <GraduationCap className="h-3 w-3 text-secondary" />
              </div>

              {/* Content */}
              <div className={`w-5/12 ${isEven ? "pr-8 text-right" : "pl-8 text-left"}`}>
                <Card className="glass-effect border-secondary/10 overflow-hidden">
                  <div className="h-1 w-full bg-secondary"></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                    <p className="text-secondary font-medium mb-1">{item.institution}</p>
                    <p className="text-sm text-muted-foreground mb-4">{item.period}</p>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className={`flex flex-wrap gap-2 ${isEven ? "justify-end" : "justify-start"}`}>
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-secondary/10 text-secondary-foreground">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Empty space for the other side */}
              <div className="w-5/12"></div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

