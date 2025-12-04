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
    category: 'AI-Powered Tools',
    shortDescription:
      'An intelligent resume builder and analyzer that helps job seekers create optimized resumes.',
    fullDescription:
      'NoStrings Resume is a privacy-first, AI-powered resume builder that helps job seekers create professional, ATS-optimized resumes without compromising their personal data. The platform uses advanced NLP to analyze resume content, match it with job descriptions, and provide actionable improvement suggestions. Built with a focus on user privacy and data security, NoStrings Resume ensures that your personal information stays yours.',
    problem:
      'Job seekers struggle to create resumes that pass Applicant Tracking Systems (ATS) while also appealing to human recruiters. Traditional resume builders often lack AI-powered optimization features, and many existing solutions compromise user privacy by storing sensitive personal information. Additionally, creating multiple tailored resumes for different positions is time-consuming and requires deep knowledge of ATS optimization techniques.',
    solution:
      'NoStrings Resume combines AI-powered content optimization with a privacy-first architecture. The platform uses OpenAI\'s API to analyze resume content and job descriptions, providing real-time suggestions for improvement. The system ensures ATS compatibility while maintaining readability for human reviewers. All processing happens securely, and users maintain full control over their data, with options for local storage and processing.',
    whatWeDid: [
      'Built a modern Next.js frontend with React for an intuitive user experience',
      'Developed AI-powered resume analysis engine using OpenAI API',
      'Created ATS compatibility checker with real-time scoring',
      'Implemented multiple professional resume templates',
      'Built PostgreSQL database for secure data storage',
      'Developed real-time content suggestion system',
      'Created privacy-first architecture with local processing options',
      'Implemented responsive design for all device types',
    ],
    techStack: ['Next.js', 'React', 'Python', 'OpenAI API', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
    features: [
      'AI-powered resume optimization',
      'ATS compatibility checker',
      'Real-time content suggestions',
      'Multiple professional templates',
      'Privacy-first architecture',
      'Job description matching',
      'Export to multiple formats (PDF, DOCX)',
    ],
    status: 'Production Ready',
    statusColor: 'bg-green-500',
    image: '/portfolio/NoStringsResume.png',
    screenshots: ['/portfolio/NoStringsResume.png'],
    github: 'https://github.com/NoStringsDevelopment/no-strings-resume',
    demo: null,
    achievements: [
      'Privacy-first design',
      'Production deployment',
      'User-friendly interface',
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
    title: 'Evaluation Exploration',
    category: 'Developer Tools',
    shortDescription:
      'A framework for comparing seven validation techniques to catch LLM hallucinations in RAG systems.',
    fullDescription:
      'The LLM Validation Playground is a comprehensive framework that lets you throw the same set of questions at seven different validation pipelines and see which one catches the most hallucinations while keeping latency and cost reasonable. The pipelines range from dead simple (just ask the LLM and hope for the best) to quite sophisticated (extract every factual claim, verify each against source documents, check consistency across paraphrased questions, validate against a knowledge graph). Everything runs locally with deterministic, reproducible results.',
    problem:
      'Large language models hallucinate. They make things up, invent citations that don\'t exist, and state incorrect facts with complete confidence. When you\'re building a system that answers questions from documents—customer support, technical documentation, legal research—this isn\'t a minor inconvenience. It\'s a dealbreaker. The challenge is that there\'s no single "best" way to catch these hallucinations. Researchers have proposed dozens of validation techniques: RAGAS scoring, self-consistency checks, knowledge graph verification, LLM-as-judge frameworks, metamorphic testing. Each has trade-offs. Each works better in some contexts than others.',
    solution:
      'We built a framework that runs all seven validation pipelines and compares them. You bring your own LLM (Claude API or local models via Ollama for zero cost). Results are deterministic—same inputs and seeds give you the same outputs, so your evaluations are reproducible. The framework shows you exactly where the cost-quality trade-off sits for your specific data, helping you choose the right validation approach for your use case.',
    whatWeDid: [
      'Built seven validation pipelines (P0-P6) ranging from baseline to knowledge graph verification',
      'Implemented hybrid retrieval system combining BM25 (40%) and vector search (60%)',
      'Created Flask web dashboard for running evaluations and viewing results',
      'Developed RAGAS faithfulness scoring with atomic statement verification',
      'Built LLM-as-Judge framework scoring accuracy, completeness, relevance, faithfulness, and clarity',
      'Implemented metamorphic testing with paraphrased question consistency checks',
      'Created self-verification pipeline extracting and verifying factual claims',
      'Built knowledge graph extraction and validation system',
      'Developed cost tracking system accurate to the penny',
      'Implemented Ollama integration for zero-cost local model evaluations',
    ],
    techStack: ['Python', 'Flask', 'Sentence Transformers', 'BM25', 'Claude API', 'Ollama', 'YAML'],
    features: [
      'Seven validation pipelines (Baseline, Structured, RAGAS, LLM-as-Judge, Metamorphic, Self-Check, Knowledge Graph)',
      'Hybrid BM25 + vector search retrieval',
      'Web dashboard with dark/light mode',
      'Knowledge graph visualization',
      'Per-pipeline cost and latency tracking',
      'Deterministic reproducible evaluations',
      'Claude API and Ollama LLM backends',
      'Configurable via YAML, nothing hardcoded',
      'Parallel pipeline execution',
      'Detailed JSON result exports',
    ],
    status: 'Beta',
    statusColor: 'bg-blue-500',
    image: '/portfolio/evaluation-exploration.png',
    screenshots: ['/portfolio/evaluation-exploration.png'],
    github: 'https://github.com/Python-AI-Solutions/validation-project',
    demo: null,
    achievements: [
      'Seven complete validation pipelines implemented',
      'Deterministic reproducible evaluations',
      'Local-first with zero cloud dependencies',
      'Cost tracking accurate to the penny',
    ],
  },
  'nwb-converter': {
    id: 'nwb-converter',
    title: 'Agentic Neurodata Conversion',
    category: 'Scientific Computing',
    shortDescription:
      'An AI-powered platform for converting neuroscience electrophysiology data to standardized NWB format.',
    fullDescription:
      'The Agentic Neurodata Conversion System is an innovative AI-powered platform that revolutionizes how neuroscience researchers convert their electrophysiology data to the Neurodata Without Borders (NWB) format. Using a sophisticated three-agent architecture with natural language processing, the system provides automated format detection, intelligent validation, and conversational metadata collection. This dramatically reduces conversion time and ensures DANDI archive readiness.',
    problem:
      'Converting neuroscience electrophysiology data to NWB format is a complex, time-consuming process that requires deep domain expertise. Researchers must manually identify data formats, extract metadata, and ensure compliance with NWB specifications. The process is error-prone, inconsistent, and can take days or weeks for complex datasets. Additionally, ensuring DANDI archive compatibility adds another layer of complexity.',
    solution:
      'Our agentic system uses a three-agent architecture (Conversation, Conversion, and Evaluation agents) powered by Claude AI to automate the entire conversion workflow. Researchers can describe their experiments in natural language, and the system automatically detects formats, extracts metadata, performs conversions, and validates results. The conversational interface makes the process intuitive, while AI-powered validation ensures accuracy and compliance.',
    whatWeDid: [
      'Developed three-agent AI architecture using Claude AI',
      'Built FastAPI backend with WebSocket support for real-time communication',
      'Created natural language metadata collection system',
      'Implemented automated format detection for SpikeGLX, OpenEphys, and Neuropixels',
      'Integrated NeuroConv and PyNWB libraries for data conversion',
      'Built conversational chat interface similar to Claude.ai',
      'Developed AI-powered validation and issue analysis system',
      'Created comprehensive reporting system (PDF, JSON, text formats)',
    ],
    techStack: ['Python', 'FastAPI', 'Claude AI', 'PyNWB', 'NeuroConv', 'SpikeInterface', 'React'],
    features: [
      'Natural language metadata collection',
      'Automated format detection (SpikeGLX, OpenEphys, Neuropixels)',
      'AI-powered validation and issue analysis',
      'Conversational chat interface',
      'Three-agent architecture',
      'DANDI archive compatibility',
      'Comprehensive reporting',
    ],
    status: 'In Development',
    statusColor: 'bg-yellow-500',
    image: '/portfolio/placeholder.svg',
    screenshots: ['/portfolio/placeholder.svg'],
    github: 'https://github.com/Python-AI-Solutions/agentic-neurodata-conversion',
    demo: null,
    achievements: [
      'Used by 10+ research laboratories',
      'Part of NIMH initiative',
      'Active development ongoing',
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

