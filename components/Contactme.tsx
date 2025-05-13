"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "IndraniSom",
    designation: "Github",
    image:
      "https://1ront6p1k5.ufs.sh/f/soVBug6ZpaX4ysYC7szJota8leHmBQYJSqprOT20cE7Mz3n5",
  },
  {
    id: 2,
    name: "Indrani Som",
    designation: "Linkedin",
    image:
      "https://1ront6p1k5.ufs.sh/f/soVBug6ZpaX4R2e9TqLKqjPXtc94luwZAYWFSheVkNTIGmDo",
  },
  {
    id: 3,
    name: "indrani0",
    designation: "Leetcode",
    image:
      "https://1ront6p1k5.ufs.sh/f/soVBug6ZpaX4kW9vAjmeOPsm5a6MY3t2Hvi4yLoXjFVDBgqx",
  },
//   {
//     id: 4,
//     name: "Emily Davis",
//     designation: "Codechef",
//     image:
//       "https://1ront6p1k5.ufs.sh/f/soVBug6ZpaX4AbaZcertDWcESY1U9vhKdZtnxNsMjr4P3Bya",
//   },
{
    id: 5,
    name: "Dora",
    designation: "Hackerrank",
    image:
      "https://1ront6p1k5.ufs.sh/f/soVBug6ZpaX4AKJEC6tDWcESY1U9vhKdZtnxNsMjr4P3Bya8",
  },
  {
    id: 6,
    name: "Tyler Durden",
    designation: "GFG",
    image:
      "https://1ront6p1k5.ufs.sh/f/soVBug6ZpaX4L4B047cm1NGkVDhUYJyXA7F0b5uB9WI8RaHs",
  },
  
];
const currentYear = new Date().getFullYear()
export function Contactme() {
  return (
    <div className="border-t border-gray-800 pt-8 pb-4 bg-[#040303] text-white">
          <h3 className="text-center text-xl font-bold mb-6">Connect With Me</h3>

          <div className="flex flex-wrap justify-center mb-8">
      <AnimatedTooltip items={people} />
    </div>
     <div className="text-center text-white text-sm">
            <p>© {currentYear} Indrani Som. All rights reserved.</p>
          </div>
    </div>
  );
}
