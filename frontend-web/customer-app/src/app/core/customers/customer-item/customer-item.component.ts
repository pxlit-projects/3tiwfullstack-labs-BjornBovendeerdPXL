import { Component } from '@angular/core';
import { Customer } from '../../../shared/models/customer.model';

@Component({
  selector: 'app-customer-item',
  standalone: true,
  imports: [],
  templateUrl: './customer-item.component.html',
  styleUrl: './customer-item.component.css'
})
export class CustomerItemComponent {
  customer: Customer = new Customer('John Doe', 'john@doe.com', 'Hasselt', 'elfdelinie 123', 'Belgium', 6);
}
