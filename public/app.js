var root = document.getElementById("main")

var App = {
  view: function() {
      return m("main", "test")
  }
}

m.mount(root, App)