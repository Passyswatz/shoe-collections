import {offer} from "../assets/images"
import Button from "../components/Button"
import {arrowRight} from "../assets/icons"

export default function SpeacialOffers() {
  return (
    <section className="flex justify-wrap item-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} 
        height={687} className="w-full object-contain"/>
      </div>
       <div className="flex flex-1 flex-col">
     
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
        
          <span  className="text-coral-red"> Special</span> Offers
   
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
           Embark on a shopping journey that redefines your experience
           with unbeatable deals, From premier selections to incredible savings,
           we offer unparalled value that sets us apart.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Navigate a realm of possibilities designed to fulfill
            your unique desires, surpassing the loftiest expectation. Your journey
            with us is noyhing short of expectional.
          </p>


<div className="mt-11 flex flex-wrap gap-4 ">
<Button label="Shop Now " iconURL={arrowRight}  />

<Button label="Learn More"
backgroundColor="bg-white"
borderColor="border-slate-gray"
textColor="border-slate-gray"


/>

</div>
       
       </div>
    </section>
  )
}
