# My next app

그런데 이제 서버사이드 렌더링이 아닌,,

#### Site

<https://san02.duckdns.org>

#### Install

```bash
git clone https://github.com/Ich-mag-dich/my-next-app.git
cd my-next-app
npm install
```

#### Dev

```bash
pnpm dev  # localhost:3000
```

#### Build

```bash
pnpm build 
# dist/ 폴더로 빌드
```

#### Next config

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "export",
  trailingSlash: true,
  distDir: "dist",
  swcMinify: true,
};

module.exports = nextConfig;
```
