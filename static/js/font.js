function updateFontVariations() {
  const weight = document.querySelector("#weight").value;
  const size = document.querySelector("#size").value;
  const font = document.querySelector("#font-tester");
  const selects = document.getElementsByClassName("js-font-select");
  const size_tag = document.querySelector("#size_tag");
  const weight_tag = document.querySelector("#weight_tag");

  font.style.fontWeight = weight;
  font.style.fontSize = `${size}px`;
  font.style.lineHeight = `${size * 1.5}px`;

  size_tag.innerHTML = `${size}px`;
  weight_tag.innerHTML = weight;

  for (let i = 0; i < selects.length; i++) {
    font.setAttribute("data-" + selects[i].name, selects[i].value);
  }
}
