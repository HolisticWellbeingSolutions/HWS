import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import LandingComponent from "@/components/landingComponent";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/enquiry";
import heroImage from "@/assets/pwm-hero.jpg";
import clientsImage from "@/assets/landingbg2.jpg";
import executiveImage from "@/assets/hero-wellness.jpg";
import practiceImage from "@/assets/headquarters.jpg";

/**
 * Private Wellbeing Management (/private-wellbeing-management).
 * Copy supplied by HWS ("1.1 HWS Private Wellbeing Management" document, Nov 2026).
 * Replaces the former Family Offices and Executives pages, which now redirect here.
 */

const SITE = "https://www.holisticwell-beingsolutions.com";
const PAGE = `${SITE}/private-wellbeing-management`;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE}#service`,
      name: "Private Wellbeing Management",
      serviceType:
        "Private wellbeing management, executive wellbeing, psychological therapies, wellness and longevity",
      provider: { "@id": `${SITE}/#business` },
      areaServed: { "@type": "City", name: "London" },
      audience: { "@type": "Audience", audienceType: "Private clients, families, CEOs, founders and senior leaders" },
      url: PAGE,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Private Wellbeing Management", item: PAGE },
      ],
    },
  ],
};

const tint = "bg-[#176a79]/10";
const pad = "py-10 md:py-16 px-5 md:px-12 lg:px-24 flex justify-center";
const body = "max-w-3xl w-full space-y-4 text-sm md:text-base leading-relaxed";

const SectionHead = ({ label, sub }: { label: string; sub: string }) => (
  <header className="space-y-2 mb-2">
    <h2 className="text-2xl md:text-3xl">{label}</h2>
    <p className="text-lg md:text-xl text-[#176a79]">{sub}</p>
  </header>
);

const Lead = ({ children }: { children: ReactNode }) => (
  <p className="text-base md:text-lg font-medium">{children}</p>
);

const Closing = ({ children }: { children: ReactNode }) => (
  <p className="italic text-[#176a79] pt-2">{children}</p>
);

/** Text beside a picture; `flip` puts the picture on the left on wide screens. */
const WithImage = ({
  children,
  src,
  alt,
  flip = false,
}: {
  children: ReactNode;
  src: string;
  alt: string;
  flip?: boolean;
}) => (
  <div className="max-w-5xl w-full grid gap-8 lg:gap-12 lg:grid-cols-[3fr_2fr] items-center">
    <div className={`space-y-4 text-sm md:text-base leading-relaxed ${flip ? "lg:order-2" : ""}`}>{children}</div>
    <figure className={`relative min-h-[280px] md:min-h-[420px] overflow-hidden shadow-sm ${flip ? "lg:order-1" : ""}`}>
      <img src={src} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
    </figure>
  </div>
);

