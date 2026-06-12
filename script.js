const CM_W = 42;
const CM_H = 59.4;
const CANVAS_W = 1587;
const CANVAS_H = 2245;
const PX_PER_CM = CANVAS_W / CM_W;
const ASSET_VERSION = Date.now();

const defaultTasks = ["運動燃料", "閱讀解密", "探險日誌"];
const zhDays = ["第一天", "第二天", "第三天", "第四天", "第五天"];
const weekdays = ["日", "一", "二", "三", "四", "五", "六"];

const themes = {
  dino: {
    name: "恐龍冒險",
    image: "assets/dinosaur.png",
    bg: ["#153d38", "#245f4c", "#f5ce55"],
    dateFont: "700 47px DynaPuff, Noto Sans TC, sans-serif",
    dateColors: ["#9be7ff", "#c9ff93", "#ff9f9f", "#ffd28d", "#fff0a0"],
    dateShadow: true,
    taskFont: "700 38px Noto Sans TC, sans-serif",
    taskColor: "#000000",
    taskGapCm: 2.45,
    dates: [
      { x: 3.84, y: 12.06, r: -23.6 },
      { x: 19.45, y: 12.85, r: -23.6 },
      { x: 29.87, y: 22.85, r: -23.6 },
      { x: 15.18, y: 32.05, r: -23.6 },
      { x: 28.28, y: 41.01, r: -23.6 }
    ],
    tasks: [
      [{ x: 4.06, y: 14.87 }, { x: 4.25, y: 17.03 }, { x: 4.3, y: 19 }],
      [{ x: 19.7, y: 15.3 }, { x: 19.8, y: 17.51 }, { x: 19.94, y: 19.33 }],
      [{ x: 30.02, y: 25.14 }, { x: 30.12, y: 27.16 }, { x: 30.26, y: 29.36 }],
      [{ x: 15.91, y: 34.5 }, { x: 16.1, y: 36.71 }, { x: 16.06, y: 38.68 }],
      [{ x: 29.16, y: 43.81 }, { x: 29.3, y: 45.88 }, { x: 29.45, y: 47.84 }]
    ]
  },
  space: {
    name: "太空任務",
    image: "assets/space-bg.png",
    bg: ["#0a1230", "#15245a", "#3b246f"],
    dateFont: "900 54px Noto Sans TC, sans-serif",
    dateColors: ["#5ce1e6", "#f57e6b", "#51b2e0", "#ffd800", "#cea172"],
    taskFont: "800 45px Noto Sans TC, sans-serif",
    taskColor: "#ffffff",
    taskGapCm: 2.45,
    dates: [
      { x: 21.21, y: 6.37 },
      { x: 3.2, y: 7.14 },
      { x: 18.57, y: 18.96 },
      { x: 27.67, y: 33.81 },
      { x: 5.61, y: 30.66 }
    ],
    tasks: [
      [{ x: 27.67, y: 12.04 }, { x: 27.72, y: 14.72 }, { x: 27.82, y: 17.41 }],
      [{ x: 8.57, y: 12.71 }, { x: 8.66, y: 15.25 }, { x: 8.76, y: 18.13 }],
      [{ x: 20.06, y: 25.41 }, { x: 20.24, y: 28.03 }, { x: 20.48, y: 30.47 }],
      [{ x: 27.62, y: 39.01 }, { x: 27.96, y: 41.7 }, { x: 28.1, y: 44.58 }],
      [{ x: 7.22, y: 36.23 }, { x: 7.37, y: 38.87 }, { x: 7.51, y: 41.65 }]
    ]
  },
  forest: {
    name: "森林動物",
    image: "assets/forest-bg.png",
    bg: ["#f1df99", "#b8d36d", "#5a9d65"],
    dateFont: "800 43px Noto Sans TC, sans-serif",
    dateColors: ["#663200", "#663200", "#663200", "#663200", "#663200"],
    taskFont: "800 45px Noto Sans TC, sans-serif",
    taskColor: "#000000",
    taskGapCm: 2.35,
    dates: [
      { x: 6.22, y: 8.44 },
      { x: 18.7, y: 8.53 },
      { x: 25.27, y: 23.41 },
      { x: 18.7, y: 39.54 },
      { x: 2.23, y: 28.64 }
    ],
    tasks: [
      [{ x: 9.34, y: 13.43 }, { x: 9.43, y: 16.07 }, { x: 9.43, y: 18.61 }],
      [{ x: 27.43, y: 12.95 }, { x: 27.58, y: 15.59 }, { x: 27.62, y: 18.04 }],
      [{ x: 30.17, y: 28.58 }, { x: 30.22, y: 31.14 }, { x: 30.31, y: 33.54 }],
      [{ x: 19.03, y: 44.34 }, { x: 19.13, y: 46.93 }, { x: 19.18, y: 49.33 }],
      [{ x: 3.43, y: 33.25 }, { x: 3.48, y: 35.99 }, { x: 3.43, y: 38.24 }]
    ]
  },
  ocean: {
    name: "海底尋寶",
    image: "assets/sea.png",
    bg: ["#0a6fa9", "#14a9c9", "#91e7df"],
    dateFont: "900 60px \"可畫俏皮黑\", \"Noto Sans TC\", sans-serif",
    dateColors: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    dateStrokeColors: ["#2d448c", "#bf3b2a", "#fd7524", "#ffa81a", "#663200"],
    dateStrokeWidth: 11,
    taskFont: "800 43px \"Childos Arabic\", \"Noto Sans TC\", sans-serif",
    taskColor: "#ffffff",
    taskGapCm: 2.35,
    dates: [
      { x: 7.94, y: 10.55, r: -6 },
      { x: 31.03, y: 12.13, r: 4 },
      { x: 14.04, y: 23.22, r: -4 },
      { x: 24.07, y: 31.72, r: 5 },
      { x: 29.5, y: 42.23, r: -3 }
    ],
    tasks: [
      [{ x: 7.94, y: 13.57 }, { x: 8.09, y: 15.78 }, { x: 8.18, y: 17.75 }],
      [{ x: 30.22, y: 15.25 }, { x: 30.22, y: 17.46 }, { x: 30.22, y: 19.38 }],
      [{ x: 13.8, y: 25.62 }, { x: 13.8, y: 27.97 }, { x: 13.94, y: 29.84 }],
      [{ x: 23.54, y: 34.36 }, { x: 23.74, y: 36.9 }, { x: 23.83, y: 38.63 }],
      [{ x: 29.02, y: 44.77 }, { x: 29.11, y: 47.08 }, { x: 29.21, y: 48.85 }]
    ]
  }
};

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function ensureTaskPositions(theme) {
  if (theme.tasks) return;
  theme.tasks = theme.taskStarts.map((start) => defaultTasks.map((_, index) => ({
    x: start.x,
    y: start.y + index * theme.taskGapCm
  })));
}

