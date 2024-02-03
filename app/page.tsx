import Image from 'next/image'
import Logo from '../assets/logo.svg'
import LandingImg from '../assets/main.svg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6 '>
        <Image src={Logo} alt='logo' />
      </header>
      <section className='max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center'>
        <div>
          <h1 className='capitalize text-4xl md:text-7xl font-bold'>
            job <span className='text-primary'>tracking</span> app
          </h1>
          <p className='leading-loose max-w-md mt-4 '>
            Welcome to JobTrackr, your go-to companion in the pursuit of career
            excellence. Seamlessly manage your job applications, interviews, and
            deadlines with our intuitive platform. Gain smart insights, set
            reminders, and stay connected with a supportive community. JobTrackr
            ensures you never miss a beat in your job search, empowering you to
            make informed decisions and turn your aspirations into achievements.
            Start your success story today – join JobTrackr and take control of
            your career journey with confidence.
          </p>
          <Button asChild className='mt-4'>
            <Link href='/add-job'>Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt='landing' className='hidden lg:block ' />
      </section>
    </main>
  )
}
