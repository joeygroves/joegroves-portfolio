import { useState } from "react";

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);

    return (
        <nav className="z-40 w-full fixed top-0 py-6 shadow-md">
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-poppins text-3xl text-deep-blue font-bold">Joe Groves</h4>
            </div>
        </nav>
    )
}

export default NavBar;