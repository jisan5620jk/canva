document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-btn");
  const all_content = document.querySelectorAll(".tab-content");

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (tab) {
        tab.classList.remove("active");
      });
      tab.classList.add("active");

      all_content.forEach(function (content) {
        content.classList.remove("active");
      });
      all_content[index].classList.add("active");
    });
  });
});
