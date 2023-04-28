# My next app

그런데 이제 정적 빌드를 곁들인,,

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
pnpm build && pnpm start
# dist/ 폴더로 정적 빌드
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
