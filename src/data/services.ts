import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Penetration Testing",
    icons: [
      "/skills/burp-suite.svg",
      "/skills/metasploit.svg",
      "/skills/zap.svg",
      "/skills/nmap.svg",
      "/skills/wireshark.svg",
    ],
    shortDescription:
      "Comprehensive security assessments to identify and remediate vulnerabilities.",
    description:
      "I perform thorough penetration tests on web applications, mobile apps, and networks to uncover security weaknesses. Using industry-standard tools and methodologies, I provide detailed reports with actionable recommendations to strengthen your security posture.",
  },
  {
    id: 2,
    title: "Vulnerability Assessment",
    icons: [
      "/skills/nessus.svg",
      "/skills/metasploit.svg",
      "/skills/nikto.svg",
      "/skills/sqlmap.svg",
      "/skills/gobuster.svg",
    ],
    shortDescription: "Systematic identification and classification of security vulnerabilities.",
    description:
      "I conduct comprehensive vulnerability assessments to identify security gaps in your systems. Using automated scanning tools and manual verification techniques, I provide prioritized remediation plans to mitigate risks effectively.",
  },
  {
    id: 3,
    title: "Security Consulting",
    icons: [
      "/images/gdpr.png",
      "/images/pci-dss.png",
      "/images/iso-27001.png",
      "/images/nist.png",
      "/skills/splunk.svg",
    ],
    shortDescription: "Expert guidance on security standards and best practices.",
    description:
      "I provide strategic security consulting services to help organizations align with industry standards like GDPR, PCI-DSS, ISO-27001, and NIST frameworks. My guidance helps establish robust security policies and procedures tailored to your business needs.",
  },
  {
    id: 4,
    title: "Security Training",
    icons: [
      "/images/awareness.png",
      "/images/education.png",
      "/images/presentation.png",
      "/images/workshop.png",
      "/images/certification.png",
    ],
    shortDescription:
      "Customized security awareness and technical training programs.",
    description:
      "I develop and deliver security training programs for technical teams and end-users. From secure coding practices for developers to security awareness for employees, my training helps build a security-conscious culture within organizations.",
  },
];

export default services;
