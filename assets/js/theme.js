function applyTheme(theme) {
  if (!theme) return;
  const root = document.documentElement;

  root.style.setProperty("--color-primary", theme.colorPrimary);
  root.style.setProperty("--color-text", theme.colorText);
  root.style.setProperty("--color-bg", theme.colorBg);
  root.style.setProperty("--color-card", theme.colorCard);
  root.style.setProperty("--font-heading", theme.fontHeading);
  root.style.setProperty("--border-radius", theme.borderRadius);

  syncPickerInputsWithTheme(theme);
}

// ============== Color Custiomzation feature ==============
const toggleBtn = document.getElementById("toggle-color-picker");
const pickerPanel = document.getElementById("color-picker-panel");

const textInput = document.getElementById("input-color-text");
const primaryInput = document.getElementById("input-color-primary");
const bgInput = document.getElementById("input-color-bg");
const cardInput = document.getElementById("input-color-card");

const previewText = document.getElementById("preview-text");
const previewPrimary = document.getElementById("preview-primary");
const previewBg = document.getElementById("preview-bg");
const previewCard = document.getElementById("preview-card");

// Hàm cập nhật màu vào vòng tròn preview
function updatePreviewColors() {
  if (previewPrimary && primaryInput) previewPrimary.style.backgroundColor = primaryInput.value;
  if (previewText && textInput) previewText.style.backgroundColor = textInput.value;
  if (previewBg && bgInput) previewBg.style.backgroundColor = bgInput.value;
  if (previewCard && cardInput) previewCard.style.backgroundColor = cardInput.value;
}

// Bật/tắt color custiomzation
if (toggleBtn && pickerPanel) {
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    pickerPanel.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!pickerPanel.contains(e.target) && e.target !== toggleBtn) {
      pickerPanel.classList.remove("active");
    }
  });
}

// Các sự kiện đổi màu
if (textInput) {
  textInput.addEventListener("input", (e) => {
    document.documentElement.style.setProperty("--color-text", e.target.value);
    updatePreviewColors();
  });
}

if (primaryInput) {
  primaryInput.addEventListener("input", (e) => {
    document.documentElement.style.setProperty("--color-primary", e.target.value);
    updatePreviewColors();
  });
}

if (bgInput) {
  bgInput.addEventListener("input", (e) => {
    document.documentElement.style.setProperty("--color-bg", e.target.value);
    updatePreviewColors();
  });
}

if (cardInput) {
  cardInput.addEventListener("input", (e) => {
    document.documentElement.style.setProperty("--color-card", e.target.value);
    updatePreviewColors();
  });
}

// Hàm đồng bộ ô màu khi người dùng chọn nút chuyển Preset
function syncPickerInputsWithTheme(theme) {
  if (!theme) return;
  if (primaryInput) primaryInput.value = theme.colorPrimary;
  if (textInput) textInput.value = theme.colorText;
  if (bgInput) bgInput.value = theme.colorBg;
  if (cardInput) cardInput.value = theme.colorCard;
  updatePreviewColors();
}

document.addEventListener("DOMContentLoaded", () => {
  updatePreviewColors();
});