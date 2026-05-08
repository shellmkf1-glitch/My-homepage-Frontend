'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import QRCode from 'react-qr-code';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          subject: `홈페이지 ${form.name} 메세지`,
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: 'shell222@nate.com',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus('done');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-slate-100 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-10 shadow-soft">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">

            {/* 왼쪽: 소개 */}
            <div className="flex flex-col justify-between pt-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-600">문의</p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900">궁금한 점 있으신가요?</h2>
                <p className="mt-4 text-slate-600">소중한 지식과 경험을 나누어 보시지요.</p>
              </div>

              {/* QR 코드 */}
              <div className="flex flex-col items-start gap-3">
                <div className="rounded-2xl bg-white p-4 shadow-md">
                  <QRCode
                    value={process.env.NEXT_PUBLIC_SITE_URL ?? (typeof window !== 'undefined' ? window.location.origin : '')}
                    size={120}
                    fgColor="#1e293b"
                  />
                </div>
                <p className="text-xs text-slate-400">QR코드로 홈페이지 바로가기</p>
              </div>
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
                  {status === 'sending' ? '전송 중...' : status === 'done' ? '전송 완료 ✓' : status === 'error' ? '전송 실패 — 다시 시도' : '메시지 보내기'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