Object.values(themes).forEach(ensureTaskPositions);

const positionDefaults = cloneData(Object.fromEntries(
  Object.entries(themes).map(([key, theme]) => [key, {
    dates: theme.dates,
    tasks: theme.tasks
  }])
));

const interactionLayoutDefaults = {
  dino: {
    checks: [
      [{ x: 10.73, y: 15.25 }, { x: 10.63, y: 17.41 }, { x: 10.44, y: 19.43 }],
      [{ x: 26.2, y: 15.85 }, { x: 26.3, y: 18.06 }, { x: 26.38, y: 20 }],
      [{ x: 36.57, y: 25.69 }, { x: 36.67, y: 27.71 }, { x: 36.6, y: 29.8 }],
      [{ x: 22.54, y: 34.84 }, { x: 22.68, y: 37.09 }, { x: 22.63, y: 39.2 }],
      [{ x: 35.61, y: 44.36 }, { x: 35.75, y: 46.43 }, { x: 35.69, y: 48.42 }]
    ],
    chest: { x: 11.88, y: 52.4 }
  },
  space: {
    checks: [
      [{ x: 35.98, y: 12.61 }, { x: 35.98, y: 15.25 }, { x: 35.98, y: 17.75 }],
      [{ x: 16.49, y: 13.33 }, { x: 16.58, y: 16.07 }, { x: 16.49, y: 18.76 }],
      [{ x: 27.86, y: 25.43 }, { x: 27.91, y: 28.36 }, { x: 28.06, y: 31.04 }],
      [{ x: 35.69, y: 39.44 }, { x: 35.83, y: 42.08 }, { x: 35.69, y: 44.72 }],
      [{ x: 14.77, y: 36.78 }, { x: 14.92, y: 39.42 }, { x: 15.06, y: 42.2 }]
    ],
    chest: { x: 22.1, y: 54.42 }
  },
  forest: {
    checks: [
      [{ x: 16.89, y: 13.98 }, { x: 16.98, y: 16.62 }, { x: 16.98, y: 19.16 }],
      [{ x: 34.88, y: 13.5 }, { x: 35.03, y: 16.14 }, { x: 35.07, y: 18.59 }],
      [{ x: 38.09, y: 28.79 }, { x: 38.18, y: 31.14 }, { x: 38.28, y: 33.59 }],
      [{ x: 26.33, y: 44.68 }, { x: 26.52, y: 47.32 }, { x: 26.57, y: 49.52 }],
      [{ x: 10.44, y: 33.49 }, { x: 10.58, y: 36.04 }, { x: 10.73, y: 38.29 }]
    ],
    chest: { x: 20.81, y: 28.5 }
  },
  ocean: {
    checks: [
      [{ x: 14.76, y: 13.86 }, { x: 14.81, y: 15.68 }, { x: 14.81, y: 17.75 }],
      [{ x: 36.55, y: 15.25 }, { x: 36.65, y: 17.32 }, { x: 36.79, y: 19.38 }],
      [{ x: 20.52, y: 25.91 }, { x: 20.42, y: 27.83 }, { x: 20.47, y: 29.84 }],
      [{ x: 30.07, y: 34.6 }, { x: 30.07, y: 36.37 }, { x: 30.22, y: 38.53 }],
      [{ x: 35.74, y: 44.77 }, { x: 35.83, y: 46.69 }, { x: 35.98, y: 48.76 }]
    ],
    chest: { x: 17.11, y: 49 }
  }
};

const STORAGE_KEY = "fiveDayPlannerPositionsV3";
const INTERACTION_KEY = "fiveDayPlannerInteractionV1";
const INTERACTION_DEFAULTS_KEY = "fiveDayPlannerInteractionDefaultsV2";
const SIDEBAR_KEY = "fiveDayPlannerSidebarCollapsed";
const INTERACTIVE_MODE_KEY = "fiveDayPlannerInteractiveMode";
const SELECTED_THEME_KEY = "fiveDayPlannerSelectedTheme";
const PLANNER_STATE_KEY = "fiveDayPlannerStateV1";

