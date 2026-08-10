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

  document.querySelectorAll(".copyable li span").forEach(item => {
    item.addEventListener("click", () => {
      navigator.clipboard.writeText(item.textContent);
      showToast("コピーしました ✅");
    });
  });


  window.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    // 現在のページのURLパスを取得（例: "/routine.html"）
    const currentPath = window.location.pathname;

    navLinks.forEach((link) => {
      // リンクのhref属性を取得
      const href = link.getAttribute('href');

      // 現在のパスがリンク先を含んでいるかチェック
      // ※ index.html の場合はパスが "/" になることがあるので注意
      if (currentPath.endsWith(href)) {
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