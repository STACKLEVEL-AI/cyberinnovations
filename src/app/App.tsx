import { Hero } from './components/Hero';
import { GoalsAndAccents } from './components/GoalsAndAccents';
import { Challenges } from './components/Challenges';
import { TargetAudience } from './components/TargetAudience';
import { TechnologyDirections } from './components/TechnologyDirections';
import { Priorities } from './components/Priorities';
import { Team } from './components/Team';
import { Achievements } from './components/Achievements';
import { Documents } from './components/Documents';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F3F4E9]">
      <Header />
      <main>
        <Hero />
        <GoalsAndAccents />
        <Challenges />
        <TargetAudience />
        <TechnologyDirections />
        <Priorities />
        <Team />
        <Achievements />
        <Documents />
      </main>
      <Footer />
    </div>
  );
}
