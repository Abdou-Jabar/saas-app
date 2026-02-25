import CompanionCard from '@/components/CompanionCard';
import CompanionList from '@/components/CompanionList';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { recentSessions } from '@/constants';

const Page = () => {
  return (
    <main>
      <p>Popular Companion</p>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brain Explorer"
          topic="Neural Network of the brain"
          duration={45}
          subject="Science"
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Countsy the number wizard"
          topic="Derivatives & Integrals"
          duration={30}
          subject="Maths"
          color="#e5d0ff"
        />
        <CompanionCard
          id="789"
          name="Neura the Brain Explorer"
          topic="Neural Network of the brain"
          subject="Langage"
          duration={45}
          color="#bde7ff"
        />
      </section>
      <section className="home-section">
        <CompanionList 
          title="Recently Completed Session"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page
