# 1. Practice
- 블로그 예제를 간단하게 만들어 보기
## 1-1) a 태그와 Link 태그의 차이
  - a 태그를 사용하면 기본적인 HTML 태그의 역할을 한다
    - 브라우저 주소창에 새로운 링크를 치는 것과 동일한 효과
  - Link 태그를 사용하면 최적화된 방식으로 라우팅한다.
### Client Side Navigate
- 브라우저에서 URL 을 직접 쳐서 이동하는 것과 다르게 JS 상에서 page 의 컴포넌트를 교체하는 것
  - HTML 을 Reload 하지 않는다
  - 최적화 되는 것
### Code Splitting
- Next.js 는 Automatic Code Splitting 을 제공
- 특정 페이지에 접근할 때 해당 페이지를 그릴 때 필요한 Chunk 만 로드
- 페이지를 이동할 땐 목적지 페이지에 필요한 Chunk 만 로드
- 이를 통해서 성능을 최적화한다
### Prefetching
- <Link> 컴포넌트를 이용하면, Viewport 에 Link 컴포넌트가 노출됐을 때 href 로 연결된 페이지의 chunk 를 로드한다
- 이를 통해 성능을 최적화

# 2. 내장 컴포넌트
## 2-1) Image
### public
- 정적 리소스를 Next.js 로 서빙하기 위한 디렉토리
### Image 컴포넌트
```typescript jsx
<img src="/image/profile.jpg" alt="예제" />

<Image src="/image/profile.jpg" width={144} height={144} alt="예제" />
```
- 일반 img 태그로 렌더링을 할 때는 image/jpeg 파일로 렌더링
- Image 컴포넌트로 렌더링 할 때는 image/webp 파일로 렌더링된다.
  - webp 는 구글에서 만든 포맷
  - 최적화된 이미지 포맷으로 내려주고 용량도 더 작고 퀄리티 좋은 상태로 내려줌
- Image 컴포넌트를 사용했을 때의 장점을 정리하면
  - Resizing(response size)
  - Lazy loading(viewport 에 들어오면 로드)
  - 그외 optimization(webp 형태)
- Image 컴포넌트는 CLS 를 최소화 하는 것이 목적
  - CLS : 누적 레이아웃 이동
  - 컴포넌트가 없다가 생기거나 있다가 사이즈가 바뀌거나 컴포넌트 변경에 의해 돔 트리가 다시 렌더링되는 내용들


## 2-2) Head
- title, image, description 등 op(open graph) tag
  - 어떤 스타일로 공유됐으면 좋겠는지를 넣을 수 있다
- icon
- third party script
- Script Component
  - strategy
  - onLoad

## 2-3) Layout
- 공통 컴포넌트를 만들고
- ./layout.module.css 라는 CSS 모듈 만들기
- .container 라는 클래스 스타일을 만들고 Layout에서 해당 클래스 네임을 사용하면 css 가 적용

## 2-4) Global Css
- 컴포넌트는 아님
- "pages/_app.js", "styles/global.css" 만듦
- _app.js 에서 global.css 를 import 