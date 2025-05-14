// 获取所有的链接元素
const links = document.querySelectorAll('nav ul li a');

// 为每个链接添加点击事件监听器，实现平滑滚动效果
links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior:'smooth'
      });
    }
  });
});