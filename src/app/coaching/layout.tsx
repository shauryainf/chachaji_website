import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1-on-1 Parent Coaching - Saarathi',
  description: 'Book personalized coaching sessions with our experienced parent coaches to address your specific parenting challenges and goals.',
};

export default function CoachingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 