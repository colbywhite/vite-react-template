import ViteLogo from '../assets/images/vite.svg'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="mx-auto flex h-full min-h-screen w-full flex-col">
      <main className="prose mx-auto flex flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full border-collapse items-center justify-center">
          <img src={ViteLogo} alt="Vite logo" className="h-28" />
        </div>
        <div className="text-center text-lg sm:mt-8">
          <p className="leading-8">This is an example starter template React with Vite.</p>
          <p className="leading-8">
            Vite + React + Typescript + Tailwind CSS + React Hook Form + Vitest
          </p>
        </div>
      </main>
      <footer className="mt-auto py-5 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm tracking-wide">
            <Link to="https://github.com/riipandi/vite-react-template" className="hover:underline">
              riipandi/vite-react-template
            </Link>
          </p>
          <p className="mt-2 text-sm tracking-wide">
            v{import.meta.env.APP_VERSION}
          </p>
        </div>
      </footer>
    </div>
  )
}
