// import React from "react";
// import hero from "../assets/images/Hero2.jpg";

// const Hero = () => {
//     const social_media = {
//         icon: [
//             "logo-instagram",
//             "logo-facebook",
//             "logo-linkedin",
//         ],
//         link: [
//              // Add links for other social media platforms here if needed
//             "https://www.instagram.com/nshntlakhani/",
//             "https://www.facebook.com/Nishant Lakhani/",
//             "https://www.linkedin.com/in/nishant-lakhani/",
           
//         ]
//     };
    
//     const { icon, link } = social_media;

//     return (
//         <section
//             id="home"
//             className="min-h-screen flex py-10 md:flex-row flex-col items-center"
//         >
//             <div className="flex-1 flex items-center justify-center h-full pt-10">
//                 <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
//             </div>
//             <div className="flex-1">
//                 <div className="md:text-left text-center">
//                     <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
//                         <span className="text-cyan-600 md:text-6xl text-5xl">
//                             Hello!
//                             <br />
//                         </span>
//                         My Name is <span>Nishant Lakhani</span>
//                     </h1>
//                     <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
//                         Full Stack Developer
//                     </h4>
//                     <button className="btn-primary mt-8">Contact Me</button>
//                     <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
//                         {icon.map((iconName, index) => (
//                             <div
//                                 key={index}
//                                 className="text-gray-600 hover:text-white cursor-pointer "
//                             >
//                                 <a href={link[index]}> <ion-icon name={iconName} ></ion-icon></a>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;


// import React from "react";
// import hero from "../assets/images/Hero2.jpg";

// const Hero = () => {
//     const social_media = {
//         icon: [
//             "logo-instagram",
//             "logo-facebook",
//             "logo-linkedin",
//         ],
//         link: [
//             // Add links for other social media platforms here if needed
//             "https://www.instagram.com/nshntlakhani/",
//             "https://www.facebook.com/Nishant Lakhani/",
//             "https://www.linkedin.com/in/nishant-lakhani/",
//         ]
//     };
    
//     const { icon, link } = social_media;

//     return (
//         <section
//             id="home"
//             className="min-h-screen flex py-10 md:flex-row flex-col items-center"
//         >
//             <div className="flex-1 flex items-center justify-center h-full pt-10">
//                 <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
//             </div>
//             <div className="flex-1">
//                 <div className="md:text-left text-center">
//                     <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
//                         <span className="text-cyan-600 md:text-6xl text-5xl">
//                             Hello!
//                             <br />
//                         </span>
//                         My Name is <span>Nishant Lakhani</span>
//                     </h1>
//                     <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
//                         Full Stack Developer
//                     </h4>
//                     <a href="https://wa.me/<your-phone-number>" target="_blank" rel="noopener noreferrer">
//                         <button className="btn-primary mt-8">Contact Me</button>
//                     </a>
//                     <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
//                         {icon.map((iconName, index) => (
//                             <div
//                                 key={index}
//                                 className="text-gray-600 hover:text-white cursor-pointer "
//                             >
//                                 <a href={link[index]}> <ion-icon name={iconName} ></ion-icon></a>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;

// import React from "react";
// import hero from "../assets/images/Hero2.jpg";
// import cvFile from "../assets/CV_July-2024.pdf"; // Ensure the path to your CV file is correct

// const Hero = () => {
//     const social_media = {
//         icon: [
//             "logo-instagram",
//             "logo-facebook",
//             "logo-linkedin",
//         ],
//         link: [
//             "https://www.instagram.com/nshntlakhani/",
//             "https://www.facebook.com/Nishant Lakhani/",
//             "https://www.linkedin.com/in/nishant-lakhani/",
//         ]
//     };
    
//     const { icon, link } = social_media;

//     return (
//         <section
//             id="home"
//             className="min-h-screen flex py-10 md:flex-row flex-col items-center"
//         >
//             <div className="flex-1 flex items-center justify-center h-full pt-10">
//                 <img src={hero} alt="Hero" className="md:w-11/12 h-full object-cover" />
//             </div>
//             <div className="flex-1">
//                 <div className="md:text-left text-center">
//                     <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
//                         <span className="text-cyan-600 md:text-6xl text-5xl">
//                             Hello!
//                             <br />
//                         </span>
//                         My Name is <span>Nishant Lakhani</span>
//                     </h1>
//                     <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
//                         Full Stack Developer
//                     </h4>
//                     <a href="https://wa.me/<your-phone-number>" target="_blank" rel="noopener noreferrer">
//                         <button className="btn-primary mt-8">Contact Me</button>
//                     </a>
//                     <a href={cvFile} download="Nishant_Lakhani_CV.pdf">
//                         <button className="btn-primary mt-8 ml-4">Download CV</button>
//                     </a>
//                     <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
//                         {icon.map((iconName, index) => (
//                             <div
//                                 key={index}
//                                 className="text-gray-600 hover:text-white cursor-pointer "
//                             >
//                                 <a href={link[index]} target="_blank" rel="noopener noreferrer"> 
//                                     <ion-icon name={iconName}></ion-icon>
//                                 </a>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;

import React from "react";
import hero from "../assets/images/Hero2.jpg";
import cvFile from "../assets/CV_July_2024.pdf"; // Ensure the path to your CV file is correct

const Hero = () => {
    const social_media = {
        icon: [
            "logo-instagram",
            "logo-facebook",
            "logo-linkedin",
        ],
        link: [
            "https://www.instagram.com/nshntlakhani/",
            "https://www.facebook.com/Nishant Lakhani/",
            "https://www.linkedin.com/in/nishant-lakhani/",
        ]
    };
    
    const { icon, link } = social_media;

    return (
        <section
            id="home"
            className="min-h-screen flex py-10 md:flex-row flex-col items-center"
        >
            <div className="flex-1 flex items-center justify-center h-full pt-10">
                <img src={hero} alt="Hero" className="md:w-11/12 h-full object-cover" />
            </div>
            <div className="flex-1">
                <div className="md:text-left text-center">
                    <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                        <span className="text-cyan-600 md:text-6xl text-5xl">
                            Hello!
                            <br />
                        </span>
                        My Name is <span>Nishant Lakhani</span>
                    </h1>
                    <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
                        Full Stack Developer
                    </h4>
                    <div className="mt-8 flex justify-center md:justify-start gap-4">
                        <a href="https://wa.me/<your-phone-number>" target="_blank" rel="noopener noreferrer">
                            <button className="btn-primary">Contact Me</button>
                        </a>
                        <a href={cvFile} download="Nishant_Lakhani_CV.pdf">
                            <button className="btn-primary">Download CV</button>
                        </a>
                    </div>
                    <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
                        {icon.map((iconName, index) => (
                            <div
                                key={index}
                                className="text-gray-600 hover:text-white cursor-pointer "
                            >
                                <a href={link[index]} target="_blank" rel="noopener noreferrer"> 
                                    <ion-icon name={iconName}></ion-icon>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
