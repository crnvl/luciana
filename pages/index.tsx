import type { NextPage } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <div className='bg-black text-white h-screen'>
        <Navbar />
        <div className='flex justify-center text-center'>
          <div className="py-32 m-auto">
            <div>
              <h2 className="font-extrabold text-6xl">Founder of XP.</h2>
            </div>
            <div>
              <p className='text-xl max-w-md py-4 text-gray-300'>8 years experience, full stack. Interested in web development, machine learning and always excited to learn.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
