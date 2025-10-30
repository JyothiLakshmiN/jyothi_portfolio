import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import SectionReveal from "@/components/section-reveal"
import Skills from "@/components/skills"

export const metadata: Metadata = {
  title: "About Me | Jyothi Lakshmi",
  description:
    "Learn more about Jyothi Lakshmi's background, skills, and achievements in AI, Machine Learning, and Software Development.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          About Me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <SectionReveal direction="right">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 blur-2xl" />
              <div className="relative h-full w-full rounded-lg overflow-hidden border-2 border-primary/20">
                <Image
                  src="portfolio_pic.jpeg"
                  alt="Jyothi Lakshmi"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="left" delay={0.2}>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">My Background</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
              I am a Master’s student in Computer Science at Chicago State University (GPA: 4.0/4.0), specializing in Artificial Intelligence, Machine Learning, and Full-Stack Development. With over 7 years of professional experience in software engineering, I bring expertise in building scalable, user-centric web applications and intelligent AI-driven solutions.
</p>
              <p>
              Before transitioning into research and AI, I worked at Walmart Global Tech, where I developed and optimized enterprise-scale systems improving delivery efficiency, checkout flows, and user experience for millions of users. My earlier roles at Capgemini (Altran) and VuNet Systems involved designing modern UI systems, leading engineering teams, and implementing real-time monitoring dashboards using ELK and D3.js.
              </p>
              <p>
                My academic and research work focus on integrating deep learning and NLP into real-world applications. I have built:
              </p>
              <li>
                
              </li>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Achievements</h2>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
              <li>
               Built and automated a migration system for Walmart's Blue Steel Design System using codemod scripts, reducing manual development effort by 80%.
              </li>
              <li>
               Designed and developed "Multi-Patient Single RX Order" feature for Sam’s Club Pharmacy platform, increasing order value by 20%.
              </li>
              <li>
              Implemented real-time Tires and Battery Centre features, optimizing cart and checkout flows and improving overall user experience.
              </li>
              <li>
              Developed an AI-powered Code Reviewer and Bug Predictor achieving 85% accuracy, 0.82 F1-score, and 0.88 AUC-ROC score using machine learning and NLP techniques.
              </li>
              <li>
              Created a real-time sentiment analysis system using LSTM-based deep learning, processing 500K+ tweets and reviews with 92.67% classification accuracy.
              </li>
              <li>
              Migrated Kibana features from version 4 to 6.1 at VuNet Systems, introducing new visualizations like Unified Transaction Map for improved network monitoring.
              </li>
            </ul>
              <div className="mt-8">
                <Button size="lg" className="flex items-center gap-2" asChild>
                  <a href="/JYOTHI_LAKSHMI_RESUME.pdf" download>
                    <Download className="h-5 w-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </SectionReveal>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
          <Skills />
        </div>
      </div>

      <Footer />
    </main>
  )
}

