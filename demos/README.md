# MiniMind 第六章交互演示

访问地址：https://fa1lr4in.github.io/demos/minimind.html

`minimind.html` 是自包含的静态网页，计算在浏览器本地完成，不依赖 Python、GPU 或推理接口。支持 20 个步骤、播放/暂停、前后单步、切换观察 Token，以及刷新后恢复步骤和观察位置（浏览器允许本地存储时）。

示例使用手工设置的教学权重：4 维隐藏向量、1 个 Block、1 个注意力头、10 个词表条目。这不是训练完成的 MiniMind 模型，也不是实际分词器对这句话的切分结果。

## 嵌入 Hexo 文章

在文章源文件的对应位置加入：

```html
{% raw %}
<iframe
  src="/demos/minimind.html"
  title="MiniMind 第六章：模型计算过程演示"
  loading="lazy"
  style="display:block;width:100%;height:1100px;border:0;"
></iframe>
<p><a href="/demos/minimind.html" target="_blank" rel="noopener">单独打开交互演示（手机推荐）</a></p>
{% endraw %}
```

固定高度不保证所有步骤都无需滚动，手机可使用单独打开链接。

## 后续重新生成博客时保留演示

这个仓库目前是 Hexo 的发布产物，不含 Hexo 源项目。若之后运行 Hexo 重新部署，直接添加的网页和首页入口可能被覆盖。请在真正的 Hexo 源项目中：

1. 将此 HTML 放到 `source/demos/minimind.html`。
2. 在 `_config.yml` 的 `skip_render` 中加入 `demos/**/*`，保留原有条目，不要重复定义该字段。
3. 在第六章文章里使用上面的嵌入代码；也可以在主题菜单中添加 `/demos/minimind.html`。

这样后续博客生成会原样保留演示，而不需要重复手工修改发布仓库。
