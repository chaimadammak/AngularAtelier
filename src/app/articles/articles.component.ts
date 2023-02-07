import { Component, OnInit } from '@angular/core';
import { article } from '../Core/Model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  listeArticles ! : article[];
  nbarticles : number = 3 ;

  constructor() { }

  ngOnInit(): void {
    this.listeArticles=[{titre :'article1', contenu :'contenu article 1 ',auteur: 'auteur article1',date : '2020-12-23', categoreie : 'romance'},
    {titre :'article2', contenu :'contenu article 2 ',auteur: 'auteur article2',date : '2020-12-1', categoreie : 'action'},
    {titre :'article3', contenu :'contenu article 3 ',auteur: 'auteur article3',date : '2027-12-9', categoreie : 'travail'}];
  }
 
 

}
