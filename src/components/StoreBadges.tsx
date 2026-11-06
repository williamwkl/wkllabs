import Image from "next/image"
import { cn } from "@/lib/utils"

// Official artwork; Apple and Google ask that badges are not redrawn or recoloured.
export default function StoreBadges({ appStoreUrl, playStoreUrl, className }: { appStoreUrl?: string; playStoreUrl?: string; className?: string }) {
  if (!appStoreUrl && !playStoreUrl) return null
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {appStoreUrl && (
        <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
          <Image src="/badges/app-store.svg" alt="Download on the App Store" width={120} height={40} unoptimized className="h-10 w-auto" />
        </a>
      )}
      {playStoreUrl && (
        <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
          <Image src="/badges/google-play.png" alt="Get it on Google Play" width={564} height={168} unoptimized className="h-10 w-auto" />
        </a>
      )}
    </div>
  )
}
