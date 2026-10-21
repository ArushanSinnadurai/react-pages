/**
 * Every piece of résumé content the site renders lives here, so updates are
 * data edits rather than JSX surgery.
 *
 * Deliberately omitted: phone number and postal code. This builds to a public,
 * search-indexed GitHub Pages site — email is the right contact channel.
 */

export const profile = {
  name: "Arushan Sinnadurai",
  title: "Biotech Data Engineer",
  role: "Software Engineer, Data Operations",
  company: "Flosonics Medical",
  location: "Ottawa, ON",
  email: "arushan.sinnadurai@gmail.com",
  summary:
    "Biomedical engineer and software developer with 5+ years of experience building distributed data systems and backend applications. Currently pursuing a Master of Biotechnology to bridge software engineering and life sciences. Passionate about leveraging data engineering, bioinformatics, and AI to accelerate biotech and healthcare innovation.",
};

/** Stages of the interactive pipeline diagram. `icon` maps to a glyph in Pipeline.js. */
export const pipeline = [
  {
    id: "sources",
    label: "Sources",
    icon: "sources",
    blurb:
      "Clinical systems, medical devices and imaging studies — the messy, high-stakes end of the pipeline.",
    tools: ["Medical devices", "EPIC EHR", "PET / ECGi imaging"],
  },
  {
    id: "ingest",
    label: "Ingest",
    icon: "ingest",
    blurb:
      "Real-time and batch ingestion built to carry six-figure record volumes without dropping anything.",
    tools: ["Apache Kafka", "Apache Flink", "Spring Boot"],
  },
  {
    id: "transform",
    label: "Transform",
    icon: "transform",
    blurb:
      "Modelling raw instrument and event data into trustworthy, analysis-ready tables.",
    tools: ["dbt", "Apache Airflow", "Python", "Scala"],
  },
  {
    id: "serve",
    label: "Serve",
    icon: "serve",
    blurb:
      "Query layers and dashboards that let clinical and business stakeholders act on the data.",
    tools: ["PostgreSQL", "Tableau", "AWS"],
  },
];

export const experience = [
  {
    id: "flosonics",
    role: "Software Engineer, Data Operations",
    company: "Flosonics Medical",
    location: "Toronto, ON",
    start: "April 2026",
    end: "Present",
    current: true,
    bullets: [
      "Built and maintained **dbt** and **Apache Airflow** data models and pipelines, supporting reliable and scalable data transformation workflows.",
      "Improved workflow efficiency by **40%** through process optimization and enhancements to ground-truth labeling workflows.",
      "Developed meaningful and insightful **Tableau dashboards**, enabling stakeholders to monitor key metrics and derive actionable insights from data.",
    ],
  },
  {
    id: "8x8",
    role: "Data Engineer",
    company: "8x8 Inc",
    location: "Ottawa, ON",
    start: "July 2021",
    end: "April 2026",
    bullets: [
      "Developed **Java Spring Boot** applications and **Apache Flink** pipelines in **Scala** capable of ingesting **100,000+ records** for real-time and batch ETL processing.",
      "Built and operated distributed systems for data ingestion, extraction, and transformation of **multi-terabyte** datasets.",
      "Created a Java Spring Boot microservice for optimized data retrieval from PostgreSQL, reducing search query times by **20%**.",
      "Collaborated with cross-functional teams to integrate machine learning outputs into production data streams.",
    ],
  },
  {
    id: "cardiaxis",
    role: "Software Developer Intern",
    company: "CardiAxis Medical",
    location: "Ottawa, ON",
    start: "January 2026",
    end: "April 2026",
    bullets: [
      "Developed scalable **polar map visualization** algorithms for cardiac imaging, enabling dynamic ring-based sampling beyond the standard 16-ring resolution to accommodate variable LV geometry.",
      "Engineered **3D surface object processing pipelines** to convert vertex-based scalar data (ECGi, PET, wall thickness, scar tissue) into polar map representations with temporal dimension support.",
      "Built interactive **target selection tools** with spray-paint contour manipulation, converting 2D polar map selections into 3D contours for myocardium segmentation.",
      "Implemented **Risk Traceability and QMS Methodology** for medical device software to ensure regulatory compliance and code quality standards.",
    ],
  },
  {
    id: "kinaxis",
    role: "Software Developer Intern",
    company: "Kinaxis",
    location: "Ottawa, ON",
    start: "September 2019",
    end: "September 2020",
    bullets: [
      "Implemented **automated test suites (JUnit)**, improving coverage by **30%** and ensuring robust code reliability.",
      "Developed **microservices** to efficiently migrate large-scale datasets via **Kafka**, enhancing data throughput.",
      "Modernized deployment pipelines by introducing **Docker** and **Helm 3**, improving release frequency and scalability.",
    ],
  },
  {
    id: "uohi",
    role: "Software Implementation Support",
    company: "University of Ottawa Heart Institute",
    location: "Ottawa, ON",
    start: "May 2019",
    end: "September 2019",
    bullets: [
      "Supported the rollout of the **EPIC Electronic Health Information System**, providing technical support and troubleshooting.",
      "Collaborated with healthcare teams to optimize workflows for cardiac imaging registration and documentation.",
      "Analyzed data integration issues and developed best practices for diagnostic imaging data management.",
    ],
  },
];

export const education = [
  {
    id: "masters",
    degree: "Master of Biotechnology",
    school: "Carleton University",
    location: "Ottawa, ON",
    start: "September 2025",
    end: "May 2027",
    grade: "GPA 4.0",
    inProgress: true,
  },
  {
    id: "bachelors",
    degree: "Bachelor of Engineering, Biomedical and Electrical Engineering",
    school: "Carleton University",
    location: "Ottawa, ON",
    start: "September 2016",
    end: "May 2021",
    grade: "GPA 3.2",
  },
];

export const skillGroups = [
  {
    id: "languages",
    label: "Languages",
    items: ["Python", "Java", "Scala", "JavaScript (React)", "SQL", "C++"],
  },
  {
    id: "data",
    label: "Data & Infrastructure",
    items: [
      "Apache Kafka",
      "Apache Flink",
      "Spring Boot",
      "ETL Pipelines",
      "PostgreSQL",
      "Docker",
      "Helm",
      "AWS",
      "Git",
    ],
  },
  {
    id: "medical",
    label: "Medical Software",
    items: [
      "3D Slicer",
      "Cardiac Imaging",
      "Polar Map Visualization",
      "QMS Methodology",
      "Risk Traceability",
      "IEC 62304",
    ],
  },
  {
    id: "domains",
    label: "Domains",
    items: [
      "Biotechnology",
      "Biomedical Systems",
      "Bioinformatics",
      "Machine Learning",
      "Health Informatics",
    ],
  },
];

export const sections = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
