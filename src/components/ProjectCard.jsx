import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="glass rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer group">
      <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-100 group-hover:text-blue-500 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
      >
        View Project
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
};

export default ProjectCard;
