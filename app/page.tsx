import AboutSection from "@/components/about-section";
import EventsSlider from "@/components/slider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <EventsSlider />
      <AboutSection/>
    </div>
  );
}
