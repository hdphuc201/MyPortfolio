import React from 'react'
import { fileCV } from '~/config/mockData'
import { MagneticButton } from '../HoverEffect'
import EffectSection from '../EffectSection'
import { FadeInSection } from '../ScrollEffect'

const AboutMe = () => {
    const handleDownload = (item) => {
        const filePath =
            item.type == 'en'
                ? '/files/HuynhDuyPhuc_FrontendDeveloper_CV.pdf'
                : '/files/HuynhDuyPhuc_FrontendDeveloper_CV_VN.pdf'

        fetch(filePath)
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(blob)
                const link = document.createElement('a')
                link.href = url
                link.download =
                    item.type === 'en'
                        ? 'HuynhDuyPhuc_CV_FrontendDeveloper_EN.pdf'
                        : 'HuynhDuyPhuc_CV_FrontendDeveloper_VN.pdf'
                link.style.display = 'none'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                window.URL.revokeObjectURL(url)
            })
            .catch((error) => console.error('File download error:', error))
    }

    return (
        <EffectSection title="About Me" className="py-16 md:py-24 text-[20px] z-[-1]">
            <FadeInSection direction="up">
                <p className="text-[18px] md:text-[22px] font-light font-roboto leading-relaxed ">
                    "I am a proactive Frontend Developer with a strong ability to learn quickly and adapt to any
                    environment.
                    <br />
                    With over a year of hands-on experience in modern frontend technologies, I excel at building
                    high-performance, user-friendly interfaces. <br />I thrive in fast-paced teams, embrace challenges,
                    and continuously seek innovative solutions. <br />
                    My goal is to become a Team Lead within the next 2-3 years, driving both technical excellence and
                    team collaboration to deliver impactful products."
                </p>
                <div className="flex mt-10 gap-10  p-5 rounded-lg">
                    {fileCV.map((item) => (
                        <div onClick={() => handleDownload(item.type)}>
                            <MagneticButton className="bg-transparent border border-[#dbdada] text-[#dbdada] hover:bg-[#6366F1] hover:text-white transition-colors">
                                {item?.text || ''}
                            </MagneticButton>
                        </div>
                    ))}
                </div>
            </FadeInSection>
        </EffectSection>
    )
}

export default AboutMe
