import { Link } from "react-router-dom";
import LandingComponent from "@/components/landingComponent";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/enquiry";
import heroImage from "@/assets/headquarters.jpg";
import {
  ADDRESS,
  Breadcrumb,
  BookingCta,
  FaqSection,
  Glance,
  JsonLd,
  SectionHead,
  body,
  link,
  pad,
  serviceSchema,
  tint,
  type Faq,
} from "@/components/LocalServiceParts";

/**
 * CBT in Holborn (local service page, /cbt-therapy-holborn).
 * Target searches: CBT Holborn, CBT therapist Holborn, CBT WC1, cognitive behavioural therapy Holborn,
 * CBT therapist Central London, private CBT London WC1.
 * Facts used: therapies and concerns already published on this site and in the practice's Google profile.
 * No prices, session lengths or practitioner credentials are stated: add them only once the practice confirms.
 */

const PATH = "/cbt-therapy-holborn";

const helpsWith = [
  "Anxiety, including generalised anxiety, social anxiety and health anxiety",
  "Depression and low mood",
  "Panic",
  "OCD",
  "Phobias, including emetophobia",
  "PTSD",
  "Stress and burnout",
  "Insomnia and sleep difficulties",
  "Low self-esteem",
  "Body dysmorphic disorder",
  "Excessive worry",
];

const steps = [
  {
    title: "Initial consultation",
    text: "A confidential conversation, in Holborn or online, about what you are experiencing and what you would like to change.",
  },
  {
    title: "Assessment",
    text: "Where helpful, a structured assessment so that therapy is matched to your needs rather than to a set programme.",
  },
  {
    title: "Your CBT plan",
    text: "Agreed goals, the number of sessions and how progress will be reviewed. If another approach would suit you better, we will say so.",
  },
  {
    title: "Sessions and review",
    text: "Regular sessions with practical work between them, and periodic reviews so the plan stays relevant.",
  },
];

const faqs: Faq[] = [
  {
    q: "Where can I have CBT in Holborn?",
    a: `At our private practice at ${ADDRESS}, in Holborn on the edge of Bloomsbury. The nearest Underground stations are Holborn, Chancery Lane and Russell Square. CBT sessions are also available online.`,
  },
  {
    q: "What is Cognitive Behavioural Therapy (CBT)?",
    a: "CBT is a structured, evidence-based talking therapy. It looks at how thoughts, feelings, physical sensations and actions affect one another, and helps you change unhelpful patterns using practical techniques that you continue between sessions.",
  },
  {
    q: "What can CBT help with?",
    a: "CBT is widely used for anxiety, depression, panic, OCD, phobias, PTSD, stress and burnout, insomnia and low self-esteem, among other concerns. At your first consultation we will discuss whether CBT is the right approach for you.",
  },
  {
    q: "How many CBT sessions will I need?",
    a: "It depends on what you are working on. A course of CBT commonly runs for between 5 and 20 sessions. We agree the number with you after your initial consultation and review it as you progress.",
  },
  {
    q: "Can I have CBT online?",
    a: "Yes. Sessions can take place online as well as in person at our Holborn practice, so therapy can continue when travelling in is not practical.",
  },
  {
    q: "Is CBT the only therapy you offer?",
    a: "No. Alongside CBT we offer DBT, EMDR, Acceptance and Commitment Therapy (ACT), Compassion Focused Therapy, psychodynamic therapy, integrative counselling, hypnotherapy and mindfulness-based approaches. After your consultation we recommend the approach best suited to you.",
  },
  {
    q: "How do I book CBT in Holborn?",
    a: `Call ${CONTACT_PHONE}, email ${CONTACT_EMAIL} or use our enquiry form. We will arrange a confidential initial consultation at our Holborn practice or online.`,
  },
];

const schema = serviceSchema({
  path: PATH,
  crumb: "CBT in Holborn",
  name: "Cognitive Behavioural Therapy (CBT) in Holborn, London WC1",
  serviceType: "Cognitive Behavioural Therapy",
  description:
    "Private Cognitive Behavioural Therapy (CBT) at our practice in Holborn, London WC1X 8SL, and online, for anxiety, depression, panic, OCD, phobias, PTSD, stress, burnout and insomnia.",
  faqs,
});

