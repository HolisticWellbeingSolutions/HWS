import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import LandingComponent from "@/components/landingComponent";
import ContentSection from "@/components/ContentsectionWithList";
import { Link } from "react-router-dom";
import { ADDRESS, FaqSection, JsonLd, serviceSchema, type Faq } from "@/components/LocalServiceParts";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/enquiry";

const therapies = [
  "Cognitive Behavioural Therapy (CBT)",
  "Mindfulness-Based Cognitive Therapy (MBCT)",
  "Dialectical Behaviour Therapy (DBT)",
  "EMDR",
  "Acceptance and Commitment Therapy (ACT)",
  "Compassion Focused Therapy",
  "Psychodynamic therapy",
  "Integrative counselling",
  "Hypnotherapy",
];

const faqs: Faq[] = [
  {
    q: "Where can I have psychotherapy in Holborn?",
    a: `At our private practice at ${ADDRESS}, in Holborn on the edge of Bloomsbury, a short walk from Holborn, Chancery Lane and Russell Square stations. Sessions are also available online.`,
  },
  {
    q: "Which types of therapy do you offer?",
    a: "Our evidence-based therapies include CBT, MBCT, DBT, EMDR, Acceptance and Commitment Therapy, Compassion Focused Therapy, psychodynamic therapy, integrative counselling and hypnotherapy. After your initial consultation we recommend the approach best suited to you.",
  },
  {
    q: "Do you offer CBT in Holborn?",
    a: "Yes. Cognitive Behavioural Therapy is available at our Holborn practice and online, for anxiety, depression, panic, OCD, phobias, stress, burnout and insomnia, among other concerns.",
  },
  {
    q: "How do I book a first appointment?",
    a: `Call ${CONTACT_PHONE}, email ${CONTACT_EMAIL} or use our enquiry form. We will arrange a confidential initial consultation at our Holborn practice or online.`,
  },
];

const schema = serviceSchema({
  path: "/programmes/mental-health",
  crumb: "Psychotherapy & Mental Health",
  name: "Psychotherapy and mental health support in Holborn, London WC1",
  serviceType: "Psychotherapy",
  description:
    "Private psychotherapy, CBT, MBCT, counselling and psychological assessments at our practice in Holborn, London WC1X 8SL, and online.",
  faqs,
});

