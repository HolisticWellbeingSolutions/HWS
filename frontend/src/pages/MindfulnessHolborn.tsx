import { Link } from "react-router-dom";
import LandingComponent from "@/components/landingComponent";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/enquiry";
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
 * Mindfulness & MBCT in Holborn (local service page, /mindfulness-holborn).
 * Target searches: mindfulness Holborn, mindfulness course Holborn, mindfulness WC1, MBCT London,
 * mindfulness-based cognitive therapy Holborn, mindfulness classes Central London.
 * Facts used: the mindfulness courses already listed on the Wellness & Longevity page, the practice's
 * Google profile, and general descriptions of mindfulness and MBCT.
 * Course dates, group sizes and fees are not stated: add them only once the practice confirms.
 */

const PATH = "/mindfulness-holborn";
const HERO =
  "https://images.unsplash.com/photo-1526724038726-3007ffb8025f?q=70&w=1600&auto=format&fit=crop";

const courses = [
  { name: "Introducing Mindfulness", text: "A first step into mindfulness: the core practices and how to bring them into everyday life." },
  { name: "Finding Peace in a Frantic World", text: "A practical course for busy lives, built around short daily practices." },
  { name: "Mindfulness for Life", text: "A structured course that builds a lasting personal practice." },
  { name: "Deeper Mindfulness", text: "For those with some experience who want to deepen and sustain their practice." },
  { name: "Guided meditation", text: "Guided practice to steady attention and calm the body." },
  { name: "Breathwork and reflective practices", text: "Breath-based and reflective exercises to support regulation and clarity." },
];

const movement = ["Mindful movement", "Mindful walking", "Restorative yoga"];

const faqs: Faq[] = [
  {
    q: "Where can I learn mindfulness in Holborn?",
    a: `At our practice at ${ADDRESS}, in Holborn on the edge of Bloomsbury, a short walk from Holborn, Chancery Lane and Russell Square stations. Mindfulness sessions can also take place online.`,
  },
  {
    q: "What is mindfulness?",
    a: "Mindfulness is the practice of paying attention to the present moment, including thoughts, feelings and body sensations, with curiosity rather than judgement. It is learned through regular practices such as guided meditation, mindful movement and attention to the breath.",
  },
  {
    q: "What is Mindfulness-Based Cognitive Therapy (MBCT)?",
    a: "MBCT combines mindfulness practice with ideas from Cognitive Behavioural Therapy (CBT). It was developed to help people who have experienced repeated episodes of depression to notice early warning signs and respond differently, and it is usually taught as an eight-week course.",
  },
  {
    q: "What is the difference between mindfulness and MBCT?",
    a: "Mindfulness courses teach attention and awareness skills for everyday wellbeing, stress and focus. MBCT uses the same practices within a therapeutic framework drawn from CBT, with a particular focus on low mood and recurring depression.",
  },
  {
    q: "Do I need any experience of meditation?",
    a: "No. Introducing Mindfulness and Finding Peace in a Frantic World are designed for complete beginners. Deeper Mindfulness is for those who already have some practice.",
  },
  {
    q: "Can mindfulness be combined with therapy?",
    a: "Yes. Mindfulness-based approaches can sit alongside CBT and other therapies we offer, or form part of a wider wellness or holistic wellbeing programme. We recommend the best combination after your initial consultation.",
  },
  {
    q: "How do I join a mindfulness course in Holborn?",
    a: `Call ${CONTACT_PHONE}, email ${CONTACT_EMAIL} or use our enquiry form, and we will talk you through the options and upcoming availability.`,
  },
];

const schema = serviceSchema({
  path: PATH,
  crumb: "Mindfulness & MBCT in Holborn",
  name: "Mindfulness courses and MBCT in Holborn, London WC1",
  serviceType: "Mindfulness courses and Mindfulness-Based Cognitive Therapy",
  description:
    "Mindfulness courses, guided meditation and Mindfulness-Based Cognitive Therapy (MBCT) at our practice in Holborn, London WC1X 8SL, and online.",
  faqs,
});

