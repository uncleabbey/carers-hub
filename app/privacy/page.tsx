import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - CarersHub',
  description:
    'Privacy policy for CarersHub explaining what data we collect, why, and your rights.'
}

export default function PrivacyPage () {
  const effectiveDate = '2025-10-24'

  return (
    <main
      style={{
        padding: 24,
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif'
      }}
    >
      <article
        style={{
          maxWidth: 880,
          margin: '0 auto',
          lineHeight: 1.6,
          color: '#111'
        }}
      >
        <header>
          <h1 style={{ marginTop: 8 }}>Privacy Policy</h1>
          <p style={{ color: '#555', marginTop: 4 }}>
            Effective date: {effectiveDate}
          </p>
        </header>

        <section>
          <h2>1. Overview</h2>
          <p>
            CarersHub ("we", "us", or "our") is committed to protecting your
            privacy. This page explains what personal information we collect,
            how we use it, when we share it, and the choices you have.
          </p>
        </section>

        <section>
          <h2>2. Information we collect</h2>
          <ul>
            <li>
              <strong>Information you provide:</strong> Account details, profile
              information, messages, and any content you submit when using our
              services.
            </li>
            <li>
              <strong>Automatically collected:</strong> Usage data, device
              information, IP addresses, and cookies used to improve the service
              and for analytics.
            </li>
            <li>
              <strong>Third-party sources:</strong> Information from third-party
              services you connect (e.g., sign-in providers) or public sources.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. How we use your information</h2>
          <p>We use the data we collect to:</p>
          <ul>
            <li>Provide, maintain and improve the service.</li>
            <li>
              Communicate with you about updates, support and account-related
              matters.
            </li>
            <li>Personalize content and features.</li>
            <li>
              Detect, prevent and address technical issues, fraud and abuse.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Cookies and tracking</h2>
          <p>
            We use cookies and similar technologies to remember preferences,
            enable core functionality, and analyze how the service is used. You
            can control cookie preferences through your browser settings —
            disabling some cookies may affect functionality.
          </p>
        </section>

        <section>
          <h2>5. With whom we share data</h2>
          <p>
            We may share information with: service providers who help operate
            the service, legal authorities where required, and in connection
            with business transfers (e.g., mergers or acquisitions). We do not
            sell your personal data.
          </p>
        </section>

        <section>
          <h2>6. Data security</h2>
          <p>
            We implement reasonable technical and organizational measures
            designed to protect your information. However, no method of
            transmission or storage is completely secure — absolute security
            cannot be guaranteed.
          </p>
        </section>

        <section>
          <h2>7. Your rights</h2>
          <p>
            Depending on your jurisdiction, you may have rights to access,
            correct, delete, restrict or port your personal data, and to object
            to certain processing. To exercise these rights, contact us using
            the details below.
          </p>
        </section>

        <section>
          <h2>8. Children's privacy</h2>
          <p>
            The service is not intended for children under 13 (or the minimum
            age in your jurisdiction). We do not knowingly collect personal data
            from children without parental consent.
          </p>
        </section>

        <section>
          <h2>9. Changes to this policy</h2>
          <p>
            We may update this policy to reflect changes in our practices. If
            changes are material, we will provide notice through the service or
            by other means.
          </p>
        </section>

        <section>
          <h2>10. Contact</h2>
          <p>
            For privacy questions or to exercise your rights, contact us at:
          </p>
          <address style={{ color: '#555' }}>
            Email:{' '}
            <a href='mailto:privacy@carershub.example'>
              privacy@carershub.example
            </a>
          </address>
        </section>
      </article>
    </main>
  )
}
