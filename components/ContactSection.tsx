'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // TODO: API 연동 시 여기에 fetch 추가
    await new Promise((r) => setTimeout(r, 800));
    setStatus('done');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-slate-100 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-10 shadow-soft">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

            {/* 왼쪽: 소개 */}
            <div className="pt-2">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-600">문의</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">궁금한 점 있으신가요?</h2>
              <p className="mt-4 text-slate-600">소중한 지식과 경험을 나누어 보시지요.</p>
            </div>

            {/* 오른쪽: 메시지 폼 */}
            <div className="rounded-[1.5rem] bg-slate-100 p-8">
              <h3 className="text-2xl font-bold text-primary-500">메시지 남기기</h3>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm text-slate-600">이름</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-white placeholder-slate-600 outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-slate-600">이메일</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-white placeholder-slate-600 outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-slate-600">메시지</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-2xl bg-slate-900 px-4 py-3 text-white placeholder-slate-600 outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder=""
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full rounded-2xl bg-gradient-to-r from-primary-400 to-primary-600 py-4 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
                >
                  {status === 'sending' ? '전송 중...' : status === 'done' ? '전송 완료 ✓' : '메시지 보내기'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
