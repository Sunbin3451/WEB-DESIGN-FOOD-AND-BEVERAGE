async function loadBrandsData() {
  try {
    const response = await fetch("./assets/json/brands.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Không thể đọc file brands.json:", error);
    return null;
  }
}