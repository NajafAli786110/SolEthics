"use client"
import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import MovingButtonAnimate from "@/components/MovingButtonAnimate";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  
  return (
    <main className="text-black">
      <Container className="mt-18 sm:mt-32 main_video_css">
        <FadeIn className="w-full">
          <h1 className="font-display text-7xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl text-center">
            Ethical<span className="hero_span_word"> Design</span>, Passionate <span className="hero_span_word">Development</span>, Digital <span className="hero_span_word">Influence</span>.
          </h1>
          <p className="mt-6 text-xl text-neutral-600 text-center">
            As a pioneering digital agency, we specialize in providing ethical
            solutions that align with our clients' values and beliefs. At
            SolEthics, we understand the importance of addressing ethical
            concerns in today's digital landscape.
          </p>
        </FadeIn>
        <MovingButtonAnimate />
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user microphone without triggering one of
        those annoying permission dialogs.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
