import { Injectable } from '@angular/core';


/*
  Generated class for the ServicesStandsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesStandsProvider {

  constructor() {
    
  }

  
  stands: any[] = 
  [
    { 
      id:1, 
      nombre:'La Obreria',
      descripcion:'Cocina, cursos y tendencias',
      img: 'https://i2.wp.com/lentemagazine.com/wp-content/uploads/2017/04/ISOTIPO-brillo.png?fit=24%2C24',
      icono:'assets/imgs/marker.png',
      coordenadas:{lat:-34.907967,lng:-56.208597},
    },
    { 
      id:2, 
      nombre:'Café Juan',
      descripcion:'El mejor café, de calidad y natural',
      img: 'https://i2.wp.com/lentemagazine.com/wp-content/uploads/2017/04/ISOTIPO-brillo.png?fit=24%2C24',
      icono:'assets/imgs/marker.png',
      coordenadas:{lat:-34.907990, lng:-56.208564},
    },
    { 
      id:3, 
      nombre:'Asados Doña Justina',
      descripcion:'Restaurant de carnes',
      img: 'https://i2.wp.com/lentemagazine.com/wp-content/uploads/2017/04/ISOTIPO-brillo.png?fit=24%2C24',
      icono:'assets/imgs/marker.png',
      coordenadas:{lat:-34.907943,lng:-56.208592},
    },
    { 
      id:4, 
      nombre:'La Vegana',
      descripcion:'Cocina y tips para veganos',
      img: 'https://i2.wp.com/lentemagazine.com/wp-content/uploads/2017/04/ISOTIPO-brillo.png?fit=24%2C24',
      icono:'assets/imgs/marker.png',
      coordenadas:{lat:-34.907779,lng:-56.208580},
    },
    { 
      id:5, 
      nombre:'Volveras a Mi',
      descripcion:'Boutique de chocolate',
      img: 'https://i2.wp.com/lentemagazine.com/wp-content/uploads/2017/04/ISOTIPO-brillo.png?fit=24%2C24',
      icono:'assets/imgs/marker.png',
      coordenadas:{lat:-34.907734,lng:-56.208572},
    },
  ]

  

  getStands(){
    return this.stands;
  }

  getStandsId(id){
    let stand =  this.stands.filter(
      (res)=>{
        return (res.id === id);
      });
    return stand;
  }

}
