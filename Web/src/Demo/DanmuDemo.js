/*
 * @Descripttion:
 * @version:
 * @Author: Michael Sun @ www.cctv3.net
 * @Date: 2021-01-30 09:36:48
 * @LastEditors: Michael Sun
 * @LastEditTime: 2021-01-30 09:36:49
 */
(function (t) {
  t(".j-barrager").remove();
  let r = (t, r) => (
    (t = Math.ceil(t)),
    (r = Math.floor(r)),
    Math.floor(Math.random() * (r - t)) + t
  );
  t(".j-barrager-list li").each(function (a, n) {
    let e = t(n).find(".j-barrager-list-avatar").attr("data-src"),
      i = t(n).find(".j-barrager-list-content").html();
    if (/\{!\{.*/.test(i)) return;
    let s = t(".j-header").height(),
      o = r(s, t(window).height() - 34) + "px",
      l = `translateX(${t(window).width() + r(0, 500)}px)`,
      c = `transform ${r(30, 55)}s linear`,
      f = t("<div class='j-barrager'></div>");
    f.html(`\n            <img src="${e}">\n            <p>${i}</p>\n        `),
      f.css({ top: o, transform: l, transition: c }),
      t("body").append(f);
    let m = setTimeout(function () {
      f.css({ transform: "translateX(-100%)" }), clearTimeout(m);
    }, 30);
    f.on("transitionend", function () {
      f.css({ transform: l, transition: "" });
      let t = setTimeout(function () {
        f.css({ transform: "translateX(-100%)", transition: c }),
          clearTimeout(t);
      }, 50);
    });
  });
})(jQuery);
