/**
 * Inserts an <h1> element with the text "Module" at the beginning of the body element.
 */
document.body.insertAdjacentHTML("afterbegin", "<h1>Module </h1>")


// sélectionner les paragraphes
const paragraphes = document.querySelectorAll("p");
const p1 = paragraphes[0];
const p2 = paragraphes[1];


console.log(` text du ${paragraphes[0].id} is : ${p1.textContent}`);
console.log(` text du ${paragraphes[1].id} is : ${p2.textContent}`);

// modifier leu contenu
p1.textContent = "Modified HTML file";
p2.innerHTML = "<i>Modified </i> HTML file";

console.log(` text du ${paragraphes[0].id} is : ${p1.textContent}`);
console.log(` text du ${paragraphes[1].id} is : ${p2.textContent}`);


//Creation d'un element 
const p_1 = document.createElement("p");
const p_2 = document.createElement("p");

p_1.textContent = "I was created dynamicallly";
p_2.textContent = "I was also created dynamically";


//Ajout des elements au html

/*
document.body.appendChild(p_1);
document.body.appendChild(p_2);
// ici on a ajouter les elements a la fin de la liste des enfants du body
*/

const parent = document.getElementById("content");
const firstChild = parent.children[0];
parent.insertBefore(p_1, firstChild);
parent.insertAdjacentHTML("beforeend", p_2.outerHTML);


// nous allons maintenant découvrir comment manipuler un ensemble de noeuds séléctionnés


