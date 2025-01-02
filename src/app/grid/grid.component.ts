import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})

export class GridComponent {
  data: any;
  constructor(private dataService: DataService) {}
  
  orders: any[] = [];
  customers: any[] = [];
  products: any[] = [];

  ngOnInit() {
    this.data = this.dataService.data;
    this.orders = this.data.orders;
    this.customers = this.data.customers;
    this.products = this.data.products;
  }

  searchCriteria: string = 'customerId'; 
  searchText: string = ''; 
  searchResults: any[] = []; 
  columns: string[] = ['orderId', 'customerId', 'status'];
  columns2: string[] = ['customerId', 'name', 'email'];
  columns3: string[] = ['productId', 'name', 'price']; 
  searchPipe: any;
}