"use client";

import React, { useState, useMemo } from "react";
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
  Code,
  Palette,
  Zap,
  Award,
  Briefcase,
  GraduationCap,
  ChevronDown,
} from "lucide-react";

/**
 * Full optimized single-file portfolio page
 *  - Fixed JSX.Element issue
 *  - Valid easing functions only
 *  - Optimized animations
 *  - Uses useMemo for static arrays
 */

export default function CVHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: easeInOut },
    },
  };

  // Floating Animation
  const floatingAnimation = useMemo(
    () => ({
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut,
      },
    }),
    []
  );

  // Static Data (memoized)
  const skills = useMemo(
    () => [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 87 },
    ],
    []
  );

  const services = useMemo(
    () => [
      {
        icon: Code,
        title: "Web Development",
        description:
          "Building responsive and performant web applications with modern frameworks",
      },
      {
        icon: Palette,
        title: "UI/UX Design",
        description:
          "Creating beautiful and intuitive user interfaces that users love",
      },
      {
        icon: Zap,
        title: "Performance",
        description: "Optimizing applications for speed and efficiency",
      },
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        title: "E-Commerce Platform",
        description:
          "Full-stack e-commerce solution with payment integration and real-time inventory",
        image:
          "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=900&fit=crop&q=80",
        tags: ["Next.js", "Stripe", "MongoDB"],
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        title: "Social Media Dashboard",
        description:
          "Analytics dashboard for social media management with AI insights",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=900&fit=crop&q=80",
        tags: ["React", "D3.js", "REST API"],
        gradient: "from-purple-500 to-pink-500",
      },
      {
        title: "AI Chat Application",
        description:
          "Real-time chat with AI integration and sentiment analysis",
        image:
          "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=1200&h=900&fit=crop&q=80",
        tags: ["WebSocket", "OpenAI", "Express"],
        gradient: "from-orange-500 to-red-500",
      },
      {
        title: "Project Management Tool",
        description:
          "Collaborative tool with kanban boards and team analytics",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=900&fit=crop&q=80",
        tags: ["React", "Firebase", "Material-UI"],
        gradient: "from-green-500 to-teal-500",
      },
    ],
    []
  );

  const experiences = useMemo(
    () => [
      {
        icon: Briefcase,
        title: "Senior Developer",
        company: "Tech Corp",
        period: "2022 - Present",
        description: "Leading development of enterprise applications",
      },
      {
        icon: Code,
        title: "Full Stack Developer",
        company: "StartUp Inc",
        period: "2020 - 2022",
        description: "Built and maintained multiple client projects",
      },
      {
        icon: GraduationCap,
        title: "Computer Science",
        company: "University",
        period: "2016 - 2020",
        description: "Bachelor's degree with honors",
      },
    ],
    []
  );

  // Navigation Component
  const NavLinks = () => (
    <>
      {["Home", "About", "Services", "Projects", "Contact"].map((item, i) => (
        <motion.a
          key={item}
          href={`#${item.toLowerCase()}`}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          whileHover={{ y: -2 }}
          className="text-foreground/80 hover:text-primary transition-colors relative group"
        >
          {item}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
        </motion.a>
      ))}
    </>
  );

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/18 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/18 blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/8 blur-3xl rounded-full" />
      </div>

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 w-full bg-background/70 backdrop-blur-xl z-40 border-b border-primary/10"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-primary">
              JD
            </motion.div>

            <div className="hidden md:flex space-x-8">
              <NavLinks />
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-background/95 border-t border-primary/10"
          >
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ x: 10 }}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-4 relative">
        <motion.div style={{ opacity, scale }} className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-primary font-semibold">👋 Welcome to my portfolio</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <motion.span initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
                  I'm
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="block text-primary"
                >
                  Saroj Joshi
                </motion.span>
              </h1>

              <p className="text-xl text-foreground/80 mb-2">Full Stack Developer</p>
              <p className="text-lg text-foreground/70 mb-3">UI/UX Enthusiast</p>
              <p className="text-foreground/60 mb-8">
                Transforming ideas into elegant digital solutions with clean, efficient code.
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg flex items-center gap-2"
                >
                  View Projects <ArrowRight size={18} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 border border-primary text-primary rounded-lg flex items-center gap-2"
                >
                  Download CV <Download size={18} />
                </motion.button>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-8">
                {[Github, Linkedin, Mail].map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.15 }}
                    className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full text-primary"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* IMAGE + FLOAT */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
              <motion.div animate={floatingAnimation} className="relative max-w-md mx-auto">
                <div className="relative aspect-square">
                  {/* Rotating glow */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: [0, 0, 1, 1] }}
                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30"
                  />

                  <div className="relative overflow-hidden rounded-3xl border-4 border-primary/30">
                    <img
                      src="/profile.jpg"
                      className="w-[550px] h-[550px] object-cover"
                      alt=""
                    />
                  </div>

                  {/* Floating icons */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: easeInOut }}
                    className="absolute -top-6 -right-6 bg-background border p-4 rounded-xl"
                  >
                    <Award className="text-primary" size={28} />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: easeInOut }}
                    className="absolute -bottom-6 -left-6 bg-background border p-4 rounded-xl"
                  >
                    <Code className="text-secondary" size={28} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Down */}
          <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="text-foreground/50 flex flex-col items-center"
            >
              <span>Scroll Down</span>
              <ChevronDown size={22} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 bg-secondary/20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-3">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto mb-10">
            Passionate developer with 5+ years of experience building scalable web applications.
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {skills.map((skill, i) => (
              <motion.div key={skill.name} variants={itemVariants} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>

                <div className="h-3 bg-secondary rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">
            What I <span className="text-primary">Do</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-6 bg-secondary/30 border rounded-2xl"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="text-primary" size={32} />
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/60">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-secondary/20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-3">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-foreground/60 mb-10">Some of my recent work</p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="border bg-secondary/30 rounded-2xl overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 text-left">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 mb-4">{project.description}</p>

                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">
            My <span className="text-primary">Journey</span>
          </h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative pl-20 pb-10"
              >
                <div className="absolute left-4 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                  <exp.icon size={16} />
                </div>

                <div className="bg-secondary/30 border p-6 rounded-xl text-left">
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <span className="text-primary text-sm bg-primary/10 px-2 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary font-semibold">{exp.company}</p>
                  <p className="text-foreground/60">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-secondary/20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-6xl mb-4 animate-pulse">👋</div>

          <h2 className="text-4xl font-bold mb-4">
            Let's Work <span className="text-primary">Together</span>
          </h2>

          <p className="text-lg text-foreground/60 mb-8">
            I’m always excited to collaborate on new projects.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-10 py-4 bg-primary text-white rounded-full font-semibold flex items-center gap-2 mx-auto"
          >
            <Mail size={22} />
            Get In Touch
          </motion.button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-primary/10 text-center text-foreground/60">
        © {new Date().getFullYear()} Saroj Joshi — Crafted with ❤️
      </footer>
    </div>
  );
}
