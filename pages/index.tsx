import React from "react"
import Link from 'next/link';

import Options from './options';

export default function Index () {
  return (
    <>
      <Link href='/'>
        <Options />
      </Link>
    </>
  )
}
