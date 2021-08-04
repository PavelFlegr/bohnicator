var root = document.getElementById("main")

var App = {
  view: function() {
      return m("main", userID)
  }
}

m.mount(root, App)