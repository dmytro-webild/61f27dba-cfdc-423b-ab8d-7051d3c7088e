import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Usługi",
    "href": "#uslugi"
  },
  {
    "name": "Cennik",
    "href": "#cennik"
  },
  {
    "name": "Opinie",
    "href": "#opinie"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Kontakt",
    "href": "#kontakt"
  }
];

  return (
    <StyleProvider buttonVariant="magnetic" siteBackground="floatingGradient" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarDropdown
      logo="Car Design Detailing"
      ctaButton={{
        text: "Zadzwoń: 697 448 149 / 578 361 152",
        href: "tel:697448149",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="Car Design Detailing"
      columns={[
        {
          title: "Oferta",
          items: [
            {
              label: "Usługi",
              href: "#uslugi",
            },
            {
              label: "Cennik",
              href: "#cennik",
            },
            {
              label: "Opinie",
              href: "#opinie",
            },
          ],
        },
        {
          title: "Social Media",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/profile.php?id=61573845384251",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/_car_design_detailing_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            },
          ],
        },
      ]}
      copyright="© 2025 Car Design Detailing. Wszelkie prawa zastrzeżone."
      links={[
        {
          label: "Polityka Prywatności",
          href: "#",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/car-wash-detailing-station_1303-22315.jpg"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
