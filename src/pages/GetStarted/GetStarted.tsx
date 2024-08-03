import Footer from '@/components/Footer'
import Hero from './components/Hero'
import Subscription from './components/Subscription'

function GetStarted() {
  return (
    <div className='max-w-[100vw] overflow-hidden mt-16  '>

      <Hero/>
      <Subscription/>
      <Footer/>
    </div>
  )
}

export default GetStarted