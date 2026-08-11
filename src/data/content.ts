import { VisionMissionData, WhyNiraPillar, PartnershipStep } from '../types';

export const ABOUT_CONTENT = {
  title: "About Nira Scientific Solutions",
  paragraphs: [
    "Nira Scientific Solutions is a specialised regulatory and scientific partner for homoeopathic pharmaceutical companies, supporting them in navigating the rapidly evolving landscape of regulatory requirements, scientific documentation, research and evidence-based product development.",
    "As homoeopathy moves towards a more scientifically oriented and evidence-based approach, and as regulatory expectations for homoeopathic medicines continue to evolve, manufacturers increasingly need access to specialised scientific and regulatory expertise. Nira Scientific Solutions aims to fulfil this need by working alongside companies as a trusted long-term partner, rather than simply providing isolated consultancy services.",
    "We support companies across the product lifecycle—from product concept and development, scientific evaluation and research planning to evidence generation, documentation, dossier preparation and regulatory submissions.",
    "Our services encompass regulatory strategy and compliance, new homoeopathic product development and approval support, scientific documentation, literature and evidence assessment, research and clinical research coordination, scientific dossiers and regulatory preparedness.",
    "With extensive experience in homoeopathic scientific communication, publishing, research and industry engagement, Nira brings together industry understanding, scientific expertise and regulatory perspective to help companies anticipate requirements, identify gaps and make informed decisions.",
    "Our philosophy is simple: we become an extension of our client's team—understanding their products, objectives and challenges and working with them to develop appropriate scientific and regulatory strategies."
  ]
};

export const VISION_MISSION_DATA: VisionMissionData = {
  vision: "To become a trusted regulatory and scientific partner to the homoeopathic pharmaceutical industry and contribute to its transition towards stronger scientific documentation, responsible research, evidence generation and regulatory preparedness.",
  missionIntro: "Our mission is to work in partnership with homoeopathic pharmaceutical companies and provide integrated regulatory, scientific and research support throughout the product lifecycle.",
  missionPoints: [
    "Understand and respond to evolving regulatory requirements.",
    "Plan scientific and regulatory strategies at an early stage of product development.",
    "Strengthen scientific documentation and evidence.",
    "Develop appropriate research and clinical research programmes.",
    "Prepare scientifically robust product dossiers and regulatory documentation.",
    "Navigate applicable regulatory pathways for new homoeopathic medicines.",
    "Identify potential regulatory and scientific gaps before submission.",
    "Build greater scientific credibility and regulatory preparedness."
  ]
};

export const WHY_NIRA_DATA = {
  title: "Why Choose Nira as Your Partner?",
  subtitle: "Not Just a Consultant. A Partner.",
  introLead: "At Nira, we believe that regulatory and scientific requirements should not be addressed only when a product is ready for submission.",
  introSub: "They should be considered from the beginning of product development.",
  processFlow: [
    { label: "Understand", desc: "Product & Goal Blueprint" },
    { label: "Plan", desc: "Early Strategy & Pathway" },
    { label: "Develop", desc: "Scientific Formulation Support" },
    { label: "Document", desc: "Scientific Literature & Rationale" },
    { label: "Research", desc: "Evidence & Clinical Protocol" },
    { label: "Prepare", desc: "Robust Dossier & Filings" },
    { label: "Submit", desc: "CDSCO & Submission Support" }
  ],
  integratedApproachText: "This integrated approach can help identify potential issues earlier, reduce avoidable gaps and improve the overall scientific and regulatory preparedness of products.",
  pillars: [
    {
      title: "Industry Understanding",
      description: "Our experience with homoeopathic scientific publishing, research communication and industry engagement provides an understanding of the practical needs of manufacturers.",
      iconName: "Building2"
    },
    {
      title: "Scientific Orientation",
      description: "We focus on scientific documentation, evidence generation and responsible research rather than merely procedural compliance.",
      iconName: "FlaskConical"
    },
    {
      title: "Regulatory Perspective",
      description: "We help companies understand how changing regulatory expectations may influence product development, documentation and evidence requirements.",
      iconName: "FileCheck2"
    },
    {
      title: "Long-Term Partnership",
      description: "We seek to develop continuing relationships with companies, becoming a reliable scientific and regulatory resource as their products and requirements evolve.",
      iconName: "Handshake"
    }
  ] as WhyNiraPillar[]
};

export const PARTNERSHIP_MODEL_DATA = {
  title: "Our Partnership Model",
  subtitle: "From Product Concept to Regulatory Preparedness",
  intro: "Nira's approach can be represented as:",
  steps: [
    {
      stepNumber: "01",
      title: "PRODUCT CONCEPT",
      description: "Defining formulation, therapeutic goals, and preliminary market orientation.",
      stage: "Ideation Stage"
    },
    {
      stepNumber: "02",
      title: "SCIENTIFIC & REGULATORY ASSESSMENT",
      description: "Evaluating regulatory feasibility, existing literature, and compliance pathways.",
      stage: "Assessment Stage"
    },
    {
      stepNumber: "03",
      title: "DEVELOPMENT STRATEGY",
      description: "Formulating early-stage regulatory roadmap and scientific documentation milestones.",
      stage: "Planning Stage"
    },
    {
      stepNumber: "04",
      title: "RESEARCH & EVIDENCE PLANNING",
      description: "Structuring observational, clinical, and bibliographic research frameworks.",
      stage: "Evidence Stage"
    },
    {
      stepNumber: "05",
      title: "SCIENTIFIC DOCUMENTATION",
      description: "Drafting scientific rationales, monographs, and comprehensive evidence summaries.",
      stage: "Documentation Stage"
    },
    {
      stepNumber: "06",
      title: "REGULATORY DOSSIER",
      description: "Compiling scientifically robust dossiers for CDSCO & applicable authorities.",
      stage: "Dossier Stage"
    },
    {
      stepNumber: "07",
      title: "SUBMISSION & RESPONSE SUPPORT",
      description: "Managing submission filing, queries, and authority response documentation.",
      stage: "Submission Stage"
    },
    {
      stepNumber: "08",
      title: "ONGOING SCIENTIFIC & REGULATORY SUPPORT",
      description: "Providing long-term regulatory monitoring, updates, and product lifecycle support.",
      stage: "Lifecycle Stage"
    }
  ] as PartnershipStep[]
};

export const LOOKING_AHEAD_DATA = {
  title: "Looking Ahead",
  paragraphs: [
    "The homoeopathic pharmaceutical industry is entering an important phase of transformation.",
    "Greater emphasis on scientific evidence, research, documentation, quality and regulatory preparedness is creating both challenges and opportunities for manufacturers.",
    "Nira Scientific Solutions aims to work with companies through this transition—not merely as an external consultant, but as a long-term regulatory and scientific partner.",
    "We believe the future belongs to companies that prepare for scientific and regulatory requirements before they become requirements."
  ],
  footerBranding: {
    title: "Nira Scientific Solutions",
    tagline: "Your Regulatory & Scientific Partner in Homoeopathy",
    slogan: "Partnering with Industry. Strengthening Science. Preparing for Regulation."
  }
};