const PrivateWellbeingManagement = () => (
  <div className="min-h-screen w-full flex flex-col text-[#053d57]" style={{ fontFamily: "Josefin Sans" }}>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />

    <LandingComponent
      image={heroImage}
      title="Private Wellbeing Management"
      titleSize="text-3xl md:text-5xl max-w-5xl leading-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]"
      contactbutton={true}
      overlay={true}
      buttonText="Arrange a Private Consultation"
      textcolor="text-[#ebf0f2]"
    />

    {/* Intro band */}
    <section className={`${tint} ${pad}`}>
      <div className={`${body} text-center`}>
        <p className="text-xs uppercase tracking-[0.2em] text-[#176a79]">The Art of Well-being</p>
        <p className="text-xl md:text-2xl italic">The Art of Personalised Wellbeing</p>
        <p className="text-xs md:text-sm uppercase tracking-[0.2em]">
          Discretion • Expertise • Exceptional Personal Attention
        </p>
      </div>
    </section>

    {/* Philosophy */}
    <section className={pad}>
      <div className={body}>
        <SectionHead
          label="A More Personal Philosophy of Care"
          sub="Exceptional wellbeing begins with a deeper understanding of the individual."
        />
        <p>
          At Holistic Well-being Solutions (HWS), we offer an elevated approach to private wellbeing management,
          thoughtfully designed for individuals and families who value discretion, professional expertise and care
          of an exceptional personal standard.
        </p>
        <p>
          Based in Holborn, Central London, HWS brings together evidence-based psychological therapies, tailored
          wellbeing strategies and complementary holistic practices within a considered, individually curated
          framework.
        </p>
        <p>
          Our approach recognises that true wellbeing extends beyond any single aspect of health. It encompasses
          emotional balance, psychological resilience, physical vitality and the ability to flourish in every
          dimension of life.
        </p>
        <p>
          Every relationship is shaped by a careful understanding of your circumstances, aspirations and evolving
          priorities, ensuring that the care you receive remains as individual as the life you lead.
        </p>
        <Closing>Distinctively personal. Thoughtfully considered. Discreet by nature.</Closing>
      </div>
    </section>

    {/* Distinguished clients */}
    <section className={`${tint} ${pad}`}>
      <WithImage src={clientsImage} alt="A quiet, plant-filled conservatory with a reading chair">
        <SectionHead
          label="Private Wellbeing for Distinguished Clients"
          sub="Exceptional Lives. Exceptional Consideration."
        />
        <p>
          For individuals whose lives carry distinctive responsibilities, public visibility or complex personal
          demands, wellbeing deserves an equally distinctive approach.
        </p>
        <p>
          HWS provides bespoke private wellbeing management for discerning individuals, prominent families,
          high-profile personalities and public figures seeking a refined standard of confidential, personalised
          support.
        </p>
        <p>
          Our services bring together psychological wellbeing, emotional resilience, holistic wellness and
          longevity-focused strategies, thoughtfully tailored to individual circumstances and personal aspirations.
        </p>
        <p>
          Recognising the importance of privacy, continuity and effortless coordination, we work discreetly with
          family offices, private concierges and authorised representatives where appropriate, ensuring that
          arrangements are managed with sensitivity, professionalism and the utmost respect for confidentiality.
        </p>
        <p>
          Our philosophy is one of understated excellence: attentive without intrusion, comprehensive without
          complexity and always centred on the individual.
        </p>
        <Closing>An exceptional standard of care. A deeply personal experience.</Closing>
      </WithImage>
    </section>

    {/* Executive wellbeing */}
    <section className={pad}>
      <WithImage src={executiveImage} alt="A calm, light-filled room with balanced stones and plants" flip>
        <SectionHead
          label="Executive Wellbeing for CEOs, Founders & Leaders"
          sub="The Foundation of Enduring Excellence"
        />
        <Lead>Exceptional leadership begins with personal wellbeing.</Lead>
        <p>
          For those entrusted with significant responsibility, sustained performance requires more than ambition and
          achievement. It calls for clarity of mind, emotional resilience, physical vitality and a considered
          approach to long-term wellbeing.
        </p>
        <p>
          HWS offers bespoke executive wellbeing management for CEOs, founders, senior executives and influential
          leaders navigating the demands of complex professional and personal lives.
        </p>
        <p>
          Our tailored programmes integrate evidence-based psychological therapies, executive mental health support,
          stress management, burnout prevention and personalised wellness and longevity strategies.
        </p>
        <p>
          Delivered with discretion and flexibility, our approach respects the realities of demanding schedules
          while creating space for meaningful restoration, sustainable performance and personal fulfilment.
        </p>
        <p>
          We believe that professional distinction and personal wellbeing should complement, rather than compete
          with, one another.
        </p>
        <Closing>Clarity in leadership. Resilience in life. Wellbeing without compromise.</Closing>
      </WithImage>
    </section>

    {/* Private care experience */}
    <section className={`${tint} ${pad}`}>
      <div className={body}>
        <SectionHead label="The HWS Private Care Experience" sub="A Distinctive Standard of Personal Attention" />
        <Lead>
          The finest care is defined not only by expertise, but by the attention given to every individual.
        </Lead>
        <p>
          At HWS, private wellbeing management is founded upon a relationship of trust, discretion and genuine
          understanding.
        </p>
        <p>
          Our approach begins by listening carefully to your needs, personal circumstances and priorities, allowing
          us to develop a tailored framework of care that brings together relevant professional expertise and
          considered wellbeing support.
        </p>
        <p>
          Psychological, emotional and physical wellbeing are approached with sensitivity and an appreciation of
          their interconnected nature.
        </p>
        <p>
          Through our discreet concierge-style service, appointments, communication and appropriate professional
          collaboration are coordinated with care, flexibility and attention to individual preferences.
        </p>
        <p>
          Confidentiality, informed consent, clinical integrity and professional boundaries remain fundamental
          throughout every stage of the relationship.
        </p>
        <p>
          From an initial private enquiry to the ongoing coordination of your personalised wellbeing programme, our
          commitment is to provide an experience distinguished by consistency, professionalism and thoughtful
          attention.
        </p>
        <Closing>Seamlessly coordinated. Expertly guided. Entirely individual.</Closing>
      </div>
    </section>

    {/* Call to action */}
    <section className={pad}>
      <WithImage src={practiceImage} alt="The HWS practice building on Theobalds Road, Holborn, at dusk" flip>
        <SectionHead label="Begin with a Private Conversation" sub="Your Wellbeing Deserves Individual Attention" />
        <Lead>Every exceptional experience begins with a conversation.</Lead>
        <p>
          Whether you are seeking confidential psychological support, bespoke executive wellbeing management,
          personalised family wellbeing services or an integrated wellness and longevity programme, HWS offers a
          discreet and considered starting point.
        </p>
        <p>
          Our private concierge service provides an attentive, confidential introduction, allowing us to understand
          your circumstances, explore your priorities and identify an appropriate pathway forward.
        </p>
        <p>
          We invite you to discover a more personal philosophy of wellbeing, one that respects your individuality,
          complements your lifestyle and evolves alongside your aspirations.
        </p>
        <div className="space-y-1 pt-2">
          <p className="font-medium">Holistic Well-being Solutions | Holborn, Central London</p>
          <p>
            Private enquiries:{" "}
            <a href="tel:+447770778104" className="underline underline-offset-4">
              {CONTACT_PHONE}
            </a>
          </p>
          <p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4 [overflow-wrap:anywhere]">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
        <div className="pt-2">
          <Button asChild size="lg" className="text-base md:px-8 bg-[#053d57]/80 hover:bg-[#053d57]">
            <Link to="/contact">Arrange a Private Consultation</Link>
          </Button>
        </div>
      </WithImage>
    </section>

    {/* Sign-off */}
    <section className={`${tint} py-10 md:py-12 px-5 text-center`}>
      <p className="text-xs uppercase tracking-[0.2em] text-[#176a79]">The Art of Well-being</p>
      <p className="text-base md:text-lg pt-1">Personalised. Considered. Confidential.</p>
    </section>
  </div>
);

export default PrivateWellbeingManagement;
