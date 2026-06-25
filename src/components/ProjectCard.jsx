import { motion } from 'framer-motion';
import { HiOutlineExternalLink, HiOutlineDocumentText } from 'react-icons/hi';

const techColors = {
  'FastAPI': 'border-emerald-500/30 text-emerald-400',
  'React.js': 'border-cyan-500/30 text-cyan-400',
  'spaCy': 'border-yellow-500/30 text-yellow-400',
  'FAISS': 'border-purple-500/30 text-purple-400',
  'GDPR': 'border-red-400/30 text-red-400',
  'OpenAI GPT': 'border-emerald-500/30 text-emerald-400',
  'Python': 'border-blue-500/30 text-blue-400',
  'NLP': 'border-indigo-500/30 text-indigo-400',
  'Chain-of-Thought': 'border-amber-500/30 text-amber-400',
  'State Mgmt': 'border-cyan-500/30 text-cyan-400',
  'Redux': 'border-purple-500/30 text-purple-400',
  'Agile': 'border-green-500/30 text-green-400',
  'Solidity': 'border-gray-400/30 text-gray-400',
  'Web3.js': 'border-orange-500/30 text-orange-400',
  'Ethereum': 'border-indigo-500/30 text-indigo-400',
  'Smart Contracts': 'border-yellow-500/30 text-yellow-400',
};

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glass-card group overflow-hidden flex flex-col"
    >
      {/* Gradient accent bar */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${project.gradientFrom}, ${project.gradientTo})`,
        }}
      />

      <div className="p-6 sm:p-8 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 block">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-text-primary group-hover:text-brand-blue-light transition-colors">
              {project.title}
            </h3>
          </div>
          <span className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">
            {project.icon}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights — 3 bullets */}
        {project.highlights && (
          <ul className="space-y-2 mb-5">
            {project.highlights.slice(0, 3).map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-text-muted"
              >
                <span className="mt-1 w-1 h-1 rounded-full bg-brand-blue shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`text-xs px-2.5 py-1 rounded-md border bg-white/[0.02] font-medium ${
                techColors[t] || 'border-white/10 text-text-muted'
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons — pushed to bottom */}
        <div className="mt-auto flex gap-3">
          <a
            href={project.githubUrl || 'https://github.com/shreyas5075?tab=repositories'}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn project-btn-primary"
          >
            <HiOutlineExternalLink size={14} />
            View on GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
