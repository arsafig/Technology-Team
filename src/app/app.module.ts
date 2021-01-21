import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

// formularios reactivos
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Angular material
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { GridComponent } from './componentes/grid/grid.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from "@angular/material/list";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';

//pipes
import { NoNuloPipe } from './pipes/no-nulo.pipe';
import { FormularioComponent } from './componentes/formulario/formulario.component';

//ng mask
import { NgxMaskModule } from 'ngx-mask'
import { MatNativeDateModule } from '@angular/material/core';
import { FormularioEquiposComponent } from './componentes/formulario-equipos/formulario-equipos.component';
import { RegistroComponent } from './paginas/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    GridComponent,
    NoNuloPipe,
    FormularioComponent,
    FormularioEquiposComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatInputModule, 
    MatIconModule, 
    MatFormFieldModule, 
    MatCheckboxModule, 
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatListModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
