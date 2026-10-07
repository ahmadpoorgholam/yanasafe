import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Safety Reports | YanaSafe",
  description: "View and analyze community safety reports to make informed decisions about online dating safety",
};

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}