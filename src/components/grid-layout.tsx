"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function GridLayout() {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);

  const works = [
    { id: 1, title: "Geometric Abstraction", year: 2023, medium: "Digital" },
    { id: 2, title: "Example", year: 2022, medium: "Example" },
    { id: 3, title: "Example", year: 2023, medium: "Example" },
    {
      id: 4,
      title: "Example",
      year: 2021,
      medium: "Example",
    },
  ];

  return (
    <div className="min-h-screen font-sans">
      <div className="container mx-auto px-4 py-10">
        <header className="mb-16">
          <h1 className="mb-4 text-6xl font-bold">Artist - Illustrator</h1>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="mb-8 text-4xl font-bold">SELECTED WORKS</h2>
            <div className="space-y-4">
              {works.map((work) => (
                <motion.div
                  key={work.id}
                  className="flex cursor-pointer items-center justify-between bg-primary/10 p-4"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedWork(work.id)}
                >
                  <div>
                    <h3 className="text-xl font-bold">{work.title}</h3>
                    <p className="text-sm">
                      {work.year} | {work.medium}
                    </p>
                  </div>
                  <ChevronRight className="h-6 w-6" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-16">
              <h2 className="mb-8 text-4xl font-bold">ABOUT</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, ratione ab nam similique ducimus debitis quod
                expedita.
              </p>
              <motion.button
                className="bg-primary px-6 py-2 text-lg font-bold text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONTACT
              </motion.button>
            </div>
          </div>
        </div>

        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90"
            onClick={() => setSelectedWork(null)}
          >
            <div className="max-w-2xl bg-white p-8">
              <h3 className="mb-4 text-3xl font-bold">
                {works.find((w) => w.id === selectedWork)?.title}
              </h3>
              <p className="mb-4 text-xl">
                {works.find((w) => w.id === selectedWork)?.year} |
                {works.find((w) => w.id === selectedWork)?.medium}
              </p>
              <div className="mb-4 aspect-video bg-gray-200">
                {/* Placeholder for artwork image */}
                <Image
                  src={`/placeholder.svg?height=400&width=600`}
                  alt={works.find((w) => w.id === selectedWork)?.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <p>
                This is where a detailed description of the selected artwork
                would go. It could include information about the artist&apos;s
                inspiration, techniques used, and the significance of the piece
                in their body of work.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
