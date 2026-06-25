import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { HiOutlineDocumentText, HiOutlineChat, HiOutlineClipboardList, HiOutlineCube, HiOutlineChartBar, HiOutlineLightningBolt } from 'react-icons/hi';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'ai', label: 'AI / ML' },
  { key: 'web', label: 'Web Dev' },
  { key: 'blockchain', label: 'Blockchain' },
];

const projects = [
  {
    title: 'FinLit AI',
    category: 'MSc Dissertation',
    filter: 'ai',
    icon: <HiOutlineDocumentText />,
    description:
      'An AI-powered financial document literacy tool that demystifies complex financial jargon using a sophisticated six-stage Retrieval-Augmented Generation pipeline.',
    highlights: [
      'Six-stage RAG pipeline: ingest → chunk → embed → retrieve → rerank → generate',
      'Privacy-by-design architecture with full GDPR compliance',
      'Semantic vector search powered by FAISS for sub-second retrieval',
    ],
    tech: ['FastAPI', 'React.js', 'spaCy', 'FAISS', 'GDPR'],
    gradientFrom: '#3b82f6',
    gradientTo: '#818cf8',
    demoUrl: '#',
    pptUrl: '#',
  },
  {
    title: 'KronosAI',
    category: 'Personal AI Assistant',
    filter: 'ai',
    icon: <HiOutlineChat />,
    description:
      'A desktop personal assistant powered by OpenAI GPT models, achieving 90%+ intent recognition accuracy through chain-of-thought prompting and contextual memory.',
    highlights: [
      '90%+ intent recognition accuracy across diverse queries',
      'Chain-of-thought prompting for multi-step reasoning tasks',
      'Contextual conversation memory with session persistence',
    ],
    tech: ['OpenAI GPT', 'Python', 'NLP', 'Chain-of-Thought'],
    gradientFrom: '#818cf8',
    gradientTo: '#c084fc',
    demoUrl: '#',
    pptUrl: '#',
  },
  {
    title: 'Ollert',
    category: 'Workload Management',
    filter: 'web',
    icon: <HiOutlineClipboardList />,
    description:
      'A minimal yet powerful workload management system built for academic teams. Served as the State Management Lead, architecting the React.js state layer.',
    highlights: [
      'State Management Lead — designed global state architecture',
      'Role-based dashboards for admin and standard users',
      'Real-time workload tracking with interactive data visualizations',
    ],
    tech: ['React.js', 'State Mgmt', 'Redux', 'Agile'],
    gradientFrom: '#22d3ee',
    gradientTo: '#3b82f6',
    demoUrl: '#',
    pptUrl: '#',
  },
  {
    title: 'NFT Marketplace',
    category: 'Web3 & Blockchain',
    filter: 'blockchain',
    icon: <HiOutlineCube />,
    description:
      'A full-stack decentralized marketplace built on the Ethereum blockchain, enabling users to mint, list, and trade NFTs with secure smart contract interactions.',
    highlights: [
      'End-to-end decentralized architecture on Ethereum',
      'Custom Solidity smart contracts for minting and trading',
      'MetaMask authentication and transaction signing',
    ],
    tech: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts'],
    gradientFrom: '#f59e0b',
    gradientTo: '#ef4444',
    demoUrl: '#',
    pptUrl: '#',
  },
  {
    title: 'ApexIntelligence',
    category: 'Telemetry Analytics Platform',
    filter: 'ai',
    icon: <HiOutlineLightningBolt />,
    description:
      'A real-time motorsport vehicle dynamics telemetry platform that automates performance analysis using high-frequency multi-channel sensor logs.',
    highlights: [
      'Implemented Dynamic Time Warping (DTW) to resample temporal sequences',
      'Built an unsupervised anomaly pipeline using Isolation Forests',
      'Orchestrated a multi-agent generative loop via the Gemini API',
    ],
    tech: ['Python', 'Scikit-learn', 'SciPy', 'Gemini API', 'Streamlit'],
    gradientFrom: '#ef4444',
    gradientTo: '#f97316',
    demoUrl: '#',
    pptUrl: '#',
  },
  {
    title: 'Customer Churn Prediction',
    category: 'Business Impact Dashboard',
    filter: 'ai',
    icon: <HiOutlineChartBar />,
    description:
      'An end-to-end churn prediction pipeline modeling targeted retention campaigns against estimated lifetime value, predicting $8.3M in revenue-at-risk.',
    highlights: [
      'Built pipeline using Scikit-learn and XGBoost achieving 83% ROC-AUC',
      'Integrated SHAP-based explainability for transparent diagnostics',
      'Deployed live interactive Streamlit dashboard for ROI analysis',
    ],
    tech: ['Python', 'SQL', 'XGBoost', 'SHAP', 'Streamlit'],
    gradientFrom: '#10b981',
    gradientTo: '#3b82f6',
    demoUrl: '#',
    pptUrl: '#',
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.filter === activeFilter);

  return (
    <section id="projects" className="relative">
      {/* Background accents */}
      <div className="mesh-gradient" style={{ background: '#818cf8', top: '10%', left: '-10%', width: '450px', height: '450px', opacity: 0.05 }} />
      <div className="mesh-gradient" style={{ background: '#22d3ee', bottom: '15%', right: '-12%', width: '500px', height: '500px', animationDelay: '-12s', opacity: 0.04 }} />
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Featured Work</p>
          <h2 className="section-title">
            AI & Data Science <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mb-10">
            Building intelligent systems that bridge cutting-edge research with
            real-world applications.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`filter-tab ${activeFilter === f.key ? 'filter-tab-active' : ''}`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
