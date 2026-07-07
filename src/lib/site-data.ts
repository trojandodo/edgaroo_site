import {
  BarChart3,
  BrainCircuit,
  LineChart,
  Bot,
  Database,
  Cpu,
  ShieldCheck,
  Workflow,
  Sparkles,
  Target,
  Gauge,
  Network,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Edgaroo",
  legalName: "Edgaroo Inc",
  tagline: "Innovation. Intelligence. Experience.",
  headline: "Getting Value from Data",
  description:
    "Edgaroo specializes in getting value from data. We use our expertise in artificial intelligence and machine learning to build smart systems across multiple domains.",
  // Updated phone number per request
  phone: "+1 321-872-7330",
  phoneHref: "tel:+13218727330",
  email: "general@edgaroo.com",
  emailHref: "mailto:general@edgaroo.com",
  website: "https://www.edgaroo.com",
  logoSrc: "/edgaroo-logo.png",
};

export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
  accent: string; // tailwind gradient classes
};

export const services: Service[] = [
  {
    id: "data-science-data-analytics",
    title: "Data Science & Data Analytics",
    short:
      "Exploratory data analysis of both structured and unstructured data sets. Gain insight and truly understand the value of your data assets — both numerical and textual.",
    description:
      "Predictive analytics that extracts value from your data. We turn raw, heterogeneous data into clear, actionable insight tied to tangible business outcomes.",
    highlights: [
      "Predictive analytics that extracts value from your data",
      "Results that relate to tangible business outcomes",
      "Easy-to-understand results, delivered to stakeholders",
    ],
    icon: BarChart3,
    accent: "from-sky-500 to-blue-600",
  },
  {
    id: "quantitative-research",
    title: "Quantitative Research",
    short:
      "Data mining and Artificial Intelligence for smarter trading models. We stress-test ideas and surface the signals that actually carry alpha.",
    description:
      "Rigorous research that separates robust signals from noise. We vary and optimize strategy parameters and ensure the robustness of strategy logic before a single dollar is deployed.",
    highlights: [
      "Vary and optimize strategy parameters",
      "Ensure robustness of strategy logic",
      "Data mining + AI for smarter trading models",
    ],
    icon: LineChart,
    accent: "from-cyan-500 to-teal-500",
  },
  {
    id: "algo-trading",
    title: "Algo-Trading",
    short:
      "We design profitable trading algorithms, optimize strategy profitability, and help you build a working risk-aware trading platform.",
    description:
      "From research to live deployment. We design, validate and ship risk-aware trading systems — moving seamlessly from algo design to production infrastructure.",
    highlights: [
      "Optimize strategy profitability",
      "Risk-aware trading systems",
      "Move from algo design and research to live deployment",
    ],
    icon: BrainCircuit,
    accent: "from-blue-600 to-indigo-500",
  },
  {
    id: "llms-and-agents",
    title: "LLMs & Agents",
    short:
      "Large Language Models and autonomous agents are becoming essential for modern organizations to gain a competitive edge. Use them to go from raw text and tools to autonomous, reasoning workflows.",
    description:
      "From foundation models to production agents. We build and deploy LLM-powered systems — retrieval, tool use, and multi-step reasoning — that turn unstructured information into autonomous action.",
    highlights: [
      "Build agents that reason, retrieve, and act across your tools",
      "Fine-tune and ground LLMs on your proprietary data",
      "From prompt design to reliable, monitored production agents",
    ],
    icon: Bot,
    accent: "from-violet-500 to-fuchsia-500",
  },
];

export type Stat = { value: string; label: string; sub: string };

export const stats: Stat[] = [
  { value: "4", label: "Core practice areas", sub: "Data science, quant research, algo-trading & LLMs/agents" },
  { value: "100%", label: "Data-driven decisions", sub: "Every recommendation backed by evidence" },
  { value: "AI", label: "At the core", sub: "Original, state-of-the-art learning algorithms" },
  { value: "∞", label: "Scenarios modeled", sub: "Continuous optimization & robustness testing" },
];

export type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const capabilities: Capability[] = [
  {
    title: "Predictive Modeling",
    description:
      "State-of-the-art learning algorithms with superior predictive capabilities, tuned to your domain.",
    icon: Target,
  },
  {
    title: "Risk-Aware Systems",
    description:
      "Trading and decision systems engineered to respect risk limits at every step of the pipeline.",
    icon: ShieldCheck,
  },
  {
    title: "From Research to Live",
    description:
      "A seamless path from algorithm design and research to live, monitored deployment.",
    icon: Workflow,
  },
  {
    title: "Structured & Unstructured",
    description:
      "We work fluently across numerical data sets and raw text — extracting signal wherever it lives.",
    icon: Database,
  },
  {
    title: "Custom ML Pipelines",
    description:
      "Feature engineering, model training, validation and deployment tailored to your data assets.",
    icon: Cpu,
  },
  {
    title: "Connected Intelligence",
    description:
      "Network-aware models that combine multiple data sources and modalities into one coherent view.",
    icon: Network,
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We start with exploratory data analysis — understanding the shape, quality and value of your data assets, numerical and textual.",
    icon: Database,
  },
  {
    step: "02",
    title: "Model",
    description:
      "We design original, state-of-the-art learning algorithms and quantitative models tuned to your specific decision problem.",
    icon: BrainCircuit,
  },
  {
    step: "03",
    title: "Validate",
    description:
      "We stress-test parameters, ensure robustness of logic, and verify that results map to tangible business outcomes.",
    icon: ShieldCheck,
  },
  {
    step: "04",
    title: "Deploy",
    description:
      "We move from research to live deployment — building risk-aware systems that keep performing in the real world.",
    icon: Gauge,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const philosophyQuote =
  "At Edgaroo we harness the breakthroughs in machine learning and artificial intelligence in order to develop original state-of-the-art learning algorithms with superior predictive capabilities.";

export const sparklesIcon = Sparkles;
