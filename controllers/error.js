const products = [];
exports.get404 = (req, res, next) => {
  res.render("404", {
    pageTitle: "404 |Page Not Found",
    path: "/404",
  });
};
