import Link from 'next/link'
import Image from 'next/image'

const PHONE_NUMBER = '(406) 607-5279'
const PHONE_LINK = 'tel:+14066075279'
const EMAIL = 'glasshavenwindows@gmail.com'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const legal = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms' },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-white">

      {/* Footer Content */}
      <div className="container-content py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/glass-haven-logo.png"
              alt="Glass Haven Windows"
              width={160}
              height={64}
              className="h-16 w-auto"
            />
            <p className="mt-4 text-sm text-white/70 max-w-xs">
              Professional window cleaning services for homes and businesses.
              Crystal clear results, every time.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3">

              <li className="flex items-center gap-2 text-sm text-white/70">
                <a href={PHONE_LINK} className="hover:text-primary transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>

              <li className="flex items-center gap-2 text-sm text-white/70">
                <span>8:00am - 6:30pm Daily</span>
              </li>

              <li className="flex items-start gap-2 text-sm text-white/70">
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-primary transition-colors"
                >
                  {EMAIL}
                </a>
              </li>

              <li className="flex items-center gap-2 text-sm text-white/70">
                <a
                  href="https://www.facebook.com/214382179183619"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Facebook
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Glass Haven Windows. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
