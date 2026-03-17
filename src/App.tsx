import React from 'react';
import { 
  Terminal, 
  Cloud, 
  Github, 
  Linkedin, 
  Mail, 
  Zap,
  FlaskConical,
  Rocket,
  Code,
  Download,
  MapPin
} from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => (
  <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center">
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="glass-card px-6 py-2 rounded-full flex gap-6 md:gap-8 items-center border-white/5"
    >
      <a href="#hero" className="text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors uppercase tracking-wider">Home</a>
      <a href="#journey" className="text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors uppercase tracking-wider">Journey</a>
      <a href="#skills" className="text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors uppercase tracking-wider">Tech</a>
      <a href="#projects" className="text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors uppercase tracking-wider">Projects</a>
      <div className="w-px h-4 bg-white/10 mx-2" />
      <a href="#contact" className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-wider">Contact</a>
    </motion.div>
  </nav>
);

const LiveStatus = () => (
  <div className="flex items-center gap-3 px-4 py-2 bg-emerald-500/5 border border-emerald-500/10 rounded-full w-fit mb-8">
    <div className="relative">
      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping absolute" />
      <div className="w-2 h-2 rounded-full bg-emerald-500 relative" />
    </div>
    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.2em]">Currently Learning: Llama 3 Fine-tuning</span>
  </div>
);

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-16 text-center">
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{children}</h2>
    {subtitle && <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-24 h-1 bg-emerald-500/20 mx-auto mt-6 rounded-full overflow-hidden">
      <div className="w-1/2 h-full bg-emerald-500" />
    </div>
  </div>
);

const GrowthMilestone = ({ year, title, company, description }: { year: string, title: string, company?: string, description: string }) => (
  <div className="relative pl-8 pb-12 last:pb-0 border-l border-emerald-500/20 ml-4 group">
    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover:scale-150 transition-transform" />
    <span className="text-xs font-bold text-emerald-500/60 uppercase tracking-widest mb-1 block">{year}</span>
    <h3 className="text-xl font-bold mb-1">{title}</h3>
    {company && <p className="text-emerald-400 text-sm font-semibold mb-3">{company}</p>}
    <p className="text-slate-400 leading-relaxed max-w-2xl">{description}</p>
  </div>
);

