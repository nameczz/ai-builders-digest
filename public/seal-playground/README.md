# 团团游乐场

基于 `seal-playground-pixi-v0.11.html` 拆分的独立子目录。原生 HTML/CSS/JavaScript ES modules，继续使用附件内的 PixiJS，不增加框架、构建器或依赖。资讯站和旧 `/demo` 保持原样。

## 页面入口

- `/seal-playground#/home`：首页与海豹互动
- `/seal-playground#/draw`：画画
- `/seal-playground#/puzzle`：拼图
- `/seal-playground#/music`：音乐

菜单可切换场景；首页按钮和 Escape 回首页；再玩一次重置当前游戏。浏览器前进/后退及直接打开、刷新各地址都使用相同入口。生产域名会去除入口尾斜杠，HTML 的 base 固定指向 `/seal-playground/`，保证脚本、样式和图片仍从子目录加载。移动到其他子目录时同步修改 base。Hash 路由不需要服务器重写，进入另一个场景会重置该场景，不保存跨页游戏进度。

## 修改哪里

- `index.html` / `styles.css`：公共页面外壳、菜单和样式。
- `app.js`：启动和错误提示。
- `runtime.js`：一份共享的 Pixi 应用、角色、帽子、眼神、表情、物理、命中检测及场景生命周期。保留 v0.11 的角色行为，不复制到四个页面。
- `shared/`：资源清单、弹簧、变形网格、音效、浏览器输入和路由。
- `scenes/home.js`：首页布局。
- `scenes/draw.js`：路径、描画进度、完成动画。
- `scenes/puzzle.js`：拼块、吸附和完成状态。
- `scenes/music.js`：音符、旋律、播放与暂停状态。
- `assets/`：从附件提取的原始 PNG。
- `vendor/pixi.js`：附件的 PixiJS 包，保留 MIT 许可。

每个场景通过 `enter`、可选 `update`、`pointerDown`、`pointerMove`、`pointerEnd`、`pause`、`exit` 接入。场景局部状态不放进共享角色状态。共享输入只注册一次；切换先取消拖拽、停止旧音频、重置角色，再销毁场景图形并进入新场景。角色纹理和应用不随跳转重建。

新增场景时，在 `shared/router.js` 的场景名单及 `runtime.js` 的场景注册表添加一项，再添加菜单入口即可。无需复制角色或音频实现。

## 开发和验证

在仓库根目录运行 `npm run dev`，打开 `/seal-playground/index.html#/home`。也可用任意静态 HTTP 服务直接运行本目录；不要双击 HTML 使用 `file://`，ES modules 需要 HTTP。

仓库根目录检查：

```sh
node --test tests/seal-playground.test.mjs
npm run lint
npx tsc --noEmit
npm run build
```

测试覆盖路由、重复进入、重玩、画画连续进度、拼图取消/完成、音乐暂停，以及共享运行时初始化和跨场景中断。测试中的 Pixi/DOM 替身只验证逻辑，不能证明 GPU 画面或音质；应在支持 WebGL 的浏览器补做摘帽、拉伸、眼神、触摸及横竖屏视觉回归。

生产沿用现有仓库 Git → Vercel 流程；Next 静态导出会原样复制本目录。无需改动旧 `/demo` 路由或站点首页。
