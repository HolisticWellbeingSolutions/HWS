import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/**
 * Homepage FAQ section.
 * Answers use only facts stated elsewhere on the HWS site.
 * Also outputs FAQPage structured data for Google and AI search.
 */
const homeFaqs = [
  {
    question: "What is Holistic Wellbeing Solutions?",
    answer:
      "Holistic Wellbeing Solutions (HWS) is a private wellbeing practice in Holborn, Central London. We provide personalised programmes across three pillars: Mental Health, Wellness and Longevity, and Holistic Wellbeing. Our multidisciplinary team brings together psychotherapists, clinicians and specialists to offer confidential, coordinated care.",
  },
  {
    question: "What does holistic wellbeing mean at HWS?",
    answer:
      "We see wellbeing as the balance of mental, physical, emotional, social, spiritual and financial health. Rather than treating one concern in isolation, we look at how these areas affect each other and build a plan that addresses them together. We call this approach The Art of Wellbeing.",
  },
  {
    question: "What types of therapy do you offer?",
    answer:
      "Our psychotherapy covers a wide range of evidence-based approaches, including Cognitive Behavioural Therapy (CBT), Dialectical Behaviour Therapy (DBT), EMDR, Acceptance and Commitment Therapy (ACT), Compassion Focused Therapy, Mindfulness-Based CBT, psychodynamic therapy, integrative counselling and hypnotherapy. After your initial consultation, we recommend the approach best suited to you.",
  },
  {
    question: "What concerns can you help with?",
    answer:
      "We support people with anxiety, panic, depression and low mood, stress, burnout, bereavement and grief, trauma and PTSD, phobias, low self-esteem, life transitions, relationship difficulties and menopause-related concerns, among others. If you are unsure whether we can help, a confidential conversation is the best first step.",
  },
  {
    question: "Is everything I share kept confidential?",
    answer:
      "Yes. Confidentiality is central to how we work, from your first enquiry onwards. Information is shared only with the practitioners directly involved in your care, and only with your consent. As with all UK therapy services, there are rare legal and safeguarding exceptions, such as a serious risk of harm, which we explain at your first consultation.",
  },
  {
    question: "How do I get started?",
    answer:
      "Contact us through the enquiry form, by phone on +44 7770 778104 or by email at contact@holisticwell-beingsolutions.com. We will arrange a private initial consultation at a time that suits you. A family member, assistant or adviser can also make the first enquiry on your behalf.",
  },
  {
    question: "Where are you based, and can sessions take place elsewhere?",
    answer:
      "Our practice is at 12-18 Theobalds Road, London WC1X 8SL, in Holborn. Programmes can be delivered in person or remotely, and through our Concierge Wellbeing Service, sessions can also take place at your home, on location or abroad.",
  },
  {
    question: "Is HWS an emergency or crisis service?",
    answer:
      "No. HWS does not provide emergency care. If you or someone else is in immediate danger, call 999 or go to A&E. For urgent mental health support, call NHS 111 and choose the mental health option, or call Samaritans free on 116 123, any time, day or night.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const HomeFAQ = () => (
  <section
    aria-labelledby="home-faq-heading"
    className="bg-[#176a79]/10 py-12 md:py-20 px-5 md:px-12 lg:px-24"
    style={{ fontFamily: "Josefin Sans" }}
  >
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
    />
    <div className="max-w-4xl mx-auto">
      <h2 id="home-faq-heading" className="text-2xl md:text-3xl text-center text-[#053d57] mb-3 md:mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-[#053d57] text-sm md:text-base mb-8 md:mb-10">
        Answers to common questions about our approach, services and how to begin.
      </p>

      <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
        {homeFaqs.map((faq, index) => (
          <motion.div
            key={faq.question}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <AccordionItem
              value={`home-faq-${index}`}
              className="bg-white overflow-hidden border border-transparent hover:border-[#C8A97E]/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <AccordionTrigger className="px-5 md:px-7 py-4 md:py-5 text-left hover:no-underline group [&>svg]:hidden">
                <div className="flex items-center justify-between w-full pr-2 gap-4">
                  <span className="font-medium text-base text-[#053d57] leading-snug">{faq.question}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className="w-5 h-5 shrink-0 text-[#053d57] transition-transform duration-300 group-data-[state=open]:rotate-180"
                  />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-5 md:px-7 pb-5 md:pb-6 pt-1 text-[#053d57] text-sm md:text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>

      <div className="text-center mt-8 md:mt-10">
        <Link to="/faq" className="text-[#053d57] underline underline-offset-4 hover:no-underline text-sm md:text-base">
          View all FAQs
        </Link>
      </div>
    </div>
  </section>
);

export default HomeFAQ;
