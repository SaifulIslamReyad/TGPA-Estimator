document.getElementById("redirectBtn").addEventListener("click", function () {
  var university = document.getElementById("university").value;
  var department = document.getElementById("department").value;
  var term = document.getElementById("term").value;
  window.location.href = university + department + term + ".html";
});
