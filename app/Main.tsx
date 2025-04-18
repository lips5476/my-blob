import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import LocationIcon from '@/data/locationIcon.svg'
import Technologies from '@/components/Technologies'
import Projects from '@/components/Project'
export default function Home({ posts }) {
  return (
    <>
      <div>
        <div className="relative space-y-2 pt-6 pb-8 md:space-y-5">
          <Image
            src={'/static/images/avatar.jpg'}
            alt="avatar"
            quality={100}
            width={80}
            height={80}
            className="mx-auto rounded-[10px]"
          />
          <h1 className="text-center text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            {siteMetadata.author}
          </h1>
          <p className="row align-center flex justify-center text-lg leading-7 text-gray-500 dark:text-gray-400">
            <LocationIcon className="h-5 w-5" />
            <span className="leading-6">{siteMetadata.location}</span>
          </p>
          <p className="text-center text-3xl leading-7 text-black dark:text-gray-400">
            {siteMetadata.identity}
          </p>
        </div>
        {/* 技术栈 */}
        <Technologies />
        {/* 项目 */}
        <Projects />
      </div>
    </>
  )
}
