import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listado: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public database: AngularFireDatabase) {
    this.listado = this.database.list('/movies');

        this.listado.push({
          img:'http://4.bp.blogspot.com/-e2ckVZf9tL4/VU6I_AUmt9I/AAAAAAAAUFA/kG1Lc-Go_Hk/s1600/la_era_de_hielo.jpg', 
          tittle_movie:'La era de hielo', 
          opinion_movie:'Gran pelicula'
        });
        this.listado.push({
          img:'http://lh3.ggpht.com/-biRlTn0aSOI/UTT7owVj1EI/AAAAAAAASIk/6tIip9Rvo-8/s1600/Mi_villano_favorito%25255B7%25255D.jpg', 
          tittle_movie:'Mi villano favorito', 
          opinion_movie:'Una pelicula muy divertida'
        });
        this.listado.push(
          {img:'http://pics.filmaffinity.com/cars-746710621-large.jpg', 
          tittle_movie:'Cars', 
          opinion_movie:'Muy buena pelicula'}
        );
  }

}
