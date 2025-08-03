import { BsCodeSlash, BsClipboardData } from 'react-icons/bs';
import { AiFillAudio, AiOutlineMail } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';
import { FaVideo, FaRegNewspaper } from 'react-icons/fa';

export const servicesData = [
    {
        id: 1,
        title: 'Web Development',
        icon: <BsCodeSlash />
    },
    {
        id: 2,
        title: 'ML-Powered Search & Recommendations',
        icon: <BsClipboardData />
    },
    {
        id: 3,
        title: 'Natural Language Processing (NLP)',
        icon: <AiFillAudio />
    },
    {
        id: 4,
        title: 'Content Strategy & Writing',
        icon: <BiPencil /> 
    },
    {
        id: 5,
        title: 'Email Automation & Copywriting',
        icon: <AiOutlineMail />
    },
    {
        id: 6,
        title: 'Video Editing & Multimedia',
        icon: <FaVideo />
    },

]
