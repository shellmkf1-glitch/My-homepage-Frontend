type Feature = {
  title: string;
  description: string;
  items?: string[];
};

const features: Feature[] = [
  {
    title: 'Process Oil',
    description: '고무배합유와 폴리머 배합유. 하이드로카본 유체를 활용해 고무·폴리머의 가공성과 물성을 최적화.',
  },
  {
    title: 'Performance Cooling',
    description: '고성능 냉각 솔루션.',
    items: [
      '데이터센터 액체 냉각과 Immersion Cooling',
      'Li-Battery Cooling',
    ],
  },
  {
    title: 'Life Science Fluid',
    description: 'Cosmetics, Crop protection, Ink solvents etc.',
  },
];

export default function FeatureGrid() {
  return (
    <div id="services" className="grid gap-6 lg:grid-cols-3">
      {features.map((item) => (
        <article key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
          <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
          <p className="mt-4 text-slate-600">{item.description}</p>
          {item.items && (
            <ol className="mt-4 space-y-2">
              {item.items.map((point, idx) => (
                <li key={point} className="flex items-start gap-2 text-slate-700">
                  <span className="text-sm font-semibold text-primary-600">{idx + 1}.</span>
                  <span className="text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ol>
          )}
        </article>
      ))}
    </div>
  );
}
