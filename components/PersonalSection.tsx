'use client';

import { useState } from 'react';

const photos = [
  { src: '/personal/photo1.jpg', alt: '쿰부 히말라야 2013' },
  { src: '/personal/photo2.jpg', alt: 'ABC 트레킹 2014' },
  { src: '/personal/photo3.jpg', alt: '3패스 트레킹 2016' },
  { src: '/personal/photo4.jpg', alt: '3패스 트레킹 2016' },
  { src: '/personal/photo5.jpg', alt: '마나슬루 트레킹 2017' },
  { src: '/personal/photo6.jpg', alt: '안나푸르나 서킷 2019' },
];

const tabs = ['추억', '현재', '버킷리스트'] as const;
type Tab = typeof tabs[number];

export default function PersonalSection() {
  const [active, setActive] = useState<Tab>('추억');

  return (
    <section id="personal" className="bg-slate-50 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* 헤더 */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 inline-block rounded-xl bg-yellow-400 px-6 py-2 text-5xl font-extrabold uppercase tracking-widest text-primary-600 sm:text-6xl">
            PERSONAL
          </h1>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            걷기와 세상의 아름다움을<br />
            사랑하는 <span className="text-primary-600">방랑자</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            바쁜 일상 속에서도 두 발로 세상을 걸으며,<br />
            스쳐 지나는 풍경과 순간의 아름다움을 마음에 담습니다.
          </p>
        </div>

        {/* 탭 */}
        <div className="mt-10 flex justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                active === tab
                  ? 'bg-primary-600 text-white shadow-soft'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 탭 콘텐츠 */}
        <div className="mt-10">

          {active === '추억' && (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {photos.map((photo, idx) => (
                <div key={idx} className="relative overflow-hidden rounded-2xl shadow-soft">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-64 w-full object-cover transition duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-2">
                    <p className="text-sm font-semibold text-white">{photo.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {active === '현재' && (
            <div className="space-y-12">

              {/* 제주 올레 */}
              <div>
                <h3 className="mb-4 text-xl font-bold text-slate-800">제주 올레</h3>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {['/personal/jeju/jeju1.jpg', '/personal/jeju/jeju2.jpg', '/personal/jeju/jeju3b.jpg'].map((src, idx) => (
                    <div key={idx} className="relative overflow-hidden rounded-2xl shadow-soft">
                      <img src={src} alt={`제주올레 ${idx + 1}`} className="h-64 w-full object-cover transition duration-300 hover:scale-105" />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-2">
                        <p className="text-sm font-semibold text-white">제주올레</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 서울 둘레길 */}
              <div>
                <h3 className="mb-4 text-xl font-bold text-slate-800">서울 둘레길</h3>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {['/personal/seoul1.jpg', '/personal/seoul2.jpg', '/personal/seoul3.jpg'].map((src, idx) => (
                    <div key={idx} className="relative overflow-hidden rounded-2xl shadow-soft">
                      <img src={src} alt={`서울 둘레길 ${idx + 1}`} className="h-64 w-full object-cover transition duration-300 hover:scale-105" />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-2">
                        <p className="text-sm font-semibold text-white">서울 둘레길 {idx + 1}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {active === '버킷리스트' && (
            <div className="mx-auto max-w-2xl space-y-4">
              {[
                {
                  title: 'Camino de Santiago',
                  desc: '스페인 산티아고 순례길',
                  img: 'https://images.unsplash.com/photo-1641218356058-1a8988a5135b?w=800&q=80',
                },
                {
                  title: 'VIA Francigena',
                  desc: '영국 캔터베리에서 로마까지',
                  img: 'https://images.unsplash.com/photo-1605448098495-5d4dfae4ab40?w=800&q=80',
                },
              ].map((item) => (
                <div key={item.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-52 w-full object-cover"
                  />
                  <div className="px-8 py-5">
                    <p className="text-xl font-bold italic text-amber-500">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
