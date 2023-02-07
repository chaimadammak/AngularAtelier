import { Component, OnInit } from '@angular/core';
import { Emploi } from '../Core/Model/emploi ';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {

  listeEmploi! : Emploi[];
  listeEmploiFilter !:Emploi [];
  entrepriseRecherchee = '';
  index : number= 0; 
  entreprise : any ; 
  constructor() { }

  ngOnInit(): void {
    this.listeEmploi=[{reference:'11A', titre:'poste 1 ',entreprise:'Primatec',etat: true},
    {reference:'11B', titre:'poste 2 ',entreprise:'Sofrecom',etat: true},
    {reference:'11C', titre:'poste 3 ',entreprise:'Actia',etat: false},];
     
  }
  Bilan() {
    
      let nombreOffres = 0;
      this.listeEmploi.forEach(emploi => {
        if (!emploi.etat) {
          nombreOffres++;
        }
      });
      alert(`Nombre d'offres d'emploi non clôturées: ${nombreOffres}`);
    }
   rechercherEmploi() {
    for (let i = 0; i < this.listeEmploi.length; i++){
      if(this.listeEmploi[i].entreprise==this.entrepriseRecherchee){
        this.listeEmploiFilter[this.index]=this.listeEmploi[i] ;
        this.index=this.index+1;
      }
    }
    }
    /*rechercherEmploi(i:any){
      this.index=i;
      this.entreprise=this.listeEmploi[i];

    }*/

  
  


  

}
