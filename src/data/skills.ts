import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "Python",
        level: SkillLevel.Expert,
        icon: "/skills/python.svg",
      },
      {
        title: "C",
        level: SkillLevel.Intermediate,
        icon: "/skills/c.svg",
      },
      {
        title: "C++",
        level: SkillLevel.Intermediate,
        icon: "/skills/cpp.png",
      },
      {
        title: "SQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/sql.svg",
      },
    ],
  },
  {
    title: "Security Tools",
    items: [
      {
        title: "Metasploit",
        level: SkillLevel.Expert,
        icon: "/skills/metasploit.svg",
      },
      {
        title: "Burp Suite",
        level: SkillLevel.Expert,
        icon: "/skills/burp-suite.svg",
      },
      {
        title: "OWASP ZAP",
        level: SkillLevel.Expert,
        icon: "/skills/zap.svg",
      },
      {
        title: "Nmap",
        level: SkillLevel.Expert,
        icon: "/skills/nmap.svg",
      },
      {
        title: "Wireshark",
        level: SkillLevel.Intermediate,
        icon: "/skills/wireshark.svg",
      },
    ],
  },
  {
    title: "Security Standards",
    items: [
      {
        title: "GDPR",
        level: SkillLevel.Intermediate,
        icon: "/images/gdpr.png",
      },
      {
        title: "PCI-DSS",
        level: SkillLevel.Intermediate,
        icon: "/images/pci-dss.png",
      },
      {
        title: "ISO-27001",
        level: SkillLevel.Intermediate,
        icon: "/images/iso-27001.png",
      },
      {
        title: "NIST",
        level: SkillLevel.Intermediate,
        icon: "/images/nist.png",
      },
    ],
  },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Analytical Thinking",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/problem-solving.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Adaptability",
        level: SkillLevel.Expert,
        icon: "/images/adaptability.png",
      },
    ],
  },
];

export default skills;
