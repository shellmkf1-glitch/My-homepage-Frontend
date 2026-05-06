// 사진 추가 방법: public/personal/ 폴더에 이미지 파일을 넣고 아래 배열에 추가
// 예: { src: '/personal/photo1.jpg', alt: '설명' }
const photos: { src: string; alt: string }[] = [
  // { src: '/personal/photo1.jpg', alt: '사진 설명' },
];

export default function PersonalSection() {
  return (
    <section id="personal" className="bg-slate-50 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* 소개 */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary-600">
            Personal
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            걷기와 세상의 아름다움을 사랑하는<br className="hidden sm:block" />
            <span className="text-primary-600"> 방랑자</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            바쁜 일상 속에서도 두 발로 세상을 걸으며,<br />
            스쳐 지나는 풍경과 순간의 아름다움을 마음에 담습니다.
          </p>
        </div>

        {/* 사진 갤러리 */}
        {photos.length > 0 ? (
          <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {photos.map((photo, idx) => (
              <div key={idx} className="mb-4 overflow-hidden rounded-2xl shadow-soft">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        ) : (
          /* 사진이 없을 때 플레이스홀더 */
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 shadow-soft"
              >
                <div className="text-center text-slate-400">
                  <svg className="mx-auto h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 18h16.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <p className="mt-2 text-xs">사진 {idx + 1}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
