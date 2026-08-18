export interface ServiceArea {
  name: string
  slug: string
  blurb: string
}

export const serviceAreas: ServiceArea[] = [
  { name: 'Bigfork', slug: 'bigfork', blurb: 'the lakeside village on Flathead Lake where Glass Haven is based' },
  { name: 'Kalispell', slug: 'kalispell', blurb: 'the largest city in the Flathead Valley' },
  { name: 'Whitefish', slug: 'whitefish', blurb: 'the resort town near Whitefish Lake and Glacier National Park' },
  { name: 'Lakeside', slug: 'lakeside', blurb: 'the community on the west shore of Flathead Lake' },
  { name: 'Woods Bay', slug: 'woods-bay', blurb: 'the Flathead Lake community between Bigfork and Lakeside' },
  { name: 'Polson', slug: 'polson', blurb: 'the town at the south end of Flathead Lake' },
  { name: 'Kila', slug: 'kila', blurb: 'the rural community west of Kalispell' },
  { name: 'Columbia Falls', slug: 'columbia-falls', blurb: 'the gateway town to Glacier National Park' },
  { name: 'Ferndale', slug: 'ferndale', blurb: 'the community east of Kalispell near Flathead Lake' },
]

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug)
}
