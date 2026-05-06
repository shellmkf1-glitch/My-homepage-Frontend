# Frontend

고객 대상 홈페이지 및 포트폴리오 사이트를 위한 Next.js 15 App Router 프로젝트입니다.

## 구조

- `app/` — Next.js App Router 페이지 및 레이아웃
- `components/` — React 컴포넌트 (Header, Footer, Hero, Feature, Stats 등)
- `styles/` — 전역 CSS 및 Tailwind 설정

## 개발 서버 실행

```bash
npm run dev
```

포트: `http://localhost:3000`

## 빌드

```bash
npm run build
npm start
```

## 스타일링

모든 스타일은 Tailwind CSS 유틸리티 클래스를 사용합니다. 커스텀 CSS 파일은 최소화하세요.

## 타입스크립트

`strict: true` 모드로 작동하므로 모든 변수와 함수에 명시적 타입 정의가 필요합니다.

## 참고

- 디자인 토큰: [`../docs/Design_Tokens.md`](../docs/Design_Tokens.md)
- 컴포넌트 사양: [`../docs/Component_Library.md`](../docs/Component_Library.md)
- 페이지 조립 공식: [`../docs/Page_Formulas.md`](../docs/Page_Formulas.md)
