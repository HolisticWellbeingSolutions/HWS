import { Link } from "react-router-dom";
import LandingComponent from "@/components/landingComponent";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/enquiry";

/**
 * Private Clients & Families landing page.
 * Target searches: private wellbeing management London, private wellbeing consultant London,
 * personalised wellbeing programme for private clients London, confidential wellbeing
 * consultant Central London, discreet wellbeing support for high profile clients.
 * All service details are taken from what HWS already states elsewhere on the site.
 */

const steps = [
  {
    title: "Private consultation",
    text: "A confidential, in-depth conversation about your goals, needs and circumstances.",
  },
  {
    title: "Curated assessments",
    text: "Assessment across psychological, physical and lifestyle wellbeing, selected from our three pillars.",
  },
  {
    title: "Your personalised plan",
    text: "A structured roadmap that brings together the therapies, modalities and specialists best suited to you.",
  },
  {
    title: "Coordinated support",
    text: "Care coordinated with the clinicians, therapists and specialists best suited to you, in person or remotely.",
  },
  {
    title: "Ongoing review",
    text: "Regular follow-ups to refine your programme as your priorities and circumstances change.",
  },
];

const PrivateClients = () => (
  <div className="min-h-screen w-full flex flex-col text-[#053d57]" style={{ fontFamily: "Josefin Sans" }}>
    <LandingComponent
      image="https://images.unsplash.com/photo-1724230759479-32b57f30ba86?q=80&w=2070&auto=format&fit=crop"
      title="Private Wellbeing Management in London"
      titleSize="text-4xl md:text-5xl"
      contactbutton={true}
      buttonText="Begin a Private Conversation"
      textcolor="text-[#ebf0f2]"
    />

    {/* Intro */}
    <section className="bg-[#176a79]/10 py-10 md:py-16 px-5 md:px-12 lg:px-24 flex justify-center">
      <div className="max-w-3xl space-y-4 text-sm md:text-base leading-relaxed">
        <p className="text-lg md:text-xl">Bespoke. Personal. Confidential.</p>
        <p>
          Holistic Wellbeing Solutions offers private clients and families a bespoke approach to wellbeing
          management. From our practice in Holborn, Central London, we work with individuals and families
          navigating demanding professional or personal lives, bringing together psychotherapy, wellness and
          longevity, and holistic wellbeing in a single, coordinated plan.
        </p>
      </div>
    </section>

    {/* Private wellbeing management */}
    <section className="py-10 md:py-16 px-5 md:px-12 lg:px-24 flex justify-center">
      <div className="max-w-3xl space-y-4 text-sm md:text-base leading-relaxed">
        <h2 className="text-2xl md:text-3xl">Bespoke Private Wellbeing Management</h2>
        <p>
          Our private wellbeing management service in London is built around you, or your family, rather than a
          fixed package.
          Every programme follows our Personalised, Customised, Sustainable (PCS) approach: shaped around your goals,
          adapted as your needs change, and planned for lasting results.
        </p>
        <p>
          Programmes may be short-term and focused on a specific objective, or established as ongoing support for
          those who want sustained, specialist care. Explore our three pillars:{" "}
          <Link to="/programmes/mental-health" className="underline underline-offset-4">Mental Health</Link>,{" "}
          <Link to="/programmes/wellness-longevity" className="underline underline-offset-4">Wellness &amp; Longevity</Link>{" "}
          and{" "}
          <Link to="/programmes/holistic-wellbeing" className="underline underline-offset-4">Holistic Wellbeing</Link>.
        </p>
      </div>
    </section>

    {/* Personalised programme */}
    <section className="bg-[#176a79]/10 py-10 md:py-16 px-5 md:px-12 lg:px-24 flex justify-center">
      <div className="max-w-4xl w-full space-y-6">
        <h2 className="text-2xl md:text-3xl max-w-3xl mx-auto">
          A Personalised Wellbeing Programme for Private Clients in London
        </h2>
        <p className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          Each personalised wellbeing programme follows our care pathway, so you always know what happens next.
        </p>
        <ol className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <li key={step.title} className="bg-white p-5 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-[#176a79] mb-1">Step {i + 1}</p>
              <h3 className="text-lg mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="max-w-3xl mx-auto text-sm md:text-base">
          <Link to="/carepathway" className="underline underline-offset-4">Read more about our care pathway</Link>
        </p>
      </div>
    </section>

    {/* Confidential consultant, Central London */}
    <section className="py-10 md:py-16 px-5 md:px-12 lg:px-24 flex justify-center">
      <div className="max-w-3xl space-y-4 text-sm md:text-base leading-relaxed">
        <h2 className="text-2xl md:text-3xl">A Confidential Wellbeing Consultant in Central London</h2>
        <p>
          Our practice is at 12-18 Theobalds Road, London WC1X 8SL, in Holborn. Sessions can take place at the
          practice or remotely, so your care continues while you travel or work abroad.
        </p>
        <p>
          For moments that call for it, our{" "}
          <Link to="/levels-of-engagement" className="underline underline-offset-4">Concierge Wellbeing Service</Link>{" "}
          offers support delivered discreetly at your home, on location or abroad.
        </p>
      </div>
    </section>

    {/* Families */}
    <section className="bg-[#176a79]/10 py-10 md:py-16 px-5 md:px-12 lg:px-24 flex justify-center">
      <div className="max-w-3xl space-y-4 text-sm md:text-base leading-relaxed">
        <h2 className="text-2xl md:text-3xl">Wellbeing Support for Private Clients &amp; Families</h2>
        <p>
          Wellbeing rarely sits with one person alone. We support individuals and, where it helps, their wider
          family, with each person's care planned around their own needs and kept confidential.
        </p>
        <p>
          Whether you are seeking support for yourself, a partner or another family member, we begin with a
          private conversation to understand what matters most and agree the right way forward.
        </p>
      </div>
    </section>

    {/* Discreet support */}
    <section className="py-10 md:py-16 px-5 md:px-12 lg:px-24 flex justify-center">
      <div className="max-w-3xl space-y-4 text-sm md:text-base leading-relaxed">
        <h2 className="text-2xl md:text-3xl">Discreet Wellbeing Support for High-Profile Clients</h2>
        <p>
          Confidentiality and discretion are central to our ethos. Information is shared only with the
          practitioners directly involved in your care, and only with your consent.
        </p>
        <p>
          A family member, personal assistant or adviser can make the first enquiry on your behalf. With your
          consent, we agree in advance how information is shared and who coordinates each step.
        </p>
        <p>
          As with all UK therapy services, there are rare legal and safeguarding exceptions to confidentiality,
          such as a serious risk of harm. We explain these clearly at your first consultation.
        </p>
      </div>
    </section>

    {/* Call to action */}
    <section className="bg-[#176a79]/10 py-12 md:py-20 px-5 md:px-12 lg:px-24 flex justify-center text-center">
      <div className="max-w-2xl space-y-5">
        <h2 className="text-2xl md:text-3xl">Begin a Private Conversation</h2>
        <p className="text-sm md:text-base leading-relaxed">
          Arrange a confidential initial consultation. Call{" "}
          <a href="tel:+447770778104" className="underline underline-offset-4">{CONTACT_PHONE}</a> or email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4 break-all">{CONTACT_EMAIL}</a>.
        </p>
        <Button asChild size="lg" className="text-base md:px-8 bg-[#053d57]/80 hover:bg-[#053d57]">
          <Link to="/contact">Arrange a Private Consultation</Link>
        </Button>
      </div>
    </section>
  </div>
);

export default PrivateClients;
