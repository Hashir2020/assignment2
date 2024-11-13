

export default function Navbar() {
    return (
        <div className="bg-blue-950">
            <nav>
                <div className="h-[91px]  bg-blue-950 flex items-center justify-between px-8 w-full max-w-[1422px] mx-auto">  
                   
                    {/* Brand Name */}
                    <h3 className="text-white text-[24px] font-bold px-[135px]">MY BRAND</h3>
                    
                    {/* Navigation Links */}
                    <div className="flex-grow pr-[300px]">
                        <ul className="flex items-center gap-[21px] text-white text-[11px] justify-center">
                            <li>HOME</li>
                            <li>PRODUCT</li>
                            <li>PRICING</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                  
                    {/* Buttons */}
                    <div className="flex items-center gap-[25px] pr-8">
                        <button className="text-white">Login</button>
                        <button className="bg-blue-500 rounded text-white p-[10px] h-[45px] w-[80px]">Join Us</button>
                    </div>
                </div>
            </nav>

</div>
    );
}
