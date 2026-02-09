import { useState } from 'react';
import { Hero } from './components/Hero';
import { GoalsAndAccents } from './components/GoalsAndAccents';
import { Challenges } from './components/Challenges';
import { TargetAudience } from './components/TargetAudience';
import { TechnologyDirections, type CommitteeKey } from './components/TechnologyDirections';
import { Priorities } from './components/Priorities';
import { Team } from './components/Team';
import { Achievements } from './components/Achievements';
import { Documents } from './components/Documents';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export default function App() {
  const [activeCommittee, setActiveCommittee] = useState<CommitteeKey>('ai');

  return (
    <div className="min-h-screen bg-[#F3F4E9] scroll-smooth">
      <Header />
      <main>
        <Hero activeCommittee={activeCommittee} />
        <GoalsAndAccents />
        <Challenges />
        <TargetAudience />
        <TechnologyDirections activeKey={activeCommittee} onActiveKeyChange={setActiveCommittee} />
        <Priorities />
        <Team />
        <Achievements />
        <Documents />
      </main>
      <Footer />
    </div>
  );
}
