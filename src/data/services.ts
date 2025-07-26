import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Penetration Testing",
    shortDescription:
      "Comprehensive security assessments to identify and remediate vulnerabilities.",
    description:
      "I perform thorough penetration tests on web applications, mobile apps, and networks to uncover security weaknesses. Using industry-standard tools and methodologies, I provide detailed reports with actionable recommendations to strengthen your security posture.",
  },
  {
    id: 2,
    title: "Vulnerability Assessment",
    
    shortDescription: "Systematic identification and classification of security vulnerabilities.",
    description:
      "I conduct comprehensive vulnerability assessments to identify security gaps in your systems. Using automated scanning tools and manual verification techniques, I provide prioritized remediation plans to mitigate risks effectively.",
  },
  {
    id: 3,
    title: "Security Consulting",
    
    shortDescription: "Expert guidance on security standards and best practices.",
    description:
      "I provide strategic security consulting services to help organizations align with industry standards like GDPR, PCI-DSS, ISO-27001, and NIST frameworks. My guidance helps establish robust security policies and procedures tailored to your business needs.",
  },
  {
    id: 4,
    title: "Security Training",
    
    shortDescription:
      "Customized security awareness and technical training programs.",
    description:
      "I develop and deliver security training programs for technical teams and end-users. From secure coding practices for developers to security awareness for employees, my training helps build a security-conscious culture within organizations.",
  },
];

export default services;
