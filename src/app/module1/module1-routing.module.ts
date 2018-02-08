import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PageListDataComponent } from './containers/page-list-data/page-list-data.component';
import {
    SingleItemComponent
} from './components/index';

const module1Route: Routes = [
    {path: '', component: PageListDataComponent, children: [
        {path: ':id', component: SingleItemComponent},
    ]},
];


@NgModule({
    imports: [RouterModule.forChild(module1Route)],
    exports: [RouterModule]
    // providers: [
    //     AuthGuard
    // ]
})

export class Module1RoutingModule {}
