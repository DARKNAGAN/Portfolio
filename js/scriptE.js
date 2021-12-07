gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray("img");
images.forEach((img, i) => {
  ScrollTrigger.create({
    trigger: img,
    toggleClass: "active",
    start: "top 80%",
    end: "top 8%",
    markers: false,
  });
});

$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});

$("body").scrollspy({ target: "#container" });

$('[data-spy="scroll"]').on("activate.bs.scrollspy", function () {
  $("#sidebar").toggleClass("active");
});
