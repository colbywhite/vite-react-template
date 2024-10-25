import { Link } from 'react-router-dom'
import { ThemeSwitcher } from '#/components/theme'

// Assets in public directory cannot be imported from JavaScript.
// Instead, we use `src/assets` directory.
import ViteLogo from '../assets/images/vite.svg'

export default function Home() {
  return (
    <div className="mx-auto flex h-full min-h-screen w-full flex-col">
      <header className="mb-auto w-full p-4" aria-hidden>
        <ThemeSwitcher className="float-right size-9" />
      </header>
      <div className="mx-auto flex flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full border-collapse items-center justify-center">
          <img src={ViteLogo} alt="Vite logo" className="h-28" />
        </div>
        <div className="text-center text-gray-600 text-lg sm:mt-8 dark:text-gray-400">
          <p className="leading-8">This is an example starter template React with Vite.</p>
          <p className="leading-8">
            Vite + React + Typescript + Tailwind CSS + React Hook Form + Vitest
          </p>
        </div>
      </div>
      <footer className="mt-auto py-5 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-sm tracking-wide dark:text-gray-400">
            <Link to="https://github.com/riipandi/vite-react-template" className="hover:underline">
              riipandi/vite-react-template
            </Link>
          </p>
          <p className="mt-2 text-gray-600 text-sm tracking-wide dark:text-gray-400">
            v{import.meta.env.APP_VERSION}
          </p>
        </div>
      </footer>
    </div>
  )
}
