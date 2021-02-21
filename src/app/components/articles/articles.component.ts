import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  netPrice: string = '0,00';
  colors: string[] = ['White','Green','Red','Blue'];
  selectedColor: string = this.colors[0];
  ishiddenText: boolean = true;
  btnText: string = 'Read more';

  constructor(public transferService: TransferService) {}
  
  select(event: Event) {
    this.selectedColor = (event.target as HTMLSelectElement).value;
  }

  ngOnInit(): void {
    this.transferService.netPrice.subscribe(event => this.netPrice = event);
  }

  addToCart() {
    this.transferService.add(Number.parseFloat(this.netPrice));
  }

  readMoreLess() {
    this.ishiddenText = !this.ishiddenText;
    this.btnText = this.ishiddenText ? 'Read more' : 'Less text';
  }
}
