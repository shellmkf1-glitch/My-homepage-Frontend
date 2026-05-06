import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UploadButton from '../components/UploadButton';

export const metadata: Metadata = {
  title: '김상진 | Sangjin Kim',
  description: '한국쉘석유 신규사업개발부 김상진 — Hydrocarbon Fluid Expert',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-slate-50 text-slate-900">
        <Header />
        <main>{children}</main>
        <Footer />
        <UploadButton />
      </body>
    </html>
  );
}
