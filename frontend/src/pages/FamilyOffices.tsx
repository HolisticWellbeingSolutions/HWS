import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import LandingComponent from "@/components/landingComponent";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/enquiry";
import heroImage from "@/assets/hero-wellness.jpg";

/**
 * Family Offices page.
 * Target searches: family office wellness services, family office wellbeing services,
 * family office health and wellness, wellbeing services for UHNW families, private family wellbeing,
 * private family health management, discreet mental health support family office,
 * family office wellness concierge, wellbeing support for family office principals,
 * mental health support for family members of UHNW clients, family office mental health adviser UK.
 * Claims kept within what HWS states on the Private Clients page (client-approved copy, Oct 2026).
 */

const SITE = "https://www.holisticwell-beingsolutions.com";
const PAGE = `${SITE}/family-offices`;

const glance = [
  ["Who it is for", "Family offices, family office principals, UHNW and private families, and the advisers who support them"],
  ["What we offer", "Personalised mental health, wellness and longevity, and holistic wellbeing programmes for individual family members"],
  ["Where", "Our private practice in Holborn, Central London, remotely, and by arrangement at home, another agreed location or overseas"],
  ["First step", "A confidential enquiry, which a family office, personal assistant or trusted adviser can make on the individual's behalf"],
  ["Confidentiality", "Care-related information belongs to the individual and is shared only appropriately and with consent where required"],
];

const services = [
  {
    name: "Discreet Mental Health Support",
    link: "/programmes/mental-health",
    text: "Evidence-based psychological therapies and personalised support for concerns such as stress, anxiety, low mood, relationship challenges, decision burnout and significant life transitions.",
  },
  {
    name: "Wellness & Longevity",
    link: "/programmes/wellness-longevity",
    text: "Practical, sustainable strategies across sleep, recovery, stress management, nutrition, movement and mindfulness, supporting resilience and healthier long-term habits.",
  },
  {
    name: "Holistic Wellbeing",
    link: "/programmes/holistic-wellbeing",
    text: "A wider view of how relationships, family dynamics, purpose, working life and personal transitions affect wellbeing, with goal-setting and carefully selected wellbeing practices.",
  },
];

const process = [
  {
    title: "A confidential enquiry",
    text: "The family office, a personal assistant, a trusted adviser or the individual contacts us. We discuss practical arrangements, subject to the individual's wishes.",
  },
  {
    title: "A private consultation with the individual",
    text: "We speak with the person who will receive support about their circumstances, priorities and what they hope to achieve.",
  },
  {
    title: "A personalised wellbeing plan",
    text: "Where appropriate, relevant assessments inform a tailored plan of recommended therapies, wellbeing strategies and any appropriate professional input.",
  },
  {
    title: "Coordinated professional support",
    text: "Where beneficial, and with consent, we facilitate coordination with clinicians, therapists and other professionals involved in the person's care.",
  },
  {
    title: "Ongoing review",
    text: "The programme is reviewed periodically as progress is made and circumstances change, so the support stays relevant and sustainable.",
  },
];

