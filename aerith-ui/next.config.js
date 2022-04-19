/** @type {import('next').NextConfig} */
// 引入css。
const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined'){
  require.extensions['.css']=file=>{}
}

module.exports = withCss({})


const nextConfig = {
  reactStrictMode: true,
}


module.exports = nextConfig
