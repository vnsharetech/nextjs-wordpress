const briefContent = (str, num) => {
  const div = document.createElement("div");
  div.innerHTML = str;
  const text = div.textContent || div.innerText || "";
  div.remove();
  return text.substring(0, num) + "...";
};

export { briefContent };
