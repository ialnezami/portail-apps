function AfficherAnnaire() {
  document.getElementById("annuaire").style.visibility = "visible";
  document.getElementById("afficher").style.display = "none";
  document.getElementById("cacher").style.display = "block";
}
function CacherAnnaire() {
  document.getElementById("annuaire").style.visibility = "hidden";
  document.getElementById("afficher").style.display = "block";
  document.getElementById("cacher").style.display = "none";
}
