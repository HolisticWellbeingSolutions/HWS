import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/enquiry";

/**
 * Shared building blocks for the local service landing pages
 * (CBT in Holborn, Mindfulness & MBCT in Holborn). Same look as the Central London page.
 */

export const SITE = "https://www.holisticwell-beingsolutions.com";
export const ADDRESS = "12-18 Theobalds Road, London WC1X 8SL";
export const MAPS = "https://www.google.com/maps/search/?api=1&query=12-18+Theobalds+Road+London+WC1X+8SL";

export interface Faq {
  q: string;
  a: string;
}

export const tint = "bg-[#176a79]/10";
export const pad = "py-10 md:py-16 px-5 md:px-12 lg:px-24 flex justify-center";
export const body = "max-w-3xl w-full space-y-4 text-sm md:text-base leading-relaxed";
export const link = "underline underline-offset-4";

export const JsonLd = ({ data }: { data: object }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
);

/** Service + BreadcrumbList + FAQPage graph for a local service page. */
export const serviceSchema = (opts: {
  path: string;
  crumb: string;
  name: string;
  serviceType: string;
  description: string;
  faqs: Faq[];
}) => {
  const page = `${SITE}${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${page}#service`,
        name: opts.name,
        serviceType: opts.serviceType,
        description: opts.description,
        provider: { "@id": `${SITE}/#business` },
        areaServed: ["Holborn", "Bloomsbury", "Central London"].map((n) => ({ "@type": "Place", name: `${n}, London` })),
        availableChannel: {
          "@type": "ServiceChannel",
          serviceLocation: {
            "@type": "Place",
            name: "Holistic Wellbeing Solutions, Holborn",
            address: {
              "@type": "PostalAddress",
              streetAddress: "12-18 Theobalds Road",
              addressLocality: "London",
              postalCode: "WC1X 8SL",
              addressCountry: "GB",
            },
          },
        },
        url: page,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: opts.crumb, item: page },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: opts.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
};

export const SectionHead = ({ title, sub }: { title: string; sub?: string }) => (
  <header className="space-y-2 mb-2">
    <h2 className="text-2xl md:text-3xl">{title}</h2>
    {sub && <p className="text-lg md:text-xl text-[#176a79]">{sub}</p>}
  </header>
);

export const Breadcrumb = ({ current }: { current: string }) => (
  <nav aria-label="Breadcrumb" className="px-5 md:px-12 lg:px-24 pt-4 text-xs md:text-sm">
    <ol className="flex flex-wrap gap-1 max-w-5xl mx-auto">
      <li><Link to="/" className={link}>Home</Link> /</li>
      <li aria-current="page">{current}</li>
    </ol>
  </nav>
);

export const Glance = ({ title, rows }: { title: string; rows: [string, ReactNode][] }) => (
  <section className={`${tint} ${pad}`}>
    <div className={body}>
      <SectionHead title={title} />
      <dl className="bg-white shadow-sm divide-y divide-[#176a79]/15">
        {rows.map(([k, v]) => (
          <div key={k} className="grid md:grid-cols-[180px_1fr] gap-1 md:gap-4 px-5 py-4">
            <dt className="font-medium">{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      <p>
        <a href={MAPS} target="_blank" rel="noopener noreferrer" className={link}>
          Get directions to our Holborn practice
        </a>
      </p>
    </div>
  </section>
);

export const FaqSection = ({ id, title, faqs }: { id: string; title: string; faqs: Faq[] }) => (
  <section aria-labelledby={id} className={`${tint} ${pad}`}>
    <div className="max-w-4xl w-full">
      <h2 id={id} className="text-2xl md:text-3xl text-center mb-8">{title}</h2>
      <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`${id}-${i}`} className="bg-white border-none shadow-sm">
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
);

export const BookingCta = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="py-12 md:py-20 px-5 md:px-12 lg:px-24 flex justify-center text-center">
    <div className="max-w-2xl space-y-5 text-sm md:text-base leading-relaxed">
      <SectionHead title={title} />
      {children}
      <div className="space-y-1">
        <p>Address: {ADDRESS}</p>
        <p>
          Telephone: <a href="tel:+447770778104" className={link}>{CONTACT_PHONE}</a>
        </p>
        <p>
          Email: <a href={`mailto:${CONTACT_EMAIL}`} className={`${link} break-all`}>{CONTACT_EMAIL}</a>
        </p>
      </div>
      <Button asChild size="lg" className="text-base md:px-8 bg-[#053d57]/80 hover:bg-[#053d57]">
        <Link to="/contact">Book a Confidential Consultation</Link>
      </Button>
      <p className="text-xs pt-4">
        HWS is not an emergency service. In an emergency, call 999. For urgent mental health support, call NHS 111 and
        choose the mental health option, or call Samaritans on 116 123.
      </p>
    </div>
  </section>
);
