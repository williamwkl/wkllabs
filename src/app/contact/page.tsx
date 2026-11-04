import type { Metadata } from "next"
import { pageMetadata } from "@/lib/metadata"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import CopyEmailButton from "@/components/CopyEmailButton"
import ReviewCard from "@/components/ReviewCard"
import { reviews } from "@/lib/services"

const email = "hello@wkllabs.com"
const title = "Contact | WKL Labs"
const description = "Tell WKL Labs about your application, website, automation, or reporting project."

export const metadata: Metadata = pageMetadata({ title, description, path: "/contact" })

const nextSteps = [
  "We review your message and reply within two business days.",
  "We discuss your goals and requirements.",
  "You receive a recommended plan and timeline.",
]

export default function ContactPage() {
  const formEnabled = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL)

  return (
    <main id="main" className="flex min-h-screen flex-col">
      <Navbar />
      <section className="mx-auto w-full max-w-4xl flex-1 px-5 py-16 sm:px-8 sm:py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Tell us about your project</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Share what you need to build or improve, or ask a question about our products.
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.35fr_1fr]">
          <div>
            {formEnabled && (
              <>
                <ContactForm email={email} />
                <p className="mt-4 text-sm text-muted-foreground">
                  We only use your details to respond to your enquiry. See our{" "}
                  <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">
                    privacy policy
                  </Link>
                  .
                </p>
              </>
            )}
            <div className={formEnabled ? "mt-8 border-t border-border pt-6" : ""}>
              <p className="text-sm text-muted-foreground">{formEnabled ? "Prefer email?" : "Email us at"}</p>
              <div className="mt-1 flex flex-wrap items-center gap-x-4">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex min-h-11 items-center break-all font-mono text-sm underline-offset-2 hover:underline"
                >
                  {email}
                </a>
                <CopyEmailButton email={email} />
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold">What happens next</h2>
              <ol className="mt-4 space-y-4">
                {nextSteps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-border-strong font-mono text-xs text-foreground">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <ReviewCard {...reviews[1]} />
            <div>
              <h2 className="text-sm font-medium">Mailing address</h2>
              <address className="mt-1 text-sm not-italic text-muted-foreground">
                WKL Labs LLC
                <br />
                58 West Portal Ave #556
                <br />
                San Francisco, CA 94127
              </address>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  )
}
