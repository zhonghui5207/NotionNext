/**
 * 在此处配置字体
 */
const BLOG = require('../blog.config')

// const { fontFamily } = require('tailwindcss/defaultTheme')

function CJK() {
  switch (BLOG.LANG.toLowerCase()) {
    case 'zh-cn':
    case 'zh-sg':
      return 'SC'
    case 'zh':
    case 'zh-hk':
    case 'zh-tw':
      return 'TC'
    case 'ja':
    case 'ja-jp':
      return 'JP'
    case 'ko':
    case 'ko-kr':
      return 'KR'
    default:
      return null
  }
}

// 已优化：使用本地霞鹜文楷字体，无需额外的CJK字体
const fontSansCJK = []   // 霞鹜文楷已包含优秀的中文支持
const fontSerifCJK = []  // 保持字体栈简洁

const fontFamilies = {
  sans: [...BLOG.FONT_SANS, ...fontSansCJK],
  serif: [...BLOG.FONT_SERIF, ...fontSerifCJK],
  noEmoji: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'sans-serif'
  ]
}
module.exports = { fontFamilies }
