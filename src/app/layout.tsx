import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'HireSpark — Your next chapter starts here', description: 'Your career, connected. Resumes, referrals, opportunities, and applications in one place.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html> }
