import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Bhargav Kacharla",
  initials: "BK",
  location: "Bangalore, India",
  locationLink: "",
  about: "Blockchain/Backend Engineer",
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
      company: "Nunchi.trade",
      link: "https://nunchi.trade/",
      badges: ["Perpetual", "Derivative"],
      title: "Solidity Engineer",
      logo: "/images/logos/nunchiLogo.png",
      start: 2024,
      end: 2025,
      description:
      "Architected & implemented Nunchi’s CLOB + AMM hybrid for perp trading on yield-bearing assets.\nDeveloped smart contracts for order matching and execution, perp pricing mechanisms with funding rates and liquidations.\nIntegrated Pyth, Stork and Blocksense oracles for price feeds of yield bearing assets.\nDeveloped AMM with concentrated bins for market making with proxy orders for yield generation for Nunchi Vaults."
    },
    {
      company: "Novastro",
      link: "https://www.novastro.xyz/",
      badges: ["Prediction", "Staking"],
      title: "Protocol Engineer",
      logo: "/images/logos/NovastroLogo.png",
      start: 2024,
      end: 2025,
      description:
      "Developed smart contracts in Solidity for RWA tokenization platform using ERC-3643 with on-chain Compliance, identity registry for token issuance.\nArchitected and developed prediction market protocol.\nArchitected and developed prediction market protocol in Solidity with cross-protocol yield generation.\nImplemented yield strategies to generate liquidity yield from Lending and Staking protocols like Aave and Stader. \nLed the development of Bitarch.io revolutionary cross-chain bridge aggregator protocol that optimizes cross-chain swap routes across 15+ bridges.\nDeveloped a comprehensive cross-chain swap SDK and API suite with standardized interfaces, enabling third-party DeFi applications to seamlessly integrate BitArch's cross-chain functionalities\nDeveloped smart contracts and backend to build decentralised exchange Warpgate.pro in with Aptos Move.\nDeveloped token launchpad Hatchy.fun in Solana with rust.\nBuilt a backend analytics system that indexed blockchain events in real-time, enabling comprehensive trading metrics, liquidity provider performance tracking, and protocol-wide statistics.\nDeveloped subgraphs for indexing events in EVM chains with graph protocol."
    },
    {
      company: "Xalts",
      link: "https://www.xalts.io/",
      badges: ["Account Abstraction"],
      title: "Lead Blockchain Engineer",
      logo: "/images/logos/XaltsLogo1.png",
      start: 2024,
      end: 2024,
      description:
      "Implemented Account abstraction(ERC4337) for EVM chains like Polygon, Avalanche subnet and Hyperledger Besu.\nDeveloped in-house infrastructure for Account abstraction with skandha bundlers.\nArchitected smart contracts for asset tokenization for financial institutions.\nBuilt in-house indexer for EVM chains with Typescript, GraphQL and MongoDB."
    },
    {
      company: "Oddz",
      link: "https://www.oddz.fi/",
      badges: ["Derivatives trading"],
      title: "Blockchain Engineer",
      logo: "/images/logos/OddzLogo.png",
      start: 2021,
      end: 2022,
      description:
      "Led the development of smart contracts in Solidity for Oddz protocol(https://www.oddz.fi/), creating a comprehensive options trading platform with advanced features for purchase, staking, and liquidity provisioning\nPioneered research on derivative trading in the crypto ecosystem, building a protocol with yield generation mechanisms and enhanced trading capabilities\nEngineered seamless integrations with third-party SDKs, expanding platform functionality and interoperability\nImplemented innovative gasless transactions using OpenZeppelin Defender and Biconomy relayers, significantly improving user experience.\nEngineered a sophisticated automation framework leveraging Openzeppelin, Chainlink Keepers, and Gelato network, creating a self-executing DeFi ecosystem"
    },
   
   
   
  ],
  skills: [
    "Blockchain",
    "Web3",
    "Cryptography",
    "DeFi",
    "Cross-chain",
    "Staking",
    "Smart Contracts",
    "Smart Contract Security",
    "TypeScript",
    "Solidity",
    "Move",
    "Nodejs",
    "Rust"
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
