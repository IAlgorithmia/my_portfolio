import Approach from '@/components/Approach';
import Clients from '@/components/Clients';
import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import RecentProjects from '@/components/RecentProjects';
import WorkExperience from '@/components/WorkExperience';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';
import Image from 'next/image';
import { FaHome } from 'react-icons/fa';

export default function Home() {
    return (
      <main className='relative bg-black-100 text-gray-50 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5'>
            <div className='max-w-7xl w-full'>
                <FloatingNav navItems={navItems}/>
                <Hero />
                <Grid />
                <RecentProjects />
                <Clients />
                <WorkExperience />
                <Approach />
                <Footer />
            </div>
        </main>
    );
}
