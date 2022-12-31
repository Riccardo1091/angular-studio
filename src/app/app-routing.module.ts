import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { CardsComponent } from './cards/cards.component';
import { TabsComponent } from './tabs/tabs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [AuthGuard], children: [
      { path: '', redirectTo: 'table', pathMatch: 'full' },
      { path: 'table', component: TableComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'tabs', component: TabsComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