const MindfulnessHolborn = () => (
  <div className="min-h-screen w-full flex flex-col text-[#053d57]" style={{ fontFamily: "Josefin Sans" }}>
    <JsonLd data={schema} />

    <LandingComponent
      image={HERO}
      title="Mindfulness & MBCT in Holborn, London WC1"
      titleSize="text-3xl md:text-5xl max-w-5xl leading-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]"
      overlay={true}
      contactbutton={true}
      buttonText="Ask About Mindfulness Courses"
      textcolor="text-[#ebf0f2]"
    />

    <Breadcrumb current="Mindfulness & MBCT in Holborn" />

    {/* Answer-first intro */}
    <section className={pad}>
      <div className={body}>
        <p className="text-xs uppercase tracking-[0.2em] text-[#176a79]">Mindfulness · MBCT · Holborn · WC1</p>
        <p className="text-lg md:text-xl">
          Holistic Wellbeing Solutions offers mindfulness courses, guided meditation and Mindfulness-Based Cognitive
          Therapy (MBCT) at our practice at {ADDRESS}, in Holborn, Central London, and online.
        </p>
        <p>
          Mindfulness helps with stress, worry, low mood, burnout and sleep, and supports focus and emotional balance.
          Courses run from introductions for complete beginners to deeper practice, and mindfulness can also be
          combined with <Link to="/cbt-therapy-holborn" className={link}>CBT</Link> and other therapies.
        </p>
      </div>
    </section>

    <Glance
      title="Mindfulness in Holborn at a Glance"
      rows={[
        ["Where", `${ADDRESS}, in Holborn on the edge of Bloomsbury`],
        ["Nearest stations", "Holborn, Chancery Lane and Russell Square"],
        ["Format", "In person in Holborn, or online"],
        ["Courses", "Introducing Mindfulness, Finding Peace in a Frantic World, Mindfulness for Life, Deeper Mindfulness"],
        ["Helps with", "Stress, worry, low mood, burnout, sleep, focus and emotional balance"],
      ]}
    />

    {/* Courses */}
    <section className={pad}>
      <div className="max-w-5xl w-full space-y-6">
        <div className={`${body} mx-auto`}>
          <SectionHead title="Mindfulness Courses in Holborn" sub="From first steps to a lasting practice" />
          <p>
            Each course is delivered with structure, so skills build gradually and sustainably. We help you choose the
            course that fits your experience and what you hope to gain.
          </p>
        </div>
        <ul className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <li key={c.name} className={`${tint} p-5`}>
              <h3 className="text-lg mb-2">{c.name}</h3>
              <p className="text-sm leading-relaxed">{c.text}</p>
            </li>
          ))}
        </ul>
        <div className={`${body} mx-auto`}>
          <p>
            Mindfulness also runs through our movement programmes, including {movement.join(", ").toLowerCase()}, part of
            our <Link to="/programmes/wellness-longevity" className={link}>Wellness &amp; Longevity</Link> pillar.
          </p>
        </div>
      </div>
    </section>

    {/* MBCT */}
    <section className={`${tint} ${pad}`}>
      <div className={body}>
        <SectionHead title="Mindfulness-Based Cognitive Therapy (MBCT)" sub="Mindfulness within a therapeutic framework" />
        <p>
          MBCT brings together mindfulness practice and ideas from Cognitive Behavioural Therapy. It was developed to
          help people who have experienced repeated episodes of depression to recognise early warning signs, step back
          from patterns of rumination and respond in a different way.
        </p>
        <p>
          MBCT is usually taught as an eight-week course, with home practice between sessions, and is recommended in NHS
          guidance for people at risk of depression returning. It can also support people living with ongoing stress
          and anxiety.
        </p>
        <p>
          If you are looking for therapy rather than a course, see{" "}
          <Link to="/cbt-therapy-holborn" className={link}>CBT in Holborn</Link> or our wider{" "}
          <Link to="/programmes/mental-health" className={link}>psychotherapy in Holborn</Link>.
        </p>
      </div>
    </section>

    {/* Holistic link */}
    <section className={pad}>
      <div className={body}>
        <SectionHead title="Mindfulness as Part of Holistic Wellbeing" sub="Attention, rest and balance across your life" />
        <p>
          Mindfulness is one of the practices that underpin our{" "}
          <Link to="/programmes/holistic-wellbeing" className={link}>holistic wellbeing programmes in Holborn</Link>,
          alongside reflective practice, goal-setting, sleep and recovery, nutrition and movement. Whether you want a
          single course or a broader programme, we start with a confidential conversation about your priorities.
        </p>
        <p>
          Clients join us from Holborn and Bloomsbury and from across{" "}
          <Link to="/central-london" className={link}>Central London</Link>.
        </p>
      </div>
    </section>

    <FaqSection id="mindfulness-faq" title="Mindfulness in Holborn: Frequently Asked Questions" faqs={faqs} />

    <BookingCta title="Ask About Mindfulness in Holborn">
      <p>
        Tell us what you are looking for, whether a beginners' course, MBCT or mindfulness as part of a wider programme,
        and we will talk you through the options in person at our Holborn practice or online.
      </p>
    </BookingCta>
  </div>
);

export default MindfulnessHolborn;
