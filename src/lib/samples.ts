export interface Sample {
  id: string
  title: string
  image: string
  alt: string
}

export const samples: Sample[] = [
  {
    id: "property-dashboard",
    title: "Property performance dashboard",
    image: "/samples/property-dashboard.png",
    alt: "Property performance dashboard showing occupancy, leased percent, leads and delinquency across a portfolio",
  },
]

export function sampleById(id: string): Sample | undefined {
  return samples.find((s) => s.id === id)
}
