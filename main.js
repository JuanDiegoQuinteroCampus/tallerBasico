function Tabla(Traditional,PointRange,letter,SBGraiting,proficiencyLevelWithStandard ){
  this.Traditional = Traditional;
  this.PointRange = PointRange;
  this.letter = letter;
  this.SBGraiting = SBGraiting; 
  this.proficiencyLevelWithStandard = proficiencyLevelWithStandard; 
}
a1 = new Tabla("90-100","12-14","A","4","Exceeds proficiency",  );
a2 = new Tabla("80-89","9-11","B","3","Demonstrates proficiency");
a3 = new Tabla("70-79","6-8","C","2","Approaches proficiency");
a4 = new Tabla("60-69","3-5","D","1","Falls well below proficiency");
a5 = new Tabla("<60","1-2","E","0","Lacks all proficiency");
a6 = new Tabla("0","0","F","0","No attempt made");
console.table([a1,a2,a3,a4,a5,a6]);

let notas = prompt('ponga su nota del 0 al 100')
let t1 = ("Su nota es:"+ notas + ", y esta en el rango de 12 a 14 puntos con la letra A, SBG Rating=4 . Exceeds proficiency ")
let t2 = ("Su nota es:"+ notas + ", y esta en el rango de 9 a 11 puntos con la letra B, SBG Rating=3 . Demonstrates proficiency")
let t3 = ("Su nota es:"+ notas + ", y esta en el rango de 6 a 8 puntos con la letra C, SBG Rating=2 . Approaches proficiency ")
let t4 = ("Su nota es:"+ notas + ", y esta en el rango de 3 a 5 puntos con la letra D, SBG Rating=1 . Falls well below proficiency ")
let t5 = ("Su nota es:"+ notas + ", y esta en el rango de 1 a 2 puntos con la letra E, SBG Rating=0 . Lacks all proficiency")
let t6 = ("Su nota es:"+ notas + ", y esta en el rango de 0 puntos con la letra F, SBG Rating=0 . No attempt made")

    if(notas > 90 && notas < 100)
    {console.log(t1);}
    else if (notas >= 80 && notas <= 89){
      console.log(t2);
    }
    else if (notas >= 70 && notas <= 79){
      console.log(t3);
    }
    else if (notas >= 60 && notas <= 69){
      console.log(t4);
    }
    else if (notas <= 68 && notas >=1 ){
      console.log(t5);
    }
    else if (notas <=0){
      console.log(t6);
    }