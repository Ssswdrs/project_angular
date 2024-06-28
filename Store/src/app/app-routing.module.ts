import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './components/personal/personal.component'
import { LayoutComponent } from './components/layout/layout.component'
const routes: Routes = [
  {path: '' , component : LayoutComponent,
    children: [
      {
        path: 'personal', component: PersonalComponent
      },
      
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
