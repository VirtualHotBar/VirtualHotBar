/* https://hexo.fluid-dev.com/docs/advance/#hexo-%E6%B3%A8%E5%85%A5%E4%BB%A3%E7%A0%81
register 函数可接受三个参数，第一个参数是代码片段注入的位置，接受以下值：

head_begin: 注入在 <head> 之后（默认）
head_end: 注入在 </head> 之前
body_begin: 注入在 <body> 之后
body_end: 注入在 </body> 之前
第二个参数是注入的片段，可以是字符串，也可以是一个返回值为字符串的函数。

第三个参数是注入的页面类型，接受以下值：

default: 注入到每个页面（默认值）
home: 只注入到主页（is_home() 为 true 的页面）
post: 只注入到文章页面（is_post() 为 true 的页面）
page: 只注入到独立页面（is_page() 为 true 的页面）
archive: 只注入到归档页面（is_archive() 为 true 的页面）
category: 只注入到分类页面（is_category() 为 true 的页面）
tag: 只注入到标签页面（is_tag() 为 true 的页面）
或是其他自定义 layout 名称，例如在Fluid 主题中 about 对应关于页、links 对应友联页 */

hexo.extend.injector.register('head_end', '<link rel="stylesheet" href="/css/style_blog.css">', 'default');

//font-awesome
hexo.extend.injector.register('head_end', '<link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/6.1.2/css/all.css" rel="stylesheet"></link>', 'default');

//51la统计
hexo.extend.injector.register('head_end', '<script charset="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js"></script><script>LA.init({id: "JfwjQ8GfoR1mSU9L",ck: "JfwjQ8GfoR1mSU9L"})</script>', 'default');

//底部
hexo.extend.injector.register('body_end', `<script type="text/javascript" src="/js/main_blog.js"></script>`, 'default'); 
