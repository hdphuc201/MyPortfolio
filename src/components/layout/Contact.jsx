import React from 'react'
import { GradientText } from '~/components/TextEffect'
import { FadeInSection } from '~/components/ScrollEffect'
import { MouseParallax } from '~/components/ParallaxEffect'
import { Github, Linkedin, Facebook, Mail } from 'lucide-react'


const Contact = () => {
  return (
    <div className="py-24 relative overflow-hidden">
    <MouseParallax strength={20} className="relative z-10">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <GradientText
                    text="Contact"
                    fromColor="from-[#e6d6c2]"
                    toColor="to-[#b2741f]"
                    className="text-[40px] md:text-[50px] font-bold mb-4"
                />
                <p className="text-[#888] max-w-2xl mx-auto">
                    Let's discuss your project or potential collaboration
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <FadeInSection direction="left">
                    <div className="bg-[#0a0a0a] p-8 rounded-lg border border-[#222] ">
                        <form>
                            <div className="mb-6">
                                <label className="block text-[#888] mb-2">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#111] border border-[#222] rounded-md p-3 text-[#dbdada] focus:border-[#e6d6c2] outline-none"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-[#888] mb-2">Your Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-[#111] border border-[#222] rounded-md p-3 text-[#dbdada] focus:border-[#e6d6c2] outline-none"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-[#888] mb-2">Message</label>
                                <textarea className="w-full bg-[#111] border border-[#222] rounded-md p-3 text-[#dbdada] focus:border-[#e6d6c2] outline-none h-32 resize-none"></textarea>
                            </div>
                            <ButtonGlow
                                className="w-full bg-[#6366F1] border-none"
                                glowColor="rgba(114, 74, 32, 0.6)"
                            >
                                Send Message
                            </ButtonGlow>
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
                                    href="https://github.com/HuynhDuyPhuc201"
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
