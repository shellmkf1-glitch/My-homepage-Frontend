const stats = [
  { label: '근속연수', value: '30년' },
  { label: '경험 업무', value: '윤활유 · 그리스 · 금속가공유' },
];

export default function StatsRow() {
  return (
    <section id="stats" className="rounded-[1.75rem] bg-slate-950 px-8 py-6 text-white shadow-soft">
      <div className="grid gap-8 md:grid-cols-2">
        {stats.map((item) => (
          <div key={item.label} className="rounded-3xl bg-slate-900/80 px-8 py-4 text-center">
            <p className="text-4xl font-semibold">{item.value}</p>
            <p className="mt-3 text-2xl font-bold text-slate-200">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
