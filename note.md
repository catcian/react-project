## 安装插件
npm install -s less-load axios react-router-dom

1. babel-plugin-import 按需加载某一个组件 和 CSS 文件

sudo yarn add less@^2.7.3 大于2.7.3 小于 3.0.0

## 项目主页结构开发
### 主页结构定义
1. 页面结构定义
左侧菜单 右侧上中下 头部（上部分、下部分）
点某块区域 左侧、右侧上下不动
只有重点内容区域变化

1. 目录结构定义 

components 组件是被页面所引用的

1. 栅格系统
Row Col

1. calc计算方法使用
行内样式 style = {{}} react 语法
js 语法 是一个{}
less 实现变量的嵌套
--->css
<div>a
div{}
div a {}
--->less
@colorA: 'red';
div {
  color: @colorA
  a: {
    color: black
  }
}
100 vh === 100%
1vh == 1%

src/config 权限菜单

### JSONP
1. 进行跨域请求
