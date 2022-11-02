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
- 