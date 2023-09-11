 import { services } from "../constants"
 import ServicesCard from "../components/ServicesCard"
export default function Services() {
  return (
    <div id="services" className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServicesCard key={service.label} {...service}/>
      ))}


    </div>
  )
}
