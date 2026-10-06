# MiniMind 第六章交互演示

访问地址：https://fa1lr4in.github.io/demos/minimind/chapter-06.html

入口：全站菜单中 ABOUT 前面的 DEMO（第五项），指向 https://fa1lr4in.github.io/demos/。

实验标题：从零训练一个可对话的模型（基于MiniMind）六：从一句话到下一个词，拆开看 MiniMind 的计算过程配套实验

`minimind/chapter-06.html` 是自包含的静态网页，计算在浏览器本地完成，不依赖 Python、GPU 或推理接口。支持 20 个步骤、播放/暂停、前后单步、切换观察 Token，以及刷新后恢复步骤和观察位置（浏览器允许本地存储时）。

示例使用手工设置的教学权重：4 维隐藏向量、1 个 Block、1 个注意力头、10 个词表条目。这不是训练完成的 MiniMind 模型，也不是实际分词器对这句话的切分结果。

## 嵌入 Hexo 文章

在文章源文件的对应位置加入：

```html
{% raw %}
<iframe
  src="/demos/minimind/chapter-06.html"
  title="从零训练一个可对话的模型（基于MiniMind）六：从一句话到下一个词，拆开看 MiniMind 的计算过程配套实验"
  loading="lazy"
  style="display:block;width:100%;height:1100px;border:0;"
></iframe>
<p><a href="/demos/minimind/chapter-06.html" target="_blank" rel="noopener">单独打开交互演示（手机推荐）</a></p>
{% endraw %}
```

固定高度不保证所有步骤都无需滚动，手机可使用单独打开链接。

## 后续重新生成博客时保留演示

这个仓库目前是 Hexo 的发布产物，不含 Hexo 源项目。若之后运行 Hexo 重新部署，直接添加的网页和菜单可能被覆盖。请在真正的 Hexo 源项目中：

1. 将此 HTML 放到 `source/demos/minimind/chapter-06.html`。
2. 在 `_config.yml` 的 `skip_render` 中加入 `demos/**/*`，保留原有条目，不要重复定义该字段。
3. 在第六章文章里使用上面的嵌入代码；在主题菜单中保留指向 `/demos/` 的 DEMO 入口。

这样后续博客生成会原样保留演示，而不需要重复手工修改发布仓库。

## 本次全站入口与加载优化

所有生成页面的桌面菜单和手机菜单已添加 DEMO；实验列表为 `demos/index.html`。主题脚本和 Font Awesome 样式已改用仓库内同版本的 `/js/`、`/css/` 和 `/webfonts/` 资源，避免首屏依赖外部主题 CDN。搜索索引改为点击搜索时下载；访问统计仍保留，通过 `js/visitor-count.js` 在页面加载完成后延迟加载。

这些生成页面的改动也需要在真正的 Hexo 源项目中同步到主题菜单/模板及配置，否则重新部署仍可能覆盖它们。请同时保留实验列表和访问统计脚本。

## 章节命名与旧链接兼容

实验按项目和章节命名：`demos/minimind/chapter-06.html` 对应 MiniMind 第六章，后续章节可使用 `chapter-07.html` 等名称，不需要覆盖第六章实验。

旧地址 `/demos/minimind.html` 仅保留为静态跳转页，自动转到第六章新地址。之前分享的链接仍然可用；新文章和嵌入代码请使用新地址。在 Hexo 源项目中也应保留旧跳转页 `source/demos/minimind.html`，并原样复制实验列表 `source/demos/index.html`。
