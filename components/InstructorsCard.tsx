"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GradientBlob } from "./layout/GradientBlob"

interface InstructorProps {
  name: string
  image: string
  specialties: string[]
  description: string
}

export function InstructorCard({ name, image, specialties, description }: InstructorProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <Card className="overflow-hidden rounded-md ">
        <CardHeader className="relative p-0">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <GradientBlob 
              colors={['#f92a2a', '#7a0909', '#0e0f0f']} 
              size={400}
              blur={60}
              duration={15}
            />
          </div>
          <Image
            src={image}
            alt={name}
            width={400}
            height={300}
            className="w-full h-[350px] object-cover z-10 relative"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20" />
          <CardTitle className="absolute bottom-4 left-4 text-2xl font-bold z-30">
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 rounded-b-md border-2 border-t-0 border-red-600 bg-black ">
          <div className="flex flex-wrap gap-2 mb-4">
            {specialties.map((specialty, index) => (
              <Badge key={index} className="rounded-full bg-red-600">
                {specialty}
              </Badge>
            ))}
          </div>
          <CardDescription className="text-gray-300">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}

