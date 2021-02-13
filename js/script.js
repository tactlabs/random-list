function generate(list_of_words) {
    array_of_names = list_of_words.split(" ");
  
    if (array_of_names.length <= 1) {
      throw new Error("Cannot use a list containing fewer than two names");
    }
  
    var new_array = [];
    while (array_of_names.length > 0) {
      var index = Math.floor(Math.random() * array_of_names.length);
      value = array_of_names.splice(index, 1);
      new_array.push(value);
    }
    return new_array;
};
  
function listNumerically(arr) {
    var list = "";
    for (i = 0; i < arr.length; i++) {
        list += ((i + 1) + ".\t\t\n\t\t\t\t\t"   +arr[i] + '<br>')
    }
    return list;
};
  
var button = document.getElementById("button");
  
button.addEventListener("click", function() {
    var input = document.getElementById("list").value;
    document.getElementById("results").innerHTML = listNumerically(generate(input));
});