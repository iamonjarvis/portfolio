import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react"
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import styled, {keyframes} from "styled-components";


import cookurfood from './assets/cookurfood.png'
import journalapp from './assets/journalapp.png'
import anywork from './assets/anyworkk.png'
import multiclient from './assets/multichatc++.png'
import artsphere from './assets/artsphere.png'
import zept from './assets/zeptoscrap.png'
import med from './assets/MeDecode.png'
import sniffdog from './assets/SniffDog1.png'



const Projects = () => {

    const projectsInfos = [
        {
    title: 'ArtSphere',
    photo: artsphere, // Replace 'artsphere' with your imported image variable or path
    description: "ArtSphere is a social media platform for digital artists. It enables users to post their digital paintings, collaborate in real‑time on artworks, and chat with other creatives. With features like a collaborative painting editor, real-time chat, user profiles, and more, ArtSphere empowers artists to share, connect, and grow their creative community.",
    github: 'https://github.com/iamonjarvis/ArtSphere-Frontend', // Update with your repository URL
    link: 'https://1artsphere.netlify.app/',           // Update with your live app URL
    tools: [
        'JavaScript',
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'Mongoose',
        'JWT',
        'Socket.io',
        'Apollo GraphQL',
        'Cloudinary'
    ]
},{
    title: 'MeDecode',
    photo: med, // Import your image as "medecode"
    description: 'MeDecode is an AI-powered medical report decoder that simplifies complex medical jargon and delivers actionable insights, including specialist recommendations, precautions, and personalized dietary advice. Built with FastAPI, NLP, and transformer-based summarization.',
    github: 'https://github.com/iamonjarvis/MeDecode',
    link: 'https://github.com/iamonjarvis/MeDecode',
    tools: [
        'Python',
        'FastAPI',
        'SciSpaCy',
        'Transformers',
        'Tesseract OCR',
        'Docker'
    ]
},


        {
            title: 'Anywork',
            photo: anywork,
            description: 'ANYWORK is a dynamic job posting and discovery platform designed to connect talented professionals with exciting opportunities. With a user-friendly interface and advanced search features, it simplifies the job search process and helps employers find the right talent effortlessly.',
            github: 'https://github.com/iamonjarvis/ANYWORK-Frontend',
            link: 'https://anywork-frontend.vercel.app/',
            tools: [
                'JavaScript',
                'React',
                'Node.js',
                'JWT auth',
                'MONGODB',
                'SOCKET.IO',
                'MOONGOOSE',
                'EXPRESS',
            ]
        },
        {
  title: 'Blinkit & Zepto Scraper',
  photo: zept, // Replace 'blinkitZepto' with your imported image variable or path
  description: "This project is a Node.js-based web scraper that uses Puppeteer to concurrently extract product details from both Blinkit and Zepto. It leverages asynchronous operations and concurrent page handling to efficiently aggregate data from multiple sources into a single API endpoint built with Express.",
  github: 'https://github.com/iamonjarvis/Blinkit-Zepto-product-backend', // Update with your repository URL
  link: 'https://github.com/iamonjarvis/Blinkit-Zepto-product-backend', // Update with your live deployment URL
  tools: [
    'JavaScript',
    'Node.js',
    'Express',
    'Puppeteer',
    'Asynchronous Programming',
    'REST API'
  ]
},{
title: 'SniffDog',
photo: sniffdog, // Replace 'sniffdog' with your imported image variable or path
description: "SniffDog is a Python/Tkinter packet sniffer with a live, color-coded GUI that displays timestamps, ports, headers and supports start/stop, interface selection, and filtering.",
github: 'https://github.com/iamonjarvis/SniffDog',
link: 'https://github.com/iamonjarvis/SniffDog/releases/tag/0.1.0', // Link to your latest release page or documentation
tools: [
'Python',
'Scapy',
'Tkinter',
'threading',
'socket',
'PyInstaller',
'setuptools',
'GitHub Actions'
]
}
,

        {
            title: 'Reflexion-journal-app',
            photo: journalapp,
            description: "Reflection Journal is a personal journaling app that helps you capture your thoughts, reflections, and experiences. With an intuitive interface, it encourages daily writing and self-reflection, allowing you to track your growth and emotions over time.",
            github: 'https://github.com/iamonjarvis/Reflexion-Journal-App-Frontend',
            link: 'https://reflexion-journal-app-frontend.vercel.app/',
            tools: [
                'JavaScript',
                'React',
                'MONGODB',
                'NODE-JS',
                'JWT',
                'REST API',
                'MOONGOOSE','EXPRESSS',
                
            ]
        },
        {
            title: 'cook-ur-Food',
            photo: cookurfood,
            description: 'Cook Your Meal is a React-based app with Tailwind CSS, offering recipe search, meal type filters, and dietary options. It uses the Spoonacular API to display detailed recipes, including ingredients, instructions, and health insights, with a user-friendly and aesthetic design for an enhanced cooking experience.',
            github: 'https://github.com/iamonjarvis/CookurFood',
            link: 'https://cookur-food.vercel.app/',
            tools: [
                'JavaScript',
                'React',
                'Spoonacular API',
                'Tailwind css',
                
            ]
        },
        {
            title: 'Multi-client-chatroom',
            photo: multiclient,
            description: 'This is a cross-platform multi-chat room application that works on both Windows and Linux. The program allows multiple clients to connect to a server and exchange messages in real-time. It uses TCP sockets to ensure reliable communication between clients and the server. ',
            github: 'https://github.com/iamonjarvis/Multi-Client-Chatroom',
            tools: [
                'C++',
                'Socketprogramming',
                'multithreading',
                
            ]
        }
    ]

   

    return ( 
        <div className="projects-wrapper" style={{overflow: 'hidden'}}>
                <div className="projects">
                    <h2 className="title">~ projects</h2>
                    <div className="projects-area">
                        {
                            projectsInfos.map((item, index) => (
                                <div className="project-container">
                                    {   (index % 2 === 0 
                                            &&
                                        <LeftProject item={item}/>)
                                            || 
                                        <RightProject item={item}/>
                                    }
                                </div>
                            ))
                        }
                    </div>

                   
                </div>
        </div> 
    );
}

