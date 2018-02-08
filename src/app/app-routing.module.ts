import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PageListDataComponent } from './module1/containers/page-list-data/page-list-data.component';

const appRoutes: Routes = [
    // {path: '', component: PageListDataComponent, pathMatch: 'full'},
    // {path: 'test', component: PageListDataComponent},
    {path: '', loadChildren: './module1/module1.module#Number1Module'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRoutingModule {}
