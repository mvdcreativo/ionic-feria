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
      categoria: 'Espacio de Cocina',
      logo: 'assets/imgs/laObreriathum.jpg',
      img: 'assets/imgs/obreriaP.jpg',
      icono:'assets/imgs/markerObreria.png',
      coordenadas:{lat:-34.907967,lng:-56.208597},
    },
    { 
      id:2, 
      nombre:'Café Juan',
      categoria: 'Café',
      descripcion:'El mejor café, de calidad y natural',
      logo: 'assets/imgs/no_logo.png',
      img: 'assets/imgs/vami.jpg',
      icono:'assets/imgs/marker.png',
      coordenadas:{lat:-34.907990, lng:-56.208564},
    },
    { 
      id:3, 
      nombre:'Asados Doña Justina',
      categoria: 'Restaurant',
      descripcion:'Restaurant de carnes',
      logo: 'assets/imgs/no_logo.png',
      img: 'assets/imgs/vami.jpg',
      icono:'assets/imgs/marker.png',
      coordenadas:{lat:-34.907943,lng:-56.208592},
    },
    { 
      id:4, 
      nombre:'La Vegana',
      categoria: 'Cocina Vegana',
      descripcion:'Cocina y tips para veganos',
      logo: 'assets/imgs/no_logo.png',
      img: 'assets/imgs/vami.jpg',
      icono:'assets/imgs/marker.png',
      coordenadas:{lat:-34.907779,lng:-56.208580},
    },
    { 
      id:5, 
      nombre:'Volveras a Mi',
      categoria: 'Chocolates',
      descripcion:'Boutique de chocolate',
      logo: 'assets/imgs/vamiLogo.jpg',
      img: 'assets/imgs/vami.jpg',
      icono:'assets/imgs/markerVMI.png',
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
