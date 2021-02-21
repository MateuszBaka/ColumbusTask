import { Component } from '@angular/core';
import { TransferService } from 'src/app/services/transfer.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  selectedRow: Item = {
    id: 1,
    path: '../../../assets/images/paper1.jpg',
    name: 'paper1',
    netPrice: '565,00',
    grossPrice: '566,00'
  }

  items: Item[] = [
    {
      id: 1,
      path: '../../../assets/images/paper1.jpg',
      name: 'paper1',
      netPrice: '565,00',
      grossPrice: '566,00'
    },
    {
      id: 2,
      path: '../../../assets/images/paper2.jpg',
      name: 'paper2',
      netPrice: '735,15',
      grossPrice: '740,00'
    },
    {
      id: 3,
      path: '../../../assets/images/paper3.jpg',
      name: 'paper3',
      netPrice: '648,55',
      grossPrice: '650,00'
    }
  ];

  constructor(private transferService: TransferService) {}

  show(id: number) {
    const item = this.items.filter(x => x.id === id);

    this.selectedRow = item[0];
    this.transferService.setPrice(this.selectedRow);
  }
}
