const Footer = () => {
    return <div className="bg-[#110d0b] p-10 relative z-30">
        <div className="flex w-full justify-center my-5">
            <ul className={`w-fix text-[#ffd89d] flex flex-col lg:flex-row gap-3 items-center xl:gap-8`}>
            <li className="text-3xl cursor-pointer">
                <div className="hover:text-[#ff6d00] flex items-center justify-center">
                Audit
                </div>
            </li>
            <li className="text-3xl cursor-pointer">
                <div className="hover:text-[#ff6d00] flex items-center justify-center">
                Contract
                </div>
            </li>
            <li className="text-3xl cursor-pointer">
                <div className="hover:text-[#ff6d00] flex items-center justify-center">
                Whitepaper
                </div>
            </li>
            <li className="text-3xl cursor-pointer">
                <div className="hover:text-[#ff6d00] flex items-center justify-center">
                Twiter
                </div>
            </li>
            <li className="text-3xl cursor-pointer">
                <div className="hover:text-[#ff6d00] flex items-center justify-center">
                Telegram
                </div>
            </li>
            </ul>
        </div>
        <div className="text-center text-[#ffd89d] text-2xl">
            © Hivemind.com, All Rights Reserved
        </div>
    </div>
}

export default Footer