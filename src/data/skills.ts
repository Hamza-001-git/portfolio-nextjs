import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "Python",
        level: SkillLevel.Expert,
      },
      {
        title: "C",
        level: SkillLevel.Intermediate,
       
      },
      {
        title: "C++",
        level: SkillLevel.Intermediate,
       
      },
      {
        title: "SQL",
        level: SkillLevel.Intermediate,
      },
    ],
  },
  {
    title: "Security Tools",
    items: [
      {
        title: "Metasploit",
        level: SkillLevel.Expert,
      },
      {
        title: "Burp Suite",
        level: SkillLevel.Expert,
      },
      {
        title: "OWASP ZAP",
        level: SkillLevel.Expert,
      },
      {
        title: "Nmap",
        level: SkillLevel.Expert,
      },
      {
        title: "Wireshark",
        level: SkillLevel.Intermediate,
      },
    ],
  },
  {
    title: "Security Standards",
    items: [
      {
        title: "GDPR",
        level: SkillLevel.Intermediate,
      },
      {
        title: "PCI-DSS",
        level: SkillLevel.Intermediate,
      },
      {
        title: "ISO-27001",
        level: SkillLevel.Intermediate,
      },
      {
        title: "NIST",
        level: SkillLevel.Intermediate,
      },
    ],
  },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Analytical Thinking",
        level: SkillLevel.Expert,
      },
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
      },
      {
        title: "Adaptability",
        level: SkillLevel.Expert,

      },
    ],
  },
];

export default skills;
