import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import LandingComponent from "@/components/landingComponent";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CONTACT_EMAIL } from "@/lib/enquiry";
import sideImage from "@/assets/hero-wellness.jpg";

/**
 * Private Wellbeing for Individuals & Families (/private-clients).
 * Copy supplied by HWS ("Individuals and families" document, 29 Oct 2026); replaces the earlier version.
 * Target searches: private wellbeing London, private mental health care for families London,
 * personalised wellbeing programme London, confidential psychotherapy London.
 */

const SITE = "https://www.holisticwell-beingsolutions.com";
const PAGE = `${SITE}/private-clients`;

const pillars = [
  {
    name: "Mental Health & Psychological Care",
    lead: "Confidential psychological support informed by clinical expertise and a nuanced understanding of individual circumstances.",
    text: "Our services encompass psychotherapy, psychological assessments, mental health check-ups and specialist support relating to neurodiversity, behavioural concerns and addiction, where appropriate.",
    cta: "Explore Mental Health",
    link: "/programmes/mental-health",
  },
  {
    name: "Wellness & Longevity",
    lead: "A proactive approach to sustaining vitality, resilience and quality of life.",
    text: "Drawing upon sleep and recovery, nutrition, physical wellbeing and mindfulness, we help clients develop sustainable practices that support healthy ageing and long-term wellbeing.",
    cta: "Explore Wellness & Longevity",
    link: "/programmes/wellness-longevity",
  },
  {
    name: "Holistic Wellbeing",
    lead: "An integrated approach to cultivating balance, fulfilment and a deeper sense of personal wellbeing.",
    text: "Through reflective practice, individual goal-setting and carefully curated experiences, we support clients in bringing greater intention and harmony to the different dimensions of their lives.",
    cta: "Explore Holistic Wellbeing",
    link: "/programmes/holistic-wellbeing",
  },
];

const stages = [
  {
    title: "Individual Wellbeing",
    text: "For those seeking confidential support with psychological health, emotional resilience, lifestyle concerns or personal development, we provide individually tailored programmes informed by specialist expertise.",
  },
  {
    title: "Family Wellbeing",
    text: "We recognise that the wellbeing of family members may be closely connected, even when their individual needs differ. Where suitable, HWS can support multiple members of a family through distinct, personalised engagements, with coordination guided by their preferences and consent.",
  },
  {
    title: "Continuity of Care",
    text: "For clients seeking an enduring approach to wellbeing, our programmes can incorporate ongoing review and specialist input as needs and circumstances change. This allows care to remain relevant, measured and responsive over time.",
  },
];

const pathway = [
  {
    no: "01",
    title: "Understanding Your Needs",
    text: "Every relationship begins with a confidential conversation to understand your concerns, personal circumstances and aspirations. This provides the foundation for determining the most appropriate level of support.",
  },
  {
    no: "02",
    title: "Developing Your Programme",
    text: "Where appropriate, specialist assessments inform a carefully tailored programme, drawing upon the expertise and wellbeing disciplines most relevant to your needs.",
  },
  {
    no: "03",
    title: "Supporting Your Progress",
    text: "Care is delivered through a combination of therapeutic engagement, specialist guidance and periodic review. As your needs evolve, your programme may be refined to maintain its relevance and effectiveness.",
  },
];

