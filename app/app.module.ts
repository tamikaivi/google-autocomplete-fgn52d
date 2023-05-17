import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ApiService } from './api.service';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatSelectModule],
  providers: [ApiService],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
