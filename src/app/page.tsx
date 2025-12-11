"use client";
import React, { useState, useEffect } from 'react';
import { easeInOut } from "framer-motion";
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ArrowRight, Download, Code, Palette, Zap, Award, Briefcase, GraduationCap, ChevronDown } from 'lucide-react';

export default function CVHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const skills = [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'Node.js', level: 85 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Framer Motion', level: 87 },
  ];

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and performant web applications with modern frameworks'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces that users love'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency'
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and real-time inventory',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['Next.js', 'Stripe', 'MongoDB'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with AI insights',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'D3.js', 'REST API'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat with AI integration and sentiment analysis',
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop',
      tags: ['WebSocket', 'OpenAI', 'Express'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Project Management Tool',
      description: 'Collaborative tool with kanban boards and team analytics',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['React', 'Firebase', 'Material-UI'],
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  const experiences = [
    {
      icon: Briefcase,
      title: 'Senior Developer',
      company: 'Tech Corp',
      period: '2022 - Present',
      description: 'Leading development of enterprise applications'
    },
    {
      icon: Code,
      title: 'Full Stack Developer',
      company: 'StartUp Inc',
      period: '2020 - 2022',
      description: 'Built and maintained multiple client projects'
    },
    {
      icon: GraduationCap,
      title: 'Computer Science',
      company: 'University',
      period: '2016 - 2020',
      description: 'Bachelor\'s degree with honors'
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-background/80 backdrop-blur-xl z-40 border-b border-primary/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-primary cursor-pointer"
            >
              JD
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="text-foreground/70 hover:text-primary transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-primary/10"
          >
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ x: 10 }}
                className="block px-4 py-3 text-foreground/70 hover:text-primary hover:bg-primary/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative">
        <motion.div style={{ opacity, scale }} className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
              >
                <span className="text-primary font-semibold">👋 Welcome to my portfolio</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block"
                >
                  I'm
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="block text-primary bg-clip-text"
                >
                Saroj Joshi
                </motion.span>
              </h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-xl md:text-2xl text-foreground/80 mb-4">
                  Full Stack Developer
                </p>
                <p className="text-lg text-foreground/80 mb-2">
                  UI/UX Enthusiast
                </p>
                <p className="text-foreground/60 mb-8 leading-relaxed">
                  Transforming ideas into elegant digital solutions. Passionate about creating 
                  exceptional user experiences with clean, efficient code.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(var(--primary), 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center gap-2 shadow-lg"
                >
                  View Projects <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-primary rounded-lg text-primary font-semibold flex items-center gap-2 hover:bg-primary/10"
                >
                  Download CV <Download size={20} />
                </motion.button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex gap-4 mt-8"
              >
                {[
                  { Icon: Github, href: '#' },
                  { Icon: Linkedin, href: '#' },
                  { Icon: Mail, href: '#' }
                ].map(({ Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-lg"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div animate={floatingAnimation} className="relative w-full max-w-md mx-auto">
                <div className="relative aspect-square">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30"
                  ></motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl"
                  >
                    <img
                      src="/profile.jpg"
                      alt="Profile"
                      className="w-[550px] h-[550px] object-cover rounded-xl"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </motion.div>
                  
                  {/* Floating badges */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-4 -right-4 bg-background border-2 border-primary rounded-2xl p-4 shadow-xl"
                  >
                    <Award className="text-primary" size={32} />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute -bottom-4 -left-4 bg-background border-2 border-secondary rounded-2xl p-4 shadow-xl"
                  >
                    <Code className="text-secondary" size={32} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-foreground/50"
          >
            <span className="text-sm">Scroll Down</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* About/Skills Section */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Passionate developer with 5+ years of experience building scalable web applications
            </p>
          </motion.div>

          {/* Skills with progress bars */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              What I <span className="text-primary">Do</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 bg-secondary/30 backdrop-blur-sm rounded-2xl border border-primary/20 group hover:border-primary/50 transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors"
                >
                  <service.icon className="text-primary" size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-foreground/60">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-foreground/60">Some of my recent work</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-secondary/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all"
              >
                <div className="relative overflow-hidden h-64">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/30"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute top-4 right-4 bg-primary text-primary-foreground p-3 rounded-full"
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              My <span className="text-primary">Journey</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-4 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center"
                >
                  <exp.icon size={16} className="text-primary-foreground" />
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="bg-secondary/30 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary font-semibold mb-2">{exp.company}</p>
                  <p className="text-foreground/60">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              👋
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Let's Work <span className="text-primary">Together</span>
            </h2>
            <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto">
              Have a project in mind? Let's create something amazing together. 
              I'm always excited to work on new and challenging projects.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(var(--primary), 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold text-lg flex items-center gap-3 mx-auto shadow-2xl"
            >
              <Mail size={24} />
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60">&copy; {new Date().getFullYear()} Saroj Joshi. Crafted with 💜</p>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
