var tableauNormal = ["2", 3, "4", 5];

var prof = {
  nom: 'Boubou',
  cours: 'Telecom',
  classe: ['A10', 'L42', 'L40']
}

console.log("Propriétés du prof : ");
for (var item in prof) {
  if (prof.hasOwnProperty(item)) {
    console.log(item, prof[item]);
  }
}

console.log(prof.classe[0]);

var cotes = [8, 11, 13, 9, 15, 18, 20, 5];
cotes = cotes.map(function(cote){
  if(cote != 20){
    return cote + 1;
  }else{
    return cote;
  }
})
cotes.forEach(function (x) {
  console.log(x);
});
