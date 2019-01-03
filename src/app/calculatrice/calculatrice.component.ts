import { Component, OnInit, HostListener } from '@angular/core';
import { Calculatrice } from '../calculatrice';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent implements OnInit {
  nb0: string = "0";
  nb1: string = "1";
  nb2: string = "2";
  nb3: string = "3";
  nb4: string = "4";
  nb5: string = "5";
  nb6: string = "6";
  nb7: string = "7";
  nb8: string = "8";
  nb9: string = "9";
  addition: string = "+";
  soustraction: string = "-";
  multiplication: string = "x";
  division: string = "/";
  virgule: string = ".";
  egale: string = "=";
  operation: string = "";
  resultat: string = "0";
  savOperation: string = "";

  constructor() { }

  // ctrlKey(event: any){
  //   var test = event.keyCode;
  //   //console.log(test);
  //   switch(test){
  //     case 53:
  //       console.log("1");
  //       this.recupOp("(");
  //       break;
  //     case 219:
  //       console.log("2");
  //       this.recupOp(")");
  //       break;
  //   }

  // }
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    //console.log(event);
    let x = event.keyCode;
    switch(x){
      case 96:
        this.recupOp("0");
        break;
      case 97:
        this.recupOp("1");
        break;
      case 98:
        this.recupOp("2");
        break;
      case 99:
        this.recupOp("3");
        break;
      case 100:
        this.recupOp("4");
        break;
      case 101:
        this.recupOp("5");
        break;
      case 102:
        this.recupOp("6");
        break;
      case 103:
        this.recupOp("7");
        break;
      case 104:
        this.recupOp("8");
        break;
      case 105:
        this.recupOp("9");
        break;

      case 53:
        this.recupOp("(");
        break;
      case 219:
        this.recupOp(")");
        break;

      case 107:
        this.recupOp("+");
        break;
      case 109:
        this.recupOp("-");
        break;
      case 106:
        this.recupOp("*");
        break;
      case 111:
        this.recupOp("/");
        break;

      case 8:
        this.undo();
        break;
      case 27:
      case 46:
        this.clearAll();
        break;
      
      case 187:
      case 13:
        this.calcul();
        break;
    } 
}

  clear(){
    this.operation = "";
  }

  clearAll(){
    this.operation = "";
    this.resultat = "0";
  }

  undo(){
    if (this.operation != ''){
      this.operation = this.operation.slice(0, -1)
    }
  }

  recupOp(nb: string ){
    if(nb == "/" || nb == "*"){
      if(this.operation == ""){
        this.operation = "0";
      }
    }
    this.operation += nb;
    //event.target.classList.add('touche');
  }


  calculCarre(){
    try{
      this.resultat = eval("Math.pow("+this.operation+", 2)");
      //this.clear();
      this.savOperation = this.resultat;
    }
    catch{
      this.resultat = "Erreur d'écriture du calcul...";
      this.clear();
    }
    
  }

  calculRacine(){
    try{
      this.resultat = eval("Math.sqrt("+this.operation+")");
      //this.clear();
      this.operation = this.resultat;
    }
    catch{
      this.resultat = "Erreur d'écriture du calcul...";
      this.clear();
    }
    
  }

  calculPoucent(){
    try{
      this.resultat = eval(this.operation+"/100");
      //this.clear();
      this.operation = this.resultat;
    }
    catch{
      this.resultat = "Erreur d'écriture du calcul...";
      this.clear();
    }
    
  }
  
  calcul(){
    try{
      var r = eval(this.operation);
      if(r == 'Infinity'){
        this.resultat = "Division par 0 impossible...";
        this.clear();
      }
      else{
        this.resultat = eval(this.operation);
        //this.clear();
        this.operation = this.resultat;
      }
    }
    catch{
      this.resultat = "Erreur d'écriture du calcul...";
      this.clear();
    }
  }

  

  ngOnInit() {
  }

}
