import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Bhargav Kacharla",
  initials: "BK",
  location: "Bangalore, India",
  locationLink: "",
  about: "Staff Backend Engineer",
  summary:
    "Staff backend engineer with 10 years of experience building distributed systems, scalable backend systems for AI applications and trading infrastructure. Experienced in TypeScript, Rust, Kafka, Redis, Postgres/MongoDB, event-driven systems, RAG, evals, and agent execution flows. Built production-grade systems across ingestion, orchestration, retries, monitoring, data storage, and reliability.",
  avatarUrl: "",
  personalWebsiteUrl: "",
  contact: {
    email: "kacharlabhargav21@gmail.com",
    tel: "+91-9146703115",
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
      company: "Nunchi",
      link: "https://nunchi.trade/",
      badges: ["Event-Driven Systems", "Kafka", "Matching Engine"],
      title: "Staff Engineer (AI Systems)",
      logo: "/images/logos/nunchiLogo.png",
      start: "Jul '25",
      end: "May '26",
      description:
      "Sustained 1000 events/min in a real-time indexing pipeline streaming contract events through Kafka powering a low-latency trading platform.\nBuilt the central limit orderbook with matching engine at the core of the exchange, along with clearing house settlement handling 200 orders/minute.\nBuilt idempotency workers that consume Kafka events and fanout to different components in the systems like notification, position updates and leaderboard analytics.\nOwned core trading services (order matching, risk, automated settlement), keeping state queryable at low latency across distributed systems.\nDesigned an autonomous-agent marketplace where agents claim and execute production jobs and are paid on verified proof of completion."
    },
    {
      company: "Novastro",
      link: "https://www.novastro.xyz/",
      badges: ["Event-Driven Systems", "Wallet Management"],
      title: "Senior Backend Engineer",
      logo: "/images/logos/NovastroLogo.png",
      start: "Apr '24",
      end: "Jun '25",
      description:
      "Built an in-house indexer for EVM chains using TypeScript, GraphQL, and MongoDB to stream, process, and query on-chain data for analytics.\nBuilt internal services to coordinate transaction execution across distributed systems (bundlers, relayers), implementing job scheduling, retries, and batching the transactions, increasing processing throughput 10x from 100 to 1000 TPS.\nOwned an in-house MPC wallet service that signed transactions for 50k users via distributed key shares, with no single private key ever reconstructed."
    },
    {
      company: "Oddz",
      link: "https://www.oddz.fi/",
      badges: ["Options", "DeFi"],
      title: "Blockchain Engineer",
      logo: "/images/logos/OddzLogo.png",
      start: "Jan '21",
      end: "Dec '23",
      description:
      "Led smart contract development for Oddz protocol (oddz.fi), an options trading platform with concentrated liquidity (Uniswap V3-style) for capital-efficient risk management, staking, and liquidity provisioning. Audited contracts are deployed to BNB Chain and Avalanche.\nDeveloped a staking platform for liquidity providers and ODDZ token holders to get maximum yield in ODDZ token along with platform fee discount.\nBuilt automation systems for options protocol workflows, including expiry handling, staking reward distribution, and dynamic risk adjustments using Chainlink Keepers and Gelato for on-chain execution maintaining 100% production uptime."
    },
    {
      company: "Rakuten",
      link: "https://www.rakuten.com/",
      badges: ["Data Lake", "Big Data"],
      title: "Data Engineer",
      logo: "/images/logos/RakutenLogo.png",
      start: "Oct '20",
      end: "Jan '21",
      description:
      "Architected a data lake for Rakuten's telecom department, enabling data scientists to build intelligent models on large datasets.\nResearched big data technologies for petabyte-scale data infrastructure using MinIO and YugaByte."
    },
    {
      company: "OpenText",
      link: "https://www.opentext.com/",
      badges: [".NET", "Angular"],
      title: "Senior Software Engineer",
      logo: "/images/logos/OpenTextLogo.png",
      start: "Jul '18",
      end: "Sep '20",
      description:
      "Developed REST services and enterprise web applications using .NET MVC, TypeScript, and Angular, integrating content management systems with third-party APIs."
    },
    {
      company: "Tata Consultancy Services",
      link: "https://www.tcs.com/",
      badges: [".NET", "SQL Server"],
      title: "Software Engineer",
      logo: "/images/logos/TcsLogo.png",
      start: "May '15",
      end: "Jun '18",
      description:
      "Developed enterprise web applications for banking and telecom clients using C# .NET, JavaScript, and SQL Server.\nOptimized SQL Server stored procedures, reducing report generation time by 40%."
    },
  ],
  skills: [
    "TypeScript",
    "Node.js",
    "Go",
    "Rust",
    "AWS",
    "Distributed Systems",
    "Event-Driven Architecture",
    "Kafka",
    "Redis",
    "WebSockets",
    "Postgres",
    "MongoDB",
    "DynamoDB",
    "Anthropic SDK",
    "OpenAI SDK",
    "Tool Calling",
    "Vector Databases",
    "RAG Pipelines",
    "Agentic Workflows",
    "Context Engineering",
    "Structured Outputs",
    "Eval Frameworks"
  ],
  projects: [],
} as const;
