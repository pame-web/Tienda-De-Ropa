import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular'; // Importa NavController

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  producto: any;

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {} // Inyecta NavController

  ngOnInit() {
    // Obtiene los datos del producto de la ruta
    const productoData = this.route.snapshot.paramMap.get('producto');
    if (productoData) {
      this.producto = JSON.parse(productoData);
    }
  }

  volverAInicio() {
    this.navCtrl.navigateBack('/home'); // Navega de vuelta a la página de inicio
  }
}
