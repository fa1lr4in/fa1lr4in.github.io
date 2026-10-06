// Keep visitor statistics off the initial page-loading path.
window.addEventListener('load', () => {
  setTimeout(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
    document.body.appendChild(script);
  }, 1000);
}, { once: true });
