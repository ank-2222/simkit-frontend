import { Mail, MapPin, Phone } from 'lucide-react'
import Contactform from './ContactForm'

function Contact() {
  return (
    <div  >
<section className='lg:max-w-[80%] w-full m-auto flex flex-col lg:flex-row justify-center items-start my-10 lg:gap-x-[150px] mt-[100px] '>

        <div className='flex flex-col gap-y-4 lg:w-[518px] p-4 lg:p-0'> 
            <h3  className="text-zinc-800 text-5xl font-semibold font-jakarta leading-[56px]">Ready to get started?</h3>
            <p className=" text-zinc-500 text-lg font-medium font-jakarta leading-normal">
            Have questions or feedback? We're here to help! Reach out using the form below, and we'll get back to you as soon as possible. Your input is important to us.
            </p>
            <div>
                <span className="text-zinc-800 text-lg font-semibold font-jakarta  leading-[30px] flex justify-start gap-x-4 items-center">  
                    <Mail size={20} />
                    info@simkit.com</span>
                <span className="text-zinc-800 text-lg font-semibold font-jakarta  leading-[30px] flex justify-start gap-x-4 items-center">
                    <Phone size={20}/>
                    +1 (737) 377-4989</span>
                <span className="text-zinc-800 text-lg font-semibold font-jakarta  leading-[30px] flex justify-start gap-x-4 items-center">
                    <MapPin size={20}/>
                    500 E 4th Street Austin, TX 78701</span>
            </div>
        </div>


        <div className='lg:w-[500px]  xl:w-[450px] w-full p-4 lg:p-0 mt-[30px] lg:mt-0  '>
            <Contactform/>
        </div>
</section>


    </div>
  )
}

export default Contact