import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VscodeComponent } from './components/snippet-views/vscode/vscode.component';
import { SublimeComponent } from './components/snippet-views/sublime/sublime.component';
import { AtomComponent } from './components/snippet-views/atom/atom.component';


const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent,
   children:[
     {path:'', redirectTo:'vscode', pathMatch:'full'},
     {path:'vscode', component: VscodeComponent},
     {path:'sublime', component: SublimeComponent},
     {path:'atom', component:AtomComponent}
  ]  

},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