const SkillCard = ({ title, skills, icon: Icon, status = 'mastered' }: { title: string, skills: string[], icon: any, status?: 'mastered' | 'learning' }) => (
  <div className="glass-card p-8 rounded-2xl group border-white/5">
    <div className="flex items-center justify-between mb-6">
      <div className="p-3 bg-emerald-500/10 rounded-xl group-hover:scale-110 transition-transform">
        <Icon className="text-emerald-400 w-6 h-6" />
      </div>
      {status === 'learning' && (
        <span className="text-[10px] font-bold text-amber-500 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5">TRAINING</span>
      )}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-sm text-slate-400 font-medium group-hover:text-slate-200 transition-colors">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ProjectCard = ({ title, description, tags, github }: { title: string, description: string, tags: string[], github: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-1 rounded-3xl group border-white/5"
  >
    <div className="p-8 h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">{title}</h3>
        <a href={github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-emerald-500/10 rounded-full transition-colors">
          <Github className="text-slate-400 group-hover:text-emerald-400" size={24} />
        </a>
      </div>
      <p className="text-slate-400 mb-8 leading-relaxed line-clamp-3 font-medium">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] font-bold text-emerald-500/70 bg-emerald-500/5 px-2 py-1 rounded-md border border-emerald-500/10 uppercase tracking-tighter">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative bg-[#09090b] text-slate-100 font-sans selection:bg-emerald-500/30">
      {/* Background Atmosphere */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-30"
        style={{
          background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.08), transparent 60%)`
        }}
      />
      <div className="fixed inset-0 cyber-grid opacity-[0.15] pointer-events-none" />
      
      <Navbar />

      <main className="relative z-10 container mx-auto px-6 max-w-6xl">
        {/* Floating Scanline */}
        <div className="scanline" />

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex flex-col justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <LiveStatus />
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
              The Journey of an <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 glow-text">
                Evolving Engineer.
              </span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium mb-8">
                  I'm Kwabena, a developer based in <span className="text-emerald-400 border-b border-emerald-400/20">Accra, Ghana</span>. 
                  I build stuff that works, and I obsess over why it works.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:nissiopong669@gmail.com" className="bg-emerald-500 text-slate-950 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-400 transition-all hover:scale-105 flex items-center gap-2 group shadow-xl shadow-emerald-500/20">
                    <Mail size={20} className="group-hover:rotate-12 transition-transform" /> Let's Chat
                  </a>
                  <a href="#journey" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                    <Rocket size={20} /> View Journey
                  </a>
                </div>
              </div>
              
              <div className="glass-card p-8 rounded-3xl border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Code size={120} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-emerald-400">
                    <MapPin size={18} /> My Focus
                  </h3>
                  <p className="text-slate-400 leading-relaxed font-medium">
                    Currently deep-diving into <span className="text-slate-100">distributed systems</span> and <span className="text-slate-100">generative AI</span>. 
                    I'm documenting my path from writing raw assembly to architecting cloud-native solutions that scale to millions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Journey Section */}
        <section id="journey" className="py-40">
          <SectionHeading subtitle="The milestones that shaped my path.">Growth Evolution</SectionHeading>
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-12 rounded-[2.5rem] border-white/5">
              <GrowthMilestone 
                year="2022"
                title="The First Semicolon"
                description="Started with C++. Spent weeks understanding memory management and pointers. It was painful, but it taught me that I love the raw logic of computing."
              />
              <GrowthMilestone 
                year="2023"
                title="Full-Stack Discovery"
                company="Personal Projects"
                description="Built 'The Sync Board' to tackle real-time synchronization. Mastered React, WebSockets, and the thrill of seeing users interact in real-time."
              />
              <GrowthMilestone 
                year="2024"
                title="Cloud & Infrastructure"
                company="Open Source Contributor"
                description="Became obsessed with automation. Shifted from building apps to building the systems they run on. AWS, Docker, and CI/CD became my playground."
              />
              <GrowthMilestone 
                year="2025"
                title="Intelligence Layer"
                description="Developing autonomous systems that integrate LLMs into production workflows. Fine-tuning models to act as intelligent agents."
              />
            </div>
          </div>
        </section>

        {/* Tech Arsenal Section */}
        <section id="skills" className="py-40">
          <SectionHeading subtitle="A toolkit built with curiosity and tempered by experience.">Tech Arsenal</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard 
              title="Solid Foundations" 
              icon={Code}
              skills={["TypeScript", "React", "Node.js", "C/C++", "PostgreSQL", "Go"]} 
            />
            <SkillCard 
              title="Cloud Infrastructure" 
              icon={Cloud}
              skills={["AWS", "Docker", "Terraform", "Nginx", "Linux", "Kubernetes"]} 
            />
            <SkillCard 
              title="AI & Intelligence" 
              icon={Zap}
              status="learning"
              skills={["PyTorch", "HuggingFace", "DPO", "Llama 3", "Vector DBs", "LangChain"]} 
            />
          </div>
        </section>

        {/* Lab Section */}
        <section id="lab" className="py-40">
          <SectionHeading subtitle="Prototypes and research modules.">The Personal Lab</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-10 rounded-3xl border-white/5 hover:border-emerald-500/20 group">
              <FlaskConical className="text-emerald-400 mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4">Voice-to-SQL AI</h3>
              <p className="text-slate-400 mb-8 font-medium">Turn natural language into complex relational queries. Testing zero-shot capabilities on massive datasets.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-emerald-400">
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> ACTIVE RESEARCH</span>
              </div>
            </div>
            <div className="glass-card p-10 rounded-3xl border-white/5 hover:border-emerald-500/20 group">
              <Terminal className="text-emerald-400 mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4">Custom Kernel Loader</h3>
              <p className="text-slate-400 mb-8 font-medium">A minimal x86_64 bootloader written in assembly. Understanding the bridge between hardware and software.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                <span>ON HIBERNATION</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-40">
          <SectionHeading subtitle="Deployment ready applications.">Selected Operations</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Nexus Campus Hub"
              description="Full-stack student utility ecosystem featuring real-time navigation and internship algorithms."
              tags={["React", "Supabase", "PostgreSQL"]}
              github="https://github.com/kkopong"
            />
            <ProjectCard 
              title="The Sync Board"
              description="Collaborative environment with custom WebSockets for sub-50ms synchronization."
              tags={["Next.js", "Redis", "Framer Motion"]}
              github="https://github.com/kkopong"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tight">Let's Connect <br /> Beyond the Screen</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://linkedin.com/in/kwabena-darko-opong" className="glass-card px-8 py-4 rounded-2xl font-bold hover:text-emerald-400 transition-all flex items-center gap-3">
                <Linkedin size={24} /> LinkedIn
              </a>
              <a href="https://github.com/kkopong" className="glass-card px-8 py-4 rounded-2xl font-bold hover:text-emerald-400 transition-all flex items-center gap-3">
                <Github size={24} /> GitHub
              </a>
              <a href="mailto:nissiopong669@gmail.com" className="bg-emerald-500 text-slate-950 px-10 py-5 rounded-2xl font-bold hover:bg-emerald-400 transition-all hover:scale-105 flex items-center gap-3 shadow-2xl shadow-emerald-500/30">
                <Mail size={24} /> Send an Email
              </a>
            </div>
            <div className="mt-20">
              <a 
                href="/CV.pdf" 
                download="Kwabena_Darko_Opong_CV.pdf"
                className="text-slate-500 hover:text-emerald-400 text-sm font-bold flex items-center gap-2 mx-auto transition-colors w-fit"
              >
                <Download size={16} /> Download Resume / CV
              </a>
            </div>
          </div>
        </section>

        <footer className="py-20 text-center border-t border-white/5">
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.5em] mb-4">
            &copy; {new Date().getFullYear()} Kwabena Darko Opong // Built in the Open
          </p>
          <p className="text-slate-700 text-[9px] font-medium max-w-sm mx-auto">
            This portfolio was built with React, Tailwind CSS, and Framer Motion. Inspired by the clarity of professional builders.
          </p>
        </footer>
      </main>
    </div>
  );
}
