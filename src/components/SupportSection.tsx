import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail } from "lucide-react"
import FadeIn from "./FadeIn"

const faqs = [
  {
    q: "How do I get started with BookIt?",
    a: "Simply visit the BookIt platform, create an account, and set up your services. Your booking page will be live in minutes — no technical knowledge required.",
  },
  {
    q: "Can I use MenuQR without a smartphone?",
    a: "Yes. MenuQR works on any device with a browser — phone, tablet, or desktop. Your customers just scan the QR code and the menu opens instantly.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, both BookIt and MenuQR offer a free trial period so you can explore all features before committing to a plan.",
  },
  {
    q: "How do I report a bug or request a feature?",
    a: "Send us an email at hello@wkllabs.com and describe the issue or idea. We review every message and respond within 1–2 business days.",
  },
  {
    q: "Can I use multiple WKL Labs products together?",
    a: "Absolutely. Our products are designed to complement each other. You can run BookIt for appointments and MenuQR for your restaurant menu side by side.",
  },
]

export default function SupportSection() {
  return (
    <section id="support" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
            Support
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How can we help?
          </h2>
          <p className="mt-4 text-neutral-400 max-w-lg mx-auto text-base sm:text-lg">
            Browse the common questions below, or reach out directly — we're always happy to help.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* FAQ */}
          <FadeIn delay={100} className="lg:col-span-2">
            <Accordion className="">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-neutral-800">
                  <AccordionTrigger className="text-sm font-medium text-neutral-300 py-4 hover:text-white">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-500">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>

          {/* Contact card */}
          <FadeIn delay={200} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col gap-5">
            <div>
              <h3 className="text-base font-semibold text-white">Still need help?</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Can't find what you're looking for? Send us an email and we'll get back to you within 1–2 business days.
              </p>
            </div>

            <a
              href="mailto:hello@wkllabs.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-neutral-900 text-sm font-medium px-5 py-3 hover:bg-neutral-200 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Email us
            </a>

            <div className="border-t border-neutral-800 pt-5">
              <p className="text-xs text-neutral-600 font-medium uppercase tracking-widest mb-3">
                Response time
              </p>
              <p className="text-sm text-neutral-400">
                ⏱ Usually within <span className="font-medium text-white">24 hours</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
