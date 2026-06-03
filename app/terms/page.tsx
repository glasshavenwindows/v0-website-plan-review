import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Glass Haven Windows',
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-2">Terms & Conditions</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: June 2, 2026</p>

      <div className="space-y-8 text-foreground">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Services</h2>
          <p className="text-muted-foreground leading-relaxed">
            Glass Haven Windows provides residential and commercial window cleaning services
            in the Billings, Montana area. By requesting a quote or booking a service through
            our website, you agree to these Terms & Conditions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. SMS Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By opting in to SMS communications, you agree to receive text messages from
            Glass Haven Windows, including appointment confirmations, reminders, follow-ups,
            and service updates.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
            <li>Message frequency varies.</li>
            <li>Message and data rates may apply.</li>
            <li>Reply <strong>STOP</strong> to cancel at any time.</li>
            <li>Reply <strong>HELP</strong> for help or contact us at (406) 607-5279.</li>
            <li>Your phone number will not be shared with third parties for marketing.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Quotes & Scheduling</h2>
          <p className="text-muted-foreground leading-relaxed">
            All quotes provided are estimates and may vary based on the actual condition and
            size of the property. Final pricing will be confirmed before work begins.
            Appointments are subject to availability and weather conditions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Disclaimer</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our services are provided "as is." While we take every precaution to deliver
            quality results, Glass Haven Windows is not liable for pre-existing damage to
            windows, frames, seals, or surrounding areas that may become apparent during
            cleaning.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            To the fullest extent permitted by law, Glass Haven Windows shall not be liable
            for any indirect, incidental, or consequential damages arising from the use of
            our services or website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Changes to These Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to update these Terms & Conditions at any time. Changes
            will be posted on this page with an updated date.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            Questions about these terms? Reach us at:
          </p>
          <div className="text-muted-foreground space-y-1">
            <p><strong>Glass Haven Windows</strong></p>
            <p>Phone: (406) 607-5279</p>
            <p>Email: glasshavenwindows@gmail.com</p>
            <p>[BUSINESS ADDRESS]</p>
          </div>
        </section>

      </div>
    </div>
  )
}