const state = {
  theme: "dino",
  dates: [],
  tasks: Array.from({ length: 5 }, () => [...defaultTasks]),
  images: {},
  calibration: false,
  interactive: false,
  interactiveCalibration: false,
  completed: {},
  interactionLayout: {},
  interactionDefaults: {},
  reward: "決定周末的旅遊地點",
  drag: null
};

window.state = state;

const els = {
  canvas: document.getElementById("sheetCanvas"),
  startDate: document.getElementById("startDate"),
  dateList: document.getElementById("dateList"),
  taskEditor: document.getElementById("taskEditor"),
  themeGrid: document.getElementById("themeGrid"),
  themeName: document.getElementById("themeName"),
  downloadBtn: document.getElementById("downloadBtn"),
  printBtn: document.getElementById("printBtn"),
  appShell: document.querySelector(".app-shell"),
  collapseSidebarBtn: document.getElementById("collapseSidebarBtn"),
  expandSidebarBtn: document.getElementById("expandSidebarBtn"),
  overlay: document.getElementById("overlay"),
  calibrationToggle: document.getElementById("calibrationToggle"),
  interactiveToggle: document.getElementById("interactiveToggle"),
  interactiveCalibrationToggle: document.getElementById("interactiveCalibrationToggle"),
  rewardInput: document.getElementById("rewardInput"),
  resetProgressBtn: document.getElementById("resetProgressBtn"),
  saveInteractionDefaultBtn: document.getElementById("saveInteractionDefaultBtn"),
  resetInteractionPositionsBtn: document.getElementById("resetInteractionPositionsBtn"),
  progressStatus: document.getElementById("progressStatus"),
  rewardModal: document.getElementById("rewardModal"),
  rewardText: document.getElementById("rewardText"),
  closeRewardBtn: document.getElementById("closeRewardBtn"),
  coordOutput: document.getElementById("coordOutput"),
  copyCoordsBtn: document.getElementById("copyCoordsBtn"),
  savePositionsBtn: document.getElementById("savePositionsBtn"),
  resetPositionsBtn: document.getElementById("resetPositionsBtn")
};

const ctx = els.canvas.getContext("2d");

function cm(value) {
  return value * PX_PER_CM;
}

function toDateInputValue(date) {
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * 60000);
  return local.toISOString().slice(0, 10);
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function formatDate(value) {
  const date = new Date(`${value}T00:00:00`);
  return `${date.getMonth() + 1}/${date.getDate()}(${weekdays[date.getDay()]})`;
}

function resetDates(startValue) {
  const base = new Date(`${startValue}T00:00:00`);
  state.dates = Array.from({ length: 5 }, (_, index) => toDateInputValue(addDays(base, index)));
  savePlannerState();
  renderControls();
  drawSheet();
}

function moveDate(index, direction) {
  const target = index + direction;
  if (target < 0 || target >= state.dates.length) return;
  [state.dates[index], state.dates[target]] = [state.dates[target], state.dates[index]];
  [state.tasks[index], state.tasks[target]] = [state.tasks[target], state.tasks[index]];
  savePlannerState();
  renderControls();
  drawSheet();
}

function updateDate(index, value) {
  state.dates[index] = value;
  savePlannerState();
  drawSheet();
}

function updateTask(dayIndex, taskIndex, value) {
  state.tasks[dayIndex][taskIndex] = value;
  savePlannerState();
  drawSheet();
}

function applyFirstDayToAll() {
  for (let day = 1; day < 5; day += 1) {
    state.tasks[day] = [...state.tasks[0]];
  }
  savePlannerState();
  renderControls();
  drawSheet();
}

function readPlannerState() {
  try {
    return JSON.parse(localStorage.getItem(PLANNER_STATE_KEY) || "{}");
  } catch (error) {
    return {};
  }
}

function savePlannerState() {
  localStorage.setItem(PLANNER_STATE_KEY, JSON.stringify({
    dates: state.dates,
    tasks: state.tasks,
    interactive: state.interactive
  }));
}

function loadPlannerState() {
  const saved = readPlannerState();
  if (Array.isArray(saved.dates) && saved.dates.length === 5) {
    state.dates = saved.dates;
  }
  if (Array.isArray(saved.tasks) && saved.tasks.length === 5) {
    state.tasks = saved.tasks;
  }
  return state.dates.length === 5;
}

function persistVisibleState() {
  const interactiveEnabled = Boolean(els.interactiveToggle.checked || state.interactive);
  state.interactive = interactiveEnabled;
  localStorage.setItem(INTERACTIVE_MODE_KEY, interactiveEnabled ? "1" : "0");
  savePlannerState();
}

