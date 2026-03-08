const totalIssueCount = document.getElementById("total-issue-count");

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

function loadIssues() {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((result) => {
      totalIssueCount.textContent = `${result.data.length} Issues`;
      displayIssues(result.data);
    });
}

function getLabel(label) {
  if (label === "bug") {
    return `<div class="rounded-full bg-[#FEECEC] text-[#EF4444] text-xs font-medium w-fit gap-0.5 px-2 py-1.5 flex justify-center items-center border border-[#FECACA]">
      <i class="fa-solid fa-bug"></i> BUG
    </div>`;
  } else if (label === "help wanted") {
    return `<div class="rounded-full bg-[#FFF8DB] text-[#D97706] text-xs font-medium w-fit gap-0.5 px-2 py-1.5 flex justify-center items-center border border-[#FDE68A]">
      <i class="fa-solid fa-life-ring"></i> HELP WANTED
    </div>`;
  } else if (label === "enhancement") {
    return `<div class="rounded-full bg-[#DEFCE8] text-[#00A96E] text-xs font-medium w-fit gap-0.5 px-2 py-1.5 flex justify-center items-center border border-[#BBF7D0]">
      <i class="fa-solid fa-wand-magic-sparkles"></i> ENHANCEMENT
    </div>`;
  } else if (label === "good first issue") {
    return `<div class="rounded-full bg-[#E0E7FF] text-[#6366F1] text-xs font-medium w-fit gap-0.5 px-2 py-1.5 flex justify-center items-center border border-[#C7D2FE]">
      <i class="fa-solid fa-hands-helping"></i> GOOD FIRST ISSUE
    </div>`;
  } else if (label === "documentation") {
    return `<div class="rounded-full bg-[#E8F4FD] text-[#0EA5E9] text-xs font-medium w-fit gap-0.5 px-2 py-1.5 flex justify-center items-center border border-[#BAE6FD]">
      <i class="fa-solid fa-book"></i> DOCUMENTATION
    </div>`;
  }
  return "";
}

function getPriority(priority) {
  if (priority === "high") {
    return `<div class="rounded-full bg-[#FEECEC] text-[#EF4444] text-xs font-medium w-20 py-1.5 flex justify-center items-center">HIGH</div>`;
  } else if (priority === "medium") {
    return `<div class="rounded-full bg-[#FFF6D1] text-[#F59E0B] text-xs font-medium w-20 py-1.5 flex justify-center items-center">MEDIUM</div>`;
  } else {
    return `<div class="rounded-full bg-[#EEEFF2] text-[#9CA3AF] text-xs font-medium w-20 py-1.5 flex justify-center items-center">LOW</div>`;
  }
}

function displayIssues(issues) {
  const container = document.getElementById("issue-container");
  container.innerHTML = "";

  issues.forEach((issue, index) => {
    const borderColor = issue.status === "open" ? "#00A96E" : "#A855F7";
    const statusImg =
      issue.status === "open"
        ? "./assets/Open-Status.png"
        : "./assets/Closed-Status.png";
    const statusAlt = issue.status === "open" ? "Open status" : "Closed status";
    const labels = issue.labels.map((label) => getLabel(label)).join("");
    const priority = getPriority(issue.priority);
    const date = new Date(issue.createdAt).toLocaleDateString();

    const card = `
      <div class="card w-full bg-base-100 border-t-3 border-[${borderColor}] shadow-md">
        <div class="border-b border-[#E4E4E7] p-4">
          <div class="flex justify-between items-center mb-3">
            <img src="${statusImg}" alt="${statusAlt}">
            ${priority}
          </div>
          <div>
            <h2 class="font-semibold text-[#1F2937] text-sm mb-2">${issue.title}</h2>
            <p class="line-clamp-2 text-[#64748B] font-normal mb-3">${issue.description}</p>
            <div class="flex justify-start items-center flex-wrap gap-1">
              ${labels}
            </div>
          </div>
        </div>
        <div class="p-4 space-y-2">
          <p class="text-[#64748B] text-xs font-normal">#${index + 1} by ${issue.author}</p>
          <p class="text-[#64748B] text-xs font-normal">${date}</p>
        </div>
      </div>
    `;

    container.innerHTML += card;
  });
}

loadIssues();
