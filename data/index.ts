export const navItems = [
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Achievements', link: '#testimonials' },
    { name: 'Contact', link: '#contact' },
];

export const gridItems = [
    {
        id: 1,
        title: 'I value collaboration and prioritize open communication ',
        description: '',
        className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
        imgClassName: 'w-full h-full',
        titleClassName: 'justify-end',
        img: '/b1.svg',
        spareImg: '',
    },
    {
        id: 2,
        title: "I'm adaptable with work hours and open to remote opportunities",
        description: '',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
        imgClassName: '',
        titleClassName: 'justify-start',
        img: '',
        spareImg: '',
    },
    {
        id: 3,
        title: 'My tech stack',
        description: "I'm constantly UpSkilling ",
        className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
        imgClassName: '',
        titleClassName: 'justify-center',
        img: '',
        spareImg: '',
    },
    {
        id: 4,
        title: 'I program with passion, creativity and the desire to constantly improve.',
        description: '',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
        imgClassName: '',
        titleClassName: 'justify-start',
        img: '/grid.svg',
        spareImg: '/b4.svg',
    },

    {
        id: 5,
        title: 'Currently pushing my Competitive Programming to Perfection',
        description: 'The Inside Scoop',
        className: 'md:col-span-3 md:row-span-2',
        imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
        titleClassName: 'justify-center md:justify-start lg:justify-center',
        img: './public/b5.svg',
        spareImg: '/grid.svg',
    },
    {
        id: 6,
        title: 'Checkout my resume!',
        description: '',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
        imgClassName: '',
        titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
        img: '',
        spareImg: '',
    },
];

export const projects = [
    {
        id: 1,
        title: 'Byte Bridge - Video Conferencing App',
        des: 'Simplify your video conferencing experience with Byte Bridge. Seamlessly connect with colleagues and friends.',
        img: '/p3.svg',
        iconLists: [
            '/next.svg',
            '/tail.svg',
            '/ts.svg',
            '/stream.svg',
            '/c.svg',
        ],
        link: 'https://byte-bridge-omega.vercel.app/',
    },
    {
        id: 2,
        title: 'Byte Bridge - World Wide Banking Solution',
        des: 'A robust banking app that helps you in simplifying personal money and asset management.',
        img: '/p2.svg',
        iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/plaid.svg', '/c.svg'],
        link: 'https://byte-bank-sage.vercel.app/',
    },
];

export const endorsements = [
    {
        quote: 'Achieved a rank of 5036 in JEE Mains 2022 examination out of Tens of Lakhs of Competitors',
        name: 'NTA',
        title: 'Mathematics Physics Chemistry',
    },
    {
        quote: 'Honoured as the District Topper in 12th Standard - Final year High School in CBSE 2022 after scoring 97.8 Percentage Marks',
        name: 'CBSE',
        title: 'Computer Science Mathematics Physics Biology',
    },
    {
        quote: 'Joined NIT Kurukshetra to pursue Bachelors of Technology in Computer Science and Engineering, maintaining a CGPA of 9.5 overall',
        name: 'NIT Kkr',
        title: 'Computer Science',
    },
    {
        quote: 'Reached high ranks on platforms like Leetcode, Codeforces and Codechef along with builing complex full stack projects.',
        name: 'Coding and Development',
        title: 'NextJS C++',
    },
    {
        quote: 'Secured a rank of 3000 in KVPY-SX 2022',
        name: 'IISc Bengaluru',
        title: 'Mathematics Physics Aptitude',
    },
    {
        quote: 'Secured a rank of 8000 in JEE Adv 2022',
        name: 'IITs',
        title: 'Mathematics Physics Aptitude',
    },
];

export const companies = [
    {
        id: 1,
        name: 'cloudinary',
        img: '/cloud.svg',
        nameImg: '/cloudName.svg',
    },
    {
        id: 2,
        name: 'appwrite',
        img: '/app.svg',
        nameImg: '/appName.svg',
    },
    {
        id: 3,
        name: 'HOSTINGER',
        img: '/host.svg',
        nameImg: '/hostName.svg',
    },
    {
        id: 4,
        name: 'stream',
        img: '/s.svg',
        nameImg: '/streamName.svg',
    },
    {
        id: 5,
        name: 'docker.',
        img: '/dock.svg',
        nameImg: '/dockerName.svg',
    },
];

export const workExperience = [
    {
        id: 1,
        title: 'LeetCode',
        desc: '500+ Problems Solved, 15+ Contests, Top 10% Globally',
        className: 'md:col-span-2',
        thumbnail: '/exp1.svg',
        hyperlink: 'https://leetcode.com/u/VaibhavSh2k3/',
    },
    {
        id: 2,
        title: 'CodeForces',
        desc: '150+ Problems Solved, 10+ Contests',
        className: 'md:col-span-2', // change to md:col-span-2
        thumbnail: '/exp2.svg',
        hyperlink: 'https://codeforces.com/profile/Codrrr',
    },
    {
        id: 3,
        title: 'CodeChef',
        desc: '100+ Problems Solved, 10+ Contests',
        className: 'md:col-span-2', // change to md:col-span-2
        thumbnail: '/exp3.svg',
        hyperlink: 'https://www.codechef.com/users/vaibhavsh2k3',
    },
    {
        id: 4,
        title: 'LinkedIn',
        desc: '3000+ Followers and Connections',
        className: 'md:col-span-2',
        thumbnail: '/exp4.svg',
        hyperlink: 'https://www.linkedin.com/in/vaibhav-sharma-22816618a/',
    },
];

export const socialMedia = [
    {
        id: 1,
        img: '/git.svg',
        link: 'https://github.com/IAlgorithmia',
    },
    {
        id: 2,
        img: '/twit.svg',
        link: 'https://x.com/VaibhavSh2k3',
    },
    {
        id: 3,
        img: '/link.svg',
        link: 'https://www.linkedin.com/in/vaibhav-sharma-22816618a/',
    },
];