const faqs = [
  {
    q: "What are family office wellbeing services?",
    a: "Family office wellbeing services give family offices and the families they serve a discreet, coordinated route to personal wellbeing support. At Holistic Wellbeing Solutions (HWS), this means personalised mental health, wellness and longevity, and holistic wellbeing programmes for individual family members, arranged from our private practice in Holborn, Central London, or remotely.",
  },
  {
    q: "Can a family office make the first enquiry on behalf of a principal or family member?",
    a: "Yes. A family office representative, personal assistant or trusted adviser can make an initial enquiry and discuss practical arrangements for communication and appointments. Care itself is agreed directly with the individual, and is subject to their wishes and to applicable confidentiality requirements.",
  },
  {
    q: "What information is shared with the family office?",
    a: "Personal information and care-related discussions belong to the individual. Any sharing of information, including with a family office, is discussed with the individual first and happens only appropriately and with consent where required, in line with data protection legislation, professional obligations and legal and safeguarding requirements.",
  },
  {
    q: "Do you offer mental health support for family members of UHNW clients?",
    a: "Yes. We support individuals and families, including partners and other family members, with evidence-based psychological therapies and personalised mental health support. Each family member has their own plan, and each person's privacy and autonomy are respected.",
  },
  {
    q: "Can HWS act as a family office mental health adviser in the UK?",
    a: "HWS can be a discreet first point of contact for a family office on wellbeing matters: discussing practical arrangements, arranging a private consultation for the individual and, where appropriate and with consent, coordinating with other professionals. Decisions about care, and information about it, remain with the individual. Where medical or specialist clinical input is needed, we help coordinate with appropriate professionals rather than replace them.",
  },
  {
    q: "Is there a family office wellness concierge option?",
    a: "Yes. For those requiring a more tailored arrangement, our Concierge Wellbeing Service can explore support at home, at another agreed location or overseas, subject to availability, suitability and individual arrangements.",
  },
  {
    q: "Can sessions take place outside London or abroad?",
    a: "Appointments can be arranged at our Holborn practice or remotely, which helps families who travel or live across several countries. Support in person at another location or overseas can be explored through our Concierge Wellbeing Service.",
  },
  {
    q: "How is HWS different from a medical practice or an emergency service?",
    a: "HWS provides private wellbeing management: psychological therapies, wellness strategies and holistic wellbeing support, coordinated with other professionals where appropriate and with consent. HWS is not an emergency service. In an emergency in the UK, call 999 or go to A&E; for urgent mental health support, call NHS 111 and choose the mental health option.",
  },
  {
    q: "How do we get started?",
    a: `Call ${CONTACT_PHONE}, email ${CONTACT_EMAIL} or use our enquiry form. We will arrange a confidential initial conversation to understand the situation and outline the options that may be appropriate.`,
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE}#service`,
      name: "Family Office Wellbeing Services",
      serviceType: "Private wellbeing management for family offices and UHNW families",
      description:
        "Discreet, personalised mental health, wellness and longevity, and holistic wellbeing support for family office principals and their families, arranged from Holborn, Central London, remotely or by arrangement elsewhere.",
      provider: { "@id": `${SITE}/#business` },
      areaServed: [
        { "@type": "City", name: "London" },
        { "@type": "Country", name: "United Kingdom" },
      ],
      audience: { "@type": "Audience", audienceType: "Family offices, family office principals and UHNW families" },
      url: PAGE,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Levels of Engagement", item: `${SITE}/levels-of-engagement` },
        { "@type": "ListItem", position: 3, name: "Family Offices", item: PAGE },
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

const FamilyOffices = () => (
  <div className="min-h-screen w-full flex flex-col text-[#053d57]" style={{ fontFamily: "Josefin Sans" }}>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />

    <LandingComponent
      image={heroImage}
      title="Family Office Wellbeing Services in London"
      titleSize="text-3xl md:text-5xl max-w-5xl leading-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]"
      overlay={true}
      contactbutton={true}
      buttonText="Make a Confidential Enquiry"
      textcolor="text-[#ebf0f2]"
    />

    {/* Breadcrumb */}
    <nav aria-label="Breadcrumb" className="px-5 md:px-12 lg:px-24 pt-4 text-xs md:text-sm">
      <ol className="flex flex-wrap gap-1 max-w-5xl mx-auto">
        <li><Link to="/" className="underline underline-offset-4">Home</Link> /</li>
        <li><Link to="/levels-of-engagement" className="underline underline-offset-4">Levels of Engagement</Link> /</li>
        <li aria-current="page">Family Offices</li>
      </ol>
    </nav>

    {/* Answer-first intro */}
    <section className={pad}>
      <div className={body}>
        <p className="text-xs uppercase tracking-[0.2em] text-[#176a79]">Bespoke. Personal. Discreet.</p>
        <p className="text-lg md:text-xl">
          Holistic Wellbeing Solutions (HWS) provides discreet family office wellness services: personalised
          wellbeing support for family offices and the UHNW and private families they serve. From our private practice in Holborn, Central London, we
          offer mental health, wellness and longevity, and holistic wellbeing support for principals and their
          family members, coordinated around each person's needs and handled with care for confidentiality.
        </p>
        <p>
          Families with significant wealth, public visibility or complex commitments often face particular
          pressures: leadership and decision-making, family dynamics, travel across several countries, and a
          strong need for privacy. Our role is to make accessing appropriate support more coherent, personal and
          reassuring, for the individual and for those who help them arrange it.
        </p>
      </div>
    </section>

    {/* At a glance */}
    <section className={`${tint} ${pad}`}>
      <div className={body}>
        <SectionHead title="Family Office Health and Wellness at a Glance" />
        <dl className="bg-white shadow-sm divide-y divide-[#176a79]/15">
          {glance.map(([k, v]) => (
            <div key={k} className="grid md:grid-cols-[180px_1fr] gap-1 md:gap-4 px-5 py-4">
              <dt className="font-medium">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    {/* Services */}
    <section className={pad}>
      <div className="max-w-5xl w-full space-y-6">
        <div className={`${body} mx-auto`}>
          <SectionHead
            title="Wellbeing Services for UHNW Families"
            sub="Private family wellbeing, built around each person"
          />
          <p>
            Some families think of this as private family health management. Our focus is wellbeing: every family
            member has distinct needs, preferences and circumstances. Rather than a fixed package, each
            person receives a programme drawn from our three pillars, shaped around their priorities and reviewed as
            life changes.
          </p>
        </div>
        <div className="grid gap-4 md:gap-5 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.name} className={`${tint} p-6 flex flex-col`}>
              <h3 className="text-xl mb-3">{s.name}</h3>
              <p className="text-sm leading-relaxed flex-1">{s.text}</p>
              <Link to={s.link} className="underline underline-offset-4 text-sm mt-4">Learn more</Link>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Principals */}
    <section className={`${tint} ${pad}`}>
      <div className={body}>
        <SectionHead
          title="Wellbeing Support for Family Office Principals"
          sub="For those who carry the responsibility"
        />
        <p>
          Principals often hold responsibility for a family's business, wealth, reputation and relationships at
          the same time. That combination can bring sustained pressure, decision fatigue and little room to step
          back.
        </p>
        <p>
          We offer principals a private space to address what matters to them, whether that is focused
          psychological support, a more proactive approach to wellness and longevity, or support through a
          significant transition. Appointments can be arranged at our practice, remotely or, through our
          Concierge Wellbeing Service, at another agreed location, so support fits around a demanding schedule.
        </p>
      </div>
    </section>

    {/* Family members */}
    <section className={pad}>
      <div className={body}>
        <SectionHead
          title="Mental Health Support for Family Members of UHNW Clients"
          sub="Individual care with a family-conscious perspective"
        />
        <p>
          Personal wellbeing rarely exists in isolation. A partner, an adult child or another relative may be
          affected by the same pressures, or by their own. We work with individual family members seeking a
          thoughtful, personalised approach, while recognising that each person's privacy and autonomy deserve
          respect.
        </p>
        <p>
          Where appropriate, we can help identify relevant areas of support and facilitate coordination between
          professionals, with suitable consent and clear boundaries. Whether support is for a principal, a partner
          or another family member, we begin by understanding the situation and considering the options available.
        </p>
      </div>
    </section>

    {/* How we work with family offices */}
    <section className={`${tint} ${pad}`}>
      <div className="max-w-5xl w-full space-y-6">
        <div className={`${body} mx-auto`}>
          <SectionHead
            title="How We Work with Family Offices"
            sub="A clear process for a sensitive request"
          />
          <p>
            Family offices, personal assistants and trusted advisers are often the first point of contact. We make
            that first step straightforward, while keeping the individual at the centre of every decision about
            their care.
          </p>
        </div>
        <ul className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step) => (
            <li key={step.title} className="bg-white p-5 shadow-sm">
              <h3 className="text-lg mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ul>
        <div className={`${body} mx-auto`}>
          <aside className="border-l-4 border-[#C8A97E] bg-[#C8A97E]/10 px-5 py-4 text-base md:text-lg">
            The family office can help arrange support. The care itself, and any information about it, remains
            with the individual, and is shared only with their agreement where consent is required.
          </aside>
        </div>
      </div>
    </section>

    {/* Discretion */}
    <section className={pad}>
      <div className={body}>
        <SectionHead
          title="Discreet Mental Health Support for Family Offices"
          sub="Confidentiality is fundamental. Discretion is integral."
        />
        <p>
          High-profile individuals, business leaders, founders, public figures and their families may value a
          particularly thoughtful approach to communication, appointment arrangements and the handling of personal
          information.
        </p>
        <p>
          Information is managed in accordance with applicable data protection legislation, professional
          obligations and relevant confidentiality requirements. Any proposed coordination with other
          professionals is discussed with the individual first, subject to applicable legal and safeguarding
          obligations. The limits of confidentiality, including legal and safeguarding exceptions, are explained
          clearly at the outset.
        </p>
        <p>
          Read more about our approach for{" "}
          <Link to="/private-clients" className="underline underline-offset-4">private clients and families</Link>.
        </p>
      </div>
    </section>

    {/* Concierge */}
    <section className={`${tint} ${pad}`}>
      <div className={body}>
        <SectionHead title="Family Office Wellness Concierge" sub="Support shaped around how your family lives" />
        <p>
          Families often divide their time between several homes and countries. Alongside appointments at our
          Holborn practice and remote sessions, our{" "}
          <Link to="/levels-of-engagement" className="underline underline-offset-4">Concierge Wellbeing Service</Link>{" "}
          can explore support at home, at another agreed location or overseas, subject to availability,
          suitability and individual arrangements.
        </p>
        <p>
          Our intention is to maintain continuity of care wherever practicable, so that support continues while
          family members travel or work abroad.
        </p>
        <Closing>Private family wellbeing, shaped around the realities of your family's life.</Closing>
      </div>
    </section>

    {/* FAQ */}
    <section aria-labelledby="fo-faq" className={pad}>
      <div className="max-w-4xl w-full">
        <h2 id="fo-faq" className="text-2xl md:text-3xl text-center mb-3">
          Family Office Wellbeing: Frequently Asked Questions
        </h2>
        <p className="text-center text-sm md:text-base mb-8">
          Answers for family offices, advisers and families considering support.
        </p>
        <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`fo-${i}`} className={`${tint} border-none`}>
              <AccordionTrigger className="px-5 md:px-7 py-4 text-left hover:no-underline">
                <span className="font-medium text-base leading-snug pr-4">{f.q}</span>
              </AccordionTrigger>
              <AccordionContent forceMount className="[[data-state=closed]>&]:hidden px-5 md:px-7 pb-5 text-sm md:text-base leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* CTA */}
    <section className={`${tint} py-12 md:py-20 px-5 md:px-12 lg:px-24 flex justify-center text-center`}>
      <div className="max-w-2xl space-y-5 text-sm md:text-base leading-relaxed">
        <SectionHead title="Begin with a Confidential Conversation" />
        <p>
          Whether you are a family office arranging support for a principal or family member, or a family exploring
          options for yourselves, we will take the time to understand your priorities and outline the options that
          may be appropriate.
        </p>
        <div className="space-y-1">
          <p>
            Telephone: <a href="tel:+447770778104" className="underline underline-offset-4">{CONTACT_PHONE}</a>
          </p>
          <p>
            Email:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4 break-all">{CONTACT_EMAIL}</a>
          </p>
          <p>Location: Holborn, Central London</p>
        </div>
        <Button asChild size="lg" className="text-base md:px-8 bg-[#053d57]/80 hover:bg-[#053d57]">
          <Link to="/contact">Make a Confidential Enquiry</Link>
        </Button>
        <p className="text-xs pt-4">
          HWS is not an emergency service. In an emergency, call 999. For urgent mental health support, call NHS 111
          and choose the mental health option, or call Samaritans on 116 123.
        </p>
      </div>
    </section>
  </div>
);

export default FamilyOffices;
