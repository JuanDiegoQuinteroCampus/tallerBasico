let notas = prompt['ponga su nota desde el 0 al 100']
let letter = ''



function xd(notas){
    if(notas > 100 || notas < 0)
    {letter='invalid grade'}
    else if (notas >= 90 && notas <= 100){letter='A'
  }
}






  

  function Persona(Traditional,PointRange,letter,SBGraiting,proficiencyLevelWithStandard ){
    this.Traditional = Traditional;
    this.PointRange = PointRange;
    this.letter = letter;
    this.SBGraiting = SBGraiting; 
    this.proficiencyLevelWithStandard = proficiencyLevelWithStandard; 
}
p1 = new xd("Marta",36 );
p2 = new Persona("Luis",12);
p3 = new Persona("Javier",43);
p4 = new Persona("Javier",43);
p5 = new Persona();
console.table([p1,p2,p3,p4,p5]);