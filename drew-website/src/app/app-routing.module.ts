import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'admin',
    loadChildren: () => AdminModule
  },
  {
    path: 'users',
    // loadChildren: './users/users.module#UsersModule'

    loadChildren: () => UsersModule
    // loadChildren: () => import('src/app/users/users.module')

    // loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
