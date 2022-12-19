import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard.component';
import { RouterChildModule } from './router-child.module';

const routes: Routes = [
    {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./router-child.module').then(m => m.RouterChildModule)
},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterChildModule],
})
export class DashboardRoutingModule { }
