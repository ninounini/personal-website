import Head from 'next/head'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { Modal } from '@/components/Modal'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { Tabs } from '@/components/Tabs'
import { Bundle } from '@/components/Disclosure'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function CheckIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" {...props}>
      <path fillRule="evenodd" className="text-sky-500" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  )
}

function MapIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f1f5f9"  class="w-6 h-6" {...props}>
      <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
    </svg>
  )
}
function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition cursor-not-allowed group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Spencer Sharp - Software designer, founder, and amateur astronaut
        </title>
        <meta
          name="description"
          content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <Container className="mt-16">
        <div className="max-w-2xl">
          <h1 className="flex text-2xl font-semibold tracking-wide text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            Software designer
            <CheckIcon />
          </h1>       
            <h2 className="flex mt-2 text-zinc-600 dark:text-zinc-400 sm:text-xl">
              @Ste -
              <p className="text-zinc-600 dark:text-zinc-400 ml-2 sm:text-xl">seen Yesterday              
                <span className="absolute rounded-full h-3 w-3 ml-1 mt-1 bg-yellow-500"></span>
              </p> 
            </h2>                                
          <Disclosure>
            {({ open }) => (
            <div>
            <Disclosure.Button className="flex justify-between">
              <p className="mt-2 text-base dark:text-white">
                Hi you 🥰 It’s Lexibaby1313 aka whore4dogs💋🐕🐶 All content is 18+🔥🔥...            
              </p>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform transition' : ''
                  } mt-3 h-6 w-6 text-slate-600 dark:text-white`}
                />
            </Disclosure.Button>
            <Disclosure.Panel>
              <p className="text-base text-zinc-800 dark:text-white">
                I take video suggestions, lmk what you want to see by sending me a direct message!❤️<br/>
                I respond as often as I can you won’t be ignored!<br/>
                ⚠️ Subscribers may not screenshot, download, distribute, or publish any content from this Website!<br/> Violation of this will result in you being banned permanently.
                <br/>By subscribing up for this Website, you are stating that you are at least 18 + and will adhere to these terms and conditions.
              </p>
              
              <p className="flex text-zinc-600 dark:text-zinc-400 sm:text-xl">
                <MapIcon className="h-6 w-6 mt-1 mr-2 fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"/>
                France
              </p>
            
            </Disclosure.Panel>
          </div>
          )}
          </Disclosure>         
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>      
      </Container>
      <Container>
        <Modal />
        <Bundle />       
        <Tabs />
      </Container>
    </>
  )
}
export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
