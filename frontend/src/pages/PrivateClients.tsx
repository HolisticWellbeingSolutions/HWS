import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import LandingComponent from "@/components/landingComponent";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/enquiry";

/**
 * Private Clients & Families page.
 * Copy supplied by HWS (client document, Oct 2026); only spelling and punctuation tidied.
 * Target searches: private wellbeing management London, private wellbeing consultant London,
 * personalised wellbeing programme for private clients London, discreet wellbeing support.
 */

const pillars = [
  {
    no: "01",
    name: "Holistic Wellbeing",
    tagline: "A Wider Perspective on Living Well",
    link: "/programmes/holistic-wellbeing",
    text: [
      "Wellbeing extends beyond physical health alone. It encompasses our emotional lives, relationships, family circumstances, place in society, sense of purpose, working lives and wider lifestyle.",
      "Our holistic approach considers how these dimensions interact, helping you identify areas that may benefit from greater attention, balance or change.",
      "Your programme may include guided reflection, personal goal-setting, relationship-focused support and carefully selected wellbeing practices, according to your individual needs.",
    ],
  },
  {
    no: "02",
    name: "Wellness & Longevity",
    tagline: "Supporting Vitality for the Life You Lead",
    link: "/programmes/wellness-longevity",
    text: [
      "Sustainable wellbeing is built through thoughtful choices, consistent habits and a personalised understanding of what supports you best.",
      "We help you explore practical strategies across mindfulness, stress management, sleep, recovery, nutrition, movement and self-care, with the aim of supporting resilience, vitality and healthier long-term habits.",
      "Our focus is on realistic, sustainable changes that complement your lifestyle and personal goals.",
    ],
  },
  {
    no: "03",
    name: "Mental Health",
    tagline: "Psychological Care with Individual Attention",
    link: "/programmes/mental-health",
    text: [
      "Psychological wellbeing is fundamental to how we think, feel, relate to others and navigate the demands of life.",
      "We offer evidence-based psychological therapies and personalised mental health support for a wide range of concerns, including those listed below, as well as significant life transitions and the psychological pressures that may accompany demanding professional or personal responsibilities.",
      "Each engagement is approached with sensitivity, professional care and respect for your individual circumstances.",
    ],
  },
];

const concerns = [
  "Emotional difficulties", "PTSD", "Depression", "Anxiety", "Generalised anxiety disorder",
  "Health anxiety", "Social anxiety", "OCD", "Worry", "Phobias", "Low self-esteem",
  "Body dysmorphic disorder", "Stress", "Relationship challenges", "Decision-making",
  "Decision burnout", "Sex addiction", "Addiction relapse support", "Insomnia",
  "Anger management", "Emotional regulation", "Postpartum depression",
];

const steps = [
  {
    title: "The Private Consultation",
    text: "We begin with a confidential conversation about your circumstances, concerns, priorities and aspirations. This is an opportunity to understand what matters most to you and explore how HWS may be able to help.",
  },
  {
    title: "Personalised Wellbeing Assessment",
    text: "Where appropriate, we undertake relevant assessments of psychological wellbeing, lifestyle and other dimensions of health within the scope of our services. The process is guided by your individual needs and the questions you wish to explore.",
  },
  {
    title: "Your Bespoke Wellbeing Plan",
    text: "Drawing on our understanding of your circumstances and preferences, we develop a tailored plan outlining recommended therapies, wellbeing strategies and any appropriate professional input.",
  },
  {
    title: "Coordinated Professional Support",
    text: "Where beneficial, and with your consent, we facilitate appropriate coordination with clinicians, therapists and other professionals involved in your care. Appointments and support may be arranged in person or remotely.",
  },
  {
    title: "Ongoing Review & Refinement",
    text: "Wellbeing is not static. We review your programme periodically, taking account of progress, changing circumstances and emerging priorities, so that the approach remains relevant, purposeful and sustainable.",
  },
];

const tint = "bg-[#176a79]/10";
const pad = "py-10 md:py-16 px-5 md:px-12 lg:px-24 flex justify-center";
const body = "max-w-3xl w-full space-y-4 text-sm md:text-base leading-relaxed";

const SectionHead = ({ label, sub }: { label: string; sub: string }) => (
  <header className="space-y-2 mb-2">
    <h2 className="text-2xl md:text-3xl">{label}</h2>
    <p className="text-lg md:text-xl text-[#176a79]">{sub}</p>
  </header>
);

const Closing = ({ children }: { children: ReactNode }) => (
  <p className="italic text-[#176a79] pt-2">{children}</p>
);

