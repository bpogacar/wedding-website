import HeroSection from './sections/HeroSection';
import DetailsSection from './sections/DetailsSection';
import Countdown from './components/Countdown';
import ItinerarySection from './sections/ItinerarySection';
import TravelSection from './sections/TravelSection';
import WeddingPartySection from './sections/WeddingPartySection';
import RegistrySection from './sections/RegistrySection';
import AttractionsSection from './sections/AttractionsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Countdown />
      <DetailsSection />
      <ItinerarySection />
      <TravelSection />
      <WeddingPartySection />
      <RegistrySection />
      <AttractionsSection />
    </>
  );
}
