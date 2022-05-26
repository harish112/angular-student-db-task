import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';
import { AppComponent } from './app.component';
import { StatusComponent } from '../status/status.component';
import { StudentinfoComponent } from '../studentinfo/student.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    MenuComponent,
    StatusComponent,
    StudentinfoComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
