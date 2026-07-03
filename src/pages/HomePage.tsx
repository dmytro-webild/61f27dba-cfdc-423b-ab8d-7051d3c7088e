import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesBorderGlow from '@/components/sections/features/FeaturesBorderGlow';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import PricingMediaCards from '@/components/sections/pricing/PricingMediaCards';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import { Award, Car, ShieldCheck, Sparkles } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardCarousel
      tag="Mobilny Detailing"
      title="Mobilny Detailing Premium – Giżycko i okolice do 50 km"
      description="Oszczędzaj czas. Przynosimy standard ekskluzywnego studia prosto pod Twoje drzwi. Działamy bezkompromisowo, dbając o każdy detal Twojego samochodu."
      primaryButton={{
        text: "Zarezerwuj termin",
        href: "#kontakt",
      }}
      secondaryButton={{
        text: "Nasza oferta",
        href: "#uslugi",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/auto-service-salon-doign-car-wrapping_23-2149593838.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193571.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-doing-professional-home-cleaning-service_23-2150358944.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/car-wash-detailing-station_1303-22303.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193591.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/car-detailing-concept-man-face-mask-with-orbital-polisher-repair-shop-polishing-orange-suv-car_627829-12598.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="uslugi" data-section="uslugi">
    <SectionErrorBoundary name="uslugi">
          <FeaturesBorderGlow
      tag="Pakiety Premium"
      title="Nasze usługi"
      description="Ekskluzywne pakiety dla wymagających klientów."
      features={[
        {
          icon: Sparkles,
          title: "ONE STEP PREMIUM",
          description: "Szybkie odświeżenie i blask lakieru.",
        },
        {
          icon: ShieldCheck,
          title: "ONE STEP + CERAMIKA",
          description: "Korekta lakieru z długotrwałą ochroną.",
        },
        {
          icon: Car,
          title: "WNĘTRZE PREMIUM",
          description: "Kompleksowe detailingowe czyszczenie i impregnacja środka.",
        },
        {
          icon: Award,
          title: "FULL DETAILING PREMIUM KOMPLEKS",
          description: "Pełna renowacja wnętrza, lakieru oraz zaawansowana powłoka ceramiczna.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="cennik" data-section="cennik">
    <SectionErrorBoundary name="cennik">
          <PricingMediaCards
      tag="Cennik"
      title="Inwestycja w Twój samochód"
      description="Ostateczna cena zależy od wielkości i stanu pojazdu. Dojazd w cenie przy pakietach premium."
      plans={[
        {
          tag: "Podstawowy",
          price: "od 400 zł",
          period: "WNĘTRZE PREMIUM",
          features: [
            "Odkurzanie",
            "Czyszczenie plastików",
            "Pędzelkowanie",
            "Pranie siedzeń",
            "Impregnacja",
          ],
          primaryButton: {
            text: "Zarezerwuj",
            href: "#kontakt",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193620.jpg",
        },
        {
          tag: "Popularny",
          price: "od 600 zł",
          period: "ONE STEP PREMIUM",
          features: [
            "Odświeżenie lakieru",
            "Usuwanie rys",
            "Głębia koloru",
            "Wosk premium",
          ],
          primaryButton: {
            text: "Zarezerwuj",
            href: "#kontakt",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/man-polishing-car-with-orbital-applicator_1303-30576.jpg",
        },
        {
          tag: "Zaawansowany",
          price: "od 1200 zł",
          period: "ONE STEP + CERAMIKA",
          features: [
            "Korekta lakieru",
            "Roczna powłoka ceramiczna",
          ],
          primaryButton: {
            text: "Zarezerwuj",
            href: "#kontakt",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193564.jpg",
        },
        {
          tag: "Ekskluzywny",
          price: "od 2000 zł",
          period: "FULL DETAILING PREMIUM",
          features: [
            "Pełna renowacja wnętrza",
            "Wieloetapowa korekta",
            "Powłoka do 3 lat",
          ],
          primaryButton: {
            text: "Zarezerwuj",
            href: "#kontakt",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/man-polish-car-garage_1157-26079.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="opinie" data-section="opinie">
    <SectionErrorBoundary name="opinie">
          <TestimonialQuoteCards
      tag="Opinie"
      title="Co mówią klienci"
      description="Zaufanie naszych klientów to dla nas priorytet."
      testimonials={[
        {
          name: "Matrix",
          role: "Klient",
          quote: "Świetna usługa! Mobilny car detailing to ogromna wygoda, przyjechali pod dom. Samochód wygląda jak nowy, tapicerka odświeżona, lakier nabrał głębi.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-man-holding-his-arms-crossed_23-2148737964.jpg",
        },
        {
          name: "Maja.D",
          role: "Klientka",
          quote: "Auto aż się błyszczy! Świetna profesjonalna robota, widać że żaden detal nie został pominięty. Indywidualne podejście, warto!",
          imageSrc: "http://img.b2bpic.net/free-photo/very-good-smiling-brunette-woman-shows-ok-okay-hand-sign-looking-satisfied-recommend-great-deal-pleased-with-quality-standing-white-background_176420-46695.jpg",
        },
        {
          name: "Filip",
          role: "Klient",
          quote: "Profesjonalna robota, przystępne ceny, dużym plusem jest mobilność, nie musiałem marnować czasu na dojazd do studia.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-businesswoman_23-2149153829.jpg",
        },
        {
          name: "Kamil",
          role: "Klient",
          quote: "Najlepsza obsługa w regionie, pełna dbałość o każdy szczegół.",
          imageSrc: "http://img.b2bpic.net/free-photo/brunette-woman-standing-bricks-wall-smiling-with-happy-face-looking-pointing-side-with-thumb-up_839833-15096.jpg",
        },
        {
          name: "Anna",
          role: "Klientka",
          quote: "Na pewno skorzystam ponownie, auto wygląda lepiej niż po wyjeździe z salonu.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-successful-businesswoman-with-charming-smile-posing-street-with-interesting-architecture-background_613910-14028.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="kontakt" data-section="kontakt">
    <SectionErrorBoundary name="kontakt">
          <ContactCta
      tag="Kontakt"
      text="Gotowy na odświeżenie swojego auta? Skontaktuj się z nami!"
      primaryButton={{
        text: "Zadzwoń teraz",
        href: "tel:697448149",
      }}
      secondaryButton={{
        text: "Napisz na Facebooku",
        href: "https://www.facebook.com/profile.php?id=61573845384251",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
