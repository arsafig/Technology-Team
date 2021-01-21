import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { FormularioEquiposComponent } from './componentes/formulario-equipos/formulario-equipos.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { GridComponent } from './componentes/grid/grid.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
      children: [
        { path: '', component: GridComponent },
        { path: 'registro', component: RegistroComponent },
      ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
