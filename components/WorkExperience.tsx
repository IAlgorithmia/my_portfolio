import { workExperience } from '@/data';
import React from 'react';
import { Button } from './ui/MovingBorders';

const WorkExperience = () => {
    return (
        <div className="pb-20" id="WorkExperience">
            <h1 className="heading">
                My
                <span className="text-purple"> Online Profiles</span>
            </h1>
            <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
                {workExperience.map((card) => (
                        <Button
                            key={card.id}
                            duration={Math.floor(Math.random() * 4000 + 4000)}
                            borderRadius="1.75rem"
                            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
                        >
                            <a href={card.hyperlink} target='_blank' className="flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                                <img
                                    src={card.thumbnail}
                                    alt={card.thumbnail}
                                    className="rounded-2xl lg:w-32 md:w-20 w-16"
                                />
                                <div className="lg:ms-5">
                                    <h1 className="text-start text-xl md:text-2xl font-bold">
                                        {card.title}
                                    </h1>
                                    <p className="text-start text-white-100 mt-3 font-semibold">
                                        {card.desc}
                                    </p>
                                </div>
                            </a>
                        </Button>
                ))}
            </div>
        </div>
    );
};

export default WorkExperience;
