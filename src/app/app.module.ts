import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { FilmsComponent } from '@components//films/films.component';
import { MenuComponent } from '@components//menu/menu.component';
import { FooterComponent } from '@components//footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from '@components//user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Directiva1Directive } from './directives/directiva1.directive';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from '@components/forms/forms.component';
import { DirectivesComponent } from './components/directives/directives.component';
const rutas: Routes = [

  {
    path: 'film',
    component: FilmsComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'directives',
    component: DirectivesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    MenuComponent,
    FooterComponent,
    UserComponent,
    FormsComponent,
    Directiva1Directive,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }





