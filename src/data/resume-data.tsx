import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Bhargav Kacharla",
  initials: "BK",
  location: "Dharmavaram, India",
  locationLink: "",
  about: "Engineer | Architect",
  summary:
    "Engineer with extensive experience in blockchain, DeFi, and cross-chain powered crypto applications. Proven track record in developing multi-chain solutions and enhancing Web3 accessibility.",
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
      "Led the development of smart contracts for Oddz protocol, creating a comprehensive options trading platform with advanced features for purchase, staking, and liquidity provisioning\nImplemented robust testing infrastructure with comprehensive unit, static, and integration testing using hardhat framework with mocha, chai and solidity coverage\nPioneered research on derivative trading in the crypto ecosystem, building a protocol with yield generation mechanisms and enhanced trading capabilities\nEngineered seamless integrations with third-party SDKs, expanding platform functionality and interoperability\nImplemented innovative gasless transactions using OpenZeppelin Defender and Biconomy relayers, significantly improving user experience\nOrchestrated the protocol upgrade to v2 with new features based on community feedback, demonstrating responsive and user-focused development"
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
      "Architected revolutionary prediction market protocols for Nexter Finance, integrating Classic and NoLoss prediction systems with cross-protocol yield generation via Aave, Stader, and Quickswap\nPioneered protocol deployments across cutting-edge L2 ecosystems including Arbitrum, Optimism, zkSync, and Mantle, positioning Nexter at the forefront of blockchain scalability\nEngineered a sophisticated automation framework leveraging Openzeppelin, Chainlink Keepers, and Gelato network, creating a self-executing DeFi ecosystem\nCultivated and mentored a high-performing technical team from inception, establishing Nexter as an innovation hub while developing comprehensive subgraph infrastructure\nDesigned an enterprise-grade API architecture using GoLang while establishing rigorous security standards through strategic partnerships with top-tier audit vendors"
    },
    {
      company: "Xalts",
      link: "https://www.xalts.io/",
      badges: ["Tokenization, Account Abstraction"],
      title: "Lead Blockchain Engineer",
      logo: "/images/logos/XaltsLogo1.png",
      start: 2023,
      end: 2023,
      description:
      "Led the implementation of Account Abstraction (ERC4337) across multiple blockchains including Polygon, Avalanche subnet, and Hyperledger Besu, revolutionizing user onboarding and transaction experiences\nDeveloped sophisticated in-house infrastructure integrating skandha bundlers, creating a robust foundation for advanced blockchain functionality\nArchitected cutting-edge smart contracts for asset tokenization in trade finance, enabling institutional-grade financial instruments on blockchain\nEngineered a high-performance scaling solution capable of processing millions of tokenized asset transactions for major financial institutions\nCreated a powerful custom indexing system for EVM chains using TypeScript, GraphQL and MongoDB, providing comprehensive data analytics capabilities"
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
      "Led the development of BitArch's revolutionary cross-chain bridge aggregator, implementing state-of-the-art chain abstraction technology that seamlessly connects Ethereum, Solana, Cosmos, and Bitcoin ecosystems\nArchitected a secure, high-throughput protocol with advanced MEV protection that optimizes swap routes across 15+ bridges, reducing transaction costs by 40% and confirmation times by 65%\nDeveloped a comprehensive cross-chain swap SDK and API suite with standardized interfaces, enabling third-party DeFi applications to seamlessly integrate BitArch's cross-chain functionalities"
    },
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
