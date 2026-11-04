import type { Metadata } from "next"
import { pageMetadata } from "@/lib/metadata"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = pageMetadata({
  title: "Cat Nap Café Privacy Policy | WKL Labs",
  description: "How the Cat Nap Café game uses information.",
  path: "/cat-nap-cafe/privacy",
})

export default function CatNapPrivacyPage() {
  return (
    <main id="main" className="flex min-h-screen flex-col">
      <Navbar />
      <article className="mx-auto w-full max-w-2xl flex-1 px-5 py-16 sm:px-8">
        <p className="mb-3 font-mono text-xs tracking-[0.1em] text-subtle uppercase">
          Last updated: November 4, 2026
        </p>
        <h1 className="text-3xl font-bold tracking-tight">Cat Nap Café Privacy Policy</h1>

        <div className="mt-8 space-y-8 text-muted-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mb-2">
          <section>
            <h2>Who we are</h2>
            <p>{"Cat Nap Café is made by WKL Labs LLC. This policy explains what information the game uses."}</p>
          </section>
          <section>
            <h2>No accounts</h2>
            <p>{"You don't need an account to play, and we don't ask for your name, email address or other contact details. Your progress is stored on your device."}</p>
          </section>
          <section>
            <h2>Information collected through third-party services</h2>
            <p>{"Google AdMob (rewarded videos). The game offers optional videos in exchange for hints or coins. AdMob may collect device identifiers, including the Apple advertising identifier (IDFA) if you allow tracking, approximate location from your IP address, and information about ads viewed. Google uses this to show ads, measure them and prevent fraud."}</p>
            <p>{"Google Analytics for Firebase (usage). We use it to understand how the game is played, such as app opens, sessions, puzzles won, videos watched and decorations bought with in-game coins. It may collect app-instance identifiers, device and app information, and approximate location. We use this to improve the game."}</p>
            <p>{"Google's practices are described at policies.google.com/privacy."}</p>
          </section>
          <section>
            <h2>Your choices</h2>
            <p>{"Tracking: iOS asks whether the game may track you. You can say no and still get every video reward. You can change this in iPhone Settings under Privacy & Security, Tracking."}</p>
            <p>{"Consent: where required, such as in the European Economic Area and the UK, we ask for consent before personalized ads and offer Privacy choices in the game's menu."}</p>
            <p>{"Sharing: if you use Share, your device's share sheet sends the picture only where you choose."}</p>
            <p>{"Deleting data: deleting the app removes your progress from your device. To ask about data held by our service providers, contact us below."}</p>
          </section>
          <section>
            <h2>Children</h2>
            <p>{"The game is not directed at children under 13, and we do not knowingly collect personal information from them. If you believe a child has provided information, contact us and we will help remove it."}</p>
          </section>
          <section>
            <h2>Your rights</h2>
            <p>{"Depending on where you live, including California and the EEA, you may have rights to access, delete or object to the use of your personal information. Contact us to make a request."}</p>
          </section>
          <section>
            <h2>Changes</h2>
            <p>{"We may update this policy and will post the new version on this page with a new date."}</p>
          </section>
          <section>
            <h2>Contact</h2>
            <p>{"WKL Labs LLC, hello@wkllabs.com"}</p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  )
}
