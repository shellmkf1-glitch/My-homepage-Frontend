export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* 사진 영역 — 실제 사진으로 교체 시 <img> 태그로 변경 */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-80 w-80 overflow-hidden rounded-[2rem] shadow-soft md:h-96 md:w-96">
              <img
                src="/profile.jpg"
                alt="김상진 프로필 사진"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* 소개글 영역 */}
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary-600">
              About
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              김상진
            </h2>
            <p className="mt-2 text-lg font-medium text-slate-500">
              한국쉘석유 · 신규사업개발부
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                한국쉘석유에서 30년째 근무하며 신규사업개발부를 맡고 있습니다.
              </p>
              <p>
                쉘에서 생산·조달하는 다양한 하이드로카본 유체를 활용해 고무 및 폴리머를
                배합함으로써 생산 효율을 높이는 신시장을 개발하고 있습니다.
              </p>
              <p>
                또한 데이터센터·배터리 등 열 발생이 큰 환경에서 요구되는 액체 냉각과
                이머전 쿨링(Immersion Cooling) 솔루션의 적용 개발에도 기여하고 있습니다.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { label: '', value: 'Shell Lubricant' },
                { label: '소속', value: '한국쉘석유' },
                { label: '담당부서', value: '신규사업개발부' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center"
                >
                  <p className="text-xl font-bold text-primary-600">{item.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