const LeftProject = (props) => {
    
    const ref = useRef(null)

    const Tool = styled.div`  
        background-color:#0D0024;
        color: white;
        margin: 5px;
        border-radius: 6px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 10px;
        font-size: 16px;
        `
        
    const [size, setSize] = useState(0)
    const scroll = keyframes`
        0% { transform: translateX(0px); }
        100% { transform: translateX(-${size}px)}
    `

    const [speed, setSpeed] = useState(10)
    const SlideTrack = styled.div`
        animation: ${scroll} ${speed}s linear infinite; 
        display: flex;
        width: 100%;
        flex-direction: row;
    `       

    useEffect(() => {
        var size = 15;
        for(let i = 0; i < ref.current.children.length / 2; i++){
            size += ref.current.children[i].offsetWidth
            size += 7
        }
        setSize(size)
        setSpeed(ref.current.children.length)
    }, [])

    const item = props.item;

    return (
        <Fade style={{width: '100%', height:'100%'}} direction='right' distance={"30px"}> 
            <div className="left-project">
                <div className="project-image-wrapper"><img src={item.photo} alt="" /><div className="grainy"/></div>
                <div className="left-project-description">
                    <div className="orange">{item.title}</div>
                    <span>{item.description}</span>
                </div>
                <div className="left-project-links">
                    {item.link !== "" && <a href={item.link} target='_blank' rel='noreferrer'>
                        <LaunchIcon className='icon'/>          
                    </a>}
                    {item.github !== "" && <a href={item.github} target='_blank' rel='noreferrer'>
                        <GitHubIcon className='icon'/>          
                    </a>}
                </div>
                <div className="left-project-tools">
                    <SlideTrack ref={ref}>
                        {item.tools.map((item) => (
                            <Tool>{item}</Tool>
                        ))}
                        {item.tools.map((item) => (
                            <Tool>{item}</Tool>
                        ))}
                    </SlideTrack>
                </div>
            </div>
        </Fade>
    )
}