const faqs = [
  {
    q: "Can Holistic Wellbeing Solutions support more than one member of a family?",
    a: "HWS can consider separate wellbeing engagements for multiple family members, depending on their individual needs and the suitability of available services. Each person receives an individual assessment and tailored recommendations, with any coordination undertaken in accordance with appropriate consent and confidentiality requirements.",
  },
  {
    q: "What private mental health and wellbeing services are available?",
    a: "Our areas of expertise include psychotherapy, psychological and psychometric assessments, mental health support, sleep and recovery, nutrition, mindfulness and holistic wellbeing programmes. The most appropriate combination is determined through an initial consultation and, where necessary, further assessment.",
  },
  {
    q: "Can I enquire about care on behalf of a family member?",
    a: "Yes. You may make an initial enquiry on behalf of a family member. Any subsequent assessment or therapeutic engagement is arranged with the relevant individual's participation and appropriate consent.",
  },
  {
    q: "Can support be arranged outside the London practice?",
    a: "Depending on the nature of care and practitioner availability, arrangements may include remote consultations, private residence engagements and international continuity of care. These options are considered individually to ensure that they remain appropriate.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE}#service`,
      name: "Private Wellbeing for Individuals & Families",
      serviceType: "Private psychological care, wellness and longevity, and holistic wellbeing programmes",
      provider: { "@id": `${SITE}/#business` },
      areaServed: { "@type": "City", name: "London" },
      url: PAGE,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Individuals & Families", item: PAGE },
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

const SectionHead = ({ label, sub }: { label: string; sub?: string }) => (
  <header className="space-y-2 mb-2">
    <h2 className="text-2xl md:text-3xl">{label}</h2>
    {sub && <p className="text-lg md:text-xl text-[#176a79]">{sub}</p>}
  </header>
);

const CtaLink = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link to={to} className="inline-block underline underline-offset-4 text-sm pt-2">
    {children}
  </Link>
);

const PrivateClients = () => (
  <div className="min-h-screen w-full flex flex-col text-[#053d57]" style={{ fontFamily: "Josefin Sans" }}>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />

    <LandingComponent
      image="https://images.unsplash.com/photo-1724230759479-32b57f30ba86?q=70&w=1600&auto=format&fit=crop"
      title="Private Wellbeing for Individuals & Families"
      titleSize="text-3xl md:text-5xl max-w-5xl leading-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]"
      contactbutton={true}
      overlay={true}
      buttonText="Request a Private Consultation"
      textcolor="text-[#ebf0f2]"
    />

    {/* Wellbeing, considered differently */}
    <section className={`${tint} ${pad}`}>
      <div className={body}>
        <SectionHead label="Wellbeing, Considered Differently" sub="A More Personal Standard of Care" />
        <p>
          At Holistic Wellbeing Solutions, we provide confidential, personalised care for individuals and families
          seeking a more thoughtful and integrated approach to wellbeing.
        </p>
        <p>
          Bringing together psychological expertise, specialist assessments and holistic wellbeing practices, we
          develop tailored programmes that reflect each individual's circumstances, priorities and aspirations.
          Whether addressing an immediate concern or cultivating lasting wellbeing, our approach is grounded in
          clinical insight, discretion and continuity of care.
        </p>
        <Button asChild size="lg" className="text-base md:px-8 bg-[#053d57]/80 hover:bg-[#053d57]">
          <Link to="/contact">Request a Private Consultation</Link>
        </Button>
      </div>
    </section>

    {/* Wellbeing is personal — with side picture and callout */}
    <section className={pad}>
      <div className="max-w-5xl w-full grid gap-8 lg:grid-cols-[3fr_2fr] items-center">
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <SectionHead label="Wellbeing Is Personal. So Is Our Approach." />
          <p>
            No two individuals experience wellbeing in quite the same way. Personal circumstances, family
            relationships, responsibilities and aspirations all influence how we think, feel and live.
          </p>
          <p>
            We recognise that meaningful care requires an understanding of this wider context. Our work extends
            beyond addressing individual concerns to consider the psychological, physical and emotional dimensions
            that shape everyday life.
          </p>
          <p>
            For families, this may involve supporting individual members through different life stages, navigating
            significant transitions or establishing a more considered approach to long-term wellbeing.
          </p>
          <p>
            Each engagement remains personal to the individual, while allowing for thoughtful coordination across
            family members where appropriate.
          </p>
        </div>
        <figure className="relative min-h-[320px] md:min-h-[420px] overflow-hidden shadow-sm">
          <img
            src={sideImage}
            alt="A calm, light-filled space for private wellbeing consultations"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#053d57]/85 via-[#053d57]/35 to-transparent" />
          <blockquote className="absolute bottom-0 p-6 md:p-8 text-[#ebf0f2] text-base md:text-lg leading-relaxed italic">
            Every individual has a different story, different priorities and a different vision of what it means to
            thrive. We take the time to understand yours because exceptional wellbeing begins with understanding the
            individual.
          </blockquote>
        </figure>
      </div>
    </section>

    {/* Areas of expertise */}
    <section className={`${tint} ${pad}`}>
      <div className="max-w-5xl w-full space-y-8">
        <div className={`${body} mx-auto`}>
          <SectionHead label="Our Areas of Expertise" />
          <p>
            Our work draws upon three interconnected pillars, enabling care to be shaped around individual needs
            rather than predefined programmes.
          </p>
        </div>
        <div className="grid gap-4 md:gap-5 lg:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.name} className="bg-white p-6 shadow-sm flex flex-col">
              <h3 className="text-xl mb-3">{p.name}</h3>
              <div className="space-y-3 text-sm leading-relaxed flex-1">
                <p className="text-[#176a79]">{p.lead}</p>
                <p>{p.text}</p>
              </div>
              <CtaLink to={p.link}>{p.cta}</CtaLink>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Life stages */}
    <section className={pad}>
      <div className="max-w-5xl w-full space-y-6">
        <div className={`${body} mx-auto`}>
          <SectionHead label="Considered Care Across Life's Different Stages" />
          <p>
            Wellbeing needs evolve over time. What begins as a focused therapeutic engagement may develop into a
            longer-term relationship centred on resilience, vitality and personal growth.
          </p>
        </div>
        <ul className="grid gap-3 md:gap-4 lg:grid-cols-3">
          {stages.map((s) => (
            <li key={s.title} className={`${tint} p-5`}>
              <h3 className="text-lg mb-2">{s.title}</h3>
              <p className="text-sm leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Care pathway */}
    <section className={`${tint} ${pad}`}>
      <div className="max-w-5xl w-full space-y-6">
        <div className={`${body} mx-auto`}>
          <SectionHead label="A Personalised Pathway to Lasting Wellbeing" />
          <p>
            Our HWS Care Pathway brings structure and continuity to each engagement, guided by our commitment to
            personalised, customised and sustainable care.
          </p>
        </div>
        <ol className="grid gap-3 md:gap-4 lg:grid-cols-3">
          {pathway.map((s) => (
            <li key={s.no} className="bg-white p-5 shadow-sm">
              <p className="text-sm text-[#176a79] mb-1">{s.no}</p>
              <h3 className="text-lg mb-2">{s.title}</h3>
              <p className="text-sm leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className={`${body} mx-auto`}>
          <CtaLink to="/carepathway">Discover the HWS Care Pathway</CtaLink>
        </div>
      </div>
    </section>

    {/* Discretion */}
    <section className={pad}>
      <div className={body}>
        <SectionHead label="Discretion as a Standard of Care" />
        <p className="text-base md:text-lg">
          Privacy, trust and professional integrity are fundamental to every HWS engagement.
        </p>
        <p>
          We recognise the importance of providing an environment in which clients can speak openly, without
          unnecessary intrusion or judgement. From the initial enquiry through ongoing care, information is handled
          with discretion and in accordance with applicable confidentiality and professional obligations.
        </p>
        <p>
          Where multiple family members engage with HWS, each individual's therapeutic relationship and
          confidentiality remain distinct. Information is shared or coordinated only where appropriate, with the
          necessary consent or other lawful basis.
        </p>
        <p className="italic text-[#176a79] pt-2">
          Our aim is to create a relationship defined by confidence, continuity and genuine understanding.
        </p>
      </div>
    </section>

    {/* Care that adapts */}
    <section className={`${tint} ${pad}`}>
      <div className={body}>
        <SectionHead label="Care That Adapts to Your Life" />
        <p>Our London-based practice offers a private and warm setting for consultations and therapeutic care.</p>
        <p>
          Depending on individual needs, clinical suitability and the nature of an engagement, support may also be
          arranged remotely, at a private residence or in other agreed settings. For clients whose circumstances
          involve international travel, continuity arrangements can be considered as part of their programme.
        </p>
        <p>
          Whether for a defined period or an ongoing relationship, each engagement is developed with careful
          attention to personal preferences and practical requirements.
        </p>
        <CtaLink to="/levels-of-engagement">Explore Our Levels of Engagement</CtaLink>
      </div>
    </section>

    {/* FAQ */}
    <section className={pad}>
      <div className="max-w-3xl w-full space-y-4">
        <SectionHead label="Frequently Asked Questions" />
        <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`pc-${i}`} className={`${tint} border-none`}>
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

    {/* Call to action */}
    <section className={`${tint} py-12 md:py-20 px-5 md:px-12 lg:px-24 flex justify-center text-center`}>
      <div className="max-w-2xl space-y-5 text-sm md:text-base leading-relaxed">
        <SectionHead label="Begin a Private Conversation" />
        <p className="text-base md:text-lg">A meaningful approach to wellbeing begins with a conversation.</p>
        <p>
          Whether you are seeking individual support or exploring care for members of your family, we invite you to
          contact our team for a confidential discussion.
        </p>
        <p>Together, we can consider your priorities and determine an appropriate path forward.</p>
        <Button asChild size="lg" className="text-base md:px-8 bg-[#053d57]/80 hover:bg-[#053d57]">
          <Link to="/contact">Request a Private Consultation</Link>
        </Button>
        <p className="pt-2">
          Central London |{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4 break-all">
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </section>
  </div>
);

export default PrivateClients;
