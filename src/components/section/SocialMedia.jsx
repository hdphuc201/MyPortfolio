import React from 'react'
import { information } from '~/config/mockData'

const SocialMedia = () => {
    return (
        <div className="sticky bottom-[200px] h-auto left-[5%] md:left-[2%] w-fit">
            <ul className="w-[32px]">
                {information?.map((item) => (
                    <li className="mt-10">
                        <a href={item.href} target="_blank" rel="noopener noreferrer">
                            <div className="w-[32px] h-[32px] text-[#dbdada] hover:text-[#e6d6c2] transition-colors">
                                {item.icon}
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialMedia
