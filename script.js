const tl = gsap.timeline();

// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

// var h1Text = document.querySelector("#firsth1").textContent;
// var splitedText = h1Text.split("");
// var clutter = "";
// splitedText.forEach(function (elem) {
//   clutter += `<span>${elem}</span>`;
// });
// document.querySelector("#firsth1").innerHTML = clutter;

var allH1 = document.querySelectorAll("#page2 h1");

allH1.forEach(function (elem) {
  var clutter = "";
  var h1Text = elem.textContent;
  var splittedText = h1Text.split("");
  splittedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});

tl.to("#page2 h1 span", {
  color: "#E3E3C4",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    start: "top 50%",
    end: "top -10%",
    scrub: 5,
  },
});
