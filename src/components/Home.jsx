import Navbar from './Navbar'
import Slider from './Slider'
import FindWorker from './FindWorker'
import HowItWorks from './HowItWorks'
import PopularCategories from './PopularCategories'
import TrustSafety from './TrustSafety'
import FAQ from './FAQ'
import ServiceOverview from './ServiceOverview'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <FindWorker />
      <HowItWorks />
      <PopularCategories />
      <TrustSafety />
      <FAQ />
      <ServiceOverview />
      <Footer />
    </div>
  )
}

export default Home
