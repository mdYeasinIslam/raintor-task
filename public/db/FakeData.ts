import { Company } from "@/types/companyType";
import { ServiceType } from "@/types/serviceType";

export const servicesData: ServiceType[] = [
  {
    id: 1,
    title: "Discovery",
    description:
      "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future goals, and recommend the best course of action Creative Director.",
    textColor: "text-gray-300",
  },
  {
    id: 2,
    title: "Strategy",
    description:
      "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth UX/UI reviews we're here to set the stage for success.",
    textColor: "text-gray-800",
  },
  {
    id: 3,
    title: "Design",
    description:
      "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
    textColor: "text-gray-300",
  },
  {
    id: 4,
    title: "Build",
    description:
      "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
    textColor: "text-gray-300",
  },
];
export const companies:Company[] = [
  { name: "awwwards", style: "bg-gray-900 text-white" },
  {
    name: "CSS WINNER",
    style: "bg-white text-gray-900 border border-gray-300",
  },
  {
    name: "thoughtworks",
    style: "bg-white text-gray-900 border border-gray-300",
  },
  {
    name: "facebook",
    style: "bg-white text-gray-900 border border-gray-300",
  },
  {
    name: "AUTODESK",
    style: "bg-white text-gray-900 border border-gray-300",
  },
  {
    name: "CSSDesignAwards",
    style: "bg-white text-gray-900 border border-gray-300",
  },
];
