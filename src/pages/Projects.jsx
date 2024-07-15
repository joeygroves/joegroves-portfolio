const Projects = () => {
    return(
        <section
            id="projects"
            className="pt-48 pb-48"
        >
            <div>
                <div>
                    <p className="font-poppins font-semibold text-3xl mb-10 text-blue text-center">PROJECTS</p>
                </div>
            </div>

            <div className="flex flex-col justify-between items-center mx-8 py-9">
                <div className="md:flex">
                    <div>
                        <p className="font-poppins font-semibold text-xl text-deep-blue">To-Do List App</p>
                        <p className="font-poppins text-md text-grey mb-4">April - May 2024</p>

                        <p className="font-poppins text-deep-blue mb-2">A 10-Week part-time product marketing internship with GlowTouch. 
                            Redesigned the homepage of SaaS product HiveDesk, aiming to direct user flow 
                            and increase CTR from homepage to free trial download page.
                        </p>

                        <button 
                            className="my-4 bg-transparent hover:bg-blue text-deep-blue font-semibold 
                            hover:text-white transition duration-500 py-2 px-4 border border-deep-blue hover:border-transparent rounded"
                        >
                            View on GitHub
                        </button>
                        
                        <div className="md:mt-0 mt-5 mb-6">
                            <div className="flex">
                                <p className="font-poppins text-sm text-deep-blue font-semibold mb-2 mr-8">Technologies</p>
                                <p className="font-poppins text-sm text-deep-blue mb-2">React, Express, Node.js, MongoDB, Tailwind CSS, Figma</p>
                            </div>
                            <div className="flex">
                                <p className="font-poppins text-sm text-deep-blue font-semibold mb-2 mr-8">Skills</p>
                                <p className="font-poppins text-sm text-deep-blue mb-2">Front-End, Back-End, Database Management, UX Design</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img
                            src="../src/assets/to-do-app.png"
                            alt="to-do app"
                            className="md:max-w-[600px] md:ml-10"
                        />
                    </div>
                </div>
            </div>


        </section>
    )

}

export default Projects;