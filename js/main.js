'use strict';

{
  const toast = document.querySelector("#toast");

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }

  document.querySelectorAll(".copyable li").forEach(item => {
    item.addEventListener("click", () => {
      navigator.clipboard.writeText(item.innerText);
      showToast("コピーしました ✅");
    });
  });

  document.querySelectorAll("main img").forEach(image => {
    image.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.className = "lightbox";

      const big = document.createElement("img");
      big.src = image.src;
      big.alt = image.alt;

      overlay.appendChild(big);
      overlay.addEventListener("click", () => overlay.remove());
      document.body.appendChild(overlay);
    });
  });

  window.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    // 現在のページのファイル名を取得（ルート"/"の場合は index.html とみなす）
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach((link) => {
      // リンクのhref属性を取得
      const href = link.getAttribute('href');

      if (currentPath === href) {
        link.parentNode.classList.add('current');
      } else {
        link.parentNode.classList.remove('current');
      }
    });

    const main = document.querySelector('main');
    if (main) {
      const backToTop = document.createElement('button');
      backToTop.id = 'back-to-top';
      backToTop.type = 'button';
      backToTop.setAttribute('aria-label', 'ページの先頭に戻る');
      backToTop.innerHTML = '<i class="bi bi-arrow-up"></i>';
      document.body.appendChild(backToTop);

      main.addEventListener('scroll', () => {
        backToTop.classList.toggle('show', main.scrollTop > 400);
      });

      backToTop.addEventListener('click', () => {
        main.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  });

}