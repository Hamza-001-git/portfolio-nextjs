import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "deeptruth",
    title: "DeepTruth - Deepfake Detection",
    description:
      "Developed a deep learning-based web application for detecting deepfakes using ResNeXt and LSTM architectures to analyze video frames and temporal features effectively.",
    repoType: RepoType.Public,
    projectType: ProjectType.Academic,
    githubUrl: "#",
    tags: ["Python", "Deep Learning", "ResNeXt", "LSTM"],
  },
  {
    id: "port-scanner",
    title: "Port Scanner",
    description:
      "Developed a Python CLI tool to find and list open ports on local and remote systems using socket programming, improving security by detecting vulnerabilities.",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "#",
    tags: ["Python", "Socket Programming", "Security"],
  },
  {
    id: "splunk-siem",
    title: "Splunk SIEM Lab Setup",
    description:
      "Developed a virtual lab utilizing VMware, pfSense, Security Onion, and Splunk for real-time threat monitoring and analysis of a Windows Server and Windows 10 PC.",
    repoType: RepoType.Public,
    projectType: ProjectType.Academic,
    githubUrl: "#",
    tags: ["Splunk", "SIEM", "VMware", "pfSense"],
  },
  {
    id: "vulnerability-scanner",
    title: "Website Vulnerability Scanner",
    description:
      "Developed a security tool capable of detecting SQL injection and Cross-Site Scripting vulnerabilities in web applications using Python, Beautiful Soup and Requests.",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "#",
    tags: ["Python", "Security", "Web Vulnerabilities"],
  },
];

export default projects;
