"use client"

import { motion } from "framer-motion"
import { InstructorCard } from "@/components/InstructorsCard"
import { SlantedHeading } from "./layout/SlantedHeading"

const instructors = [
  {
    name: "Hassan Ahmed",
    image: "/Images/male-instructor-removebg2-preview.png",
    specialties: ["Karate", "Judo", "Self-Defense"],
    description: "With over 15 years of experience, Hassan specializes in traditional martial arts and modern self-defense techniques, techniques.",
  },
  {
    name: "Sarah Johnson",
    image: "/Images/male-instructor-removebg2-preview.png",
    specialties: ["Taekwondo", "Kickboxing", "Fitness"],
    description: "Sarah is a champion kickboxer and certified fitness trainer, focusing on high-energy workouts and practical self-defense.",
  },
  {
    name: "Michael Chen",
    image: "/Images/male-instructor-removebg2-preview.png",
    specialties: ["Brazilian Jiu-Jitsu", "MMA", "Wrestling"],
    description: "Michael is a BJJ black belt and former MMA competitor, bringing real-world experience to his grappling and MMA classes.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function Instructors() {
  return (
    <section>
      <div className="relative">
        <SlantedHeading text="our instructors" />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-4 mt-9"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {instructors.map((instructor, index) => (
            <motion.div key={index} variants={itemVariants}>
              <InstructorCard {...instructor} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
