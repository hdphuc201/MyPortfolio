import React, { useRef, useState } from 'react'
import { FadeInSection } from '~/components/ScrollEffect'
import { MouseParallax } from '~/components/ParallaxEffect'
import { Github, Linkedin, Facebook, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import { message } from 'antd'

const Contact = () => {
    const form = useRef('')
    const [isSending, setIsSending] = useState(false)
    const [messageSent, setMessageSent] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()
        setIsSending(true)
        console.log(e.target.value)
        console.log('form', form)
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text)
                    setMessageSent(true)
                    setIsSending(false)
                    message.success('Message sent successfully!')
                    form.current.reset()
                },
                (error) => {
                    console.log(error.text)
                    setIsSending(false)
                }
            )
    }
    return (
        <div className="py-48 relative overflow-hidden mt-10">
            <MouseParallax strength={20} className="relative z-10">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-6xl !text-[#dbdada] md:text-7xl lg:text-8xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-6">
                            Contact
                        </h2>
                        <div className="w-24 h-1 bg-[#dbdada] mx-auto rounded-full mb-6"></div>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                            Let's discuss your project or potential collaboration
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <FadeInSection direction="left">
                            <div className="bg-[#0a0a0a] p-8 rounded-lg border border-[#222] ">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="mb-6">
                                        <label className="block text-[#888] mb-2">Your Name</label>
                                        <input
                                            type="name"
                                            name="user_name"
                                            required
                                            className="w-full p-3 bg-[#111] text-white rounded-md border border-[#333] focus:outline-none"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-[#888] mb-2">Your Email</label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            className="w-full bg-[#111] border border-[#222] rounded-md p-3 text-[#dbdada] focus:border-[#e6d6c2] outline-none"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-[#888] mb-2">Message</label>
                                        <textarea
                                            type="message"
                                            name="message"
                                            className="w-full bg-[#111] border border-[#222] rounded-md p-3 text-[#dbdada] focus:border-[#e6d6c2] outline-none h-32 resize-none"
                                        ></textarea>
                                    </div>
                                    <div className="text-center mt-16">
                                        <p className="text-xl text-gray-400 mb-6">Want to see more of my work?</p>
                                        <motion.a
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <button className="text-2xl">Send Message</button>
                                        </motion.a>
                                    </div>
                                </form>
                            </div>
                        </FadeInSection>

                        <FadeInSection direction="right" delay={200}>
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-center justify-center md:justify-start">
                                        <Mail className="w-6 h-6 mr-4 text-[#e6d6c2]" />
                                        <p>hdphuc201@gmail.com</p>
                                    </div>

                                    <div className="flex items-center justify-center md:justify-start">
                                        <div className="w-6 h-6 mr-4 flex items-center justify-center">
                                            <span className="text-[#e6d6c2] text-xl">📍</span>
                                        </div>
                                        <p>Ho Chi Minh City, Vietnam</p>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <h4 className="text-xl font-semibold mb-4">Connect with me</h4>
                                    <div className="flex justify-center md:justify-start space-x-6">
                                        <a
                                            href="https://www.linkedin.com/in/phuchuynhduy/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[#e6d6c2] transition-colors"
                                        >
                                            <Linkedin className="w-8 h-8" />
                                        </a>
                                        <a
                                            href="https://www.facebook.com/duyphuc3009"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[#e6d6c2] transition-colors"
                                        >
                                            <Facebook className="w-8 h-8" />
                                        </a>
                                        <a
                                            href="https://github.com/hdphuc201"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[#e6d6c2] transition-colors"
                                        >
                                            <Github className="w-8 h-8" />
                                        </a>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <h4 className="text-xl font-semibold mb-4">Available For</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-[#111] p-4 rounded-lg border border-[#222] hover:border-[#e6d6c2] transition-colors">
                                            <p className="font-medium">Freelance</p>
                                            <p className="text-[#888] text-sm">Available</p>
                                        </div>
                                        <div className="bg-[#111] p-4 rounded-lg border border-[#222] hover:border-[#e6d6c2] transition-colors">
                                            <p className="font-medium">Full-time</p>
                                            <p className="text-[#888] text-sm">Open to offers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                </div>
            </MouseParallax>
        </div>
    )
}

export default Contact
