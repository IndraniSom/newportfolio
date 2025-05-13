"use client";
import { useState } from "react";
import {Navbar,NavBody,NavItems,MobileNav,NavbarLogo,NavbarButton,MobileNavHeader,MobileNavToggle,MobileNavMenu,} from "@/components/ui/resizable-navbar";


export function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#chat-section",
    },
    {
      name: "Project jam",
      link: "#project",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleDownloadResume = () => {
    const resumeUrl = "/resume.pdf"; // Path to your resume file in the public folder
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Indrani_Resume.pdf"; // The name of the downloaded file
    link.click();
  };
  const handleConnectWithMe = () => {
    window.location.href = "mailto:indranisomofficia@gmail.com";
  };
  return (
    <div className="relative w-full pt-5" style={{ fontFamily: 'Sdrobotics' }}>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary" onClick={handleDownloadResume}> Resume</NavbarButton>
            <NavbarButton variant="primary"onClick={handleConnectWithMe}>Connect with Me</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => {
                  handleDownloadResume();
                  setIsMobileMenuOpen(false);
                }}
                variant="primary"
                className="w-full"
              >
                Download Resume
              </NavbarButton>
              <NavbarButton
                onClick={() => {setIsMobileMenuOpen(false); handleConnectWithMe();}}
                variant="primary"
                className="w-full"
              >
                Connect with me
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      

      {/* Navbar */}
    </div>
  );
}


