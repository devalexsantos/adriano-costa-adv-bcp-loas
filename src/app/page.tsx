import AboutBusiness from '@/components/AboutBusiness'
import AboutSession from '@/components/AboutSession'
import CallButton from '@/components/CallButton'
import FAQ from '@/components/FAQ'
import StepByStep from '@/components/StepByStep'
import WhatsAppBox from '@/components/WhatsAppBox'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export default function Home() {
  return (
    <main className="m-auto">
      <Header />
      <StepByStep />
      <AboutSession />
      <FAQ />
      <AboutBusiness />
      <Footer />
      <WhatsAppBox />
      <CallButton />
    </main>
  )
}
