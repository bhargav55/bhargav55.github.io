import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Bhargav Kacharla",
  initials: "BK",
  location: "Dharmavaram, India",
  locationLink: "",
  about: "Engineer | Architect",
  summary:
    "Engineer with extensive experience in blockchain, DeFi, and AI-powered crypto applications. Proven track record in developing multi-chain solutions and enhancing Web3 accessibility.",
  avatarUrl: "",
  personalWebsiteUrl: "",
  contact: {
    email: "kacharlabhargav21@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/bhargav55",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bhargav-kacharla-9a4b3552/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/K_Bhargav21",
        icon: XIcon,
      }]
  },
  education: [
    {
      school: "SASTRA University",
      degree: "Bachelor of Technology, Computer Science",
      start: "2011",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Oddz",
      link: "https://www.oddz.fi/",
      badges: ["Derivatives, Options trading"],
      title: "Blockchain Engineer",
      logo: "/images/logos/OddzLogo.png",
      start: 2021,
      end: null,
      description:
        "Led the development of Frontier, a revolutionary non-custodial multi-chain wallet for the Web3 and DeFi ecosystem\nPioneered the first DeFi Aggregator in the space, significantly enhancing user access to diverse DeFi protocols\nExpanded support to over 70 blockchain networks, establishing Frontier as a leader in multi-chain operability\nArchitected and implemented native DeFi applications, bringing cutting-edge DeFi functionality directly to users\nSpearheaded the development of cross-chain bridges, enabling seamless asset transfer between different blockchains",
    },
    {
      company: "Novastro",
      link: "https://www.novastro.xyz/",
      badges: ["Predictions", "Crypto", "DeFi", "Staking"],
      title: "Lead Blockchain Engineer",
      logo: "/images/logos/NovastroLogo.png",
      start: 2022,
      end: null,
      description:
        "Provided strategic guidance and architectural expertise for Elsa, an AI-powered crypto concierge platform\nAdvised on the development of a sophisticated natural language interface for seamless, intent-based interactions with crypto platforms\nContributed to the design of an advanced multi-chain asset management system supporting diverse blockchain networks\nGuided the implementation of AI-driven market analysis and trading strategy algorithms\nOversaw the architectural design of an automated, intent-based transaction execution system\nContributed to the creation of an adaptive educational resource system for crypto concepts",
    },
    {
      company: "BitArch",
      link: "https://www.bitarch.io/",
      badges: ["Cross-Chain", "Bridging", "Chain Abstraction"],
      title: "Chief Technology Officer",
      logo: "/images/logos/BitArchLogo.png",
      start: 2024,
      end: null,
      description:
        "Developed an innovative blockchain platform focusing on revolutionizing Web3 access\nImplemented a modular intent-centric access layer for intuitive blockchain interactions\nDesigned keyless wallet infrastructure, enhancing security and user experience\nIntegrated LLM-powered intent interpretation for natural blockchain interactions",
    },
  ],
  advisory: [
 
  ],
  skills: [
    "Blockchain",
    "Web3",
    "Cryptography",
    "DeFi",
    "Smart Contracts",
    "Multi-chain",
    "TypeScript",
    "Solidity",
    "Move",
    "Nodejs"
  ],
  projects: [],
  experience: [
    {
      "role": "Data Engineer",
      "company": "Rakuten",
      "period": "2020 - 2021"
    },
    {
      "role": "Software Developer",
      "company": "OpenText",
      "period": "2018 - 2020"
    },
    {
      "role": "Technical Associate",
      "company": "Tata Consultancy Services",
      "period": "2015 - 2018"
    }
    
  ],
} as const;