const PrivateClients = () => (
  <div className="min-h-screen w-full flex flex-col text-[#053d57]" style={{ fontFamily: "Josefin Sans" }}>
    <LandingComponent
      image="https://images.unsplash.com/photo-1724230759479-32b57f30ba86?q=80&w=2070&auto=format&fit=crop"
      title="Private Wellbeing Management for Individuals and Families"
      titleSize="text-3xl md:text-5xl max-w-5xl leading-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]"
      contactbutton={true}
      overlay={true}
      buttonText="Begin a Private Conversation"
      textcolor="text-[#ebf0f2]"
    />

    {/* Intro */}
    <section className={`${tint} ${pad}`}>
      <div className={`${body} text-center`}>
        <p className="text-xs uppercase tracking-[0.2em] text-[#176a79]">The Art of Well-being</p>
        <p className="text-xl md:text-2xl">Bespoke. Personal. Discreet.</p>
        <p className="text-base md:text-lg">
          A more considered approach to personal wellbeing, wellness, mental health and longevity.
        </p>
      </div>
    </section>

    {/* Wellbeing, considered differently */}
    <section className={pad}>
      <div className={body}>
        <SectionHead label="Wellbeing, Considered Differently" sub="A More Personal Standard of Care" />
        <p>
          At HWS, we believe that wellbeing deserves a thoughtful and individualised approach, one that recognises
          the complexity of modern life and the importance of feeling well, living well, and sustaining that sense
          of balance over time.
        </p>
        <p>
          We provide bespoke private wellbeing management for individuals and families who value personal attention,
          professional expertise and a considered approach to their physical, psychological and emotional wellbeing.
        </p>
        <p>
          Based in Holborn, London, HWS supports individuals navigating the demands of leadership, professional
          achievement, familial responsibilities, personal transitions, and the desire to maintain a fulfilling,
          balanced life.
        </p>
        <p>
          Our approach brings together evidence-based psychological therapies, personalised wellness strategies and
          holistic wellbeing practices within a carefully tailored programme. Where appropriate, we facilitate
          collaboration with relevant professionals to provide a more coherent and coordinated experience of care.
        </p>
        <p>
          Every individual has a different story, different priorities and a different vision of what it means to
          thrive. We take the time to understand yours.
        </p>
        <Closing>Because exceptional wellbeing begins with understanding the individual.</Closing>
      </div>
    </section>

    {/* Bespoke private wellbeing management + three pillars */}
    <section className={`${tint} ${pad}`}>
      <div className="max-w-5xl w-full space-y-8">
        <div className={`${body} mx-auto`}>
          <SectionHead label="Bespoke Private Wellbeing Management" sub="Your Life. Your Priorities. Your Wellbeing." />
          <p className="text-base md:text-lg">Wellbeing is deeply personal. Your care should reflect that.</p>
          <p>
            Our private wellbeing management service offers a personalised framework for understanding your needs,
            identifying appropriate support and creating a programme that evolves alongside your life.
          </p>
          <p>
            Whether you are seeking focused psychological support, a more proactive approach to wellness and
            longevity, or a coordinated programme addressing several dimensions of your wellbeing, our
            recommendations are shaped around you.
          </p>
          <p>
            The experience is designed to be considered, flexible and responsive, with attention to both your
            immediate priorities and your longer-term wellbeing.
          </p>
        </div>

        <h3 className="text-xl md:text-2xl text-center">The Three Pillars of HWS</h3>
        <div className="grid gap-4 md:gap-5 lg:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.no} className="bg-white p-6 shadow-sm flex flex-col">
              <h3 className="text-xl mb-1">{p.name}</h3>
              <p className="text-sm text-[#176a79] mb-3">{p.tagline}</p>
              <div className="space-y-3 text-sm leading-relaxed flex-1">
                {p.text.map((t) => <p key={t}>{t}</p>)}
              </div>
              <Link to={p.link} className="underline underline-offset-4 text-sm mt-4">
                Explore {p.name}
              </Link>
            </article>
          ))}
        </div>

        <div className="bg-white p-6 shadow-sm">
          <p className="text-sm mb-3">Mental health support includes:</p>
          <ul className="flex flex-wrap gap-2">
            {concerns.map((c) => (
              <li key={c} className="text-xs md:text-sm border border-[#176a79]/30 px-3 py-1">{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Care experience */}
    <section className={pad}>
      <div className="max-w-5xl w-full space-y-6">
        <div className={`${body} mx-auto`}>
          <SectionHead label="The HWS Care Experience" sub="Thoughtfully Designed Around You" />
          <p>We believe that good care begins with listening and develops through a clear, collaborative process.</p>
          <p>
            Our five-stage care pathway provides a considered structure for understanding your priorities,
            identifying appropriate support and reviewing progress over time.
          </p>
        </div>
        <ul className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <li key={step.title} className={`${tint} p-5`}>
              <h3 className="text-lg mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ul>
        <div className={`${body} mx-auto`}>
          <Closing>A considered process. A personal relationship. Care that evolves with you.</Closing>
          <Link to="/carepathway" className="underline underline-offset-4 text-sm">Read more about our care pathway</Link>
        </div>
      </div>
    </section>

    {/* Central London */}
    <section className={`${tint} ${pad}`}>
      <div className={body}>
        <SectionHead label="Private Wellbeing in Central London" sub="Personal Attention, Designed Around Your Life" />
        <p>
          Our private practice in Holborn offers a discreet setting for consultations and personalised wellbeing
          support in the heart of Central London.
        </p>
        <p>
          We understand that time is valuable and that life rarely follows a predictable schedule. Appointments can
          be arranged at our practice or remotely, offering flexibility for clients balancing professional
          responsibilities, family life and international travel.
        </p>
        <p>
          For those requiring a more tailored arrangement, our{" "}
          <Link to="/levels-of-engagement" className="underline underline-offset-4">Concierge Wellbeing Service</Link>{" "}
          can explore support at home, at another agreed location or overseas, subject to availability, suitability
          and individual arrangements.
        </p>
        <p>
          Our intention is to make accessing appropriate wellbeing support as straightforward and considered as
          possible, while maintaining continuity of care wherever practicable.
        </p>
        <Closing>Private wellbeing support, shaped around the realities of your life.</Closing>
      </div>
    </section>

    {/* Individuals & families */}
    <section className={pad}>
      <div className={body}>
        <SectionHead
          label="Private Wellbeing Management for Individuals & Families"
          sub="Individual Care. A Family-Conscious Perspective."
        />
        <p>
          Personal wellbeing rarely exists in isolation. Relationships, family dynamics, responsibilities and
          significant life changes can all influence how we feel and function.
        </p>
        <p>
          HWS works with individuals and families seeking a thoughtful, personalised approach to wellbeing. We
          recognise that every family member has distinct needs, preferences and circumstances, and that each
          person's privacy and autonomy deserve respect.
        </p>
        <p>
          Where appropriate, we can help identify relevant areas of support and facilitate coordination between
          professionals, with suitable consent and clear boundaries.
        </p>
        <p>
          Whether you are exploring support for yourself, your partner or a family member, we begin by
          understanding the situation and considering the options available.
        </p>
        <aside className="border-l-4 border-[#C8A97E] bg-[#C8A97E]/10 px-5 py-4 my-2 text-base md:text-lg">
          For family offices, personal assistants and trusted advisers making an initial enquiry, we can discuss
          practical arrangements for exploring suitable support, subject to the individual's wishes and appropriate
          confidentiality requirements.
        </aside>
        <Closing>Our role is to make accessing appropriate care more coherent, personal and reassuring.</Closing>
      </div>
    </section>

    {/* Discreet support */}
    <section className={`${tint} ${pad}`}>
      <div className={body}>
        <SectionHead
          label="Discreet Support for Private Clients"
          sub="Confidentiality Is Fundamental. Discretion Is Integral."
        />
        <p>
          For individuals with significant professional responsibilities, public visibility or complex personal
          commitments, privacy is an important consideration when seeking wellbeing support.
        </p>
        <p>
          At HWS, confidentiality, professional integrity and respect for personal boundaries underpin our approach.
        </p>
        <p>
          We understand that high-profile individuals, business leaders, founders, executives, public figures and
          their families may value a particularly thoughtful approach to communication, appointment arrangements and
          the handling of personal information.
        </p>
        <p>
          Information is managed in accordance with applicable data protection legislation, professional obligations
          and relevant confidentiality requirements. Any proposed coordination with other professionals is discussed
          with you, with information shared appropriately and with consent where required, subject to applicable
          legal and safeguarding obligations.
        </p>
        <p>
          Where an enquiry is made by a personal assistant, family office representative or trusted adviser, we can
          discuss suitable arrangements for communication and appointment coordination. Personal information and
          care-related discussions remain subject to the individual's rights and applicable confidentiality
          requirements.
        </p>
        <p>The limits of confidentiality, including relevant legal and safeguarding exceptions, are explained clearly.</p>
        <Closing>A private, respectful environment in which your wellbeing remains the priority.</Closing>
      </div>
    </section>

    {/* Call to action */}
    <section className="py-12 md:py-20 px-5 md:px-12 lg:px-24 flex justify-center text-center">
      <div className="max-w-2xl space-y-5 text-sm md:text-base leading-relaxed">
        <SectionHead label="Begin with a Private Conversation" sub="A Personal Introduction to HWS" />
        <p>
          Choosing wellbeing support is a personal decision. We believe the first conversation should offer clarity,
          confidence and the opportunity to establish whether our approach is right for you.
        </p>
        <p>
          Whether you are seeking psychological support, a personalised wellness and longevity programme, or a more
          integrated approach to individual and family wellbeing, we invite you to contact us for an initial
          discussion.
        </p>
        <p>
          We will take the time to understand your priorities, answer your questions and outline the options that
          may be appropriate to your circumstances.
        </p>
        <p>
          There is no need to have every answer before you begin. A conversation is simply an opportunity to explore
          what matters to you and consider the next step.
        </p>
        <div className="space-y-1 pt-2">
          <p className="text-base md:text-lg">Contact Holistic Well-being Solutions</p>
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
          <Link to="/contact">Arrange a Private Consultation</Link>
        </Button>
        <Closing>Bespoke care. Thoughtful coordination. Wellbeing shaped around you.</Closing>
        <div className="pt-6 space-y-1">
          <p className="text-xs uppercase tracking-[0.2em] text-[#176a79]">The Art of Well-being</p>
          <p>Personalised. Considered. Confidential.</p>
        </div>
      </div>
    </section>
  </div>
);

export default PrivateClients;