const RightProject = (props) => {
    const ref = useRef(null)

    const Tool = styled.div`  
        background-color:#0D0024;
        color: white;
        margin: 5px;
        border-radius: 6px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 10px;
        font-size: 16px;
        `
        
    const [size, setSize] = useState(0)
    const scroll = keyframes`
        0% { transform: translateX(0px); }
        100% { transform: translateX(${size}px)}
    `


    const [speed, setSpeed] = useState(10)
    const SlideTrack = styled.div`
        animation: ${scroll} ${speed}s linear infinite; 
        display: flex;
        width: 100%;
        flex-direction: row-reverse;
    `       

    useEffect(() => {
        var size = 15;
        for(let i = 0; i < ref.current.children.length / 2; i++){
            size += ref.current.children[i].offsetWidth
            size += 7
        }
        setSize(size)
        setSpeed(ref.current.children.length)
    }, [])

    const item = props.item;
    console.log(item)
    return (
        <Fade style={{width: '100%', height:'100%'}} direction='left' distance={"30px"}> 
            <div className="right-project">
                <div className="project-image-wrapper"><img src={item.photo} alt="" /><div className="grainy"/></div>
                <div className="right-project-description">
                    <div className="orange">{item.title}</div>
                    <span>{item.description}</span>
                </div>
                <div className="right-project-links">
                   {item.link !== "" && <a href={item.link} target='_blank' rel='noreferrer'>
                        <LaunchIcon className='icon'/>          
                    </a>}
                    {item.github !== "" && <a href={item.github} target='_blank' rel='noreferrer'>
                        <GitHubIcon className='icon'/>          
                    </a>}
                </div>
                <div className="right-project-tools">
                    <SlideTrack ref={ref}>
                        {item.tools.map((item) => (
                            <Tool>{item}</Tool>
                        ))}
                        {item.tools.map((item) => (
                            <Tool>{item}</Tool>
                        ))}
                    </SlideTrack>
                </div>
            </div>
    </Fade> 
    )
}

const MinorProjects = (props) => {
    const [minorProjectIndex, setMinorProjectIndex] = useState()

    return (
        <div className="minor-projects-area">
            {props.projects.map((item, index) => (
                <div className="minor-project">
                    <div className="minor-project-title"  onClick={() => {
                            if(index !== minorProjectIndex){
                                setMinorProjectIndex(index);
                            }
                            else {
                                setMinorProjectIndex()
                            }
                        }}>
                        <span className='orange'>{item.title}</span>
                        { (index === minorProjectIndex && <span className="orange">-</span>) || <div className="orange">+</div>}
                    </div>
                    { index === minorProjectIndex && (
                    <Fade direction="down" duration={500}>
                        <div className="minor-project-expand">
                            <span className='minor-project-description'>{item.description}</span>
                            <div className="minor-projects-footer">
                                <div className="minor-projects-tools">
                                    {item.tools.map((item) => (
                                        <div className='tool'>{item}</div>
                                    ))}
                                </div>
                                <div className="minor-projects-links">
                                    {item.link !== "" && <a href={item.link} target='_blank' rel='noreferrer'>
                                        <LaunchIcon className='icon'/>          
                                    </a>}
                                    {item.github !== "" && <a href={item.github} target='_blank' rel='noreferrer'>
                                        <GitHubIcon className='icon'/>          
                                    </a>}
                                </div>
                            </div>
                        </div>
                    </Fade>
                    )}
                </div>
            ))
        }
        </div>
    )
}
 
export default Projects;
