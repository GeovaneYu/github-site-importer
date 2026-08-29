import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";

const placeholders = [
  { id: "proj-1", title: "Em breve", description: "Projeto em documentação — detalhes por aqui em breve." },
  { id: "proj-2", title: "Em breve", description: "Projeto em documentação — detalhes por aqui em breve." },
  { id: "proj-3", title: "Em breve", description: "Projeto em documentação — detalhes por aqui em breve." },
];

export default function ProjectsSection() {
  return (
    <section id="projetos" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
      <h2 className="label-mono mb-10">Projetos</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {placeholders.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="glass-card rounded-xl p-6 border-dashed"
          >
            <FolderGit2 className="w-5 h-5 text-accent mb-4" aria-hidden="true" />
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              {project.title}
            </h3>
            <p className="mt-3 text-[14px] leading-[1.6] text-muted">{project.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
