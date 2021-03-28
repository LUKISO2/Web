window.onload=function() {
  const btn = document.querySelector(".btn-toggle");
  var lightStr = 'Světlý režim'
  var darkStr = 'Tmavý režim'

  btn.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");
    if(this.textContent == darkStr) this.textContent = lightStr;
    else this.textContent = darkStr;
    if(this.textContent == darkStr) document.cookie = "lighttheme=false";
    else document.cookie = "lighttheme=true";
  });
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
