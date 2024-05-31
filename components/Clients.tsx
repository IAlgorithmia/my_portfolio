import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { companies, endorsements } from '@/data';

const Clients = () => {
    return (
        <div className="py-20" id="testimonials">
            <h1 className="heading">
                Endorsements From
                <span className="text-purple"> Reputed Developers</span>
            </h1>
            <div className="flex flex-col items-center max-lg:mt-10">
                <InfiniteMovingCards
                    items={endorsements}
                    direction="right"
                    speed="slow"
                />
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                    {companies.map(({ id, img, name, nameImg }) => (
                        <div>
                            <img src={img} alt={name} className="md:w-10 w-5" />
                            <img
                                src={nameImg}
                                alt={name}
                                className="md:w-24 w-20"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clients;
