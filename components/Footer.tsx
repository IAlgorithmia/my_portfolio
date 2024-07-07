import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '@/data';

const Footer = () => {
    return (
        <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    I'd love to hear about
                    <span className="text-purple"> opportunities </span>
                </h1>
                <p className="text-white md:mt-10 my-5 text-xl text-center">
                    I'm eager to work with you/your organization and help you
                    achieve your goals
                </p>
                <a href="mailto:vaibhavsh.2k3@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
                <div className="flex mt-16 md:flex-row flex-col items-center justify-between w-full">
                    <p className="text-sm md:text-base md:font-normal font-light">
                        Copyright &copy; 2024 Vaibhav
                    </p>
                    <div className="flex items-center gap-6 md:gap-3">
                        {socialMedia.map((profile) => (
                            <div
                                key={profile.id}
                                className="flex items-center justify-center h-10 w-10 cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg order border-black-300 "
                            >
                                <a href={profile.link}>
                                    <img
                                        src={profile.img}
                                        alt={profile.img}
                                        width={30}
                                        height={30}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
