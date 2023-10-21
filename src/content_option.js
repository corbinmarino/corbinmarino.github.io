const logotext = "C.M.";
const meta = {
    title: "Corbin Marino",
    description: "I'm Corbin, a CSULB CS graduate and aspiring cyber.",
};

const introdata = {
    title: "Hi, I'm Corbin",
    animated: {
        first: "CSULB CS Graduate",
        second: "GCIH Certified",
        third: "GSOC Certified",
        fourth: "GSEC Certified",
        fifth: "Aspiring Security Professional",
        //sixth: "",
        // add more but make sure to update /src/pages/home/index.js Line 29
    },
    description: "CSULB Computer Science Graduate with an aspiration of becoming a cybersecurity professional.",
    your_img_url: "https://i.ibb.co/wSmCF81/pixelcorb.png",
};

const dataabout = {
    title: "Who am I?",
    aboutme: "Aspiring cybersecurity professional with a wide skillset in enterprise security operations, offensive security, and problem solving. Currently I am focused on learning more about malware development and ethical hacking to better understand how attackers operate.",
};
const worktimeline = [{
        jobtitle: "Cybersecurity Intern",
        where: "LAPD",
        date: "Feb 2022 - Aug 2023",
    },
    /*{
        jobtitle: "Example 2",
        where: "Micosoft",
        date: "2022",
    },
    {
        jobtitle: "Example 3",
        where: "Meta",
        date: "2021",
    }, */
];

const skills = [{
        name: "Python",
    },
    
    {
        name: "Threat Hunting",
    },
    
    {
        name: "Cyber Defense",
    },
    
    {
        name: "Systems Administration",
    },

    {
        name: "Incident Handling",
    },

    {
        name: "Incident Response",
    },

    {
        name: "Reconnaissance",
    },

    {
        name: "SOAR",
    },
];

const dataportfolio = [{
        img: "https://images.credly.com/size/680x680/images/8e6bde54-8a33-4ec0-9d70-90fcde581bcf/image.png",
        description: "GIAC Security Essentials Certification.",
        link: "https://www.credly.com/badges/dc9c50c1-336a-4bc7-af2b-4914c5180bd9",
    },
    {
        img: "https://images.credly.com/size/680x680/images/b8200bcb-258a-4089-b43d-fe23dfdc3097/image.png",
        description: "GIAC Security Operations Certified.",
        link: "https://www.credly.com/badges/c3143b59-e048-4a6b-9f8d-fcefcd55ec1b",
    },
    {
        img: "https://images.credly.com/size/680x680/images/c3e2745b-2f30-4e6b-9290-f7557a705181/image.png",
        description: "GIAC Certified Incident Handler.",
        link: "https://www.credly.com/badges/b921ddcc-36bb-41eb-a921-7f1b633f1273",
    },
    /*{
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    */
    /*{
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    }, */
    /*{
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    }, */
    /*{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    }, */
    /*{
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    }, */
    /*{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    }, */
    /*{
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    }, */
];

const contactConfig = {
    YOUR_EMAIL: "test@test.com",
    description: "Looking forward to hearing from you!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "SERVICE_ID",
    YOUR_TEMPLATE_ID: "TEMPLATE_ID",
    YOUR_USER_ID: "USER_ID (PUBLIC_KEY)",
};

const socialprofils = {
    github: "https://github.com/corbinmarino",
    linkedin: "https://www.linkedin.com/in/corbin-marino-46b57a225/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};