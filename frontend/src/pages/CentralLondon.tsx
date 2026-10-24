import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import LandingComponent from "@/components/landingComponent";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/enquiry";
import heroImage from "@/assets/headquarters.jpg";

/**
 * Central London (local SEO) page.
 * Target searches: private therapist Central London, private therapist Holborn, psychotherapist WC1 London,
 * counsellor Bloomsbury, private wellbeing Mayfair, mental health support Mayfair, holistic wellbeing Belgravia,
 * private wellness Knightsbridge, wellbeing consultant Chelsea, private therapist Mayfair,
 * psychotherapist Knightsbridge, therapist Chelsea London.
 * HWS has ONE practice (Holborn, WC1). Neighbourhood sections describe how clients from those areas
 * reach us; they never claim a practice there.
 */

const SITE = "https://www.holisticwell-beingsolutions.com";
const PAGE = `${SITE}/central-london`;
const ADDRESS = "12-18 Theobalds Road, London WC1X 8SL";
const MAPS = "https://www.google.com/maps/search/?api=1&query=12-18+Theobalds+Road+London+WC1X+8SL";

const glance = [
  ["Our practice", `${ADDRESS}, in Holborn on the edge of Bloomsbury`],
  ["Nearest stations", "Holborn, Chancery Lane and Russell Square, all within walking distance"],
  ["Clients from", "Holborn, Bloomsbury, the City, Mayfair, Belgravia, Knightsbridge, Chelsea and across London"],
  ["Ways to meet", "In person at our practice, remotely, or through our Concierge Wellbeing Service by arrangement"],
  ["Services", "Psychotherapy and counselling, wellness and longevity, and holistic wellbeing programmes"],
];

const areas = [
  {
    name: "Mayfair",
    heading: "Private Therapist and Mental Health Support for Mayfair",
    text: "If you are looking for a private therapist for Mayfair, our Holborn practice is reached directly from Bond Street on the Central line or Green Park on the Piccadilly line. For private wellbeing support that fits around a busy schedule in Mayfair, sessions can also take place remotely.",
  },
  {
    name: "Belgravia",
    heading: "Holistic Wellbeing for Belgravia",
    text: "From Belgravia, Hyde Park Corner on the Piccadilly line runs directly to Holborn. Our holistic wellbeing programmes look at how relationships, family, purpose and lifestyle affect how you feel, with support in person or remotely.",
  },
  {
    name: "Knightsbridge",
    heading: "Private Wellness and Psychotherapy for Knightsbridge",
    text: "Knightsbridge station is on the Piccadilly line, with a direct journey to Holborn. Clients looking for a psychotherapist for Knightsbridge come to us for therapy and for private wellness and longevity programmes, in person or remotely.",
  },
  {
    name: "Chelsea",
    heading: "Therapist and Wellbeing Consultant for Chelsea",
    text: "From Chelsea, South Kensington on the Piccadilly line runs directly to Holborn. Clients looking for a therapist in Chelsea, London, or a wellbeing consultant to coordinate a wider programme, can see us at our practice or remotely.",
  },
];

