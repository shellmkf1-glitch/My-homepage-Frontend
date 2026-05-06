import HeroTypeC from '../components/HeroTypeC';
import AboutSection from '../components/AboutSection';
import FeatureGrid from '../components/FeatureGrid';
import StatsRow from '../components/StatsRow';
import PersonalSection from '../components/PersonalSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroTypeC />
      <AboutSection />
      <section id="services" className="py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeatureGrid />
        </div>
      </section>
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StatsRow />
        </div>
      </section>
      <PersonalSection />
      <ContactSection />
    </>
  );
}
