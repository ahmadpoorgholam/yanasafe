import { Metadata } from 'next';
import { siteConfig } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'YanaSafe Terms of Service - Understanding your rights and responsibilities',
};

export default function TermsPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: December 14, 2024</p>
        </div>

        <div className="prose dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p>
              Welcome to YanaSafe. By using our app, you agree to these Terms of Service. Please read them carefully.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. Definitions</h2>
            <ul>
              <li>&quot;YanaSafe,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot; refers to the operators of YanaSafe</li>
              <li>&quot;Service&quot; means the YanaSafe mobile application and website</li>
              <li>&quot;User,&quot; &quot;you,&quot; or &quot;your&quot; refers to individuals using our Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Acceptable Use</h2>
            <p>You agree to use YanaSafe solely for its intended purpose as a dating safety app. You must:</p>
            <ul>
              <li>Provide accurate information</li>
              <li>Use the app responsibly and ethically</li>
              <li>Respect other users&apos; privacy and rights</li>
              <li>Follow all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Prohibited Conduct</h2>
            <p>You must not:</p>
            <ul>
              <li>Use YanaSafe for any illegal activities</li>
              <li>Harass, bully, or intimidate other users</li>
              <li>Attempt to access other users&apos; accounts</li>
              <li>Distribute malware or engage in any harmful activities</li>
              <li>Impersonate others or provide false information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. User Accounts</h2>
            <ul>
              <li>You must be at least 18 years old to use YanaSafe</li>
              <li>Keep your account information confidential</li>
              <li>You are responsible for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Privacy and Data Protection</h2>
            <p>
              Your use of YanaSafe is also governed by our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>. We collect and use your information as described in that policy, in compliance with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at:
            </p>
            <ul>
              <li>Email: info@yanasafe.app</li>
            </ul>
          </section>

          <section className="border-t pt-8 mt-8">
            <p className="text-sm text-muted-foreground">
              By using YanaSafe, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}