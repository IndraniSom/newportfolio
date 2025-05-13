"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, User, Send, ChevronDown } from "lucide-react"
import { HandWrittenTitle } from "@/components/ui/hand-writing-text"

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

interface Message {
  sender: "bot" | "user"
  content: string
}

interface QuestionOption {
  id: string
  text: string
  answer: string
  followUpQuestions?: QuestionOption[]
}

export default function about() {
  const [conversation, setConversation] = useState<Message[]>([])
  const [currentOptions, setCurrentOptions] = useState<QuestionOption[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [userReply, setUserReply] = useState("")
  const [hasStarted, setHasStarted] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Define the conversation questions and answers
  const initialGreeting =
    "Hello human! I am ROBO-9000, your friendly AI assistant. What would you like to know about Indrani?"

  const initialQuestions: QuestionOption[] = [
    {
      id: "background",
      text: "What's Indrani's background?",
      answer:
        "Indrani is a full-stack developer with 3 years of experience building web applications. She specializes in React, Next.js, and Node.js ecosystems, with a strong foundation in both frontend and backend development.",
      followUpQuestions: [
        {
          id: "education",
          text: "What about her education?",
          answer:
            "Indrani is pursuing Computer Science and engineering in Academy of Technology.She is currently in her 3rd year. She has a strong academic background with a focus on software engineering principles and practices.",
        },
        {
          id: "experience",
          text: "Tell me about his work experience",
          answer:
            "Indrani has worked with startups and established companies alike. He spent 2 years at a fintech startup building their customer-facing platform, followed by 3 years at a larger tech company where he led development on several key projects.",
        },
      ],
    },
    {
      id: "skills",
      text: "What are Indrani's key skills?",
      answer:
        "Indrani's core skills include full-stack JavaScript development (React, Next.js, Node.js), database design and management, API development, and cloud infrastructure. He's also experienced with TypeScript, Python, and various DevOps tools.",
      followUpQuestions: [
        {
          id: "frontend",
          text: "Frontend skills?",
          answer:
            "On the frontend, Indrani is proficient with React, Next.js, TypeScript, Tailwind CSS, Framer Motion. She's passionate about creating accessible, performant user interfaces.",
        },
        {
          id: "backend",
          text: "Backend skills?",
          answer:
            "Indrani's backend expertise includes Node.js, Express.",
        },
      ],
    },
    {
      id: "projects",
      text: "What projects has Indrani worked on?",
      answer:
        "Indrani recently built an AI-theme based portfolio website to showcase her skills and projects.",
      followUpQuestions: [
        {
          id: "current",
          text: "What is she working on now?",
          answer:
            "Currently, Indrani is exploring AI integration in web applications ",
        },
        {
          id: "hackathons",
          text: "Any hackathon contributions?",
          answer:
            "Indrani has participated in several hackathons, winning awards for all girls track . She enjoys the challenge of building innovative solutions under time constraints.",
        },
      ],
    },
    {
      id: "interests",
      text: "What are Indrani's interests outside of coding?",
      answer:
        "When not coding, Indrani enjoys hiking, photography, and playing the guitar. He's also an avid reader of science fiction and regularly participates in local tech meetups as both an attendee and speaker.",
      followUpQuestions: [
        {
          id: "hobbies",
          text: "Any unique hobbies?",
          answer:
            "Indrani has a passion for astrophotography and has built his own telescope mount with computerized tracking. He also enjoys brewing craft beer and has won several local competitions.",
        },
      ],
    },
    {
      id: "contact",
      text: "How can I contact Indrani?",
      answer:
        "You can reach Indrani via email at indranisomofficia@gmail.com or connect with her on LinkedIn and GitHub. She's open to freelance opportunities, collaborations, and interesting project discussions.",
    },
  ]
   const words = [
    {
      text: "Learn",
    },
    {
      text: "About",
    },
    {
      text: "Me",
    },
    {
      text: "From",
    },
    {
      text: "Robo 9000",
      className: "text-[#BF40BF]",
    },
  ];
  // Scroll observer for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
          if (!hasStarted) {
            startConversation()
          }
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("chat-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [hasStarted])

  // Start the conversation with the initial greeting
  const startConversation = () => {
    setHasStarted(true)
    setIsTyping(true)

    // Show the initial greeting with typing effect
    setTimeout(() => {
      setIsTyping(false)
      setConversation([{ sender: "bot", content: initialGreeting }])

      // Show initial question options after greeting
      setTimeout(() => {
        setCurrentOptions(initialQuestions)
      }, 500)
    }, 1500)
  }

  // Handle when a user clicks on a question option
  const handleQuestionClick = (question: QuestionOption) => {
    // Add the selected question to the conversation as a user message
    setConversation((prev) => [...prev, { sender: "user", content: question.text }])

    // Clear current options while the bot is "typing"
    setCurrentOptions([])
    setIsTyping(true)

    // Simulate bot typing, then add the answer
    setTimeout(() => {
      setIsTyping(false)
      setConversation((prev) => [...prev, { sender: "bot", content: question.answer }])

      // If there are follow-up questions, show them after a delay
      if (question.followUpQuestions && question.followUpQuestions.length > 0) {
        setTimeout(() => {
          setCurrentOptions(question.followUpQuestions || [])
        }, 500)
      } else {
        // If no follow-ups, go back to main questions
        setTimeout(() => {
          setCurrentOptions(initialQuestions)
        }, 500)
      }
    }, 1500)
  }

  // Handle user input submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userReply.trim()) {
      // Add user message to conversation
      setConversation((prev) => [...prev, { sender: "user", content: userReply }])
      setUserReply("")
      setIsTyping(true)

      // Simulate bot thinking and responding
      setTimeout(() => {
        setIsTyping(false)
        setConversation((prev) => [
          ...prev,
          {
            sender: "bot",
            content:
              "That's an interesting question! I'm programmed with specific information about Indrani. Feel free to select one of the suggested questions to learn more.",
          },
        ])

        // Show options again
        setTimeout(() => {
          setCurrentOptions(initialQuestions)
        }, 500)
      }, 2000)
    }
  }

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [conversation, isTyping, currentOptions])

  return (
    <div id="chat-section" className="w-full py-20 bg-[#040303]">
      <div className="w-full h-full flex flex-col md:flex-row justify-center">
        <div className="w-full flex flex-col md:flex-row px-10 ">
          <div className="w-full flex items-center">
       {/* <HandWrittenTitle title="About Me" subtitle="" /> */}
        <TypewriterEffectSmooth words={words} />
        </div>
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-[#0E0E0E] backdrop-blur-sm rounded-2xl border border-gray-700 shadow-xl overflow-hidden">
            {/* Chat header */}
            <div className="bg-gradient-to-r from-zinc-900 to-stone-800 p-4  flex items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#BF40BF] rounded-full animate-ping opacity-25"></div>
                <Bot className="h-8 w-8 text-[#BF40BF] relative z-10" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-white" style={{ fontFamily: 'Sdrobotics' }}>ROBO-9000</h3>
                <p className="text-xs text-green-400" style={{ fontFamily: 'Sdrobotics' }}>Online</p>
              </div>
            </div>

            {/* Chat messages */}
            <div
              ref={chatContainerRef}
              className="p-4 h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent "
              style={{ fontFamily: 'Sdrobotics' }}
            >
              <AnimatePresence>
                {!hasStarted && isInView && (
                  <motion.div
                    className="flex justify-center items-center h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="text-center">
                      <Bot className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
                      <p className="text-gray-300 mb-4" style={{ fontFamily: 'Sdrobotics' }}>Chat with ROBO-9000 to learn about Indrani</p>
                      <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                        className="text-cyan-400"
                      >
                        <ChevronDown className="mx-auto" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {conversation.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex mb-4 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex items-start max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                          message.sender === "bot" ? "bg-black text-[#BF40BF]" : "bg-[#BF40BF] text-[#BF40BF]"
                        }`}
                      >
                        {message.sender === "bot" ? <Bot size={18} /> : <User size={18} />}
                      </div>
                      <div
                        className={`mx-2 px-4 py-3 rounded-2xl ${
                          message.sender === "bot"
                            ? "bg-gradient-to-r from-zinc-900 to-stone-800 text-white rounded-tl-none"
                            : "bg-white text-black rounded-tr-none"
                        }`}
                      >
                        <TypewriterText text={message.content} />
                      </div>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex mb-4"
                  >
                    <div className="flex items-start max-w-[80%]">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-cyan-900 text-cyan-400 flex items-center justify-center">
                        <Bot size={18} />
                      </div>
                      <div className="mx-2 px-4 py-3 rounded-2xl bg-gray-700 text-white rounded-tl-none">
                        <TypingIndicator />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Question options */}
                {currentOptions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <p className="text-xs text-gray-400 mb-2 ml-2">Select a question:</p>
                    <div className="flex flex-col gap-2">
                      <AnimatePresence>
                        {currentOptions.map((option, index) => (
                          <motion.button
                            key={option.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            onClick={() => handleQuestionClick(option)}
                            className="text-left px-4 py-3 rounded-xl bg-gradient-to-r from-zinc-900 to-stone-800 text-gray-200 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                          >
                            {option.text}
                          </motion.button>
                        ))}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Chat input */}
            <div className="p-4 border-t border-gray-700">
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="text"
                  value={userReply}
                  onChange={(e) => setUserReply(e.target.value)}
                  placeholder="Ask a custom question..."
                  className="flex-1 bg-gray-700 text-white rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  style={{ fontFamily: 'Sdrobotics' }}
               />
                <button
                  
                  className="bg-[#BF40BF] text-white px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>

          
        </motion.div>
        </div>
      </div>
     
    </div>
  )
}

// Typing indicator component
function TypingIndicator() {
  return (
    <div className="flex space-x-1">
      <motion.div
        className="h-2 w-2 bg-gray-400 rounded-full"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8, delay: 0 }}
      />
      <motion.div
        className="h-2 w-2 bg-gray-400 rounded-full"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8, delay: 0.2 }}
      />
      <motion.div
        className="h-2 w-2 bg-gray-400 rounded-full"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8, delay: 0.4 }}
      />
    </div>
  )
}

// Typewriter effect component
function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 20) // Speed of typing

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text])

  useEffect(() => {
    // Reset when text changes
    setDisplayedText("")
    setCurrentIndex(0)
  }, [text])

  return <p>{displayedText}</p>
}
