import { startPlayground } from './runtime.js';

startPlayground().catch((error) => {
    console.error(error);
    document.getElementById('loading').hidden = true;
    document.getElementById('error').hidden = false;
    document.getElementById('error-detail').textContent = '当前浏览器无法启动互动，请使用开启硬件加速的 Chrome、Edge 或 Safari 后重试。';
    window.sealError = error.message;
});
