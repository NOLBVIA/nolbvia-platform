import { BuildSection } from './components/BuildSection'
import { Contact } from './components/Contact'
import { Ecosystem } from './components/Ecosystem'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Vision } from './components/Vision'
import { CinematicSequence } from './components/CinematicSequence'
import { cinematicScenes, cinematicSequence } from './content/site'
import { useReveal } from './hooks/useReveal'

export default function App() { useReveal(); return <><CinematicSequence className="site-cinematic-background" fullPage scenes={[...cinematicScenes]} {...cinematicSequence} /><Navbar /><main><Hero /><Ecosystem /><BuildSection /><Vision /><Projects /><Contact /></main><Footer /></> }
