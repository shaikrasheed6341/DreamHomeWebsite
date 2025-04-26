"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ReviewCard/ReviewCard";

export default function InfiniteMovingCardsDemo() {
  return (
    <div>
    <div className="h-[25rem] rounded-md flex flex-col antialiased bg-[#FEF7F2] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    <div><p className="text-center text-5xl font-bold text-[#2B1B12] my-5 ">What People Say <br></br> About Dwello</p></div>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.",
    name: "Sarah Nguyen",
    title: "San Francisco",
  },
  {
    quote:
      "I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!",
    name: "Michael Rodriguez",
    title: "San Diego",
  },
  {
    quote: "Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!",
    name: "Emily Johnson",
    title: "Los Angeles",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
