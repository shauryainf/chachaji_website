import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Saarathi Parenting Guidance',
  description: 'Get in touch with our team for any queries, feedback, or support related to our parenting guidance services.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 