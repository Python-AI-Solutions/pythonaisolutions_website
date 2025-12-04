export interface ProjectDetail {
  id: string
  title: string
  category: string
  shortDescription: string
  fullDescription: string
  problem: string
  solution: string
  whatWeDid: string[]
  techStack: string[]
  features: string[]
  status: string
  statusColor: string
  image: string
  screenshots?: string[]
  github: string | null
  demo: string | null
  achievements: string[]
}

export const projectDetails: Record<string, ProjectDetail> = {
  'cervical-screener': {
    id: 'cervical-screener',
    title: 'Cervical Screener',
    category: 'Healthcare AI',
    shortDescription:
      'An AI-powered medical imaging solution for cervical cancer screening.',
    fullDescription:
      'The Cervical Screener is an advanced AI-powered medical imaging solution designed to revolutionize cervical cancer screening. This production-ready system leverages state-of-the-art deep learning algorithms to analyze cytology slides with clinical-grade accuracy. The platform provides healthcare professionals with automated cell detection, classification, and diagnostic support, significantly reducing analysis time while maintaining high precision standards.',
    problem:
      'Traditional cervical cancer screening methods are time-consuming, labor-intensive, and subject to human error. Pathologists must manually examine hundreds of cells per slide, leading to fatigue-related inconsistencies and delayed diagnoses. The process can take hours per slide, creating bottlenecks in healthcare systems and potentially delaying critical treatment decisions.',
    solution:
      'Our AI-powered solution automates the entire screening workflow, using deep learning models trained on thousands of annotated cytology slides. The system can process slides in minutes rather than hours, providing consistent, accurate results 24/7. Advanced computer vision algorithms detect and classify abnormal cells with high precision, flagging potential issues for pathologist review while maintaining HIPAA compliance and clinical standards.',
    whatWeDid: [
      'Developed custom deep learning models using TensorFlow and PyTorch for cell detection and classification',
      'Built a scalable FastAPI backend with real-time processing capabilities',
      'Implemented computer vision pipelines using OpenCV for image preprocessing and analysis',
      'Created an intuitive web interface for pathologists to review and validate AI findings',
      'Integrated HIPAA-compliant data handling and secure storage systems',
      'Deployed production-ready infrastructure capable of processing 1000+ slides per day',
      'Conducted extensive validation studies to ensure clinical-grade accuracy',
    ],
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'FastAPI', 'React', 'PostgreSQL'],
    features: [
      'Automated cell detection and classification',
      'Real-time analysis pipeline',
      'Clinical-grade accuracy metrics',
      'HIPAA-compliant data handling',
      'Interactive review interface',
      'Batch processing capabilities',
      'Comprehensive reporting system',
    ],
    status: 'Production Ready',
    statusColor: 'bg-green-500',
    image: '/portfolio/CervicalAIScreener.png',
    screenshots: ['/portfolio/CervicalAIScreener.png'],
    github: 'https://github.com/Python-AI-Solutions/agentic-cervical-screener',
    demo: null,
    achievements: [
      'Winner - Health Innovation Hub AI Call',
      'Processing 1000+ slides per day capability',
      'Clinical validation completed',
      'Deployed in production environment',
    ],
  },
  'nostrings-resume': {
    id: 'nostrings-resume',
    title: 'NoStrings Resume',
    category: 'Developer Tools',
    shortDescription:
      'A privacy-first resume builder that runs entirely in your browser with zero backend dependencies.',
    fullDescription:
      'NoStrings Resume is a privacy-first resume builder web application that allows users to create professional resumes entirely within their browser. This client-side application uses modern web technologies to provide a secure experience with zero backend dependencies. All data processing happens client-side using localStorage, ensuring user data never leaves their device. The name "No Strings" reflects the core philosophy: no hidden data collection, no account required, no vendor lock-in.',
    problem:
      'Traditional resume builders present challenges for job seekers. Most platforms require user accounts and store sensitive personal information on remote servers, creating privacy concerns. Users often face vendor lock-in with proprietary formats that make it difficult to export their data. Many existing solutions are bloated with unnecessary features and require constant internet connectivity. The lack of standardization can make it harder for resumes to be properly parsed by Applicant Tracking Systems (ATS).',
    solution:
      'NoStrings Resume takes a privacy-first approach to resume building. All data processing happens entirely client-side using localStorage, eliminating server dependencies and ensuring user privacy. The application supports the JSON Resume Schema v1.2.1 standard for portability and ATS compatibility. Users have control over their data with multiple export formats including PDF, DOCX, HTML, JSON Resume, and HR-Open JSON. The responsive interface is designed to work across phones, tablets, and desktops with keyboard navigation and screen reader support.',
    whatWeDid: [
      'Built a React 18 single-page application with TypeScript for maintainable code',
      'Implemented privacy-first architecture with all data processing happening client-side using localStorage',
      'Developed export system supporting PDF, DOCX, HTML, JSON Resume, and HR-Open formats',
      'Created theme customization system with live preview, color pickers, and typography controls',
      'Integrated JSON Resume Schema v1.2.1 with validation and error handling',
      'Implemented accessibility features including keyboard navigation and screen reader support',
      'Built undo/redo functionality with history tracking for user actions',
      'Developed responsive design with mobile-first approach supporting phones, tablets, and desktops',
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'React Router', 'jsPDF', 'docx-templates'],
    features: [
      'Client-side architecture with localStorage',
      'JSON Resume Schema v1.2.1 compliance',
      'Multiple export formats (PDF, DOCX, HTML, JSON Resume, HR-Open)',
      'Theme customization with live preview',
      'Section visibility controls',
      'Undo/redo functionality',
      'Responsive design for all devices',
      'Keyboard navigation and screen reader support',
    ],
    status: 'Production Ready',
    statusColor: 'bg-green-500',
    image: '/portfolio/NoStringsResume.png',
    screenshots: ['/portfolio/NoStringsResume.png'],
    github: 'https://github.com/NoStringsDevelopment/no-strings-resume',
    demo: 'https://nostringsresume.org',
    achievements: [
      'Zero backend dependencies - runs entirely in browser',
      'Complete user data privacy with localStorage',
      'Multiple industry-standard export formats',
    ],
  },
  infrastructure: {
    id: 'infrastructure',
    title: 'Infrastructure & DevOps',
    category: 'Platform Engineering',
    shortDescription:
      'Production infrastructure-as-code system managing Kubernetes deployment across AWS and on-premises environments with comprehensive documentation and security hardening.',
    fullDescription:
      'A real-world infrastructure project demonstrating how to manage Kubernetes clusters and cloud resources using Infrastructure as Code (IaC) principles. The system combines Terraform for cloud resource provisioning, Kubernetes for container orchestration, and a custom security setup using WireGuard VPN. This project shows the practical decisions made when building and maintaining a hybrid infrastructure setup, including architecture design, security practices, and operational procedures.',
    problem:
      'Managing infrastructure across different environments (on-premises and cloud) requires clear processes, reliable provisioning, and proper security controls. Manual infrastructure management leads to inconsistencies and makes it difficult to recreate environments. Teams need documentation and procedures to understand how systems are deployed and maintained.',
    solution:
      'We built an Infrastructure as Code solution using Terraform to manage cloud resources, Kubernetes for container orchestration, and WireGuard for secure network access. The project includes modular Terraform code, comprehensive documentation covering setup and operations, and a hybrid architecture connecting on-premises and AWS infrastructure.',
    whatWeDid: [
      'Designed and implemented a single-node Kubernetes cluster on on-premises Debian host with AWS EC2 bastion',
      'Created modular Terraform code (44 files) organizing infrastructure into reusable components',
      'Implemented WireGuard VPN for secure access between on-premises and cloud infrastructure',
      'Configured Cloudflare DNS management and Traefik ingress controller',
      'Set up GitHub Actions workflows for deployment automation with staging/prod environments',
      'Documented complete setup procedures, security practices, and operational runbooks',
      'Integrated ArgoCD for GitOps-based deployments',
      'Implemented Kubernetes RBAC, etcd encryption, and audit logging',
    ],
    techStack: ['Kubernetes', 'Terraform', 'Docker', 'GitHub Actions', 'AWS', 'GCP', 'WireGuard', 'Traefik', 'ArgoCD', 'Cloudflare'],
    features: [
      'Infrastructure as Code with modular Terraform modules',
      'Hybrid cloud setup (on-premises + AWS)',
      'Secure network access via WireGuard VPN',
      'Kubernetes cluster with security hardening',
      'GitOps deployment with ArgoCD',
      'DNS management via Cloudflare',
      'Comprehensive deployment and operational documentation',
    ],
    status: 'Production Ready',
    statusColor: 'bg-green-500',
    image: '/portfolio/infrastructure-architecture.png',
    screenshots: ['/portfolio/infrastructure-architecture.png'],
    github: 'https://github.com/Python-AI-Solutions/websites-management',
    demo: null,
    achievements: [
      'Automated infrastructure provisioning with Terraform',
      'Secure multi-environment deployment via WireGuard VPN',
      'Well-documented architecture and operational procedures',
      'Modular code design enabling infrastructure reusability',
    ],
  },
  'evaluation-exploration': {
    id: 'evaluation-exploration',
    title: 'LLM Evaluation Exploration',
    category: 'Developer Tools',
    shortDescription:
      'An exploration of different techniques for evaluating LLM outputs in RAG systems.',
    fullDescription:
      'This exploratory project examines various approaches to evaluating LLM outputs in retrieval-augmented generation (RAG) systems. We assembled different validation techniques into a single interface to understand their trade-offs in terms of accuracy, cost, and latency. The project demonstrates the kinds of evaluation methods available and how they can be implemented and compared.',
    problem:
      'Large language models can produce incorrect information with high confidence. When building systems that answer questions from documents, it\'s important to validate outputs. Various validation techniques exist—RAGAS scoring, self-consistency checks, knowledge graph verification, LLM-as-judge frameworks, and metamorphic testing—each with different trade-offs in terms of accuracy, cost, and complexity.',
    solution:
      'This exploration project implements several validation approaches in one place, allowing comparison of different techniques. Users can run evaluations with Claude API or local models via Ollama. The project provides a web interface to run evaluations and see how different validation methods perform, helping understand the trade-offs between validation approaches.',
    whatWeDid: [
      'Implemented multiple validation approaches (baseline, RAGAS, LLM-as-Judge, metamorphic testing, self-verification, knowledge graph)',
      'Built hybrid retrieval combining keyword search (BM25) and semantic search',
      'Created web interface for running and comparing evaluations',
      'Developed RAGAS faithfulness scoring to verify claims against source documents',
      'Implemented LLM-as-Judge evaluation scoring multiple quality dimensions',
      'Added metamorphic testing to check consistency across paraphrased questions',
      'Built self-verification to extract and validate factual claims',
      'Created knowledge graph extraction for structured validation',
      'Added cost and latency tracking for each validation approach',
      'Integrated Ollama for running evaluations with local models',
    ],
    techStack: ['Python', 'Flask', 'Sentence Transformers', 'BM25', 'Claude API', 'Ollama', 'YAML'],
    features: [
      'Multiple validation techniques implemented',
      'Hybrid keyword and semantic search',
      'Web interface with dark/light mode',
      'Knowledge graph visualization',
      'Cost and latency comparison',
      'Reproducible evaluation results',
      'Support for Claude API and local models (Ollama)',
      'YAML configuration',
      'Parallel evaluation execution',
      'JSON result exports',
    ],
    status: 'Exploration',
    statusColor: 'bg-purple-500',
    image: '/portfolio/evaluation-exploration.png',
    screenshots: ['/portfolio/evaluation-exploration.png'],
    github: 'https://github.com/Python-AI-Solutions/validation-project',
    demo: null,
    achievements: [
      'Multiple validation techniques explored and implemented',
      'Web interface for comparing evaluation approaches',
      'Support for both API and local model evaluation',
      'Cost and latency tracking for informed decision-making',
    ],
  },
  'nwb-converter': {
    id: 'nwb-converter',
    title: 'Agentic Neurodata Conversion',
    category: 'Scientific Computing',
    shortDescription:
      'An AI assistant for converting neuroscience electrophysiology data to standardized NWB format.',
    fullDescription:
      'The Agentic Neurodata Conversion System is an AI assistant that streamlines NWB conversion through natural conversation. Three specialized AI agents work together: the Conversation Agent handles user interaction and metadata collection, the Conversion Agent detects data formats and runs conversions, and the Evaluation Agent validates output and explains issues. The system aims to simplify format detection, metadata collection, and validation for researchers converting neuroscience data to NWB format.',
    problem:
      'Converting electrophysiology data to NWB format requires understanding both source formats (like SpikeGLX and OpenEphys) and the NWB schema. Researchers must identify their data format, collect required metadata fields (experimenter, institution, subject details, electrode locations), run conversions, and interpret validation errors. DANDI archive submissions require strict compliance with NWB standards. This technical process can be time-consuming, especially for researchers without extensive programming experience.',
    solution:
      'An AI assistant that guides users through the conversion workflow via conversation. Users describe their experiment, and the system detects the data format by analyzing files (binary data, companion metadata, directory structure). Instead of filling out forms, users provide information naturally: "8-week-old male mice, hippocampal recordings from Dr. Smith\'s lab at MIT." The AI extracts structured metadata, asks for missing information, and tracks where values came from for DANDI compliance. After conversion, NWBInspector validates the file, and the AI explains issues clearly with suggested fixes.',
    whatWeDid: [
      'Built three-agent AI architecture using Claude Sonnet 4.5 via MCP (Model Context Protocol)',
      'Developed FastAPI + WebSocket backend for REST operations and real-time updates',
      'Implemented format detection that analyzes file structures to identify electrophysiology data formats',
      'Created natural language metadata collection parsing conversational input into structured NWB fields',
      'Integrated NeuroConv for handling electrophysiology formats and NWBInspector for validation',
      'Built intelligent validation system that explains issues in plain English with categorization',
      'Developed quality scoring system (0-100) based on validation results with recommendations',
      'Created interactive HTML reports showing validation results, quality scores, and workflow traces',
      'Implemented metadata provenance tracking documenting where every value came from',
      'Built conversation memory tracking last messages to avoid asking for same information twice',
    ],
    techStack: ['Python', 'FastAPI', 'WebSocket', 'Claude Sonnet 4.5', 'NeuroConv', 'NWBInspector', 'Pixi', 'Pydantic', 'MCP'],
    features: [
      'Automated format detection for electrophysiology data',
      'Natural language metadata collection with ISO 8601 parsing',
      'Three-agent architecture via MCP (Model Context Protocol)',
      'AI-powered validation with plain English explanations',
      'Quality scoring (0-100) with specific recommendations',
      'Interactive HTML reports with workflow traces',
      'Real-time WebSocket progress updates',
      'Metadata provenance tracking for DANDI compliance',
      'Conversation memory for natural follow-up questions',
      'Type-safe async architecture with Pydantic models',
    ],
    status: 'In Development',
    statusColor: 'bg-yellow-500',
    image: '/portfolio/nwb-converter-chat.png',
    screenshots: [
      '/portfolio/nwb-converter-chat.png',
      '/portfolio/nwb-converter-validation.png',
      '/portfolio/nwb-converter-provenance.png'
    ],
    github: 'https://github.com/Python-AI-Solutions/agentic-neurodata-conversion',
    demo: null,
    achievements: [
      'Three-agent architecture using MCP protocol',
      'Conversational metadata collection interface',
      'DANDI compliance with metadata provenance tracking',
      'Quality scoring system for validation results',
    ],
  },
  'archive-flow': {
    id: 'archive-flow',
    title: 'ArchiveFlow',
    category: 'Data Management',
    shortDescription:
      'A lab data entry and validation platform for neuroscience research that validates experiments against NWB schemas and integrates with Electronic Lab Notebooks.',
    fullDescription:
      'ArchiveFlow is a comprehensive Streamlit-based data entry and validation platform that streamlines lab data collection for neuroscience research. The system validates experiments against the ndx-fiber-photometry NWB (Neurodata Without Borders) schema and enables direct upload to multiple Electronic Lab Notebook (ELN) backends including eLabFTW and LabArchives. Built with an adapter pattern for flexible ELN integration, it ensures consistent data formats and catches missing fields before archiving.',
    problem:
      'Neuroscience research labs generate extensive experimental metadata—from surgical procedures to behavioral sessions—that must be meticulously documented and validated against standardized schemas like NWB. Traditional methods involve manual data entry into spreadsheets or paper forms, leading to inconsistent data formats across lab members, missing required fields discovered only during data archiving, difficulty integrating with Electronic Lab Notebooks, and tedious re-entry when uploading to eLabFTW or LabArchives.',
    solution:
      'ArchiveFlow provides a unified Streamlit interface for structured data entry with dynamic forms for surgeries, behavior sessions, and experiments. The platform validates 17+ required fields in real-time against the ndx-fiber-photometry schema, warns about out-of-range values, and supports one-click upload to multiple ELN backends through a unified adapter pattern.',
    whatWeDid: [
      'Built dynamic surgery entry form with expandable sections for viral vectors, injection sites, implants, and subjects',
      'Created flexible behavior session tracking form with customizable outcome columns and multi-subject support',
      'Implemented adapter pattern supporting both eLabFTW and LabArchives backends with unified validation',
      'Developed NWB schema parser that validates experiments against ndx-fiber-photometry requirements',
      'Built comprehensive Playwright E2E tests for form functionality and pytest tests for validation workflows',
      'Integrated eLabFTW API for creating and updating experiments with structured metadata',
    ],
    techStack: ['Python', 'Streamlit', 'eLabFTW API', 'Playwright', 'Pytest', 'REST APIs', 'JSON', 'CSV'],
    features: [
      'Dynamic form tables for viruses, injections, implants, and subjects',
      'Customizable outcome columns per behavior session',
      'Real-time validation of 17+ required fields against NWB schema',
      'Data range validation for coordinates, wavelengths, and numerical aperture',
      'Multi-format export (JSON for ELN, CSV for spreadsheets)',
      'One-click upload to eLabFTW',
      'Dual ELN support (eLabFTW and LabArchives)',
    ],
    status: 'Production Ready',
    statusColor: 'bg-green-500',
    image: '/portfolio/archive-flow.png',
    screenshots: ['/portfolio/archive-flow.png'],
    github: null,
    demo: null,
    achievements: [
      'Production ready for lab deployment',
      'Validates against ndx-fiber-photometry NWB schema',
      'Dual ELN backend support (eLabFTW, LabArchives)',
      'Comprehensive E2E test coverage',
    ],
  },
}

