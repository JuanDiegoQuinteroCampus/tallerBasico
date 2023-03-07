xd = [notas+"hola"]
notas = prompt('ponga su nota del 0 al 100')
function Tabla(notas){
  
    if(notas > 90 && notas < 100)
    {console.log(xd);}
    else if (notas >= 80 && notas <= 89){
      console.log(xd);
    }
    else if (notas >= 70 && notas <= 79){
      console.log(xd);
    }
    else if (notas >= 60 && notas <= 69){
      console.log(xd);
    }
    else if (notas <60){
      console.log(xd);
    }
    else if (notas =0){
      console.log(xd);
    }
    
}






  

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

