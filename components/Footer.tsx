export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-lg font-semibold">My Homepage</p>
          <p className="mt-2 text-sm text-slate-400">Created by Sangjin Kim (김상진)</p>
          <p className="mt-1 text-sm text-slate-400">© 2026 My Homepage. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Contact</span>
        </div>
      </div>
    </footer>
  );
}
