import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Glass Haven Windows',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: June 2, 2026</p>

      <div className="space-y-8 text-foreground">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed">
            When you contact us or request a quote through our website, we may collect the following information:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Service type requested</li>
            <li>Any messages or details you provide</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use the information you provide solely to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
            <li>Respond to your inquiry or quote request</li>
            <li>Schedule and confirm service appointments</li>
            <li>Send updates related to your service</li>
            <li>Send SMS text messages if you have opted in</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. SMS / Text Messaging</h2>
          <p className="text-muted-foreground leading-relaxed">
            By checking the SMS consent box on our contact form, you agree to receive text messages
            from Glass Haven Windows at the phone number you provided. These messages may include
            appointment confirmations, reminders, follow-ups, and service-related updates.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
            <li>Message frequency varies based on your interactions with us.</li>
            <li>Message and data rates may apply.</li>
            <li>Reply <strong>STOP</strong> at any time to opt out of SMS messages.</li>
            <li>Reply <strong>HELP</strong> for assistance.</li>
            <li>We do not sell or share your phone number with third parties for marketing purposes.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Data Sharing</h2>
          <p className="text-muted-foreground leading-relaxed">
            We do not sell, rent, or share your personal information with third parties for their
            marketing purposes. We may use trusted third-party services (such as form processors
            and CRM platforms) solely to operate our business. These providers are prohibited from
            using your information for any other purpose.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Data Retention</h2>
          <p className="text-muted-foreground leading-relaxed">
            We retain your information only as long as necessary to provide our services or as
            required by law. You may request deletion of your information at any time by
            contacting us.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed">
            You have the right to request access to, correction of, or deletion of your personal
            information. To exercise these rights, contact us at the information below.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us:
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
