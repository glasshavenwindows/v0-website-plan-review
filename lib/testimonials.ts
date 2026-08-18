export interface Testimonial {
  author: string
  text: string
  /** Slug of the service-area town this review is tied to, if any. */
  town?: string
  /** Named local business, if the reviewer mentioned one. */
  business?: string
  /** Show in the homepage testimonials grid. */
  featured?: boolean
}

// Sourced verbatim (light punctuation cleanup only) from Glass Haven Window
// Cleaning's public Google Business Profile reviews (5.0 stars, 17 reviews).
export const testimonials: Testimonial[] = [
  {
    author: 'Amber Keeler',
    text: 'Honestly, the team of Kyle & Tyler that came to wash the inside and outside of our windows were fabulous. They used care and attention to detail. Our windows, screens and window tracks are spotless. These young men have a great work ethic. Thank you Glass Haven.',
    featured: true,
  },
  {
    author: 'Connie Whittaker',
    text: 'This was the best experience I have had having him clean my windows. He was not only there to get the job done but very considerate and so nice. I hope I can get him back next year.',
    featured: true,
  },
  {
    author: 'Hannah Nicole',
    text: 'Will was kind, punctual and did an amazing job! Great communication, very speedy and efficient! I would recommend Glass Haven for all your window cleaning needs!!',
    featured: true,
  },
  {
    author: 'Sam Williams',
    text: 'Amazing! Our windows look so good! Very detail-oriented and our windows look crystal clear! We will be treating ourselves to this service every 6 months for sure! Already recommended to several friends.',
    featured: true,
  },
  {
    author: 'Buzz Dicello',
    text: "Wonderful service, Kyle is a delight, just a pleasure to have in your home. You can't even tell there's glass in those windows, it's so clean. Couldn't be happier, won't use anyone else.",
    featured: true,
  },
  {
    author: 'Nicole Merrill',
    text: 'Very professional, honest, and kind! Best work and service in the Valley!',
    featured: true,
  },
  {
    author: 'Gary Mammana',
    text: 'These guys do a great job. The guy showed up on time and did a great job. Neat and clean. The price was very reasonable. I highly recommend them.',
  },
  {
    author: 'Tracy Blount',
    text: 'Kyle was on time, extremely considerate and polite. My windows had a dirt layer after the house next door completed their landscaping last fall. Kyle got them crystal clean! Excellent job!',
  },
  {
    author: 'Rebecca Crane',
    text: 'Tayden did a great job! Very detailed, personable & efficient. I recommend Glass Haven!',
  },
  {
    author: 'John Chaney',
    text: 'Glass Haven cleaned my windows today. He showed up on time, did a great job, and the final bill was exactly what the estimate was. Good job!',
  },
  {
    author: 'Christie B',
    text: 'So happy to find a reliable, and honest company. I will definitely get the word out!',
  },
  {
    author: 'Shelli Hilde',
    text: "Loved Tyler's professionalism and beautiful work! I highly recommend him!",
  },
  {
    author: 'Seth and Amy Campbell',
    text: 'Will did an amazing job and was incredibly detailed! So grateful for their quality work.',
  },
  {
    author: 'Isaac Wyckoff',
    text: 'Hello from Bigfork Coffee House! We got our windows professionally done by Glass Haven and they turned out absolutely amazing. Would recommend this guy all day long!',
    town: 'bigfork',
    business: 'Bigfork Coffee House',
  },
]

export function getTownTestimonial(slug: string): Testimonial | undefined {
  return testimonials.find((t) => t.town === slug)
}
