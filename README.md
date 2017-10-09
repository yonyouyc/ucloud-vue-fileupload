# ucloud-vue-fileupload

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
需要支持的场景：
尽量保持api和原有ko系列的api一致
测试用例:

1.当前租户：附件只读

2.当前租户：附件上传下载删除

3.当前租户：行内附件

4.跨租户：行内附件

5.跨租户：非行内附件

6.isDark 来自招投标的需求隐藏返回的文件名和下载下来的文件名

请参考 https://github.com/yonyouyc/ucloud-ko-fileupload进行实现
另外需要依赖webuploader请注意添加
