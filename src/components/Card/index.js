import React from 'react'
import CardThree from './Cards/CardThree'

export default function Card() {
  return (
    <div className="container mx-auto px-4 py-5">
      <div class="grid sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CardThree />
        <CardThree />
        <CardThree />
      </div>
    </div>
  )
}
