import { Metadata } from 'next';
import { siteConfig } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'YanaSafe Privacy Policy - Learn how we protect your data and privacy',
};

export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: December 10, 2024</p>
        </div>

        <div className="prose dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold">Our Commitment to Your Privacy</h2>
            <p>
              At YanaSafe, we understand the importance of privacy in online dating. Our mission is to help you stay safe while protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Information We Collect</h2>
            <h3 className="text-xl font-medium mt-4">Essential Information</h3>
            <ul>
              <li>Profile images and bio text submitted for analysis</li>
              <li>Email address and authentication details</li>
              <li>Basic profile information (age, gender, location)</li>
            </ul>

            <h3 className="text-xl font-medium mt-4">Usage Information</h3>
            <ul>
              <li>Analysis requests and results</li>
              <li>Community reports and feedback</li>
              <li>Device and browser information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
            <ul>
              <li>To provide AI-powered profile analysis and safety recommendations</li>
              <li>To maintain and improve our services</li>
              <li>To protect our community through report tracking</li>
              <li>To communicate important updates and safety information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Data Protection</h2>
            <p>
              Your security is our priority. We implement industry-standard measures to protect your data:
            </p>
            <ul>
              <li>End-to-end encryption for sensitive data</li>
              <li>Secure cloud storage with regular backups</li>
              <li>Regular security audits and updates</li>
              <li>Strict access controls and monitoring</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Your Privacy Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request data correction or deletion</li>
              <li>Export your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p>
              If you have questions about our Privacy Policy or your data, please contact us:
            </p>
            <ul>
              <li>Email: info@yanasafe.app</li>
            </ul>
          </section>

          <section className="border-t pt-8 mt-8">
            <p className="text-sm text-muted-foreground">
              By using YanaSafe, you agree to this Privacy Policy. We may update this policy occasionally, and we&apos;ll notify you of any significant changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}