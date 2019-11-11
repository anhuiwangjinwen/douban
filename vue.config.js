module.exports = {
    　　devServer: {
    　　　　proxy: {
    　　　　　　'/api': {
    　　　　　　　　target: 'http://localhost:3000',// 要跨域的域名
    　　　　　　　　changeOrigin: true, // 是否开启跨域
    　　　　　　},
    　　　　}
    　　}
    }