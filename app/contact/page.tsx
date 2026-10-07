import { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact Us | YanaSafe",
  description: "Get in touch with the YanaSafe team for support, feedback, or inquiries about our dating safety platform",
};

export default function ContactPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}