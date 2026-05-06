'use client';

import { useState, useRef } from 'react';

const categories = [
  { value: 'memories', label: '추억' },
  { value: 'jeju', label: '현재 — 제주 올레' },
  { value: 'seoul', label: '현재 — 서울 둘레길' },
  { value: 'personal', label: '개인 (기타)' },
];

type UploadStatus = { name: string; status: 'uploading' | 'done' | 'error'; url?: string };

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [category, setCategory] = useState(categories[0].value);
  const [uploads, setUploads] = useState<UploadStatus[]>([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // 간단한 클라이언트 체크 — 실제 검증은 API에서 수행
    setAuthed(true);
  };

  const uploadFiles = async (files: FileList) => {
    for (const file of Array.from(files)) {
      setUploads((prev) => [...prev, { name: file.name, status: 'uploading' }]);

      try {
        const res = await fetch(
          `/api/upload?filename=${encodeURIComponent(file.name)}&category=${category}&password=${encodeURIComponent(password)}`,
          { method: 'POST', body: file }
        );
        const data = await res.json();

        if (!res.ok) throw new Error(data.error);

        setUploads((prev) =>
          prev.map((u) => (u.name === file.name ? { ...u, status: 'done', url: data.url } : u))
        );
      } catch {
        setUploads((prev) =>
          prev.map((u) => (u.name === file.name ? { ...u, status: 'error' } : u))
        );
      }
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files.length) uploadFiles(e.dataTransfer.files);
  };

  if (!authed) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100">
        <form onSubmit={handleAuth} className="w-80 rounded-2xl bg-white p-8 shadow-soft">
          <h1 className="mb-6 text-xl font-bold text-slate-900">관리자 로그인</h1>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-primary-600 py-3 text-sm font-semibold text-white hover:bg-primary-700"
          >
            로그인
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-2xl font-bold text-slate-900">사진 / 동영상 업로드</h1>

        {/* 카테고리 선택 */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-slate-700">섹션 선택</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary-500"
          >
            {categories.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>

        {/* 드래그 앤 드롭 영역 */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-12 text-center transition ${
            dragging ? 'border-primary-500 bg-primary-50' : 'border-slate-300 bg-white hover:border-primary-400'
          }`}
        >
          <svg className="mb-3 h-12 w-12 text-slate-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
          </svg>
          <p className="text-sm font-medium text-slate-600">클릭하거나 파일을 드래그하여 업로드</p>
          <p className="mt-1 text-xs text-slate-400">사진 (JPG, PNG) · 동영상 (MP4, MOV)</p>
          <input
            ref={inputRef}
            type="file"
            multiple
            accept="image/*,video/*"
            className="hidden"
            onChange={(e) => e.target.files && uploadFiles(e.target.files)}
          />
        </div>

        {/* 업로드 결과 */}
        {uploads.length > 0 && (
          <div className="mt-6 space-y-3">
            {uploads.map((u, idx) => (
              <div key={idx} className="flex items-center gap-4 rounded-xl bg-white px-5 py-3 shadow-sm">
                <span className="text-lg">
                  {u.status === 'uploading' ? '⏳' : u.status === 'done' ? '✅' : '❌'}
                </span>
                <div className="flex-1 truncate text-sm text-slate-700">{u.name}</div>
                {u.status === 'done' && u.url && (
                  <a href={u.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary-600 hover:underline">
                    보기
                  </a>
                )}
                {u.status === 'error' && <span className="text-xs text-red-500">비밀번호 오류</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