const CbtHolborn = () => (
  <div className="min-h-screen w-full flex flex-col text-[#053d57]" style={{ fontFamily: "Josefin Sans" }}>
    <JsonLd data={schema} />

    <LandingComponent
      image={heroImage}
      title="CBT Therapy in Holborn, London WC1"
      titleSize="text-3xl md:text-5xl max-w-5xl leading-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]"
      overlay={true}
      contactbutton={true}
      buttonText="Book a Confidential Consultation"
      textcolor="text-[#ebf0f2]"
    />

    <Breadcrumb current="CBT in Holborn" />

    {/* Answer-first intro */}
    <section className={pad}>
      <div className={body}>
        <p className="text-xs uppercase tracking-[0.2em] text-[#176a79]">Cognitive Behavioural Therapy · Holborn · WC1</p>
        <p className="text-lg md:text-xl">
          Holistic Wellbeing Solutions offers private Cognitive Behavioural Therapy (CBT) at our practice at {ADDRESS},
          in Holborn, Central London, and online. CBT is a structured, evidence-based talking therapy for anxiety,
          depression, panic, OCD, phobias, stress, burnout and insomnia.
        </p>
        <p>
          Our practice is a short walk from Holborn, Chancery Lane and Russell Square stations, so sessions fit around a
          working day in Holborn, Bloomsbury, the City or the West End. Every course of CBT begins with a confidential
          consultation and is tailored to you.
        </p>
      </div>
    </section>

    <Glance
      title="CBT in Holborn at a Glance"
      rows={[
        ["Where", `${ADDRESS}, in Holborn on the edge of Bloomsbury`],
        ["Nearest stations", "Holborn, Chancery Lane and Russell Square"],
        ["Format", "Sessions in person in Holborn, or online"],
        ["Helps with", "Anxiety, depression, panic, OCD, phobias, PTSD, stress, burnout and insomnia"],
        [
          "Other therapies",
          <>
            DBT, EMDR, ACT, Compassion Focused Therapy, psychodynamic therapy, integrative counselling, hypnotherapy and{" "}
            <Link to="/mindfulness-holborn" className={link}>mindfulness and MBCT</Link>
          </>,
        ],
      ]}
    />

    {/* What is CBT */}
    <section className={pad}>
      <div className={body}>
        <SectionHead title="What Is Cognitive Behavioural Therapy?" sub="A practical, structured approach to change" />
        <p>
          CBT looks at how your thoughts, feelings, physical sensations and actions affect one another. Together with
          your therapist, you identify the patterns that keep a problem going, such as avoidance, worry or self-critical
          thinking, and practise more helpful ways of responding.
        </p>
        <p>
          CBT focuses mainly on the present and on clear goals. Much of the work happens between sessions, through
          short exercises that build skills you keep after therapy ends. It is one of the most widely researched talking
          therapies and is recommended in NHS guidance for anxiety and depression.
        </p>
      </div>
    </section>

    {/* What CBT helps with */}
    <section className={`${tint} ${pad}`}>
      <div className={body}>
        <SectionHead title="What CBT Can Help With" sub="Concerns we support with CBT at our Holborn practice" />
        <ul className="grid gap-2 sm:grid-cols-2">
          {helpsWith.map((h) => (
            <li key={h} className="bg-white px-4 py-3 shadow-sm">{h}</li>
          ))}
        </ul>
        <p>
          Not sure whether CBT is right for what you are facing? See the full range of concerns we support on our{" "}
          <Link to="/programmes/mental-health" className={link}>psychotherapy and mental health</Link> page, or ask at
          your first consultation.
        </p>
      </div>
    </section>

    {/* How it works */}
    <section className={pad}>
      <div className="max-w-5xl w-full space-y-6">
        <div className={`${body} mx-auto`}>
          <SectionHead title="How CBT Works at HWS" sub="Four steps, guided by our care pathway" />
        </div>
        <ul className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.title} className={`${tint} p-5`}>
              <h3 className="text-lg mb-2">{s.title}</h3>
              <p className="text-sm leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ul>
        <div className={`${body} mx-auto`}>
          <p>
            Read more about our <Link to="/carepathway" className={link}>care pathway</Link>.
          </p>
        </div>
      </div>
    </section>

    {/* CBT alongside other approaches */}
    <section className={`${tint} ${pad}`}>
      <div className={body}>
        <SectionHead title="CBT Alongside Other Therapies" sub="Psychotherapy in Holborn, matched to you" />
        <p>
          CBT is one of several evidence-based approaches we offer as part of our{" "}
          <Link to="/programmes/mental-health" className={link}>psychotherapy in Holborn</Link>. Where it would help,
          CBT can be combined with mindfulness-based approaches, including{" "}
          <Link to="/mindfulness-holborn" className={link}>Mindfulness-Based Cognitive Therapy (MBCT)</Link>, or with
          the wider wellbeing support of our{" "}
          <Link to="/programmes/holistic-wellbeing" className={link}>holistic wellbeing programmes</Link>.
        </p>
        <p>
          Clients who prefer to travel less can also see us remotely, and we welcome clients from across{" "}
          <Link to="/central-london" className={link}>Central London</Link>.
        </p>
      </div>
    </section>

    <FaqSection id="cbt-faq" title="CBT in Holborn: Frequently Asked Questions" faqs={faqs} />

    <BookingCta title="Book CBT in Holborn">
      <p>
        A first consultation is a chance to talk through what you are looking for and whether CBT is the right
        approach, in person at our Holborn practice or online.
      </p>
    </BookingCta>
  </div>
);

export default CbtHolborn;
