import { motion } from 'framer-motion'
import { Github, Eye } from 'lucide-react'
import { projects } from '~/config/mockData'

const Projects = () => {
    return (
        <section className="relative z-10 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}

                <div className="text-center mb-16">
                    <h2 className="text-6xl !text-[#dbdada] md:text-7xl lg:text-8xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-6">
                        Projects
                    </h2>
                    <div className="w-24 h-1 bg-[#dbdada] mx-auto rounded-full mb-6"></div>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                        A showcase of my recent work and personal projects
                    </p>
                </div>
                {/* Featured Projects */}
                <div className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {projects
                            .filter((project) => project.featured)
                            .map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:scale-[1.02]">
                                        {/* Project Image */}
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full aspect-[5/3] bg-[#000] object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>

                                        {/* Project Content */}
                                        <div className="p-8">
                                            <h4 className="text-3xl font-bold text-white mb-3">{project.title}</h4>
                                            <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-lg border border-blue-500/30"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Project Links */}
                                            <div className="flex gap-4 text-lg">
                                                <motion.a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Eye size={18} />
                                                    <span>Live Demo</span>
                                                </motion.a>
                                                {project.admin && (
                                                    <motion.a
                                                        href={project.admin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <Eye size={18} s />
                                                        <span>Admin panel</span>
                                                    </motion.a>
                                                )}
                                                {project.githubUrl && (
                                                    <motion.a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-300"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <Github size={18} />
                                                        <span>Code</span>
                                                    </motion.a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <p className="text-xl text-gray-400 mb-6">Want to see more of my work?</p>
                    <motion.a
                        href="https://github.com/HuynhDuyPhuc201"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Github size={24} />
                        <span className="text-2xl">View All Projects on GitHub</span>
                    </motion.a>
                </div>
            </div>
        </section>
    )
}

export default Projects
