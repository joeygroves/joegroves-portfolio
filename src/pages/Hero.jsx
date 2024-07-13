import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Hero = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
        >
            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                    <img 
                        src="../src/assets/Joey_Standing.png"
                        alt="profile"
                        className="z-10 w-full max-w-[200px] md:max-w-[300px]"
                    />
                ) : (
                    /* For when it is below medium screens */
                    <img 
                        src="../src/assets/Joey_Standing.png"
                        alt="profile"
                        className="z-10 w-full max-w-[200px] md:max-w-[300px]"
                    />
                )}
            </div>

            {/* MAIN SECTION */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                <p className="text-8xl">Hello World!</p>
            </div>
        </section>
    )
}

export default Hero;