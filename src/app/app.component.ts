import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'products';
  productList:any;
  cartitems: Array<any> = [];
  len:Number = 0;
  constructor(private http: HttpClient) {
    this.http.get('https://fakestoreapi.com/products').subscribe(data => this.productList = data);
   
  }

  Addtocart(i:any)
  {
    console.log(i);
    this.cartitems.push(i.title);
    this.len = this.cartitems.length;
    console.log(this.cartitems);
  }

}
