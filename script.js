function AfficherAnnaire() {
  document.getElementById("bt").on = "true";
  document.getElementById("bt").innerHTML = "Cacher <br/> l'annuaire";
  document.getElementById("annuaire").style.visibility = "visible";
}
function CacherAnnaire() {
  document.getElementById("bt").on = "false";
  document.getElementById("bt").innerHTML = "Afficher <br/> l'annuaire";
  document.getElementById("annuaire").style.visibility = "hidden";
}
function onOF() {
  if (document.getElementById("bt").on == "false") {
    CacherAnnaire();
  } else {
    AfficherAnnaire();
  }
}

myBody.addEventListener("click", function () {
  CacherAnnaire();
});
