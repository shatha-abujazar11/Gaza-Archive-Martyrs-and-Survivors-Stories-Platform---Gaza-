const roleFilter = document.querySelector("#roleFilter");
const areaFilter = document.querySelector("#areaFilter");
const normalize = str => (str?? "").replace(/[\u200e\u200f]/g, "").trim();

function applyFilters(){
  const selectedRole = normalize(roleFilter?.value || "all");
  const selectedArea = normalize(areaFilter?.value || "all");

  document.querySelectorAll(".card").forEach(card => {
    const role = normalize(card.dataset.role);
    const area = normalize(card.dataset.area);
    const matchRole = (selectedRole === "all" || role === selectedRole);
    const matchArea = (selectedArea === "all" || area === selectedArea);
    card.style.display = (matchRole && matchArea)? "": "none";
});
}

roleFilter?.addEventListener("change", applyFilters);
areaFilter?.addEventListener("change", applyFilters);
document.addEventListener("DOMContentLoaded", applyFilters);

 document.querySelectorAll(".read-more-btn").forEach(button => {
  button.addEventListener("click", () => {
    const story = button.previousElementSibling;
    story.classList.toggle("hidden");
    button.textContent = story.classList.contains("hidden")? "إقرأ المزيد": "اخفاء";
});
});
