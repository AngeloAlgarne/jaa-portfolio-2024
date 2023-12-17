import { Hero, Navbar } from '@/components'

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center p-24">
      <Navbar />
      <div className='w-4/5'>
        <Hero />
        <section>
          <div className="flex flex-col gap-10 justify-center">
            <h1>Hi,</h1>
            <h1 className="text-8xl font-bold">Hello World.</h1>
            <h1>Goodbye World.</h1>
          </div>
          <div className="flex flex-col justify-center">
            <div className="overflow-hidden rounded-2xl w-fit">
            </div>
            <div className="flex justify-center gap-10 p-5">
              <div>prev</div>
              <div>pagination</div>
              <div>next</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
