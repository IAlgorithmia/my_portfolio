'use client';
import React, { useState } from 'react';
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from 'framer-motion';
import { cn } from '@/utils/cn';
import Link from 'next/link';

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollYProgress, 'change', (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === 'number') {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(false);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    'flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] bg-black-100 rounded-full shadow-[0px_px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-4 items-center justify-center gap-x-2',
                    className
                )}
            >
                {navItems.map((navItem: any, idx: number) => (
                    <Link
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                            'border text-7xl relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full items-center flex space-x-1 dark:hover:text-neutral-300 hover:text-neutral-500'

                        )}
                    >
                        <span className="!cursor-pointer onPhone:text-xs afterPhone:text-base">
                            {navItem.name}
                        </span>
                        <span className="absolute -left-1 w-full -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                    </Link>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};
