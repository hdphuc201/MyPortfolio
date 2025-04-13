import React, { useEffect, useState } from 'react'

function Header() {

    const [timer, setTimer] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);


    return (
        <header className="flex items-center justify-between p-4 bg-[#000] text-white h-[70px] px-20 pt-10">
            <div className="logo text-5xl font-bold">PHUC HUYNH</div>
            {/* <div className="hambuger cursor-pointer h-full flex-col flex justify-center items-center gap-3">
                <div className="w-[8rem] border-b-2 border-[#fff] h-[3px] bg-[#fff]"></div>
                <div className="w-[8rem] border-b-2 border-[#fff] h-[3px] bg-[#fff]"></div>
            </div> */}
            <div className="time text-5xl font-bold">
                {timer}
            </div>
        </header>
    )
}

export default Header