function renderControls() {
  els.dateList.innerHTML = "";
  state.dates.forEach((date, index) => {
    const row = document.createElement("div");
    row.className = "date-row";
    row.innerHTML = `
      <span class="day-label">${zhDays[index]}</span>
      <input class="text-input" type="date" value="${date}" aria-label="${zhDays[index]}日期">
      <button class="move-button" type="button" aria-label="${zhDays[index]}往上移">↑</button>
      <button class="move-button" type="button" aria-label="${zhDays[index]}往下移">↓</button>
    `;
    const input = row.querySelector("input");
    const buttons = row.querySelectorAll("button");
    input.addEventListener("input", (event) => updateDate(index, event.target.value));
    buttons[0].addEventListener("click", () => moveDate(index, -1));
    buttons[1].addEventListener("click", () => moveDate(index, 1));
    buttons[0].disabled = index === 0;
    buttons[1].disabled = index === state.dates.length - 1;
    els.dateList.append(row);
  });

  els.taskEditor.innerHTML = "";
  state.tasks.forEach((tasks, dayIndex) => {
    const panel = document.createElement("article");
    panel.className = "day-panel";
    panel.innerHTML = `
      <header>
        <h3>${zhDays[dayIndex]}</h3>
        ${dayIndex === 0 ? '<button class="small-button" type="button">套用到全部日期</button>' : ""}
      </header>
      <div class="task-fields"></div>
    `;
    if (dayIndex === 0) {
      panel.querySelector(".small-button").addEventListener("click", applyFirstDayToAll);
    }
    const fields = panel.querySelector(".task-fields");
    tasks.forEach((task, taskIndex) => {
      const label = document.createElement("label");
      label.className = "field-label";
      label.textContent = `任務${taskIndex + 1}`;
      const input = document.createElement("input");
      input.className = "text-input";
      input.type = "text";
      input.value = task;
      input.setAttribute("aria-label", `${zhDays[dayIndex]}任務${taskIndex + 1}`);
      input.addEventListener("input", (event) => updateTask(dayIndex, taskIndex, event.target.value));
      fields.append(label, input);
    });
    els.taskEditor.append(panel);
  });
}

function drawBackground(theme) {
  const image = state.images[state.theme];
  if (image && image.complete && image.naturalWidth > 0) {
    ctx.drawImage(image, 0, 0, CANVAS_W, CANVAS_H);
    return;
  }

  const gradient = ctx.createLinearGradient(0, 0, 0, CANVAS_H);
  theme.bg.forEach((color, index) => {
    gradient.addColorStop(index / (theme.bg.length - 1), color);
  });
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

  if (state.theme === "dino") drawDinoWorld();
  if (state.theme === "space") drawSpaceWorld();
  if (state.theme === "forest") drawForestWorld();
  if (state.theme === "ocean") drawOceanWorld();
}

function drawRoundedRect(x, y, w, h, r, fill, stroke) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
  ctx.fillStyle = fill;
  ctx.fill();
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 4;
    ctx.stroke();
  }
}

function drawDinoWorld() {
  ctx.fillStyle = "#653b24";
  ctx.beginPath();
  ctx.moveTo(0, cm(48));
  ctx.bezierCurveTo(cm(8), cm(45), cm(18), cm(54), cm(42), cm(47));
  ctx.lineTo(CANVAS_W, CANVAS_H);
  ctx.lineTo(0, CANVAS_H);
  ctx.fill();
  for (let i = 0; i < 5; i += 1) {
    const p = themes.dino.dates[i];
    drawRoundedRect(cm(p.x - 0.7), cm(p.y - 0.9), cm(8.2), cm(3), 24, "rgba(23, 64, 56, 0.62)", "#f7e073");
  }
  drawSimpleDino(cm(5), cm(42), 1.2);
  drawSimpleDino(cm(28), cm(51), 0.9);
}

