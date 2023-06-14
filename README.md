# My next app



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
npm run dev  # localhost:3000
```

#### Build

```bash
npm run build 
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
