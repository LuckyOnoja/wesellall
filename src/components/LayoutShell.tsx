'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout = pathname === '/register' || pathname === '/dashboard' || pathname === '/admin';

  return (
    <>
      {!hideLayout && <Navbar />}
      <main className={!hideLayout ? 'pt-16' : ''}>
        {children}
      </main>
      {!hideLayout && <Footer />}
    </>
  );
}
