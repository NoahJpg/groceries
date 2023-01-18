function formHandler(event) {
  event.preventDefault();
  const form = document.querySelector("form");
  form.setAttribute("class", "hidden");
  let input1 = document.getElementById("item1").value;
  let input2 = document.getElementById("item2").value;
  let input3 = document.getElementById("item3").value;
  let input4 = document.getElementById("item4").value;

  const itemArray = [input1, input2, input3, input4];
  const newItemArray = itemArray.toString().toUpperCase().split(",");
  newItemArray.sort();
  // document.body.innerHTML = "";

  newItemArray.forEach(function(element){
    const paragraph = document.createElement("p");
    paragraph.append(element);
    document.body.append(paragraph);
  })
  
}

window.addEventListener("load", function() {
  document.getElementById("grocery-list").addEventListener("submit", formHandler);

})