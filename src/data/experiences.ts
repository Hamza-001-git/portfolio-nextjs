import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Penetration Tester",
    company: "Idenfo",
    startDate: "Feb 2025",
    isCurrentJob: true,
    location: "Norwich, England, United Kingdom",
    description: [
      "Performed VAPT on web apps, APIs, and Android/iOS apps using manual methods and tools like Burp Suite, ZAP, Frida, Objection and MobSF.",
      "Identified and exploited vulnerabilities; provided remediation aligned with OWASP Top 10 and MASVS.",
      "Tested apps in both standard and rooted/jailbroken environments.",
      "Delivered clear, actionable security reports for technical and non-technical stakeholders.",
      "Collaborated with developers to explain findings and enforce secure coding practices.",
    ],
  },
  {
    designation: "BS in Cyber Security",
    company: "Riphab International University",
    startDate: "Mar 2021",
    endDate: "Dec 2024",
    isCurrentJob: false,
    location: "Pakistan",
    description: [
      "Specialized in cybersecurity with hands-on expertise in vulnerability assessments and penetration testing.",
      "Developed deepfake detection project using AI technologies.",
      "Studied information security standards (GDPR, PCI-DSS, ISO-270001, NIST).",
    ],
  },
];

export default experiences;
