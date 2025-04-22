"use client";
import ProjectCard from "./ProjectCard";
const projects = [
    {
      title: "Image Style Transfer Using CNNs",
      description: "A Flask application that uses neural style transfer to blend content and style images effortlessly",
      thumbnail: "/assets/projects/imageStyleTransfer.png",
      link: "https://github.com/Nithin1729S/Image-Style-Transfer-Using-CNNs.git",
      skills: ["Pytorch", "CNN", "Flask", "Python"],
      wip: false
    },
    {
      title: "AI Resume Insights",
      description: "An AI-driven resume feedback system built with Langchain and Gemini API.",
      thumbnail: "/assets/projects/ai-resume.png",
      link: "https://github.com/Nithin1729S/AI-Resume-Insights",
      skills: ["Langchain", "Gemini", "Next.js", "Django", "TypeScript"],
      wip: false
    },
    {
      title: "Neuro Sudoku",
      description: "A full-stack web application for real-time Sudoku solving. Users upload an image of a Sudoku puzzle, the application extracts and recognizes the digits using a Vision Transformer (ViT) model",
      thumbnail: "/assets/projects/sudoku.png",
      link: "https://github.com/Nithin1729S/Neuro-Sudoku",
      skills: ["ViT", "Next.js", "FastAPI", "TypeScript"],
      wip: false
    },
    {
      title: "Distributed P2P Database",
      description: "This project is a distributed file storage system implemented in Go. It combines a content-addressable storage (CAS) design with a peer-to-peer (P2P) networking layer to enable decentralized file storage and retrieval. Files are encrypted using AES-CTR mode before being transmitted over the network, ensuring end-to-end security.",
      thumbnail: "/assets/projects/ds.png",
      link: "https://github.com/Nithin1729S/Distributed-DB",
      skills:["Golang", "TCP", "AES-CTR", "CAS"],
      wip: false
    },
    {
      title: "Web3 Vault Dapp",
      description: "A Decentralized Password Manager compiled in Remix IDE , deployed on Ethereum BlockChain (Sepolia TestNet).",
      thumbnail: "/assets/projects/web3.png",
      link: "https://github.com/Nithin1729S/Web3-Vault-dApp",
      skills: ["Solidity", "ReactJS", "JavaScript"],
      wip: false
    },
    {
      title: "X Dapp",
      description: "A Decentralized X Application compiled in Remix IDE , deployed on Ethereum BlockChain (Sepolia TestNet) ",
      thumbnail: "/assets/projects/xdapp.png",
      link: "https://github.com/Nithin1729S/X_dApp",
      skills: ["Solidity", "ReactJS", "JavaScript"],
      wip: false
    },
    {
      title: "CNN Classifier for Kannada Alphabets",
      description: "This project recognizes 49 Kannada letters using a CNN classifier (TensorFlow/Keras). A FastAPI backend and Next.js (TypeScript) frontend enable users to draw letters and get predictions.",
      thumbnail: "/assets/projects/kannadacnn.png",
      link: "https://github.com/Nithin1729S/Kannada-CNN",
      skills:["Tensorflow", "CNN", "NextJS", "TypeScript"],
      wip: false
    },
    {
      title: "Siamese Network for Kannada Alphabets",
      description: "Siamese Network for one-shot learning to classify Kannada alphabets.",
      thumbnail: "/assets/projects/kannadasiamese.png",
      link: "https://github.com/Nithin1729S/KannadaSiameseNet",
      skills:["Tensorflow", "Siamese Network", "Python"],
      wip: false
    },
    {
      title: "Wordle Helper",
      description: "A Wordle Helper built with Go and Next.js/TypeScript that uses present and absent words to predict possible solutions using an underlying backtracking algorithm.",
      thumbnail: "/assets/projects/wordle.png",
      link: "https://github.com/Nithin1729S/Wordle-Helper",
      skills: ["Next.js", "Go", "TypeScript", "TailwindCSS"],
      wip: false
    },
    {
      title: "My Portfolio Website",
      description: "My Old  Minimalistic Portfolio Website built using ReactJS and TailwindCSS.",
      thumbnail: "/assets/projects/portfolio.png",
      link: "https://nithins.vercel.app/",
      skills: ["ReactJS","JavaScript","TailwindCSS"],
      wip: false
    },
    {
      title: "Phishing Website Detection",
      description: "A full-stack phishing detection platform (website + browser extension) using Next.js, TypeScript, and FastAPI. It extracts URL features, reduces them with autoencoders, and detects phishing via an SVM model.",
      thumbnail: "/assets/projects/ias.png",
      link: "https://github.com/Nithin1729S/Phishing-Website-Detection",
      skills:["SVM", "NextJS", "TypeScript", "FastAPI"],
      wip: false
    },
    {
      title: "Akshara Kali",
      description: "Akshara Kali is an interactive Kannada alphabet learning app with guided tracing, personalized tracking, and 5 mini-games. It uses a CNN-based handwriting recognition model (TensorFlow/Keras, OpenCV) for accuracy evaluation. Built with Next.js (NextAuth.js, Tailwind CSS) and FastAPI, it stores user progress in MongoDB.",
      thumbnail: "/assets/projects/kannada.png",
      link: "https://github.com/Nithin1729S/Kannada-ABC",
      skills:["CNN","NextJS", "FastAPI", "TypeScript" ],
      wip: false
    },
    {
      title: "Splitwise Application",
      description: "A Splitwise-like payment application built using Node.js, EJS, and MySQL database.",
      thumbnail: "/assets/projects/splitwise.png",
      link: "https://github.com/Nithin1729S/Splitwise-Application",
      skills: ["NodeJS", "EJS", "MySQL"],
      wip: false
    },
    {
      title: "Anitalk",
      description: "An Anime Forums Web App that lets users create forums ans discuss about anime , with Django backend, REST API, PostgreSQL database, and Vercel hosting.",
      thumbnail: "/assets/projects/anitalk.png",
      link: "https://github.com/Nithin1729S/AniTalk",
      skills: ["Django", "Python", "PostgreSQL"],
      wip: false
    },
    {
      title: "COVID 19 Prediction",
      description: "High-Accuracy COVID-19 Prediction using an optimized union ensemble feature selection approach. This repository implements the research paper, combining ensemble feature selection with genetic algorithm-based hyperparameter optimization.",
      thumbnail: "/assets/projects/covid.png",
      link: "https://github.com/Nithin1729S/COVID-19-Prediction",
      skills:["Python","Scikit-Learn", "Machine Learning", "Autoencoders" ],
      wip: false
    },
    {
      title: "Customer Churn Prediction & Segmentation",
      description: "Integrated Churn Prediction and Customer Segmentation Framework for Telco Business.",
      thumbnail: "/assets/projects/churn.svg",
      link: "https://github.com/Nithin1729S/FML_ChurnPrediction",
      skills:["Python","Machine Learning","Segmentation" ],
      wip: false
    },

    {
      title: "Image Color Palette",
      description: "Image Color Palette is a Next.js web app that extracts color palettes from images, letting users upload images, view color compositions, and copy values in RGB, HEX, and HSL formats.",
      thumbnail: "/assets/projects/imageColorPalette.png",
      link: "https://github.com/Nithin1729S/Image-Color-Palette",
      skills: ["Next.js", "TypeScript", "TailwindCSS"],
      wip: false
    },
    
    {
      title: "Parallel TSP",
      description: "Parallel Implementation of Travelling Salesman Problem using OpenMP, MPI & CUDA.",
      thumbnail: "/assets/projects/parallel.png",
      link: "https://github.com/Nithin1729S/Parallel-TSP",
      skills: ["OpenMP", "MPI", "CUDA"],
      wip: false
    },
    {
      title: "RemoveBG",
      description: "RemoveBG is a Flask application designed to remove the background from images. This application can be used to process images and remove unwanted backgrounds.",
      thumbnail: "/assets/projects/removeBG.png",
      link: "https://github.com/Nithin1729S/RemoveBG",
      skills: ["Flask", "Python", "Docker"],
      wip: false
    },
    {
      title: "Pixel Plate",
      description: "A Full Stack Food Ordering Web Application built using the MERN stack and TypeScript allows users to order food and manage their restaurants.",
      thumbnail: "/assets/projects/pixel.png",
      link: "https://github.com/Nithin1729S/Pixel-Plate",
      skills: ["ReactJS","TypeScript","TailwindCSS","MongoDB"],
      wip: false
    },
    {
      title: "Inkwell Insights : A Blogging-Website",
      description: "A Full-stack blog application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The frontend is styled using Tailwind CSS with the Flowbite theme.",
      thumbnail: "/assets/projects/blog.png",
      link: "https://github.com/Nithin1729S/Inkwell-Insights-A-Blogging-Website",
      skills: ["ReactJS","JavaScript","TailwindCSS","MongoDB"],
      wip: false
    },
   
    {
      title: "Deep Dive - System Resource Monitor",
      description: "A System resource monitoring tool leveraging Python libraries like Psutil, os, PyCPUInfo, Disto and Qt GUI interface for comprehensive real-time tracking and analysis of system resources",
      thumbnail: "/assets/projects/deep.png",
      link: "https://github.com/Nithin1729S/Deep-Dive-A-System-Resource-Monitor",
      skills: ["Python","PyQt5","Psutil"],
      wip: false
    },
    {
      title: "C Compiler Phases",
      description: "C Compiler built from scratch using  Lex, Yacc and Python covering all 6 phases on compilation.",
      thumbnail: "/assets/projects/compiler.png",
      link: "https://github.com/Nithin1729S/C-Compiler-Phases",
      skills: ["Lex","Yacc","Python"],
      wip: false
    },
    {
      title: "Image Caption Generator",
      description: "This project utilizes the Hugging Face Transformers library to create an image captioning application. It loads a pre-trained Vision Encoder-Decoder model and ViT (Vision Transformer) Image Processor to generate captions for uploaded images.",
      thumbnail: "/assets/projects/imageCaption.png",
      link: "https://github.com/Nithin1729S/Image-Caption-Generator",
      skills: ["ViT","Python","Streamlit"],
      wip: false
    },
    {
      title: "Visual Hand Gesture Recognition",
      description: "This project aims to recognize American Sign Language (ASL) gestures in real-time using Python, OpenCV, and MediaPipe.",
      thumbnail: "/assets/projects/hand.png",
      link: "https://github.com/Nithin1729S/Visual-Hand-Gesture-Recognition",
      skills: ["Python","Mediapipe","OpenCV"],
      wip: false
    },
    {
      title: "Brain Tumor Classification",
      description: "This project is a Brain Tumour Classifier built using TensorFlow Lite and Streamlit. It allows users to upload MRI scans to determine the type of brain tumour present.",
      thumbnail: "/assets/projects/brain.png",
      link: "https://github.com/Nithin1729S/Brain-Tumor-Classification",
      skills: ["Python","Tensorflow","Streamlit"],
      wip: false
    },
    {
      title: "Medical Assistant",
      description: "A web application that allows users to get consultations on Heart Diseases, Skin Cancer, and Tuberculosis by uploading images of Chest X-rays and skin lesions or providing surveys on life and health conditions.",
      thumbnail: "/assets/projects/medical.png",
      link: "https://github.com/Nithin1729S/Medical-Assistant",
      skills: ["Python","Tensorflow","Streamlit"],
      wip: false
    },
    {
      title: "Document Summarization Application",
      description: "Document Summarization App using large language model (LLM) and Langchain framework. Used a pre-trained T5 model and its tokenizer from Hugging Face Transformers library. ",
      thumbnail: "/assets/projects/doc.png",
      link: "https://github.com/Nithin1729S/Document-Summarization-Streamlit-Application",
      skills: ["Python","Langchain","Streamlit"],
      wip: false
    },
    
    
    {
      title: "Marks Submission Module",
      description: "MTech IT Minor Project Marks Submission Module built using Django.",
      thumbnail: "/assets/projects/marks.png",
      link: "https://github.com/Nithin1729S/mtech-it-minor-marks",
      skills: ["Django", "Redis", "Bootstrap"],
      wip: false
    },
    {
      title: "Interpret CXR using CLIP and BioBERT",
      description: "This project, completed during my internship at HALE Labs, NITK, involves training an NLP model using BioBERT and CLIP to generate radiology reports for given chest X-ray images.",
      thumbnail: "/assets/projects/hale.png",
      link: "https://github.com/Nithin1729S/Interpret-CXR-BioBert-CLIP",
      skills: ["BioBERT", "BioMedCLIP", "Streamlit"],
      wip: false
    },
    {
      title: "Tic-Tac-Toe-Server-Client-Application",
      description: "A Client-Server application for playing the game of Tic-Tac-Toe between two players.",
      thumbnail: "/assets/projects/tic.png",
      link: "https://github.com/Nithin1729S/Tic-Tac-Toe-Server-Client-Application",
      skills: ["C", "Sockets"],
      wip: false
    },
    {
      title: "Llama 2 Chat Bot",
      description: "This chatbot is created using the open-source Llama 2 LLM model from Meta hosted on Replicate Platform.",
      thumbnail: "/assets/projects/llama.png",
      link: "https://github.com/Nithin1729S/Llama-2-Chat-Bot",
      skills: ["Streamlit", "Llama2", "Replicate"],
      wip: false
    },    
  ];

  const ProjectsList = () => {
    return (
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="h-[calc(100vh-400px)] overflow-y-auto scrollbar-hide">
          <ul className="mt-4 ml-4 mr-4 mb-4 flex flex-col items-center gap-14 text-gray-900">
            {projects.map((project) => (
              <ProjectCard 
                key={project.title}
                title={project.title}
                description={project.description}
                thumbnail={project.thumbnail}
                link={project.link}
                skills={project.skills}
                wip={project.wip}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  };

export default ProjectsList;