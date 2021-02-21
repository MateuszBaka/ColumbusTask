import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SearchComponent } from './components/search/search.component';
import { MatBadgeModule } from '@angular/material/badge';
import { HttpClientModule } from "@angular/common/http";
import { CartComponent } from './components/cart/cart.component';
import { ContentComponent } from './components/content/content.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MatSelectModule } from '@angular/material/select';
import { TransferService } from './services/transfer.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SearchComponent,
    CartComponent,
    ContentComponent,
    ProductListComponent,
    ArticlesComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [TransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
