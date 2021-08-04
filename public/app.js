var root = document.getElementById("main")
let response
FB.getLoginStatus((res) => {
  response = res
});

m.render(root, response.status)