const ImageOverlayCarouse = ({
  images = [],
  items = [],
  interval = 4000,
}) => {
  const [index, setIndex] = useState(0);

  const quarterSize = Math.ceil(items.length / 8);
  const totalSlides = 4; // because index % 4

  const getVisibleItems = () => {
    const slideIndex = index % totalSlides;
    const start = slideIndex * (quarterSize * 2);

    return {
      top: items.slice(start, start + quarterSize),
      bottom: items.slice(start + quarterSize, start + quarterSize * 2),
    };
  };

  const { top, bottom } = getVisibleItems();
  const currentImage = images[index % images.length];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${currentImage})`,
        fontFamily: "Josefin Sans",
      }}
    >
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between px-12 py-10 text-white">
        {/* TOP ROW */}
        <div className="flex justify-between gap-6">
          {top.map((item, i) => (
            <div key={i} className="flex-1 text-center text-sm md:text-lg font-medium">
              {item}
            </div>
          ))}
        </div>

        {/* CENTER TEXT */}
        <div className="w-full flex justify-center">
           {/* PAGINATION DOTS */}
        <div className="flex flex-col justify-center gap-3 mt-6">
          {Array.from({ length: totalSlides }).map((_, i) => {
            const isActive = index % totalSlides === i;

            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`size-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            );
          })}
        </div>
          <p className="flex-1  text-center text-xl">
            Our programmes and assessments cover a wide range of conditions,
            including
          </p>
         
        </div>

        {/* BOTTOM ROW */}
        <div className="flex justify-between gap-6">
          {bottom.map((item, i) => (
            <div key={i} className="flex-1 text-center text-sm md:text-lg font-medium">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const ImageOverlayCarousel2 = ({
  images = [],
  items = [],
  interval = 4000,
}) => {
  const [index, setIndex] = useState(0);

  // 1/8 of total items per row
  const itemsPerRow = Math.ceil(items.length / 8);

  // Items shown per slide (top + bottom)
  const itemsPerSlide = itemsPerRow * 2;

  // How many slides are needed
  const totalSlides = Math.ceil(items.length / itemsPerSlide);
  const currentImage = images[index % images.length];

  const getVisibleItems = () => {
    if (!items.length) return { top: [], bottom: [] };

    const slideIndex = index % totalSlides;
    const start = slideIndex * itemsPerSlide;

    return {
      top: items.slice(start, start + itemsPerRow),
      bottom: items.slice(
        start + itemsPerRow,
        start + itemsPerSlide
      ),
    };
  };

  const { top, bottom } = getVisibleItems();

  useEffect(() => {
    if (!totalSlides) return;

    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, totalSlides]);

  return (
    <div
      className="relative w-full h-[500px] transition-all bg-cover bg-center duration-1000 "
      style={{
        backgroundImage: `url(${currentImage})`,
            backgroundSize: "cover",
    backgroundPosition: "center",
        fontFamily: "Josefin Sans",
      }}
    >

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between gap-16 px-12 py-10 text-white">
        {/* TOP ROW */}
        <div className="flex justify-between gap-6">
          {top.map((item, i) => (
            <div
              key={`top-${i}`}
              className="flex-1 text-center text-lg font-medium"
            >
              {item}
            </div>
          ))}
        </div>
        {/* PAGINATION DOTS */}
        <div className="flex flex-col gap-3 mt-6">
          {Array.from({ length: totalSlides }).map((_, i) => {
            const isActive = index % totalSlides === i;

            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`size-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            );
          })}
        </div>

        {/* BOTTOM ROW */}
        <div className="flex justify-between gap-6">
          {bottom.map((item, i) => (
            <div
              key={`bottom-${i}`}
              className="flex-1 text-center text-lg font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const ModifiedContentSection = ({
  content,

  imageWidth = "58%",
  textWidth = "42%",
}: {
  content: string;
  imageWidth?: string;
  textWidth?: string;
}) => {

  return (
    <section className="relative w-full bg-[#176a79]/10">
      <div
        className={`w-full flex flex-col items-center lg:flex-row-reverse`}
        style={{ fontFamily: "Josefin Sans" }}
      >
        {/* IMAGE AREA */}
        <motion.div
          className="w-full lg:w-auto shadow-lg overflow-hidden"
          style={{
            ...(typeof window !== "undefined" &&
              window.innerWidth >= 1024 && {
                width: imageWidth,
              }),
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <ImageOverlayCarousel2
          images= {["https://images.unsplash.com/photo-1686002701992-2720b6a671b8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdnklMjBibHVlJTIwd2F0ZXJ8ZW58MHwwfDB8fHwy","https://images.unsplash.com/photo-1613427992290-7baa994cfee8?q=70&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1608371743110-24952cd89b0f?q=70&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1686226347032-b82efa11af93?q=70&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ]}
            items={[
              "Cognitive Behavioural Therapy (CBT)",
              "Integrated psychotherapy",
              "Psychoanalysis and psychodynamic",
              "Trauma Focused CBT",
              "Integrative Counselling",
              "Mindfulness-Based CBT",
              "Mindfulness-Based Stress Reduction",
              "Acceptance and Commitment Therapy (ACT)",
              "Compassion Focused Therapy",
              "Dialectical Behavioural Therapy (DBT)",
              "EMDR",
              "Life Coaching",
              "Relationship Counselling",
              "Sex Therapy",
              "Hypnotherapy",
              "Executive Coaching",
            ]}
          />
        </motion.div>

        {/* TEXT AREA */}
        <div
          className="
            bg-white/90 backdrop-blur-sm shadow-lg
            w-full
            px-10
            py-12
            lg:px-32 lg:py-20
          "
          style={{
            width:
              typeof window !== "undefined" && window.innerWidth >= 1024
                ? textWidth
                : "100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl"
          >
            <h2
              className={`text-3xl md:text-4xl text-[#0b343b] font-bold mb-4 md:mb-6 tracking-tight`}
            >
              PSYCHOTHERAPY
            </h2>

            <p
              className={`text-lg text-[#053d57] leading-relaxed mb-4 md:mb-6`}
            >
              {content}
            </p>

           

            {/* {button && (
              <Button
                asChild
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 text-[#ebf0f2] bg-[#053d57]/70 hover:bg-[#053d57] font-medium shadow-md"
              >
                <Link to={link}>{button}</Link>
              </Button>
            )} */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MentalHealth = () => {
  return (
    <motion.div style={{ fontFamily: "Josefin Sans" }}>
      <JsonLd data={schema} />
      <LandingComponent
        title="Psychotherapy & Mental Health in Holborn"
        image="https://images.unsplash.com/photo-1653130892581-7c0ae1f4e8e0?q=70&w=1170&auto=format&fit=crop"
        textcolor="text-[]"
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className=" flex items-center flex-col bg-transparent text-left  md:py-[100px] my-16 px-5 md:px-24"
      >
        <p className=" max-w-3xl text-[#053d57] text-base mb-5 ">
          Our programmes under this pillar support the assessment, treatment,
          and optimisation of psychological wellbeing through sustainable
          approaches. We work with depth and discretion, offering a structured
          yet flexible pathway that responds to each individual’s needs and
          circumstances.
        </p>
        <p className=" max-w-3xl text-[#053d57] text-base mb-5 ">
          We offer private psychotherapy at our practice at {ADDRESS}, in Holborn, Central London, and online. Our
          evidence-based therapies include{" "}
          <Link to="/cbt-therapy-holborn" className="underline underline-offset-4">Cognitive Behavioural Therapy (CBT)</Link>,{" "}
          <Link to="/mindfulness-holborn" className="underline underline-offset-4">Mindfulness-Based Cognitive Therapy (MBCT)</Link>,
          DBT, EMDR, ACT, Compassion Focused Therapy, psychodynamic therapy, integrative counselling and hypnotherapy.
        </p>
      </motion.div>

      <ImageOverlayCarouse
        images={[
          "https://images.unsplash.com/photo-1635715070096-b4655b94edee?q=70&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1574254706427-213d446e2f2b?q=70&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1758597256447-a3b6b98b18c7?q=70&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1557644978-f61037cfbe49?q=70&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]}
        items={[
          "Depression and low mood",
          "Bereavement and grief",
          "Low self-esteem",
          "Anxiety",
          "Generalised anxiety",
          "Social anxiety",
          "Health anxiety",
          "Body dysmorphic disorder",
          "Emetophobia",
          "Disordered eating",
          "Burnout and exhaustion",
          "Menopause",
          "Decision making",
          "Decision burnout",
          "Stress management",
          "Postpartum depression",
          "Life transition",
          "Financial worry",
          "Excessive worry",
          "PTSD",
          "OCD",
          "Phobias",
          "Panic",
          "Pain management",
          "Gambling-related concerns",
          "Pornography addiction",
          "Sex addiction",
          "And other related challenges",
        ]}
      />

      <div className="py-20 bg-[#176a79]/10">
        <ModifiedContentSection content="Our psychotherapy offering spans a wide range of evidence-based approaches, allowing us to select the most appropriate method for the individual. These modalities help clients understand patterns, develop effective coping strategies, process past experiences, and strengthen emotional resilience." />
      </div>

      <ContentSection
        image="https://images.unsplash.com/photo-1707340726386-611f5e9398f3?q=70&w=1170&auto=format&fit=crop"
        title="Addiction and Recovery"
        content="We offer discreet and structured support for individuals navigating dependency or early recovery. Our approach focuses on understanding readiness, identifying triggers and resilience factors, and developing tailored recovery plans that align with personal and professional demands."
        button="Begin a Private Conversation"
        timelineItems={[
          "Screening and risk evaluation",
          "Readiness assessment",
          "Integrated recovery planning",
          "Therapy support",
        ]}
        imageWidth="55%"
        textWidth="45%"
        paddingX="px-24"
      />

      <ContentSection
        image="https://images.unsplash.com/photo-1744313001460-68c6f67625f0?q=70&w=1170&auto=format&fit=crop"
        title="Neurodiversity"
        content="We provide sensitive assessments and tailored support for individuals with ADHD or Autism Spectrum presentations. Our programmes help improve self-understanding, strengthen executive functioning, and enhance day-to-day performance."
        button="Begin a Private Conversation"
        timelineItems={[
          "ADHD and Autism Spectrum assessments",
          "Functional coaching",
          "Recommendations for support and adaptation",
          "Therapeutic support",
        ]}
        reverse={true}
        imageWidth="50%"
        textWidth="50%"
      />

      <ContentSection
        image="https://images.unsplash.com/photo-1494797262163-102fae527c62?w=900&auto=format&fit=crop&q=60"
        title="Psychological Profiling & Psychometrics"
        content="We conduct detailed evaluations across cognitive, emotional, social, and behavioural domains to generate a clear understanding of strengths, challenges, and growth areas."
        button="Begin a Private Conversation"
        timelineItems={[
          "Know your Mental health( Annual and Quarterly)",
          "Disorder Specific Screening",
          "Cognitive and emotional mapping",
          "Personality and leadership profiling",
          "Resilience assessment",
          "Adaptive and protective factor analysis",
          "Therapy Mapping",
          "Holistic well-being Program Mapping",
        ]}
        imageWidth="60%"
        textWidth="40%"
        paddingX="px-20"
      />
      <section className="py-10 md:py-16 px-5 md:px-12 lg:px-24 flex justify-center bg-[#176a79]/10 text-[#053d57]">
        <div className="max-w-3xl w-full space-y-4 text-sm md:text-base leading-relaxed">
          <h2 className="text-2xl md:text-3xl">Psychotherapy in Holborn, WC1</h2>
          <p className="text-lg md:text-xl text-[#176a79]">Evidence-based therapy at our practice near Bloomsbury</p>
          <p>
            Our practice on Theobalds Road sits in the WC1 postcode, between Holborn and Bloomsbury. Every course of
            therapy begins with a confidential consultation, after which we recommend the approach best suited to you
            and agree how progress will be reviewed.
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {therapies.map((t) => (
              <li key={t} className="bg-white px-4 py-3 shadow-sm">{t}</li>
            ))}
          </ul>
          <p>
            Read more about{" "}
            <Link to="/cbt-therapy-holborn" className="underline underline-offset-4">CBT in Holborn</Link>,{" "}
            <Link to="/mindfulness-holborn" className="underline underline-offset-4">mindfulness and MBCT in Holborn</Link>{" "}
            and how we support clients from across{" "}
            <Link to="/central-london" className="underline underline-offset-4">Central London</Link>.
          </p>
        </div>
      </section>
      <FaqSection id="mh-faq" title="Psychotherapy in Holborn: Frequently Asked Questions" faqs={faqs} />
    </motion.div>
  );
};

export default MentalHealth;
