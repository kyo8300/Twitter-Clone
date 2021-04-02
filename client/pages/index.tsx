import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const IndexPage = () => (
  <>
    <div className="container mx-auto p-9">
      <Image
        src="/svg/twitter-logo-blue.svg"
        width={45}
        height={57}
        alt="twitter blue logo"
      />
      <div className="my-10 sm:my-12 font-display text-4xl sm:text-6xl font-bold tracking-tight leading-small sm:leading-large">
        Happening now
      </div>
      <div className="text-2xl sm:text-3xl mb-5 sm:mb-8 font-bold font-display leading-9">
        Join Twitter today.
      </div>
      <div className="flex flex-col sm:flex-row">
        <Link href="#">
          <a className="bg-blueSecondary mr-5 mb-5 px-8 rounded-full min-h-48 flex items-center justify-center flex-grow hover:bg-blue-500">
            <span className="text-white	font-bold text-base">Sign up</span>
          </a>
        </Link>
        <Link href="#">
          <a className="mr-5 bg-white border-blue-400 border mb-5 px-8 rounded-full min-h-48 flex items-center justify-center flex-grow hover:bg-gray-100">
            <span className="font-bold text-base text-blue-400">Log in</span>
          </a>
        </Link>
      </div>
    </div>
    <div className="relative h-full w-full">
      <Image
        src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
        width={1302}
        height={955}
        alt="background image"
      />
      <div className="absolute h-full w-full top-0 left-0 flex justify-center items-center">
        <Image
          src="/svg/twitter-logo-white.svg"
          width={360}
          height={295}
          alt="twitter white logo"
        />
      </div>
    </div>
  </>
)

export default IndexPage
