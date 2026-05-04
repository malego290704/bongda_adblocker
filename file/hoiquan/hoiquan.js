blockvalid = (url) => {
  clean = url.replace(/[^=&]+=(&|$)/g,"").replace(/&$/,"")
  return clean.match('hoiquan') != null
}
console.log(blockvalid(window.location.href))
const clearlist = [
  "fixed inset-0 bg-black/50 z-[110] w-full h-full user-select-none flex justify-center items-center px-2",
  "w-full flex flex-col gap-4 mt-4 px-2 py-4 bg-[url('/assets/imgs/bg-top-bookmaker.png')] bg-cover bg-center rounded-[10px] bg-no-repeat",
  "bottom-[52px] px-0 md:px-2 md:bottom-0 md:block fixed w-full max-w-[720px] z-40 left-1/2 -translate-x-1/2",
  "block md:hidden fixed bottom-0 left-0 bg-[#010510] border-t-2 border-yellow-500 z-30 w-full h-[52px]",
  "relative z-10 flex border-t-2 border-blue-500/50 bg-[url('/assets/imgs/bg-sport-navbar.png')] bg-cover bg-center overflow-x-auto overflow-y-hidden",
  "w-full text-xs text-gray-600 py-4 px-2 flex items-center space-x-1 overflow-hidden",
  "w-full grid grid-cols-1 lt:grid-cols-2",
  "w-full bg-inherit",
  "mt-8 w-full flex justify-around items-center flex-wrap gap-4 py-12 px-4 bg-[#1e293b]",
]
function clearweb() {
  document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('/')) {
      link.remove();
    }
  });
  document.querySelectorAll('img').forEach(img => {
    const src = img.src.toLowerCase();
    if (src.includes('.gif')) {
      img.remove();
    }
  });
  const element = document.querySelector('.art-layers');
  if (element) {
    element.remove();
  }
}
if (blockvalid(window.location.href)) {
  setTimeout(() => {
    clearweb();
    for (const item of clearlist) {
      const element = document.querySelector(`[class="${item}"]`);
      if (element) {
        element.remove();
      }
    };
    document.querySelector('[data-rht-toaster]').remove();
    document.querySelectorAll('.hidden').forEach(el => el.remove());
    document.querySelector(`[class="w-full mx-auto h-auto relative bg-inherit dt:max-w-[1280px] bs:max-w-[1440px]"]`).style.maxWidth = '90%';
    setTimeout(clearweb, 1000);
  }, 1000);
  const b = document.body.insertAdjacentHTML('afterbegin', 
  `<style>#custom-home-button {position:fixed;top:10px;left:10px;z-index:9999;padding:8px 24px;background:#000;color:#fff;text-decoration:none;transition:200ms;border:2px solid white;border-radius:8px} #custom-home-button:hover {background:#222;top:8px}</style><a href="/" id="custom-home-button">🏠 Home</a>`);
}
