import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import CopyEmailButton from "@/components/CopyEmailButton"

const email = "hello@wkllabs.com"
const title = "Contact | WKL Labs"
const description = "Email WKL Labs about a project, Nabbee, or Spell Collector."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "https://wkllabs.com/contact", type: "website" },
}

export default function ContactPage() {
  const formEnabled = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL)

  return (
    <main id="main" className="flex min-h-screen flex-col">
      <Navbar />
      <section className="mx-auto w-full max-w-4xl flex-1 px-5 py-20 sm:px-8 sm:py-28">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact us</h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          Tell us about your project or ask a question about our products. We aim to respond within two business days.
        </p>
        {formEnabled && (
          <div className="mt-10 max-w-2xl">
            <ContactForm email={email} />
          </div>
        )}
        <p className="mt-10 select-all break-all font-mono text-xl sm:text-2xl">{email}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <CopyEmailButton email={email} />
          <a
            href={`mailto:${email}`}
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border-strong px-5 py-3 font-mono text-sm transition-colors hover:border-ring"
          >
            Open in mail app
          </a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
