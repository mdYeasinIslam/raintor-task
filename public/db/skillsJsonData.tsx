import { SkillType } from "@/types/skillsType";
import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs } from "react-icons/si";

export const skillsData:SkillType[] = [
  {
    id: 1,
    title: "HTML & CSS",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis nostrud exercitation.",
    icon: <FaHtml5 className="w-16 h-16 text-blue-400" />,
  },
  {
    id: 2,
    title: "Javascript",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis nostrud exercitation.",
    icon: <IoLogoJavascript className="w-16 h-16 text-yellow-400" />,
  },
  {
    id: 3,
    title: "React.js",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis nostrud exercitation.",
    icon: <FaReact className="w-16 h-16 text-blue-400" />,
  },
  {
    id: 4,
    title: "Next.js",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis nostrud exercitation.",
    icon: <SiNextdotjs className="w-16 h-16" />,
  },

  {
    id: 5,
    title: "Node.js",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis nostrud exercitation.",
    icon: <FaNodeJs className="w-16 h-16 text-lime-400" />,
  },
];