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

let tradicional = prompt('ponga su nota del 0 al 100')

let t1 = ("Su nota es:"+ tradicional + ", y esta en el rango de 12 a 14 puntos con la letra A, SBG Rating=4 . Exceeds proficiency ")
let t2 = ("Su nota es:"+ tradicional + ", y esta en el rango de 9 a 11 puntos con la letra B, SBG Rating=3 . Demonstrates proficiency")
let t3 = ("Su nota es:"+ tradicional + ", y esta en el rango de 6 a 8 puntos con la letra C, SBG Rating=2 . Approaches proficiency ")
let t4 = ("Su nota es:"+ tradicional + ", y esta en el rango de 3 a 5 puntos con la letra D, SBG Rating=1 . Falls well below proficiency ")
let t5 = ("Su nota es:"+ tradicional + ", y esta en el rango de 1 a 2 puntos con la letra E, SBG Rating=0 . Lacks all proficiency")
let t6 = ("Su nota es:"+ tradicional + ", y esta en el rango de 0 puntos con la letra F, SBG Rating=0 . No attempt made")

    if(tradicional > 90 && tradicional < 100)
    {console.log(t1);}
    else if (tradicional >= 80 && tradicional <= 89){
      console.log(t2);
    }
    else if (tradicional >= 70 && tradicional <= 79){
      console.log(t3);
    }
    else if (tradicional >= 60 && tradicional <= 69){
      console.log(t4);
    }
    else if (tradicional <60){
      console.log(t5);
    }
    else if (tradicional =0){
      console.log(t6);
    }

    let PointRange = prompt ('Ponga su numero de puntos (0-14)')

    let p1 = ("Su nota es:"+ PointRange + ", y esta en tu puntaje tradicional es de 90-100 con la letra A, SBG Rating=4 . Exceeds proficiency ")
    let p2 = ("Su nota es:"+ PointRange + ", y esta en tu puntaje tradicional es de 80-89 con la letra B, SBG Rating=3 . Demonstrates proficiency")
    let p3 = ("Su nota es:"+ PointRange + ", y esta en tu puntaje tradicional es de 70-79  con la letra C, SBG Rating=2 . Approaches proficiency ")
    let p4 = ("Su nota es:"+ PointRange + ", y esta en tu puntaje tradicional es de 60-69 con la letra D, SBG Rating=1 . Falls well below proficiency ")
    let p5 = ("Su nota es:"+ PointRange + ", y esta en tu puntaje tradicional es de <60 con la letra E, SBG Rating=0 . Lacks all proficiency")
    let p6 = ("Su nota es:"+ PointRange + ", y esta en tu puntaje tradicional es de 0 con la letra F, SBG Rating=0 . No attempt made")
    
    if(PointRange >= 12 && PointRange <= 14 )
    {console.log(p1);}
    else if (PointRange >= 9 && PointRange <= 11){
      console.log(p2);
    }
    else if (PointRange >= 6 && PointRange <= 8){
      console.log(p3);
    }
    else if (PointRange >= 3 && PointRange <= 5){
      console.log(p4);
    }
    else if (PointRange >= 1 && PointRange <= 2){
      console.log(p5);
    }
    else if (PointRange >=0  && PointRange <= 0){
      console.log(p6);
    }


    let letter = prompt ('Ponga su metodo de calificacion por letra')

    let l1 = ("Su nota es:"+ letter + ", y esta en tu puntaje tradicional es de 90-100, el PointRange es de 12-14, SBG Rating=4 . Exceeds proficiency ")
    let l2 = ("Su nota es:"+ letter + ", y esta en tu puntaje tradicional es de 80-89, el PointRange es de 9-11, SBG Rating=3 . Demonstrates proficiency")
    let l3 = ("Su nota es:"+ letter + ", y esta en tu puntaje tradicional es de 70-79 , el PointRange es de 6-8, SBG Rating=2 . Approaches proficiency ")
    let l4 = ("Su nota es:"+ letter + ", y esta en tu puntaje tradicional es de 60-69, el PointRange es de 3-5, SBG Rating=1 . Falls well below proficiency ")
    let l5 = ("Su nota es:"+ letter + ", y esta en tu puntaje tradicional es de <60, el PointRange es de 1-2, SBG Rating=0 . Lacks all proficiency")
    let l6 = ("Su nota es:"+ letter + ", y esta en tu puntaje tradicional es de 0, el PointRange es de 0, SBG Rating=0 . No attempt made")
    
    if(letter = "A" )
    {console.log(l1);}
    else if (letter ="B" ){
      console.log(l2);
    }
    else if (letter ="C"){
      console.log(l3);
    }
    else if (letter ="D"){
      console.log(l4);
    }
    else if (letter ="E"){
      console.log(l5);
    }
    else if (letter ="F"){
      console.log(l6);
    }




  /*   function Tabla(Traditional,PointRange,letter,SBGraiting,proficiencyLevelWithStandard ){
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
    let metodos = prompt('Elija su metodo de calificación:\n 1.Tradicional \n2.Puntos \n 3.Letra')
    if(metodos =1){
      let tradicional = prompt('ponga su nota del 0 al 100')
      
      let t1 = ("Su nota es:"+ tradicional + ", y esta en el rango de 12 a 14 puntos con la letra A, SBG Rating=4 . Exceeds proficiency ")
    let t2 = ("Su nota es:"+ tradicional + ", y esta en el rango de 9 a 11 puntos con la letra B, SBG Rating=3 . Demonstrates proficiency")
    let t3 = ("Su nota es:"+ tradicional + ", y esta en el rango de 6 a 8 puntos con la letra C, SBG Rating=2 . Approaches proficiency ")
    let t4 = ("Su nota es:"+ tradicional + ", y esta en el rango de 3 a 5 puntos con la letra D, SBG Rating=1 . Falls well below proficiency ")
    let t5 = ("Su nota es:"+ tradicional + ", y esta en el rango de 1 a 2 puntos con la letra E, SBG Rating=0 . Lacks all proficiency")
    let t6 = ("Su nota es:"+ tradicional + ", y esta en el rango de 0 puntos con la letra F, SBG Rating=0 . No attempt made")
    
        if(tradicional > 90 && tradicional < 100)
        {console.log(t1);}
        else if (tradicional >= 80 && tradicional <= 89){
          console.log(t2);
        }
        else if (tradicional >= 70 && tradicional <= 79){
          console.log(t3);
        }
        else if (tradicional >= 60 && tradicional <= 69){
          console.log(t4);
        }
        else if (tradicional <60){
          console.log(t5);
        }
        else if (tradicional =0){
          console.log(t6);
        }
    
    }
    else if(metodos =2){
      let PointRange = prompt ('Ponga su numero de puntos (0-14)')
    
      let p1 = ("Su nota es:"+ PointRange + ", y esta en tu puntaje tradicional es de 90-100 con la letra A, SBG Rating=4 . Exceeds proficiency ")
      let p2 = ("Su nota es:"+ PointRange + ", y esta en tu puntaje tradicional es de 80-89 con la letra B, SBG Rating=3 . Demonstrates proficiency")
      let p3 = ("Su nota es:"+ PointRange + ", y esta en tu puntaje tradicional es de 70-79  con la letra C, SBG Rating=2 . Approaches proficiency ")
      let p4 = ("Su nota es:"+ PointRange + ", y esta en tu puntaje tradicional es de 60-69 con la letra D, SBG Rating=1 . Falls well below proficiency ")
      let p5 = ("Su nota es:"+ PointRange + ", y esta en tu puntaje tradicional es de <60 con la letra E, SBG Rating=0 . Lacks all proficiency")
      let p6 = ("Su nota es:"+ PointRange + ", y esta en tu puntaje tradicional es de 0 con la letra F, SBG Rating=0 . No attempt made")
      
      if(PointRange >= 12 && PointRange <= 14 )
      {console.log(p1);}
      else if (PointRange >= 9 && PointRange <= 11){
        console.log(p2);
      }
      else if (PointRange >= 6 && PointRange <= 8){
        console.log(p3);
      }
      else if (PointRange >= 3 && PointRange <= 5){
        console.log(p4);
      }
      else if (PointRange >= 1 && PointRange <= 2){
        console.log(p5);
      }
      else if (PointRange >=0  && PointRange <= 0){
        console.log(p6);
      }
      }
    else if(metodos =3){
      let letter = prompt ('Ponga su metodo de calificacion por letra')
    
      let l1 = ("Su nota es:"+ letter + ", y esta en tu puntaje tradicional es de 90-100, el PointRange es de 12-14, SBG Rating=4 . Exceeds proficiency ")
      let l2 = ("Su nota es:"+ letter + ", y esta en tu puntaje tradicional es de 80-89, el PointRange es de 9-11, SBG Rating=3 . Demonstrates proficiency")
      let l3 = ("Su nota es:"+ letter + ", y esta en tu puntaje tradicional es de 70-79 , el PointRange es de 6-8, SBG Rating=2 . Approaches proficiency ")
      let l4 = ("Su nota es:"+ letter + ", y esta en tu puntaje tradicional es de 60-69, el PointRange es de 3-5, SBG Rating=1 . Falls well below proficiency ")
      let l5 = ("Su nota es:"+ letter + ", y esta en tu puntaje tradicional es de <60, el PointRange es de 1-2, SBG Rating=0 . Lacks all proficiency")
      let l6 = ("Su nota es:"+ letter + ", y esta en tu puntaje tradicional es de 0, el PointRange es de 0, SBG Rating=0 . No attempt made")
      
      if(letter = "A" )
      {console.log(l1);}
      else if (letter ="B" ){
        console.log(l2);
      }
      else if (letter ="C"){
        console.log(l3);
      }
      else if (letter ="D"){
        console.log(l4);
      }
      else if (letter ="E"){
        console.log(l5);
      }
      else if (letter ="F"){
        console.log(l6);
      }
      }
     */