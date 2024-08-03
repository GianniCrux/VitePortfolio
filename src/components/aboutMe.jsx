export default function AboutMe() {
    return (
        <section id="about" className="py-16 bg-white text-black dark:bg-black dark:text-white min-h-screen flex items-center content-center">
            <div className="container mx-auto px-4 relative">

                <div className="absolute top-0 left-1/2 bottom-0 w-[2px] bg-black dark:bg-white -translate-x-1/2"></div>
                
                <div data-aos="fade-down">
                    <h2 className="text-3xl text-blue-600 font-bold absolute left-[calc(50%-100px)] top-0 bg-white dark:bg-black tracking-tighter">ABOUT</h2>
                    <h2 className="text-3xl font-bold text-blue-600 absolute right-[calc(50%-44px)] top-4 bg-white dark:bg-black tracking-tighter">ME</h2>
                </div>
                
                <div className="flex justify-center pt-16">
                    <div className="xl:w-1/4 sm:w-1/2 pr-4" data-aos="fade-right">
                        <p className="tracking-tighter">
                        I&apos;m a passionate web developer with a keen interest in creating user-friendly and visually appealing websites. With expertise in React, Next.js, and modern web technologies, I strive to build efficient and scalable applications that make a positive impact.
                        </p>
                    </div>
                    <div className="xl:w-1/4 sm:w-1/2 pl-4 pt-4" data-aos="fade-left">
                        <p className="tracking-tighter">
                        Besides developing i love playing videogames, film, adventures and challenges, i love to go trekking, i love animals and i always try to create a good and comfortable environment so every people can feel good and at home! 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}