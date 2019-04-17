import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AoneComponent} from './aone/aone.component';
import { BoneComponent} from './bone/bone.component';
import { ConeComponent} from './cone/cone.component';

const routes: Routes = [
  {path:'a', component:AoneComponent},
  {path:'b', component:BoneComponent},
  {path:'c', component:ConeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
