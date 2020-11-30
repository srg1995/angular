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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './components/index/index.component';
import { PaginationComponent } from './components/pagination/pagination.component';
const rutas: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index'
  },
  {
    path: 'index',
    component: IndexComponent
  },
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
    DirectivesComponent,
    IndexComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }





