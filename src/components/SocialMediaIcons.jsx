const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/joewesleygroves"
                target="_blank"
                rel="noreferrer"
            >
                <img 
                    src="../src/assets/linkedin.svg"
                    alt="linkedin-link"
                />
            </a>
        </div>
    );
};

export default SocialMediaIcons;