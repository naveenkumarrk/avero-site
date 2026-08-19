import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "System",
  // Internal component playground — never index it.
  robots: { index: false, follow: false },
};

export default function SystemLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
