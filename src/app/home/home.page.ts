import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/categoria.service';
import { NavController } from '@ionic/angular'; // Importa NavController

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  categoriasFromService: any[] = [];
  productosFromService: any[] = [];
  selectedCategoria: any = null;

  constructor(private categoriaService: CategoriaService, private navCtrl: NavController) {} // Inyecta NavController

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(
      categorias => {
        this.categoriasFromService = categorias;
      },
      error => {
        console.error('Error al obtener las categorías:', error);
      }
    );
  }

  onCategoriaChange() {
    if (this.selectedCategoria) {
      this.categoriaService.getProductosPorCategoriaID(this.selectedCategoria.id).subscribe(
        productos => {
          this.productosFromService = productos;
        },
        error => {
          console.error('Error al obtener los productos por categoría:', error);
        }
      );
    }
  }

  verDetallesProducto(producto: any) {
    // Navega a la página de detalles del producto con los datos del producto
    this.navCtrl.navigateForward(['/product-details', { producto: JSON.stringify(producto) }]);
  }
}