function drawSimpleDino(x, y, scale) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.fillStyle = "#8bd156";
  ctx.beginPath();
  ctx.ellipse(90, 75, 85, 48, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(165, 32, 42, 34, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillRect(35, 104, 20, 55);
  ctx.fillRect(112, 104, 20, 55);
  ctx.beginPath();
  ctx.moveTo(12, 73);
  ctx.lineTo(-60, 45);
  ctx.lineTo(18, 110);
  ctx.fill();
  ctx.fillStyle = "#12351f";
  ctx.beginPath();
  ctx.arc(178, 23, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawSpaceWorld() {
  ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
  for (let i = 0; i < 130; i += 1) {
    const x = (i * 127) % CANVAS_W;
    const y = (i * 229) % CANVAS_H;
    ctx.beginPath();
    ctx.arc(x, y, (i % 3) + 1, 0, Math.PI * 2);
    ctx.fill();
  }
  const planetColors = ["#5ce1e6", "#f57e6b", "#51b2e0", "#ffd800", "#cea172"];
  themes.space.dates.forEach((p, index) => {
    ctx.strokeStyle = planetColors[index];
    ctx.lineWidth = 8;
    ctx.fillStyle = "rgba(9, 15, 42, 0.78)";
    ctx.beginPath();
    ctx.arc(cm(p.x + 2.8), cm(p.y + 2.1), cm(3.7), 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });
}

function drawForestWorld() {
  ctx.fillStyle = "#68402a";
  ctx.fillRect(0, cm(51.4), CANVAS_W, cm(8));
  for (let i = 0; i < 8; i += 1) {
    const x = cm(2 + i * 5.6);
    ctx.fillStyle = "#805333";
    ctx.fillRect(x + cm(1.5), cm(40 + (i % 3)), cm(0.9), cm(12));
    ctx.fillStyle = ["#4f9b55", "#6dbb58", "#2f7f53"][i % 3];
    ctx.beginPath();
    ctx.arc(x + cm(2), cm(37 + (i % 3)), cm(3.2), 0, Math.PI * 2);
    ctx.fill();
  }
  themes.forest.taskStarts.forEach((p) => {
    drawRoundedRect(cm(p.x - 0.6), cm(p.y - 1.6), cm(10.8), cm(7.5), 22, "rgba(255, 252, 220, 0.74)", "rgba(102, 50, 0, 0.35)");
  });
}

function drawOceanWorld() {
  ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
  for (let i = 0; i < 12; i += 1) {
    ctx.beginPath();
    ctx.arc(cm(2 + i * 3.5), cm(7 + (i % 4) * 12), cm(0.55 + (i % 3) * 0.4), 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.strokeStyle = "rgba(255,255,255,0.45)";
  ctx.lineWidth = 6;
  for (let y = 8; y < 56; y += 8) {
    ctx.beginPath();
    ctx.moveTo(0, cm(y));
    ctx.bezierCurveTo(cm(10), cm(y - 2), cm(24), cm(y + 2), CANVAS_W, cm(y - 1));
    ctx.stroke();
  }
  themes.ocean.taskStarts.forEach((p) => {
    drawRoundedRect(cm(p.x - 0.5), cm(p.y - 1.5), cm(11.5), cm(7.3), 22, "rgba(255, 255, 255, 0.7)", "rgba(6, 33, 50, 0.3)");
  });
}

function getTaskPositions(theme) {
  if (theme.tasks) return theme.tasks;
  return theme.taskStarts.map((start) => defaultTasks.map((_, index) => ({
    x: start.x,
    y: start.y + index * theme.taskGapCm
  })));
}

function getDefaultCheckboxPositions(theme) {
  const themeKey = Object.keys(themes).find((key) => themes[key] === theme);
  if (themeKey && interactionLayoutDefaults[themeKey]) {
    return cloneData(interactionLayoutDefaults[themeKey].checks);
  }
  const offsets = {
    dino: [6.55, 6.5, 6.55, 6.55, 6.45],
    forest: [7.55, 7.45, 7.35, 8.45, 7.55],
    space: [7.55, 7.55, 7.55, 7.55, 7.55],
    ocean: [7.25, 7.35, 7.35, 7.35, 7.35]
  };
  const dayOffsets = offsets[state.theme] || [];
  return theme.tasks.map((day, dayIndex) => day.map((position) => ({
    x: Math.min(position.x + (dayOffsets[dayIndex] || 7.4), CM_W - 1.2),
    y: position.y + 0.55
  })));
}

function getDefaultChestPosition(themeKey) {
  if (interactionLayoutDefaults[themeKey]) {
    return cloneData(interactionLayoutDefaults[themeKey].chest);
  }
  const positions = {
    dino: { x: 10.85, y: 48.55 },
    forest: { x: 20.55, y: 27.75 },
    space: { x: 11.85, y: 50.8 },
    ocean: { x: 10.85, y: 48.55 }
  };
  return positions[themeKey] || positions.dino;
}

function ensureInteractionLayout(themeKey = state.theme) {
  if (!state.interactionLayout[themeKey]) {
    state.interactionLayout[themeKey] = state.interactionDefaults[themeKey]
      ? cloneData(state.interactionDefaults[themeKey])
      : {
      checks: cloneData(getDefaultCheckboxPositions(themes[themeKey])),
      chest: cloneData(getDefaultChestPosition(themeKey))
    };
  }
  return state.interactionLayout[themeKey];
}

function getCheckboxPositions(theme) {
  return ensureInteractionLayout().checks;
}

function getChestPosition(themeKey) {
  return ensureInteractionLayout(themeKey).chest;
}

function drawTextAt(text, p, options) {
  ctx.save();
  ctx.translate(cm(p.x), cm(p.y));
  ctx.rotate(((p.r || 0) * Math.PI) / 180);
  ctx.font = options.font;
  ctx.fillStyle = options.color;
  ctx.textBaseline = "top";
  ctx.lineJoin = "round";
  if (options.shadow) {
    ctx.shadowColor = options.color;
    ctx.shadowBlur = 28;
  }
  if (options.stroke) {
    ctx.strokeStyle = options.stroke;
    ctx.lineWidth = options.strokeWidth || 5;
    ctx.strokeText(text, 0, 0);
  }
  ctx.fillText(text, 0, 0);
  ctx.restore();
}

function activeTheme() {
  return themes[state.theme];
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function roundCm(value) {
  return Number(value.toFixed(2));
}

function getPosition(kind, dayIndex, taskIndex) {
  const theme = activeTheme();
  if (kind === "date") return theme.dates[dayIndex];
  if (kind === "check") return ensureInteractionLayout().checks[dayIndex][taskIndex];
  if (kind === "chest") return ensureInteractionLayout().chest;
  return theme.tasks[dayIndex][taskIndex];
}

function canvasPointToCm(event) {
  const rect = els.canvas.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * CM_W;
  const y = ((event.clientY - rect.top) / rect.height) * CM_H;
  return {
    x: roundCm(clamp(x, 0, CM_W)),
    y: roundCm(clamp(y, 0, CM_H))
  };
}

function handlePointerDown(event) {
  const handle = event.target.closest(".drag-handle");
  if (!handle) return;
  const kind = handle.dataset.kind;
  const isInteractionHandle = kind === "check" || kind === "chest";
  if ((!isInteractionHandle && !state.calibration) || (isInteractionHandle && !state.interactiveCalibration)) return;
  event.preventDefault();
  const dayIndex = Number(handle.dataset.day);
  const taskIndex = handle.dataset.task === undefined ? null : Number(handle.dataset.task);
  handle.classList.add("dragging");
  handle.setPointerCapture(event.pointerId);
  state.drag = { handle, kind, dayIndex, taskIndex };
}

function handlePointerMove(event) {
  if (!state.drag) return;
  const point = canvasPointToCm(event);
  const position = getPosition(state.drag.kind, state.drag.dayIndex, state.drag.taskIndex);
  position.x = point.x;
  position.y = point.y;
  updateHandlePosition(state.drag.handle, position);
  if (state.drag.kind === "check" || state.drag.kind === "chest") {
    saveInteraction();
  } else {
    drawSheet();
    updateCoordOutput();
  }
}

function handlePointerUp(event) {
  if (!state.drag) return;
  const wasInteractionDrag = state.drag.kind === "check" || state.drag.kind === "chest";
  state.drag.handle.classList.remove("dragging");
  try {
    state.drag.handle.releasePointerCapture(event.pointerId);
  } catch (error) {
    // Pointer capture may already be released if the pointer leaves the page.
  }
  state.drag = null;
  renderOverlay();
  if (!wasInteractionDrag) {
    updateCoordOutput();
  }
}

function updateHandlePosition(handle, position) {
  handle.style.left = `${(position.x / CM_W) * 100}%`;
  handle.style.top = `${(position.y / CM_H) * 100}%`;
}

function createHandle(label, kind, dayIndex, taskIndex, position) {
  const handle = document.createElement("button");
  handle.className = `drag-handle ${kind}`;
  handle.type = "button";
  handle.textContent = label;
  handle.dataset.kind = kind;
  handle.dataset.day = String(dayIndex);
  if (taskIndex !== null) handle.dataset.task = String(taskIndex);
  handle.setAttribute("aria-label", `${label} 位置`);
  updateHandlePosition(handle, position);
  return handle;
}

function createInteractionHandle(label, kind, dayIndex, taskIndex, position) {
  const handle = createHandle(label, kind, dayIndex, taskIndex, position);
  handle.classList.add("interaction");
  return handle;
}

function progressKey(dayIndex, taskIndex) {
  return `${state.theme}-${dayIndex}-${taskIndex}`;
}

function readInteraction() {
  try {
    return JSON.parse(localStorage.getItem(INTERACTION_KEY) || "{}");
  } catch (error) {
    return {};
  }
}

function writeInteraction(data) {
  localStorage.setItem(INTERACTION_KEY, JSON.stringify(data));
}

function readInteractionDefaults() {
  try {
    return JSON.parse(localStorage.getItem(INTERACTION_DEFAULTS_KEY) || "{}");
  } catch (error) {
    return {};
  }
}

function writeInteractionDefaults(data) {
  localStorage.setItem(INTERACTION_DEFAULTS_KEY, JSON.stringify(data));
}

function loadInteraction() {
  const data = readInteraction();
  state.interactionDefaults = readInteractionDefaults();
  let defaultsChanged = false;
  Object.entries(data.interactionLayout || {}).forEach(([themeKey, layout]) => {
    if (!state.interactionDefaults[themeKey]) {
      state.interactionDefaults[themeKey] = cloneData(layout);
      defaultsChanged = true;
    }
  });
  if (defaultsChanged) writeInteractionDefaults(state.interactionDefaults);
  state.completed = data.completed || {};
  state.interactionLayout = data.interactionLayout || {};
  state.reward = data.reward || state.reward;
  els.rewardInput.value = state.reward;
}

function saveInteraction() {
  writeInteraction({
    completed: state.completed,
    interactionLayout: state.interactionLayout,
    reward: state.reward
  });
}

function completedCount() {
  let total = 0;
  for (let dayIndex = 0; dayIndex < 5; dayIndex += 1) {
    for (let taskIndex = 0; taskIndex < 3; taskIndex += 1) {
      if (state.completed[progressKey(dayIndex, taskIndex)]) total += 1;
    }
  }
  return total;
}

function allTasksDone() {
  return completedCount() === 15;
}

function updateProgressStatus() {
  const count = completedCount();
  els.progressStatus.textContent = count === 15
    ? "15 / 15 已完成，寶箱可以開啟"
    : `${count} / 15 已完成`;
}

function toggleTaskDone(dayIndex, taskIndex) {
  const key = progressKey(dayIndex, taskIndex);
  state.completed[key] = !state.completed[key];
  if (!state.completed[key]) delete state.completed[key];
  saveInteraction();
  renderOverlay();
  updateProgressStatus();
}

function openReward() {
  if (!allTasksDone()) return;
  els.rewardText.textContent = state.reward.trim() || "由家長決定周末獎勵";
  els.rewardModal.hidden = false;
}

function resetProgress() {
  Object.keys(state.completed).forEach((key) => {
    if (key.startsWith(`${state.theme}-`)) delete state.completed[key];
  });
  saveInteraction();
  renderOverlay();
  updateProgressStatus();
}

function resetInteractionPositions() {
  delete state.interactionLayout[state.theme];
  ensureInteractionLayout();
  saveInteraction();
  renderOverlay();
}

function saveInteractionDefault() {
  const layout = cloneData(ensureInteractionLayout());
  state.interactionDefaults[state.theme] = layout;
  state.interactionLayout[state.theme] = cloneData(layout);
  writeInteractionDefaults(state.interactionDefaults);
  saveInteraction();
  els.saveInteractionDefaultBtn.textContent = "已設為預設";
  window.setTimeout(() => {
    els.saveInteractionDefaultBtn.textContent = "設為互動預設";
  }, 1200);
}

function setSidebarCollapsed(collapsed) {
  els.appShell.classList.toggle("sidebar-collapsed", collapsed);
  els.expandSidebarBtn.hidden = !collapsed;
  localStorage.setItem(SIDEBAR_KEY, collapsed ? "1" : "0");
}

function loadSidebarState() {
  setSidebarCollapsed(localStorage.getItem(SIDEBAR_KEY) === "1");
}

function loadInteractiveModeState() {
  const savedPlannerState = readPlannerState();
  state.interactive = localStorage.getItem(INTERACTIVE_MODE_KEY) === "1"
    || savedPlannerState.interactive === true
    || els.interactiveToggle.checked;
  els.interactiveToggle.checked = state.interactive;
  localStorage.setItem(INTERACTIVE_MODE_KEY, state.interactive ? "1" : "0");
  renderOverlay();
}

function setInteractiveMode(enabled) {
  state.interactive = enabled;
  els.interactiveToggle.checked = enabled;
  localStorage.setItem(INTERACTIVE_MODE_KEY, enabled ? "1" : "0");
  savePlannerState();
  renderOverlay();
}

function createCheckButton(dayIndex, taskIndex, position) {
  const button = document.createElement("button");
  button.className = "check-button";
  button.type = "button";
  button.textContent = state.completed[progressKey(dayIndex, taskIndex)] ? "✓" : "";
  button.classList.toggle("checked", Boolean(state.completed[progressKey(dayIndex, taskIndex)]));
  button.style.left = `${(position.x / CM_W) * 100}%`;
  button.style.top = `${(position.y / CM_H) * 100}%`;
  button.setAttribute("aria-label", `${zhDays[dayIndex]}任務${taskIndex + 1}完成`);
  button.addEventListener("click", () => toggleTaskDone(dayIndex, taskIndex));
  return button;
}

function createTreasureButton() {
  const position = getChestPosition(state.theme);
  const button = document.createElement("button");
  button.className = "treasure-button";
  button.type = "button";
  button.textContent = allTasksDone() ? "開" : "鎖";
  button.classList.toggle("ready", allTasksDone());
  button.classList.toggle("locked", !allTasksDone());
  button.style.left = `${(position.x / CM_W) * 100}%`;
  button.style.top = `${(position.y / CM_H) * 100}%`;
  button.setAttribute("aria-label", allTasksDone() ? "開啟周末神秘寶箱" : "周末神秘寶箱尚未解鎖");
  button.addEventListener("click", openReward);
  return button;
}

function renderOverlay() {
  els.overlay.innerHTML = "";
  els.overlay.classList.toggle("enabled", state.calibration);
  els.overlay.classList.toggle("interactive", state.interactive);
  els.overlay.classList.toggle("interaction-calibrating", state.interactiveCalibration);
  const theme = activeTheme();

  theme.dates.forEach((position, dayIndex) => {
    els.overlay.append(createHandle(`D${dayIndex + 1}`, "date", dayIndex, null, position));
  });

  theme.tasks.forEach((taskPositions, dayIndex) => {
    taskPositions.forEach((position, taskIndex) => {
      els.overlay.append(createHandle(`${dayIndex + 1}-${taskIndex + 1}`, "task", dayIndex, taskIndex, position));
    });
  });

  const checks = getCheckboxPositions(theme);
  checks.forEach((day, dayIndex) => {
    day.forEach((position, taskIndex) => {
      els.overlay.append(createCheckButton(dayIndex, taskIndex, position));
      els.overlay.append(createInteractionHandle(`C${dayIndex + 1}-${taskIndex + 1}`, "check", dayIndex, taskIndex, position));
    });
  });
  els.overlay.append(createTreasureButton());
  els.overlay.append(createInteractionHandle("箱", "chest", 0, null, getChestPosition(state.theme)));
}

function currentPositionText() {
  const theme = activeTheme();
  const dates = theme.dates.map((p) => {
    const rotation = p.r === undefined ? "" : `, r: ${roundCm(p.r)}`;
    return `      { x: ${roundCm(p.x)}, y: ${roundCm(p.y)}${rotation} }`;
  }).join(",\n");
  const tasks = theme.tasks.map((day) => {
    const taskLine = day.map((p) => `{ x: ${roundCm(p.x)}, y: ${roundCm(p.y)} }`).join(", ");
    return `      [${taskLine}]`;
  }).join(",\n");

  return `${theme.name}\n\ndates: [\n${dates}\n]\n\ntasks: [\n${tasks}\n]`;
}

function updateCoordOutput() {
  els.coordOutput.value = currentPositionText();
}

function copyCurrentCoords() {
  const text = els.coordOutput.value;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text);
  }
  els.coordOutput.select();
}

function readSavedPositions() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch (error) {
    return {};
  }
}

function writeSavedPositions(saved) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
}

function loadSavedPositions() {
  const saved = readSavedPositions();
  Object.entries(saved).forEach(([themeKey, positions]) => {
    if (!themes[themeKey] || !positions.dates || !positions.tasks) return;
    themes[themeKey].dates = cloneData(positions.dates);
    themes[themeKey].tasks = cloneData(positions.tasks);
  });
}

function saveThemePositions() {
  const saved = readSavedPositions();
  saved[state.theme] = cloneData({
    dates: activeTheme().dates,
    tasks: activeTheme().tasks
  });
  writeSavedPositions(saved);
  updateCoordOutput();
  els.savePositionsBtn.textContent = "已儲存";
  window.setTimeout(() => {
    els.savePositionsBtn.textContent = "儲存為本機預設";
  }, 1200);
}

function resetThemePositions() {
  const defaults = positionDefaults[state.theme];
  activeTheme().dates = cloneData(defaults.dates);
  activeTheme().tasks = cloneData(defaults.tasks);
  const saved = readSavedPositions();
  delete saved[state.theme];
  writeSavedPositions(saved);
  drawSheet();
  renderOverlay();
  updateCoordOutput();
}

function drawSheet() {
  const theme = themes[state.theme];
  drawBackground(theme);
  ctx.textAlign = "left";

  state.dates.forEach((date, index) => {
    drawTextAt(formatDate(date), theme.dates[index], {
      font: theme.dateFont,
      color: theme.dateColors[index],
      shadow: theme.dateShadow,
      stroke: theme.dateStrokeColors ? theme.dateStrokeColors[index] : (state.theme === "space" ? "rgba(0,0,0,0.55)" : null),
      strokeWidth: theme.dateStrokeWidth || 6
    });
  });

  const positions = getTaskPositions(theme);
  state.tasks.forEach((tasks, dayIndex) => {
    tasks.forEach((task, taskIndex) => {
      drawTextAt(task, positions[dayIndex][taskIndex], {
        font: theme.taskFont,
        color: theme.taskColor,
        stroke: state.theme === "space" ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.22)",
        strokeWidth: state.theme === "space" ? 5 : 3
      });
    });
  });
}

function setTheme(themeKey) {
  state.theme = themeKey;
  localStorage.setItem(SELECTED_THEME_KEY, themeKey);
  els.themeName.textContent = themes[themeKey].name;
  els.canvas.parentElement.className = `sheet theme-${themeKey}`;
  document.querySelectorAll(".theme-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.theme === themeKey);
  });
  drawSheet();
  renderOverlay();
  updateCoordOutput();
  updateProgressStatus();
}

function loadThemeImages() {
  Object.entries(themes).forEach(([key, theme]) => {
    if (!theme.image) return;
    const image = new Image();
    image.onload = () => {
      if (state.theme === key) {
        drawSheet();
        renderOverlay();
      }
    };
    image.onerror = () => {
      console.warn(`找不到主題底圖：${theme.image}`);
    };
    image.src = `${theme.image}?v=${ASSET_VERSION}`;
    state.images[key] = image;
  });
}

function downloadImage() {
  const fileName = `${themes[state.theme].name}-五日任務單.png`;
  els.canvas.toBlob((blob) => {
    if (!blob) {
      window.alert("圖片產生失敗，請重新整理頁面後再試一次。");
      return;
    }
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, "image/png");
}

function init() {
  loadInteraction();
  loadSavedPositions();
  loadThemeImages();
  loadSidebarState();
  const today = new Date();
  const todayValue = toDateInputValue(today);
  if (loadPlannerState()) {
    els.startDate.value = state.dates[0];
    renderControls();
    drawSheet();
  } else {
    els.startDate.value = todayValue;
    resetDates(todayValue);
  }

  els.startDate.addEventListener("input", (event) => resetDates(event.target.value));
  els.themeGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-theme]");
    if (button) setTheme(button.dataset.theme);
  });
  els.downloadBtn.addEventListener("click", downloadImage);
  els.printBtn.addEventListener("click", () => window.print());
  els.calibrationToggle.addEventListener("change", (event) => {
    state.calibration = event.target.checked;
    renderOverlay();
  });
  els.interactiveToggle.addEventListener("change", (event) => {
    setInteractiveMode(event.target.checked);
  });
  els.interactiveCalibrationToggle.addEventListener("change", (event) => {
    state.interactiveCalibration = event.target.checked;
    renderOverlay();
  });
  els.rewardInput.addEventListener("input", (event) => {
    state.reward = event.target.value;
    saveInteraction();
  });
  els.resetProgressBtn.addEventListener("click", resetProgress);
  els.saveInteractionDefaultBtn.addEventListener("click", saveInteractionDefault);
  els.resetInteractionPositionsBtn.addEventListener("click", resetInteractionPositions);
  els.collapseSidebarBtn.addEventListener("click", () => setSidebarCollapsed(true));
  els.expandSidebarBtn.addEventListener("click", () => setSidebarCollapsed(false));
  els.closeRewardBtn.addEventListener("click", () => {
    els.rewardModal.hidden = true;
  });
  els.rewardModal.addEventListener("click", (event) => {
    if (event.target === els.rewardModal) els.rewardModal.hidden = true;
  });
  els.overlay.addEventListener("pointerdown", handlePointerDown);
  els.overlay.addEventListener("pointermove", handlePointerMove);
  els.overlay.addEventListener("pointerup", handlePointerUp);
  els.overlay.addEventListener("pointercancel", handlePointerUp);
  els.copyCoordsBtn.addEventListener("click", copyCurrentCoords);
  els.savePositionsBtn.addEventListener("click", saveThemePositions);
  els.resetPositionsBtn.addEventListener("click", resetThemePositions);
  window.addEventListener("beforeunload", persistVisibleState);
  window.addEventListener("pagehide", persistVisibleState);
  window.addEventListener("pageshow", () => {
    loadInteractiveModeState();
    renderControls();
    drawSheet();
    renderOverlay();
  });
  const savedTheme = localStorage.getItem(SELECTED_THEME_KEY);
  loadInteractiveModeState();
  setTheme(themes[savedTheme] ? savedTheme : "dino");
  loadInteractiveModeState();
}

document.fonts.ready.then(init);
