export interface ServiceArea {
  name: string
  slug: string
  blurb: string
  image: string
  /** A genuine, town-specific paragraph — not a reused template. */
  localDetail: string
}

export const serviceAreas: ServiceArea[] = [
  {
    name: 'Bigfork',
    slug: 'bigfork',
    blurb: 'the lakeside village on Flathead Lake where Glass Haven is based',
    image: '/images/service-areas/bigfork.jpg',
    localDetail:
      "Bigfork is home base for Glass Haven — this is where Will started the company, and it's still where most jobs begin and end each day. Lakefront homes and cabins along this stretch of Flathead Lake deal with constant humidity and mineral spotting off the water, which is exactly the kind of hard water buildup our specialty cleaning is built to handle.",
  },
  {
    name: 'Kalispell',
    slug: 'kalispell',
    blurb: 'the largest city in the Flathead Valley',
    image: '/images/service-areas/kalispell.webp',
    localDetail:
      'As the Flathead County seat and the largest city in the valley, Kalispell is a mix of downtown storefronts, established in-town neighborhoods, and newer subdivisions on the edges of town. We regularly work both single-story homes and larger multi-story properties throughout the city.',
  },
  {
    name: 'Whitefish',
    slug: 'whitefish',
    blurb: 'the resort town near Whitefish Lake and Glacier National Park',
    image: '/images/service-areas/whitefish.jpg',
    localDetail:
      'Whitefish sits at the base of Whitefish Mountain Resort and along Whitefish Lake, a short drive from the west entrance to Glacier National Park. A lot of homes here are second homes or short-term rentals that need to look their best between guests — quick, reliable turnarounds are something we build our schedule around.',
  },
  {
    name: 'Lakeside',
    slug: 'lakeside',
    blurb: 'the community on the west shore of Flathead Lake',
    image: '/images/service-areas/lakeside.jpg',
    localDetail:
      'Lakeside runs along the west shore of Flathead Lake, and most homes here are built to take in that water view with large picture windows facing the lake. Big lake-facing glass looks incredible clean — and shows water spots and dust the fastest, so this is a route we keep on a regular cleaning rotation.',
  },
  {
    name: 'Woods Bay',
    slug: 'woods-bay',
    blurb: 'the Flathead Lake community between Bigfork and Lakeside',
    image: '/images/service-areas/woods-bay.jpg',
    localDetail:
      "Woods Bay sits on Flathead Lake between Bigfork and Lakeside, a quieter stretch of mostly year-round homes and lake cabins. Because it's so close to our Bigfork home base, it's one of the easiest areas for us to fit in on short notice.",
  },
  {
    name: 'Polson',
    slug: 'polson',
    blurb: 'the town at the south end of Flathead Lake',
    image: '/images/service-areas/polson.jpg',
    localDetail:
      "Polson sits at the southern tip of Flathead Lake, right where the lake drains into the Flathead River. It's a longer drive from our Bigfork base than most of our other towns, but it's become one of our most-served stops south of Kalispell.",
  },
  {
    name: 'Kila',
    slug: 'kila',
    blurb: 'the rural community west of Kalispell',
    image: '/images/service-areas/kila.webp',
    localDetail:
      "Kila is the rural community west of Kalispell — more acreage, more outbuildings, and often longer driveways than you'll find on in-town properties. We come equipped for the extra distance and the larger, more spread-out properties that are typical out this way.",
  },
  {
    name: 'Columbia Falls',
    slug: 'columbia-falls',
    blurb: 'the gateway town to Glacier National Park',
    image: '/images/service-areas/columbia-falls.jpg',
    localDetail:
      "Columbia Falls sits closest to Glacier National Park's west entrance of any town we serve, with a mix of long-time residents and newer construction as the area grows. It's one of our farther-north stops, and we build it into regular route days rather than one-off trips.",
  },
  {
    name: 'Ferndale',
    slug: 'ferndale',
    blurb: 'the community east of Kalispell near Flathead Lake',
    image: '/images/service-areas/ferndale.jpg',
    localDetail:
      "Ferndale sits in the wooded hills east of Kalispell, close to the northern end of Flathead Lake. It's a mostly residential area with a lot of tree cover, which means more pollen, sap, and debris on windows here than you'll typically see on a bare in-town lot.",
  },
]

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug)
}
