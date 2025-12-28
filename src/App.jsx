import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import LongFooter from './components/LongFooter'
import { profile } from './data/data'
import Testimonials from './components/Testimonials'
import HeroStats from './components/HeroStats'

export default function App(){
return (
<div>
<Navbar />
<main className="min-h-screen pt-20">
<div className="pt-8">
<Hero profile={profile} />
<HeroStats />
<About profile={profile} />
<Skills />
<Projects />
<Experience />
<Testimonials />
<Contact />
</div>
</main>
<LongFooter />
</div>
)
}