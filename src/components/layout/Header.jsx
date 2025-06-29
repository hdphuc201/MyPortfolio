import React, { useEffect, useState } from 'react'


function Header() {

    const [timer, setTimer] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval); 
    }, []);


    return (
        <header className="flex items-center justify-between p-4 bg-[#0D1117] text-white h-[70px] px-20 pt-10  ">
            <div className="logo text-5xl font-bold">PHUC HUYNH</div>
            <div className="time text-5xl font-bold">
                {timer}
            </div>
        </header>
    )
}

export default Header
