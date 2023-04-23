function AfficherAnnuaire() {
  document.getElementById("bt").on = "true";
  document.getElementById("bt").innerHTML = "Cacher <br/> l'annuaire";
  document.getElementById("annuaire").style.visibility = "visible";
}
function CacherAnnuaire() {
  document.getElementById("bt").on = "false";
  document.getElementById("bt").innerHTML = "Afficher <br/> l'annuaire";
  document.getElementById("annuaire").style.visibility = "hidden";
}
function onOf() {
  if (document.getElementById("bt").on == "false") {
    AfficherAnnuaire();
  } else {
    CacherAnnuaire();
  }
}

myBody.addEventListener("click", function () {
  CacherAnnuaire();
});
