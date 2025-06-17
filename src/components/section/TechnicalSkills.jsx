import { motion } from 'framer-motion'
import { skills } from '~/config/mockData'

const TechnicalSkills = () => {
    return (
        <section className="relative z-10 py-20 px-4  mb-16">
            <div className="max-w-full mx-auto">
                {/* Header */}
                <div className="text-center mb-16 ">
                    <h2 className="text-6xl !text-[#dbdada] md:text-7xl lg:text-8xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-6">
                        Skills
                    </h2>
                    <div className="w-24 h-1 bg-[#dbdada] mx-auto rounded-full mb-6"></div>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                        Technologies I work with to bring ideas to life
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-gray-800/50">
                                {/* Skill Icon */}
                                <div className="flex flex-col items-center text-center">
                                    <div
                                        className="text-8xl mb-4 transition-all duration-300 group-hover:scale-110"
                                        style={{ color: skill.color }}
                                    >
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-white font-semibold text-[16px] mb-1">{skill.name}</h3>
                                    <span className="text-gray-500 text-sm">{skill.category}</span>
                                </div>

                                {/* Hover Glow Effect */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                                    style={{ backgroundColor: skill.color }}
                                ></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechnicalSkills
