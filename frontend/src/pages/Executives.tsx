import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import LandingComponent from "@/components/landingComponent";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/enquiry";
import heroImage from "@/assets/landingbg2.jpg";

/**
 * Executives page.
 * Target searches: executive wellbeing London, executive stress management London, private executive wellness,
 * executive burnout support London, decision fatigue support executives, executive relationship counselling London,
 * executive wellbeing management London, executive wellbeing programme London, executive performance wellbeing,
 * confidential burnout support for CEOs London, burnout recovery programme for senior executives,
 * private therapist for executives London, stress management for senior leaders London,
 * decision fatigue coaching for leaders, executive resilience programme London,
 * mental health support for business owners London.
 * Services named here are those already listed on the Mental Health page (burnout, stress management,
 * decision making / decision burnout, relationship counselling, executive coaching) and the client-approved
 * Private Clients copy (Oct 2026).
 */

const SITE = "https://www.holisticwell-beingsolutions.com";
const PAGE = `${SITE}/executives`;

const glance = [
  ["Who it is for", "CEOs, founders, business owners, senior executives and senior leaders in demanding roles"],
  ["Common concerns", "Stress, burnout and exhaustion, decision fatigue, low mood, anxiety, relationship strain and major transitions"],
  ["What we offer", "Private therapy, executive coaching and personalised wellness and longevity strategies in one coordinated programme"],
  ["Where", "Our private practice in Holborn, Central London, remotely, and by arrangement at another agreed location"],
  ["Confidentiality", "Your care stays private. Nothing is shared with your employer, board or colleagues without your consent, subject to legal and safeguarding obligations"],
];

const concerns = [
  {
    title: "Executive Stress Management",
    text: "Sustained pressure, long hours and constant availability take a toll. We help senior leaders understand their stress patterns and build practical, evidence-based ways to manage them, from sleep and recovery to mindfulness-based approaches.",
  },
  {
    title: "Executive Burnout Support",
    text: "Burnout and exhaustion rarely arrive suddenly. We offer confidential support to recognise the signs early, recover with a structured plan and return to work, or to the next chapter, on a more sustainable footing.",
  },
  {
    title: "Decision Fatigue Support",
    text: "Leaders make high-stakes decisions all day. When decision-making starts to feel heavy, we combine therapy and executive coaching to restore clarity, set boundaries and protect the energy that good judgement needs.",
  },
  {
    title: "Executive Relationship Counselling",
    text: "Demanding careers affect partners and families too. Relationship counselling offers a private space to address strain, communication and the balance between work and home.",
  },
  {
    title: "Mental Health Support for Business Owners",
    text: "Founders and business owners often carry the weight alone: financial worry, responsibility for others and little room to step back. We provide private psychological support for anxiety, low mood, worry and life transitions.",
  },
  {
    title: "Executive Performance Wellbeing",
    text: "Sustainable performance depends on health, recovery and purpose as much as effort. Our wellness and longevity strategies help you protect energy, focus and resilience over the long term.",
  },
];

const programme = [
  {
    title: "A private consultation",
    text: "A confidential conversation about your role, pressures, priorities and what you would like to change.",
  },
  {
    title: "Personalised assessment",
    text: "Where appropriate, assessment of psychological wellbeing, stress, sleep, lifestyle and other dimensions of health within the scope of our services.",
  },
  {
    title: "Your executive wellbeing plan",
    text: "A tailored plan combining the therapies, coaching and wellness strategies best suited to you, scheduled around your diary.",
  },
  {
    title: "Coordinated support",
    text: "Sessions in person or remotely and, where beneficial and with your consent, coordination with other professionals involved in your care.",
  },
  {
    title: "Ongoing review",
    text: "Regular reviews refine the programme as pressures, goals and circumstances change, so progress lasts.",
  },
];

