import { servicesData } from "../../../public/db/ServicesData";
import SeviceSignleCard from "./SeviceSignleCard";



export default function ServiceAllCard() {

  return (
    <section className="py-16 px-4 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service) => (
           <SeviceSignleCard key={service.id} service={service}/>
          ))}
        </div>
      </div>
    </section>
  );
}
