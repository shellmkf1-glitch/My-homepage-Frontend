import Link from 'next/link';

const navItems = [
  { label: '홈', href: '#home' },
  { label: '업무', href: '#services' },
  { label: '경력', href: '#stats' },
  { label: '개인', href: '#personal' },
  { label: '문의', href: '#contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#home" className="text-3xl font-semibold text-slate-900">
          김 상 진<span className="ml-2 text-base font-normal text-slate-500">Sangjin Kim</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