const faqs = [
  {
    q: "What is executive wellbeing support?",
    a: "Executive wellbeing support is private, personalised help for people in demanding leadership roles to manage stress, prevent or recover from burnout and sustain their performance and health. At Holistic Wellbeing Solutions (HWS) in Holborn, London, it brings together psychological therapies, executive coaching and wellness and longevity strategies in a single, coordinated programme.",
  },
  {
    q: "Do you offer confidential burnout support for CEOs in London?",
    a: "Yes. We provide confidential support for CEOs, founders and senior executives experiencing burnout and exhaustion, at our private practice in Holborn, Central London, or remotely. Nothing is shared with your board, employer or colleagues without your consent, subject to applicable legal and safeguarding obligations.",
  },
  {
    q: "Is there a burnout recovery programme for senior executives?",
    a: "Yes. After a private consultation and, where appropriate, assessment, we create a personalised programme that may combine therapy, executive coaching and practical strategies for sleep, recovery and stress management. The programme is reviewed regularly and adjusted as you recover.",
  },
  {
    q: "Can I see a private therapist for executives in London?",
    a: "Yes. Our evidence-based therapies include CBT, Mindfulness-Based CBT, Acceptance and Commitment Therapy (ACT), EMDR, psychodynamic therapy and integrative counselling. After your initial consultation, we recommend the approach best suited to you. Sessions can take place at our Holborn practice or remotely.",
  },
  {
    q: "What is decision fatigue, and how do you help leaders with it?",
    a: "Decision fatigue is the mental exhaustion that builds up after making many decisions, which can lead to procrastination, impulsive choices or avoiding decisions altogether. We help leaders through a combination of therapy and executive coaching: understanding what drains them, structuring decisions, setting boundaries and protecting recovery time.",
  },
  {
    q: "Do you offer stress management for senior leaders?",
    a: "Yes. Stress management is a core part of our work with senior leaders. Programmes can include mindfulness-based approaches, CBT techniques, sleep and recovery strategies and lifestyle changes that fit a demanding schedule.",
  },
  {
    q: "Can sessions fit around a busy schedule or international travel?",
    a: "Yes. Appointments can be arranged at our Holborn practice or remotely, so your support continues while you travel. For a more tailored arrangement, our Concierge Wellbeing Service can explore support at another agreed location, subject to availability and suitability.",
  },
  {
    q: "Does my employer find out if I use your service?",
    a: "No, not without your consent. Your care is private and information is managed in line with data protection legislation and professional confidentiality obligations. The limits of confidentiality, such as a serious risk of harm, are explained clearly at your first consultation.",
  },
  {
    q: "How do I get started?",
    a: `Call ${CONTACT_PHONE}, email ${CONTACT_EMAIL} or use our enquiry form. A personal assistant can also make the first enquiry on your behalf. We will arrange a confidential initial consultation at a time that suits you.`,
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE}#service`,
      name: "Executive Wellbeing Programmes",
      serviceType: "Executive wellbeing, stress management and burnout support",
      description:
        "Confidential executive wellbeing programmes in London combining psychological therapies, executive coaching and wellness strategies for CEOs, founders, business owners and senior leaders.",
      provider: { "@id": `${SITE}/#business` },
      areaServed: { "@type": "City", name: "London" },
      audience: {
        "@type": "Audience",
        audienceType: "CEOs, founders, business owners, senior executives and senior leaders",
      },
      url: PAGE,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Levels of Engagement", item: `${SITE}/levels-of-engagement` },
        { "@type": "ListItem", position: 3, name: "Executives", item: PAGE },
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

const Executives = () => (
  <div className="min-h-screen w-full flex flex-col text-[#053d57]" style={{ fontFamily: "Josefin Sans" }}>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />

    <LandingComponent
      image={heroImage}
      title="Executive Wellbeing in London"
      titleSize="text-3xl md:text-5xl max-w-5xl leading-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]"
      overlay={true}
      contactbutton={true}
      buttonText="Arrange a Confidential Consultation"
      textcolor="text-[#ebf0f2]"
    />

    {/* Breadcrumb */}
    <nav aria-label="Breadcrumb" className="px-5 md:px-12 lg:px-24 pt-4 text-xs md:text-sm">
      <ol className="flex flex-wrap gap-1 max-w-5xl mx-auto">
        <li><Link to="/" className="underline underline-offset-4">Home</Link> /</li>
        <li><Link to="/levels-of-engagement" className="underline underline-offset-4">Levels of Engagement</Link> /</li>
        <li aria-current="page">Executives</li>
      </ol>
    </nav>

    {/* Answer-first intro */}
    <section className={pad}>
      <div className={body}>
        <p className="text-xs uppercase tracking-[0.2em] text-[#176a79]">Private. Personal. Confidential.</p>
        <p className="text-lg md:text-xl">
          Holistic Wellbeing Solutions (HWS) provides private executive wellness and executive wellbeing management in London
          for CEOs, founders, business owners and senior leaders. From our practice in Holborn, Central London, we
          offer confidential support for stress, burnout and decision fatigue, combining psychological therapies,
          executive coaching and wellness strategies in one programme built around your diary.
        </p>
        <p>
          Leadership brings responsibility, pressure and very little time to pause. Many senior people keep going
          long after they have stopped feeling well. Our role is to give you a discreet place to step back,
          understand what is happening and build a sustainable way forward, for your health, your relationships
          and your performance.
        </p>
      </div>
    </section>

    {/* At a glance */}
    <section className={`${tint} ${pad}`}>
      <div className={body}>
        <SectionHead title="Executive Wellbeing at a Glance" />
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

    {/* What we help with */}
    <section className={pad}>
      <div className="max-w-5xl w-full space-y-6">
        <div className={`${body} mx-auto`}>
          <SectionHead
            title="Executive Stress, Burnout and Wellbeing Support in London"
            sub="Support for the pressures that come with leadership"
          />
          <p>
            Every leader's situation is different. These are some of the concerns we most often help senior
            executives and business owners with.
          </p>
        </div>
        <div className="grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {concerns.map((c) => (
            <article key={c.title} className={`${tint} p-6`}>
              <h3 className="text-lg md:text-xl mb-3">{c.title}</h3>
              <p className="text-sm leading-relaxed">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Programme */}
    <section className={`${tint} ${pad}`}>
      <div className="max-w-5xl w-full space-y-6">
        <div className={`${body} mx-auto`}>
          <SectionHead
            title="Your Executive Wellbeing Programme in London"
            sub="A clear, personal process"
          />
          <p>
            Each executive wellbeing programme follows our{" "}
            <Link to="/carepathway" className="underline underline-offset-4">care pathway</Link>, so you always know
            what happens next. Programmes may be short and focused on one objective, or ongoing support for those who
            want sustained care.
          </p>
        </div>
        <ul className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programme.map((step) => (
            <li key={step.title} className="bg-white p-5 shadow-sm">
              <h3 className="text-lg mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Burnout recovery for CEOs */}
    <section className={pad}>
      <div className={body}>
        <SectionHead
          title="Confidential Burnout Support for CEOs and Senior Executives"
          sub="A burnout recovery programme built around you"
        />
        <p>
          Burnout can show up as exhaustion, detachment, irritability, poor sleep or a sense that nothing you do is
          enough. For CEOs and senior executives, there is often an added fear of being seen to struggle.
        </p>
        <p>
          Our burnout recovery programme for senior executives starts with understanding what has led you here. It
          may combine therapy to address the underlying patterns, executive coaching to rethink workload and
          boundaries, and practical strategies for sleep, recovery and stress management. Your plan is reviewed
          regularly, so support adjusts as you recover.
        </p>
        <aside className="border-l-4 border-[#C8A97E] bg-[#C8A97E]/10 px-5 py-4 text-base md:text-lg">
          Your care is private. Nothing is shared with your employer, board or colleagues without your consent,
          subject to applicable legal and safeguarding obligations.
        </aside>
      </div>
    </section>

    {/* Therapist + coaching */}
    <section className={`${tint} ${pad}`}>
      <div className={body}>
        <SectionHead
          title="A Private Therapist for Executives in London"
          sub="Therapy and executive coaching, in one place"
        />
        <p>
          Our evidence-based therapies include Cognitive Behavioural Therapy (CBT), Mindfulness-Based CBT,
          Acceptance and Commitment Therapy (ACT), EMDR, psychodynamic therapy and integrative counselling. We also
          offer executive coaching and relationship counselling, so you can address work, wellbeing and home life
          together rather than in separate places.
        </p>
        <p>
          For leaders struggling with decision fatigue, decision fatigue coaching sits alongside therapy: clarifying
          priorities, structuring decisions and protecting the recovery that good judgement depends on.
        </p>
        <p>
          Explore our{" "}
          <Link to="/programmes/mental-health" className="underline underline-offset-4">Mental Health</Link>{" "}
          programme for the full range of therapies and concerns we support.
        </p>
      </div>
    </section>

    {/* Resilience & performance */}
    <section className={pad}>
      <div className={body}>
        <SectionHead
          title="Executive Resilience and Performance Wellbeing"
          sub="Sustainable performance, not just getting through"
        />
        <p>
          An executive resilience programme is about more than coping. Through our{" "}
          <Link to="/programmes/wellness-longevity" className="underline underline-offset-4">Wellness &amp; Longevity</Link>{" "}
          pillar, we help you build realistic habits across sleep, recovery, nutrition, movement and mindfulness
          that support energy, focus and long-term health.
        </p>
        <p>
          Our <Link to="/programmes/holistic-wellbeing" className="underline underline-offset-4">Holistic Wellbeing</Link>{" "}
          pillar looks at the wider picture: purpose, relationships, family and life transitions such as a new role,
          an exit or retirement from executive life.
        </p>
        <p>
          Appointments can be arranged at our Holborn practice or remotely, and our{" "}
          <Link to="/levels-of-engagement" className="underline underline-offset-4">Executive-Level Engagements</Link>{" "}
          offer a deeper, more comprehensive programme for those in high-stakes roles.
        </p>
        <Closing>Wellbeing shaped around the realities of leadership.</Closing>
      </div>
    </section>

    {/* FAQ */}
    <section aria-labelledby="ex-faq" className={`${tint} ${pad}`}>
      <div className="max-w-4xl w-full">
        <h2 id="ex-faq" className="text-2xl md:text-3xl text-center mb-3">
          Executive Wellbeing: Frequently Asked Questions
        </h2>
        <p className="text-center text-sm md:text-base mb-8">
          Answers for CEOs, founders, business owners and senior leaders considering support.
        </p>
        <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`ex-${i}`} className="bg-white border-none shadow-sm">
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
        <SectionHead title="Begin with a Confidential Consultation" />
        <p>
          There is no need to wait until things reach breaking point. A first conversation is simply an opportunity
          to talk through what is happening and consider the next step. A personal assistant can make the enquiry
          on your behalf.
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
          <Link to="/contact">Arrange a Confidential Consultation</Link>
        </Button>
        <p className="text-xs pt-4">
          HWS is not an emergency service. In an emergency, call 999. For urgent mental health support, call NHS 111
          and choose the mental health option, or call Samaritans on 116 123.
        </p>
      </div>
    </section>
  </div>
);

export default Executives;
