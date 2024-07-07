import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { companies, endorsements } from '@/data';

const Clients = () => {
    return (
        <div className="py-20" id="testimonials">
            <h1 className="heading">
                My 
                <span className="text-purple"> Achievements</span>
            </h1>
            <div className="flex flex-col pt-14 pb-14 items-center max-lg:mt-10">
                <InfiniteMovingCards
                    items={endorsements}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    );
};

export default Clients;
