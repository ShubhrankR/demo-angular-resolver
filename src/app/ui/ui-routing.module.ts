import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {DataWithoutResolverComponent} from "./data-without-resolver/data-without-resolver.component";

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'planetary',
        component: DataWithoutResolverComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class UiRoutingModule {
}
