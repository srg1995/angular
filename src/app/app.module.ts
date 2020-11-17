import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { Componente1 } from './components/componente1/componente1.component';
import { FilmsComponent } from './components/films/films.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { MailComponent } from './components/mail/mail.component';
import { HttpClientModule } from '@angular/common/http';
import { EntradasSalidasComponent } from './components/entradas-salidas/entradas-salidas.component';
import { UserComponent } from './components/user/user.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Directiva1Directive } from './directives/directiva1.directive';


@NgModule({
  declarations: [
    AppComponent,
    Componente1,
    FilmsComponent,
    MenuComponent,
    FooterComponent,
    MailComponent,
    EntradasSalidasComponent,
    UserComponent,
    FormulariosComponent,
    Directiva1Directive
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }





