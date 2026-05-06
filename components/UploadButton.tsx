'use client';

import { useState, useRef } from 'react';

const categories = [
  { value: 'memories', label: '추억' },
  { value: 'jeju', label: '현재 — 제주 올레' },
  { value: 'seoul', label: '현재 — 서울 둘레길' },
  { value: 'personal', label: '개인 (기타)' },
];

type UploadStatus = { name: string; status: 'uploading' | 'done' | 'error' };

export default function UploadButton() {
  const [open, setOpen] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState(categories[0].value);
  const [uploads, setUploads] = useState<UploadStatus[]>([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim()) setAuthed(true);
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
        setUploads((prev) => prev.map((u) => u.name === file.name ? { ...u, status: 'done' } : u));
      } catch {
        setUploads((prev) => prev.map((u) => u.name === file.name ? { ...u, status: 'error' } : u));
      }
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files.length) uploadFiles(e.dataTransfer.files);
  };

  const handleClose = () => {
    setOpen(false);
    setAuthed(false);
    setPassword('');
    setUploads([]);
  };

  return (
    <>
      {/* 플로팅 업로드 버튼 */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg transition hover:bg-primary-700 hover:scale-110"
        title="사진/동영상 업로드"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
        </svg>
      </button>

      {/* 모달 */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={handleClose}>
          <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>

            {/* 닫기 */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">사진 / 동영상 업로드</h2>
              <button onClick={handleClose} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>

            {!authed ? (
              /* 비밀번호 입력 */
              <form onSubmit={handleAuth} className="space-y-4">
                <input
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button type="submit" className="w-full rounded-xl bg-primary-600 py-3 text-sm font-semibold text-white hover:bg-primary-700">
                  확인
                </button>
              </form>
            ) : (
              /* 업로드 UI */
              <div className="space-y-4">
                {/* 섹션 선택 */}
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {categories.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>

                {/* 드래그 앤 드롭 */}
                <div
                  onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={handleDrop}
                  onClick={() => inputRef.current?.click()}
                  className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed py-8 transition ${
                    dragging ? 'border-primary-500 bg-primary-50' : 'border-slate-300 hover:border-primary-400'
                  }`}
                >
                  <svg className="mb-2 h-10 w-10 text-slate-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                  </svg>
                  <p className="text-sm text-slate-500">클릭하거나 파일을 드래그하세요</p>
                  <p className="mt-1 text-xs text-slate-400">JPG · PNG · MP4 · MOV</p>
                  <input ref={inputRef} type="file" multiple accept="image/*,video/*" className="hidden"
                    onChange={(e) => e.target.files && uploadFiles(e.target.files)} />
                </div>

                {/* 업로드 결과 */}
                {uploads.length > 0 && (
                  <ul className="space-y-2">
                    {uploads.map((u, idx) => (
                      <li key={idx} className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-2 text-sm">
                        <span>{u.status === 'uploading' ? '⏳' : u.status === 'done' ? '✅' : '❌'}</span>
                        <span className="flex-1 truncate text-slate-700">{u.name}</span>
                        {u.status === 'error' && <span className="text-xs text-red-500">비밀번호 오류</span>}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
