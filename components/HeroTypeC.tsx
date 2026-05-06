export default function HeroTypeC() {
  return (
    <section id="home" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">

          {/* 왼쪽: 텍스트 */}
          <div className="max-w-2xl">
            {/* 배지 */}
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-base font-bold uppercase tracking-[0.22em] text-primary-700">
              Hydrocarbon Fluid Expert
            </span>

            {/* 메인 헤드라인 */}
            <h1 className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              새로운 접근 방식과 사고로<br />
              <span className="text-primary-600">세상을 이롭게...</span>
            </h1>

            {/* 서브 카피 */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              에너지와 소재의 경계에서, 산업의 흐름을 바꾸는<br className="hidden sm:block" />
              새로운 길을 묵묵히 걸어갑니다.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
              >
                소개 보기
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary-400 hover:text-primary-700"
              >
                문의하기
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