const faqs = [
  {
    q: "Where is Holistic Wellbeing Solutions based?",
    a: `Our private practice is at ${ADDRESS}, in Holborn, Central London, on the edge of Bloomsbury. The nearest Underground stations are Holborn, Chancery Lane and Russell Square.`,
  },
  {
    q: "Are you a private therapist in Central London?",
    a: "Yes. HWS offers private psychotherapy and counselling at our practice in Holborn, Central London, as well as remote sessions. Our evidence-based therapies include CBT, ACT, EMDR, Compassion Focused Therapy, psychodynamic therapy, integrative counselling and hypnotherapy.",
  },
  {
    q: "Do you have practices in Mayfair, Belgravia, Knightsbridge or Chelsea?",
    a: "No. We have one practice, in Holborn (WC1). Many of our clients live or work in Mayfair, Belgravia, Knightsbridge and Chelsea, which have direct Underground links to Holborn. Sessions can also take place remotely, and our Concierge Wellbeing Service can explore support at home or another agreed location, subject to availability and suitability.",
  },
  {
    q: "Can I find a counsellor near Bloomsbury or a psychotherapist in WC1?",
    a: "Yes. Our practice on Theobalds Road is in the WC1 postcode, on the edge of Bloomsbury, so it is a convenient choice if you are looking for a counsellor in Bloomsbury or a psychotherapist in WC1, London.",
  },
  {
    q: "What do you help with?",
    a: "We support people with anxiety, depression and low mood, stress, burnout, trauma and PTSD, phobias, low self-esteem, relationship difficulties, bereavement and life transitions, among other concerns. Alongside therapy, we offer wellness and longevity and holistic wellbeing programmes.",
  },
  {
    q: "Can sessions take place at home or remotely?",
    a: "Yes. Sessions can take place remotely. For those requiring a more tailored arrangement, our Concierge Wellbeing Service can explore support at home or at another agreed location, subject to availability, suitability and individual arrangements.",
  },
  {
    q: "Is everything confidential?",
    a: "Yes. Confidentiality is central to how we work. Information is shared only with the practitioners directly involved in your care, and only with your consent. As with all UK therapy services, there are rare legal and safeguarding exceptions, which we explain at your first consultation.",
  },
  {
    q: "How do I book a first appointment?",
    a: `Call ${CONTACT_PHONE}, email ${CONTACT_EMAIL} or use our enquiry form. We will arrange a confidential initial consultation at our Holborn practice or remotely, at a time that suits you.`,
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE}#service`,
      name: "Private therapy and wellbeing in Central London",
      serviceType: "Psychotherapy, counselling and private wellbeing programmes",
      description:
        "Private psychotherapy, counselling and wellbeing programmes at our practice in Holborn, WC1, for clients across Central London, including Bloomsbury, Mayfair, Belgravia, Knightsbridge and Chelsea.",
      provider: { "@id": `${SITE}/#business` },
      areaServed: ["Holborn", "Bloomsbury", "Mayfair", "Belgravia", "Knightsbridge", "Chelsea", "Central London"].map(
        (name) => ({ "@type": "Place", name: `${name}, London` }),
      ),
      url: PAGE,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE}/contact` },
        { "@type": "ListItem", position: 3, name: "Central London", item: PAGE },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const tint = "bg-[#176a79]/10";
const pad = "py-10 md:py-16 px-5 md:px-12 lg:px-24 flex justify-center";
const body = "max-w-3xl w-full space-y-4 text-sm md:text-base leading-relaxed";

const SectionHead = ({ title, sub }: { title: string; sub?: string }) => (
  <header className="space-y-2 mb-2">
    <h2 className="text-2xl md:text-3xl">{title}</h2>
    {sub && <p className="text-lg md:text-xl text-[#176a79]">{sub}</p>}
  </header>
);

const Closing = ({ children }: { children: ReactNode }) => (
  <p className="italic text-[#176a79] pt-2">{children}</p>
);

const CentralLondon = () => (
  <div className="min-h-screen w-full flex flex-col text-[#053d57]" style={{ fontFamily: "Josefin Sans" }}>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />

    <LandingComponent
      image={heroImage}
      title="Private Therapist in Central London"
      titleSize="text-3xl md:text-5xl max-w-5xl leading-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]"
      overlay={true}
      contactbutton={true}
      buttonText="Book a Confidential Consultation"
      textcolor="text-[#ebf0f2]"
    />

    {/* Breadcrumb */}
    <nav aria-label="Breadcrumb" className="px-5 md:px-12 lg:px-24 pt-4 text-xs md:text-sm">
      <ol className="flex flex-wrap gap-1 max-w-5xl mx-auto">
        <li><Link to="/" className="underline underline-offset-4">Home</Link> /</li>
        <li><Link to="/contact" className="underline underline-offset-4">Contact</Link> /</li>
        <li aria-current="page">Central London</li>
      </ol>
    </nav>

    {/* Answer-first intro */}
    <section className={pad}>
      <div className={body}>
        <p className="text-xs uppercase tracking-[0.2em] text-[#176a79]">Holborn · WC1 · Central London</p>
        <p className="text-lg md:text-xl">
          Holistic Wellbeing Solutions (HWS) is a private therapy and wellbeing practice at {ADDRESS}, in Holborn,
          Central London. We offer psychotherapy, counselling and personalised wellbeing programmes in person and
          remotely, for clients from Holborn and Bloomsbury and from across Central London, including Mayfair,
          Belgravia, Knightsbridge and Chelsea.
        </p>
        <p>
          Our practice offers a discreet, calm setting a short walk from Holborn, Chancery Lane and Russell Square
          stations. If travelling in is not practical, sessions can take place remotely, so your care continues
          wherever you are.
        </p>
      </div>
    </section>

    {/* At a glance */}
    <section className={`${tint} ${pad}`}>
      <div className={body}>
        <SectionHead title="Our Central London Practice at a Glance" />
        <dl className="bg-white shadow-sm divide-y divide-[#176a79]/15">
          {glance.map(([k, v]) => (
            <div key={k} className="grid md:grid-cols-[180px_1fr] gap-1 md:gap-4 px-5 py-4">
              <dt className="font-medium">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <p>
          <a href={MAPS} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
            Get directions on Google Maps
          </a>
        </p>
      </div>
    </section>

    {/* Holborn / WC1 / Bloomsbury */}
    <section className={pad}>
      <div className={body}>
        <SectionHead
          title="Private Therapist in Holborn, WC1"
          sub="A psychotherapist and counsellor on the edge of Bloomsbury"
        />
        <p>
          Our practice on Theobalds Road sits in the WC1 postcode, between Holborn and Bloomsbury. Whether you are
          searching for a private therapist in Holborn, a psychotherapist in WC1, London, or a counsellor near
          Bloomsbury, you can see us in person, often around a working day in the City, Midtown or the West End.
        </p>
        <p>
          Our evidence-based therapies include Cognitive Behavioural Therapy (CBT), Dialectical Behaviour Therapy
          (DBT), EMDR, Acceptance and Commitment Therapy (ACT), Compassion Focused Therapy, psychodynamic therapy,
          integrative counselling and hypnotherapy. After your initial consultation, we recommend the approach best
          suited to you.
        </p>
        <p>
          Explore our <Link to="/programmes/mental-health" className="underline underline-offset-4">Mental Health</Link>{" "}
          programme for the full range of therapies and concerns we support.
        </p>
      </div>
    </section>

    {/* Neighbourhoods */}
    <section className={`${tint} ${pad}`}>
      <div className="max-w-5xl w-full space-y-6">
        <div className={`${body} mx-auto`}>
          <SectionHead
            title="Serving Mayfair, Belgravia, Knightsbridge and Chelsea"
            sub="One practice in Holborn, easy to reach from across Central London"
          />
          <p>
            We have one practice, in Holborn. Many of our clients live or work in London's West End and
            south-west neighbourhoods, which have direct Underground links to Holborn. Remote sessions and our
            Concierge Wellbeing Service offer further flexibility.
          </p>
        </div>
        <div className="grid gap-4 md:gap-5 sm:grid-cols-2">
          {areas.map((a) => (
            <article key={a.name} className="bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-[#176a79] mb-1">{a.name}</p>
              <h3 className="text-lg md:text-xl mb-3">{a.heading}</h3>
              <p className="text-sm leading-relaxed">{a.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className={pad}>
      <div className={body}>
        <SectionHead
          title="Private Wellbeing Services in Central London"
          sub="Therapy, wellness and holistic wellbeing in one place"
        />
        <p>
          Alongside therapy, we offer personalised programmes across our three pillars:{" "}
          <Link to="/programmes/mental-health" className="underline underline-offset-4">Mental Health</Link>,{" "}
          <Link to="/programmes/wellness-longevity" className="underline underline-offset-4">Wellness &amp; Longevity</Link>{" "}
          and{" "}
          <Link to="/programmes/holistic-wellbeing" className="underline underline-offset-4">Holistic Wellbeing</Link>.
          Every programme follows our{" "}
          <Link to="/carepathway" className="underline underline-offset-4">care pathway</Link>: a private
          consultation, assessment where appropriate, a personalised plan, coordinated support and ongoing review.
        </p>
        <p>
          We also offer dedicated support for{" "}
          <Link to="/private-clients" className="underline underline-offset-4">private clients and families</Link>,{" "}
          <Link to="/executives" className="underline underline-offset-4">executives</Link> and{" "}
          <Link to="/family-offices" className="underline underline-offset-4">family offices</Link>.
        </p>
        <Closing>Private wellbeing support, shaped around the realities of your life.</Closing>
      </div>
    </section>

    {/* FAQ */}
    <section aria-labelledby="cl-faq" className={`${tint} ${pad}`}>
      <div className="max-w-4xl w-full">
        <h2 id="cl-faq" className="text-2xl md:text-3xl text-center mb-3">
          Therapy in Central London: Frequently Asked Questions
        </h2>
        <p className="text-center text-sm md:text-base mb-8">
          Practical answers about our location, services and how to begin.
        </p>
        <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`cl-${i}`} className="bg-white border-none shadow-sm">
              <AccordionTrigger className="px-5 md:px-7 py-4 text-left hover:no-underline">
                <span className="font-medium text-base leading-snug pr-4">{f.q}</span>
              </AccordionTrigger>
              <AccordionContent
                forceMount
                className="[[data-state=closed]>&]:hidden px-5 md:px-7 pb-5 text-sm md:text-base leading-relaxed"
              >
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* CTA */}
    <section className="py-12 md:py-20 px-5 md:px-12 lg:px-24 flex justify-center text-center">
      <div className="max-w-2xl space-y-5 text-sm md:text-base leading-relaxed">
        <SectionHead title="Book a Confidential Consultation in Holborn" />
        <p>
          A first conversation is simply an opportunity to talk through what you are looking for and consider the
          next step, in person at our practice or remotely.
        </p>
        <div className="space-y-1">
          <p>Address: {ADDRESS}</p>
          <p>
            Telephone: <a href="tel:+447770778104" className="underline underline-offset-4">{CONTACT_PHONE}</a>
          </p>
          <p>
            Email:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4 break-all">{CONTACT_EMAIL}</a>
          </p>
        </div>
        <Button asChild size="lg" className="text-base md:px-8 bg-[#053d57]/80 hover:bg-[#053d57]">
          <Link to="/contact">Book a Confidential Consultation</Link>
        </Button>
        <p className="text-xs pt-4">
          HWS is not an emergency service. In an emergency, call 999. For urgent mental health support, call NHS 111
          and choose the mental health option, or call Samaritans on 116 123.
        </p>
      </div>
    </section>
  </div>
);

export default CentralLondon;
