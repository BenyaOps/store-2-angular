import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { NavbarComponent } from '@app/domains/shared/components/navbar/navbar.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, NavbarComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  // el metodo output de product, lo recibo aqui
  fromProduct(event: string) {
    console.log('event from product: ', event);
  }
}
