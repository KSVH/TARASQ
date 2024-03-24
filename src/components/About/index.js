import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function About() {
  return (
    <div className='bg-background-secondary'>
      <div className='container mx-auto px-4'>
        <div class="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-5">
          <div>
            <h2 className='text-white text-3xl font-bold md:pt-20 md:pb-10 pt-10 pb-10'>
              Qui suis-je ?
            </h2>
            <p className='mb-10 text-[#CDC8DC] font-medium text-xl'>
              Aujourd'hui, nous plongeons dans l'univers captivant d'un artiste dont la créativité transcende les frontières musicales..
              <br />
              Aujourd'hui, nous plongeons dans l'univers captivant d'un artiste dont la créativité transcende les frontières musicales..
            </p>
            <p className='md:pb-20 text-[#CDC8DC] font-medium text-xl'>Aujourd'hui, nous plongeons dans l'univers captivant d'un artiste dont la créativité transcende les frontières musicales..
              Aujourd'hui, nous plongeons dans l'univers captivant d'un artiste dont la créativité transcende les frontières musicales..
            </p>
          </div>
          <div className="w-full h-[450px] md:mt-20 md:mb-10 mt-5 mb-5">
            <StaticImage src="../../images/self/self.jpg"
              alt="A dinosaur"
              placeholder="blurred"
              layout="constrained"
              class='rounded'
              style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
        <h3 className="text-2xl text-white font-semibold md:py-10 pt-4 pb-10">
          Mes passions
        </h3>
        <div class="grid lg:grid-cols-3 md:gap-16 gap-5 pb-20 md:grid-cols-2">
          <div class='group'>
            <div class='w-full rounded bg-[#D9D4E7] px-10 py-10 transition-transform duration-300 ease-out transform group-hover:-translate-y-1 cursor-pointer'>
              <h4 class='text-xl font-semibold text-paragraph'>
                Le développement web
              </h4>
              <p class='text text-paragraph mt-3'>Particulièrement le front-end, car j'adore visuellement voir l'avancée de mes créations.</p>
            </div>
          </div>
          <div class='group'>
            <div class='w-full rounded bg-[#D9D4E7] px-10 py-10 transition-transform duration-300 ease-out transform group-hover:-translate-y-1 cursor-pointer'>
              <h4 class='text-xl font-semibold text-paragraph'>
                L'UX/UI
              </h4>
              <p class='text text-paragraph mt-3'>Je suis passionnée par le design et surveille les dernières tendances.</p>
            </div>
          </div>
          <div class='group'>
            <div class='w-full rounded bg-[#D9D4E7] px-10 py-10 transition-transform duration-300 ease-out transform group-hover:-translate-y-1 cursor-pointer'>
              <h4 class='text-xl font-semibold text-paragraph'>
                Le cosplay
              </h4>
              <p class='text text-paragraph mt-3'>J'aime beaucoup faire du cosplay à mes heures perdues sur les jeux auxquels j'ai pu jouer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
