var produits = [{
  type: 'Fruits',
  prixU: 1,
  nom: 'Pomme',
  quantite: 3
},
{
  type: 'Legumes',
  prixU: 1.5,
  nom: 'Tomate',
  quantite: 4
},
{
  type: 'Viande',
  prixU: 3,
  nom: 'Steak',
  quantite: 2
}
];

var tableau = document.getElementById('facture');
var submitButton = document.getElementById('submitFiltre');
var filtreInput = document.getElementById('filtre');
var addSteakButton = document.getElementById('addSteak');

var totalDOM = document.getElementById('total');

submitButton.onclick = function(){
  var filtre = filtreInput.value;
  var nouveauTableau = null;
  if(filtre === ''){
    nouveauTableau = produits;
  }else{
    nouveauTableau = produits.filter(function(item){
      return item.type === filtre;
    });
  }

  remplirTableau(nouveauTableau);
  calculerTotal2(nouveauTableau);
}

addSteakButton.onclick = function(){
  produits[2].quantite++;
  remplirTableau(produits);
  calculerTotal2(produits);
}

function remplirTableau(catalogue){
  tableau.innerHTML = "";
  for (var i = 0; i < catalogue.length; i++) {
    tableau.innerHTML += "<tr><td>"+catalogue[i].nom+"</td>"+"<td>"+catalogue[i].type+"</td>"+"<td>"+catalogue[i].quantite+"</td>"+"<td>"+catalogue[i].prixU+"€</td></tr>";
  }

}

function calculerTotal(catalogue){
  var total = 0;
  for (var i = 0; i < catalogue.length; i++) {
    total += catalogue[i].prixU*catalogue[i].quantite;
  }
  totalDOM.innerHTML = "Votre repas vous coûtera "+total+" €";
}

function calculerTotal2(catalogue){
  var total = catalogue.reduce(function(accumulator, item){
    console.log(item);
    return accumulator + (item.prixU*item.quantite);
  }, 0);
  totalDOM.innerHTML = "Votre repas vous coûtera "+total+" €";
}

remplirTableau(produits);
calculerTotal2(produits);
