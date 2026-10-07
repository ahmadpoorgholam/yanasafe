import { Mail, MessageCircle, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Get in Touch</h1>
        <p className="text-lg text-muted-foreground">
          Have questions about YanaSafe? We're here to help you stay safe in the world of online dating.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Email Support</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  For general inquiries and support
                </p>
                <a 
                  href="mailto:support@yanasafe.app" 
                  className="text-sm text-primary hover:underline mt-2 inline-block"
                >
                  support@yanasafe.app
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Community Support</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  For safety concerns and reporting
                </p>
                <a 
                  href="mailto:safety@yanasafe.app" 
                  className="text-sm text-primary hover:underline mt-2 inline-block"
                >
                  safety@yanasafe.app
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg border bg-card/50 p-6">
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-primary/10 p-3">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Response Time</h3>
            <p className="text-sm text-muted-foreground mt-1">
              We aim to respond to all inquiries within 24 hours. For urgent safety concerns,
              please use our emergency contact options or contact local authorities if you're
              in immediate danger.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">How Can We Help?</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Questions about our safety analysis features</li>
          <li>• Technical support for profile analysis</li>
          <li>• Community safety reporting assistance</li>
          <li>• Privacy and data protection inquiries</li>
          <li>• Partnership and collaboration opportunities</li>
        </ul>
      </div>
    </div>
  );
}