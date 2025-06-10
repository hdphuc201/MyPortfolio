import React, { useState } from 'react'
import EffectSection from '~/components/EffectSection'
import { motion, AnimatePresence } from 'framer-motion'
import { Skills } from '~/config/mockData'


const TechnicalSkills = () => {
    const categories = Object.keys(Skills)
    const [tab, setTab] = useState('Frontend')


    return (
        <EffectSection title="Technical Skills" className=" py-16 md:py-24 text-[20px]">
            <div className="text-white px-4">
                <div className="relative w-fit mx-auto mb-10 ">
                    <div className="flex gap-8 border-b border-[#444] flex-col md:flex-row">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setTab(cat)}
                                className={`relative pb-2 text-[30px] transition-all duration-300 font-semibold 
                                  ${tab === cat ? 'text-[#e6d6c2]' : 'text-gray-400 hover:text-[#a67c52]'}
                                `}
                            >
                                {cat}
                                {tab === cat && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute -bottom-[1px] left-0 h-[3px] w-full bg-gradient-to-r from-[#e6d6c2] to-[#a67c52] rounded-full"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
                <AnimatePresence mode="wait">
                    <div className="h-full md:h-[300px]">
                        <motion.div
                            key={tab}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto "
                        >
                            {Skills[tab].map((skill, i) => (
                                <motion.div
                                    key={skill.name}
                                    className="bg-[#111] p-8  rounded-xl shadow-md flex items-center gap-4 hover:scale-[1.03] transition-transform duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="text-4xl">{skill.icon}</div>
                                    <div className="text-3xl font-medium">{skill.name}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </AnimatePresence>
            </div>
        </EffectSection>
    )
}

export default TechnicalSkills
