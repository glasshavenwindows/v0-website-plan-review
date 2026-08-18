export interface ServiceArea {
  name: string
  slug: string
  blurb: string
  image: string
}

export const serviceAreas: ServiceArea[] = [
  { name: 'Bigfork', slug: 'bigfork', blurb: 'the lakeside village on Flathead Lake where Glass Haven is based', image: '/images/service-areas/bigfork.jpg' },
  { name: 'Kalispell', slug: 'kalispell', blurb: 'the largest city in the Flathead Valley', image: '/images/service-areas/kalispell.webp' },
  { name: 'Whitefish', slug: 'whitefish', blurb: 'the resort town near Whitefish Lake and Glacier National Park', image: '/images/service-areas/whitefish.jpg' },
  { name: 'Lakeside', slug: 'lakeside', blurb: 'the community on the west shore of Flathead Lake', image: '/images/service-areas/lakeside.jpg' },
  { name: 'Woods Bay', slug: 'woods-bay', blurb: 'the Flathead Lake community between Bigfork and Lakeside', image: '/images/service-areas/woods-bay.jpg' },
  { name: 'Polson', slug: 'polson', blurb: 'the town at the south end of Flathead Lake', image: '/images/service-areas/polson.jpg' },
  { name: 'Kila', slug: 'kila', blurb: 'the rural community west of Kalispell', image: '/images/service-areas/kila.jpg' },
  { name: 'Columbia Falls', slug: 'columbia-falls', blurb: 'the gateway town to Glacier National Park', image: '/images/service-areas/columbia-falls.jpg' },
  { name: 'Ferndale', slug: 'ferndale', blurb: 'the community east of Kalispell near Flathead Lake', image: '/images/service-areas/ferndale.jpg' },
]

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug)
}
