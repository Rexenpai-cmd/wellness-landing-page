import React, { useState } from "react";
import { heroBg, nav, search, wellness, whiteArrowDown } from "../constants";
import HamburgerMenu from "./HamburgerMenu";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
    const [menu, setMenu] = useState(false);

    function toggleMenu() {
        if (menu) {
            setMenu(false);
            enablePageScroll();
        } else {
            setMenu(true);
            disablePageScroll();
        }
    }

    return (
        <div className="fixed top-0 py-2.5 right-0 left-0 z-50">
            <div className="flex justify-between px-5 w-full md:px-10 lg:px-25">
                <HamburgerMenu
                    className="hidden md:flex lg:hidden"
                    toggleMenu={toggleMenu}
                />

                <img src={wellness} alt="Wellness" className="z-10" />
                <nav
                    className={`${menu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none lg:pointer-events-auto lg:opacity-100"} flex fixed top-0 left-0 bottom-0 right-0 transition-opacity duration-300 ease-in-out lg:flex lg:static lg:mx-auto`}
                >
                    <div
                        style={{ backgroundImage: `url(${heroBg})` }}
                        className="fixed top-0 left-0 bottom-0 right-0 bg-cover bg-center bg-no-repeat lg:hidden"
                    />
                    <div className="relative flex items-center flex-col m-auto gap-10 lg:flex-row lg:gap-10">
                        {nav.map((i, index) =>
                            i.url ? (
                                <a
                                    onClick={() => toggleMenu()}
                                    href={i.url}
                                    className="text-[28px] text-white font-medium md:text-h9 hover:text-secondary transition-colors duration-300 lg:text-s6"
                                >
                                    {i.title}
                                </a>
                            ) : (
                                <button
                                    onClick={() => toggleMenu()}
                                    className="flex items-center justify-center gap-2.5 cursor-pointer"
                                >
                                    <a className="text-[28px] text-white  font-medium md:text-h9 hover:text-secondary transition-colors duration-300 lg:text-s6">
                                        {i.title}
                                    </a>
                                    <img
                                        src={whiteArrowDown}
                                        alt="Arrow Down"
                                        className="h-7.5 md:h-10 lg:h-4.5"
                                    />
                                </button>
                            ),
                        )}
                    </div>
                </nav>
                <div className="hidden relative items-center justify-between border border-white h-full w-60.25 px-6 py-4 rounded-2xl gap-3.5 lg:flex">
                    <img src={search} alt="Search" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="text-b4 text-white outline-none border-none"
                    />
                </div>
                <HamburgerMenu
                    className="flex md:hidden"
                    toggleMenu={toggleMenu}
                />
                <button className="hidden md:flex items-center justify-center lg:hidden z-10">
                    <img src={search} alt="Search" className="h-9.5 w-9.5" />
                </button>
            </div>
        </div>
    );
};

export default Header;
