import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const IndexPage = () => (
  <div className="flex flex-col desktop:flex-row">
    <div className="p-9 container mx-auto desktop:order-2">
      <Image
        src="/svg/twitter-logo-blue.svg"
        width={45}
        height={57}
        alt="twitter blue logo"
        className="pb-3"
      />
      <div className="my-10 tablet:my-11 font-display text-4xl font-bold tracking-tight tablet:text-6xl tablet:tracking-tighter tablet:leading-snug">
        Happening now
      </div>
      <div className="mb-5 font-display text-2xl font-bold leading-7 tablet:text-3xl tablet:mb-8">
        Join Twitter today.
      </div>
      <div className="flex flex-col tablet:flex-row desktop:flex-col">
        <Link href="#">
          <a className="bg-blueSecondary mb-5 px-8 rounded-full min-h-48 flex items-center justify-center flex-grow hover:bg-blue-500 h-12 tablet:mr-5 desktop:w-96">
            <span className="text-white	font-bold text-base">Sign up</span>
          </a>
        </Link>
        <Link href="#">
          <a className="bg-white border-blue-400 border mb-5 px-8 rounded-full min-h-48 flex items-center justify-center flex-grow hover:bg-gray-100 h-12 desktop:w-96">
            <span className="font-bold text-base text-blue-400">Log in</span>
          </a>
        </Link>
      </div>
    </div>
    <div className="relative w-full h-96 desktop:h-screen">
      <Image
        src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
        layout="fill"
        objectFit="fill"
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
  </div>
)

export default IndexPage
