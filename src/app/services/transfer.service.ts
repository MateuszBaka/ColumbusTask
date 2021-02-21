import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  itemsSubject = new BehaviorSubject<number>(0);
  cardPriceSubject = new BehaviorSubject<string>('0,00');
  netPriceSubject = new BehaviorSubject<string>('565,00');
  grossPriceSubject = new BehaviorSubject<string>('565,00');

  constructor() { }

  get quantity(): Observable<number> {
    return this.itemsSubject.asObservable();
  }

  get price(): Observable<string> {
    return this.cardPriceSubject.asObservable();
  }

  get netPrice(): Observable<string> {
    return this.netPriceSubject.asObservable();
  }

  get grossPrice(): Observable<string> {
    return this.grossPriceSubject.asObservable();
  }

  add(price: number): void {
    this.itemsSubject.next(this.itemsSubject.getValue() + 1);
    this.cardPriceSubject.next((Number.parseFloat(this.cardPriceSubject.getValue()) + price).toFixed(2));
  }

  clear(): void {
    this.itemsSubject.next(0);
    this.cardPriceSubject.next('0,00');
  }

  setPrice(item: Item): void {
    this.netPriceSubject.next(item.netPrice);
    this.grossPriceSubject.next(item.grossPrice);
  }
}
