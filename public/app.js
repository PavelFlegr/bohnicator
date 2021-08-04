var root = document.getElementById("main")

let response

FB.getLoginStatus(function(response) {
    response = response
});

m.render(root, response.status)