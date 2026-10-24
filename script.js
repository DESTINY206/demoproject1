// ---------- Get elements from the page ----------
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const count = document.getElementById("count");
const barFill = document.getElementById("barFill");
const empty = document.getElementById("empty");
const filterButtons = document.querySelectorAll(".filter");

// ---------- Data ----------
// Each task looks like: { id: 1, text: "Study HTML", done: false }
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

// ---------- Show today's date and a greeting ----------
function showDate() {
  const now = new Date();
  document.getElementById("month").textContent =
    now.toLocaleString("en-US", { month: "short" });
  document.getElementById("day").textContent = now.getDate();

  const hour = now.getHours();
  let greeting = "Good evening";
  if (hour < 12) greeting = "Good morning";
  else if (hour < 17) greeting = "Good afternoon";
  document.getElementById("greeting").textContent =
    greeting + "! Plan your day, one task at a time.";
}

// ---------- Save to browser storage ----------
function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ---------- Draw the list on screen ----------
function render() {
  list.innerHTML = "";

  // Pick which tasks to show based on the filter
  const visible = tasks.filter(function (task) {
    if (currentFilter === "active") return !task.done;
    if (currentFilter === "done") return task.done;
    return true;
  });

  visible.forEach(function (task) {
    const li = document.createElement("li");
    if (task.done) li.classList.add("done");

    const check = document.createElement("button");
    check.className = "check";
    check.textContent = "✓";
    check.setAttribute("aria-label", "Mark task done");
    check.addEventListener("click", function () {
      task.done = !task.done;
      save();
      render();
    });

    const text = document.createElement("span");
    text.className = "text";
    text.textContent = task.text;

    const del = document.createElement("button");
    del.className = "delete";
    del.textContent = "Delete";
    del.addEventListener("click", function () {
      tasks = tasks.filter(function (t) { return t.id !== task.id; });
      save();
      render();
    });

    li.appendChild(check);
    li.appendChild(text);
    li.appendChild(del);
    list.appendChild(li);
  });

  // Show the empty message when there is nothing to display
  empty.style.display = visible.length === 0 ? "block" : "none";

  // Update the counter and progress bar
  const doneCount = tasks.filter(function (t) { return t.done; }).length;
  count.textContent = doneCount + " of " + tasks.length + " done";
  barFill.style.width =
    tasks.length === 0 ? "0%" : (doneCount / tasks.length) * 100 + "%";
}

// ---------- Add a new task ----------
function addTask() {
  const text = input.value.trim();
  if (text === "") {
    input.focus();
    return;
  }
  tasks.push({ id: Date.now(), text: text, done: false });
  input.value = "";
  save();
  render();
}

addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTask();
});

// ---------- Filter buttons ----------
filterButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    currentFilter = btn.dataset.filter;
    filterButtons.forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
    render();
  });
});

// ---------- Start ----------
showDate();
render();
