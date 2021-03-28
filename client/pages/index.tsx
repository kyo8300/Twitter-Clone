import React from 'react'
import Image from 'next/image'

import Example from 'components/Example'

const IndexPage = () => (
  <div className="container bg-red-100">
    <Image src="/twitter-logo-blue.svg" width={600} height={600} />
    <Example />
  </div>
)

export default IndexPage
