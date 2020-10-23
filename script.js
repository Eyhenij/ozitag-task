/*let age = prompt("Сколько тебе лет?", 31);
if (age>=30){
alert("Ну это нормально");
}
else {
    alert("Это тоже нормально");
}*/

/*function printArray(a) {
    let len = a.length, i = 0;
    if (len == 0)
    document.write("пустой массив");
    else {
        do {
            document.write (a[i]);
        }
        while (++i < len);
    }
}
printArray([01]);*/
// ===============================================================================
/*let i, j
    for (i = 0, j = 0; i < 10, j<5; i++, j++) 
        console.log('%s * %s = %s', i, j, i*j);*/
// ===============================================================================



/*console.log(

    // Входной массив
    [1, 4, 3, 0, 4, 5, 4, 3, 4]
      // Оставляем только чётные числа
      .filter(element => !(element % 2))
      // Считаем квадратный корень и записываем в аккумулятор
      .reduce((accumulator, element) => accumulator + Math.sqrt(element), 0)
   ); // Значение*/


// ===============================================================================

/*let arrNotes = [C, D, E, F, G, A, B]
arrNotes.indexOf(5,C)*/

// ===============================================================================
/*let a = prompt("Введи число 1", 1);
let b = prompt("Введи число 2", 2);*/

/*let a=1;
let b=3;*/
/*let sum = (a, b) => a + b;
alert(sum(1,2));*/

/* Более короткая форма для:

let sum = function(a, b) {
  return a + b;
};


alert(sum);*/

// ==============================================================================


/*let animal = {
    name: "animal",
    age: 10,
    childs: ["child 1", "child 2"]
   };
    
   let cat = clone(animal);
   cat.name = "cat";
   cat.age = 5;
   cat.childs.push("child 3");
    
   console.log(cat.name, cat.age); // cat 5
   console.log(cat.childs); // [ 'child 1', 'child 2', 'child 3' ]
    
   console.log(animal.name, animal.age); // cat 5
   console.log(animal.childs); // [ 'child 1', 'child 2', 'child 3' ]
    
   function clone(obj) {
    return obj;
   }


   console.log(1.15 + 2.30);*/


// ===============================================================================

/*let i = 2;
while (i<5) {  
    document.write(i + "<br>");
    i = i+1;
}
document.write('i больше пяти')*/

/*let abc = [60,55,50,45,40,35,30];

let sol = abc[0];
alert (abc);

let numABC = abc.length;
alert (numABC);*/


/*function makePhrases (){
    let words1 = ["24/7","Каждый день","Сегодня"];
    let words2 = ["мы","команда","компания"];
    let words3 = ["много работает","эффективно работает","добивается результата"];

    let rand1 = Math.floor(Math.random() * words1.length);
    let rand2 = Math.floor(Math.random() * words2.length);
    let rand3 = Math.floor(Math.random() * words3.length);

    let phrase = words1[rand1] + ' ' + words2[rand2] + ' ' + words3[rand3] ;
    alert (phrase);
}

makePhrases ();*/

/* function intervalConstruction(arr) {
}

function intervalIdentification(arr) {
}*/

// ==============================================================
/*
let i3 = arrNotes2.find(item => item.id == findedNotePosition);
let intervalForFindedNote = i3.id; // Количество полутонов (id4) заданного интервала
alert(`Интервал в полутонах между стартовой нотой ${arrInputData[1]} и найденной нотой ${findedNote.name} = ${intervalForFindedNote}`);
*/



/*
let arrNotes2 = [
  {id: 1 , id1: 1, id2: 0, name: "C" ,  name: "B#" ,  name: "Dbb"},
  {id: 2 , id1: 1, id2: 1, name: "C#",  name: "B##",  name: "Db" },
  {id: 3 , id1: 2, id2: 0, name: "D" ,  name: "C##",  name: "Ebb"},
  {id: 4 , id1: 2, id2: 1, name: "D#",  name: "Eb" ,  name: "Fbb"},
  {id: 5 , id1: 3, id2: 0, name: "E" ,  name: "D##",  name: "Fb" },
  {id: 6 , id1: 4, id2: 0, name: "F" ,  name: "E#" ,  name: "Gbb"},
  {id: 7 , id1: 4, id2: 1, name: "F#",  name: "E##",  name: "Gb" },
  {id: 8 , id1: 5, id2: 0, name: "G" ,  name: "F##",  name: "Abb"},
  {id: 9 , id1: 5, id2: 1, name: "G#",  name: "Ab"               },
  {id: 10, id1: 6, id2: 0, name: "A" ,  name: "G##",  name: "Bbb"},
  {id: 11, id1: 6, id2: 1, name: "A#",  name: "Bb" ,  name: "Cbb"},
  {id: 12, id1: 7, id2: 0, name: "B" ,  name: "A##",  name: "Cb" },
];
let note = arrNotes2.find(item => item.id1 == k);
alert(`Итоговая позиция : ${note.name} или ${k}`);
*/
/*let arrNotes = [
  {id1: 1, id2: 1, name: "Cbb"},
  {id1: 1, id2: 2, name: "Cb"},
  {id1: 1, id2: 3, name: "C"},
  {id1: 1, id2: 4, name: "C#"},
  {id1: 1, id2: 5, name: "C##"},
  {id1: 2, id2: 6, name: "Dbb"},
  {id1: 2, id2: 7, name: "Db"},
  {id1: 2, id2: 8, name: "D"},
  {id1: 2, id2: 9, name: "D#"},
  {id1: 2, id2: 10, name: "D##"},
  {id1: 3, id2: 11, name: "Ebb"},
  {id1: 3, id2: 12, name: "Eb"},
  {id1: 3, id2: 13, name: "E"},
  {id1: 3, id2: 14, name: "E#"},
  {id1: 3, id2: 15, name: "E##"},
  {id1: 4, id2: 16, name: "Fbb"},
  {id1: 4, id2: 17, name: "Fb"},
  {id1: 4, id2: 18, name: "F"},
  {id1: 4, id2: 19, name: "F#"},
  {id1: 4, id2: 20, name: "F##"},
  {id1: 5, id2: 21, name: "Gbb"},
  {id1: 5, id2: 22, name: "Gb"},
  {id1: 5, id2: 23, name: "G"},
  {id1: 5, id2: 24, name: "G#"},
  {id1: 5, id2: 25, name: "G##"},
  {id1: 6, id2: 26, name: "Abb"},
  {id1: 6, id2: 27, name: "Ab"},
  {id1: 6, id2: 28, name: "A"},
  {id1: 6, id2: 29, name: "A#"},
  {id1: 6, id2: 30, name: "A##"},
  {id1: 7, id2: 31, name: "Bbb"},
  {id1: 7, id2: 32, name: "Bb"},
  {id1: 7, id2: 33, name: "B"},
  {id1: 7, id2: 34, name: "B#"},
  {id1: 7, id2: 35, name: "B##"},
];
*/
/*
let valueStart1
switch (valueStart) {
  case "C": valueStart1 = 1;
    break;
  case "D": valueStart1 = 2;
    break;
  case "E": valueStart1 = 3;
    break;
  case "F": valueStart1 = 4;
    break;
  case "G": valueStart1 = 5;
    break;
  case "A": valueStart1 = 6;
    break;
  case "B": valueStart1 = 7;
    break;
  default: alert ("Invalid value!");  
}
let startPosition = parseInt (valueStart1);
*/
