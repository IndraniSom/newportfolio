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
    link:"https://github.com/IndraniSom"
  },
  {
    id: 2,
    name: "Indrani Som",
    designation: "Linkedin",
    image:
      "https://1ront6p1k5.ufs.sh/f/soVBug6ZpaX4R2e9TqLKqjPXtc94luwZAYWFSheVkNTIGmDo",
    link:"https://www.linkedin.com/in/indrani-som-258498248/"
  },
  {
    id: 3,
    name: "indrani0",
    designation: "Leetcode",
    image:
      "https://1ront6p1k5.ufs.sh/f/soVBug6ZpaX4kW9vAjmeOPsm5a6MY3t2Hvi4yLoXjFVDBgqx",
    link:"https://leetcode.com/u/indrani0/"
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
    name: "indranisom39",
    designation: "Hackerrank",
    image:
      "https://1ront6p1k5.ufs.sh/f/soVBug6ZpaX4AKJEC6tDWcESY1U9vhKdZtnxNsMjr4P3Bya8",
    link:"https://www.hackerrank.com/profile/indranisom39"
  },
  {
    id: 6,
    name: "404_coder_not_found",
    designation: "Instagram",
    image:
      "https://1ront6p1k5.ufs.sh/f/soVBug6ZpaX4ZhtlDHi1o6crGqJHUZkIht5MPsfmnwy7uxYv",
    link:"https://www.instagram.com/404_coder_not_found"
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
