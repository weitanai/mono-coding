module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 750, // 设计稿宽度
      unitPrecision: 3, // 转换后保留的小数位数
      viewportUnit: "vw", // 转换成的视窗单位
      selectorBlackList: [".ignore", ".hairlines"], // 不需要转换的类名
      minPixelValue: 1, // 最小的转换数值
      mediaQuery: false, // 是否转换媒体查询中的px
    }
  }
};