function tabToggle(id) {
  const tabs = document.querySelectorAll("#tab-all, #tab-open, #tab-closed");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
    tab.classList.add("inactive");
  });

  const selected = document.getElementById(id);
  selected.classList.remove("inactive");
  selected.classList.add("active");
}
