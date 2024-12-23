import React from 'react';
import Image from 'next/image';
import { SlantedHeading } from '@/components/layout/SlantedHeading';

export default function AboutPage() {
    return (
        <main className="min-h-screen py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">About Our Martial Arts Academy</h1>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">Our Philosophy</h2>
                        <p className="text-gray-700">
                            We believe in developing both the mind and body through traditional martial arts training.
                            Our academy focuses on discipline, respect, and continuous self-improvement.
                        </p>
                        
                        <h2 className="text-2xl font-semibold">Our Mission</h2>
                        <p className="text-gray-700">
                            To empower individuals through martial arts training, building confidence,
                            strength, and character while maintaining the authentic traditions of our disciplines.
                        </p>
                    </div>

                    <div className="relative h-[400px] rounded-lg overflow-hidden">
                        <Image
                            src="/Images/group-boys-girl-fighting-aikido-training-martial-arts-school-healthy-lifestyle-sports-concept (2).jpg"
                            alt="Martial Arts Dojo"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="mt-12">
                    <SlantedHeading text="Meet Our Instructors" backgroundColor="bg-red-700" textColor="text-white" width="max-w-[730px]" />
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((instructor) => (
                            <div key={instructor} className="p-6 rounded-lg shadow-md">
                                <div className="relative h-48 mb-4">
                                    <Image
                                        src={`/Images/male-instructor-removebg2-preview.png`}
                                        alt={`Instructor ${instructor}`}
                                        width={300}
                                        height={300}
                                        className="object-cover rounded h-[350px]"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold">Sensei Name</h3>
                                <p className="text-gray-600">20+ Years Experience</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}