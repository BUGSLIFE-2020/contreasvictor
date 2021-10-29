import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
          <title>Victor Contreras</title>
          <meta charSet="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <meta name="viewport" content="width=device-width,initial-scale=1"/>
          <title>VC: Victor Contreras</title>
          <meta name="author" content="Victor Contreas"/>
          <meta name="description" content="VC: Victor Contreras, my portfolio and personal brand."/>
          <link rel="shortcut icon" href="https://bugslife-2020.github.io/TurtleToSquirtle/favicon.ico" type="image/vnd.microsoft.icon"/>
          <link rel="apple-touch-icon" sizes="180x180" href="https://bugslife-2020.github.io/TurtleToSquirtle/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="https://bugslife-2020.github.io/TurtleToSquirtle/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="https://bugslife-2020.github.io/TurtleToSquirtle/favicon-16x16.png"/>
          <link rel="manifest" href="https://bugslife-2020.github.io/TurtleToSquirtle/site.webmanifest"/>
          <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
      </Head>
      <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
        <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg" alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-semibold">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-cyan-600">
              Sarah Dayan
            </div>
            <div className="text-gray-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>

    </div>
  )
}

export default Home;
