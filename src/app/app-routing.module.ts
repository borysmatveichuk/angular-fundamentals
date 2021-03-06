import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitSearchComponent } from './git-search_reactive/git-search.component';
import { HomePageComponent } from './home-page/home-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {GitSearchTemplateComponent} from './git-search_template/git-search.component';

const routes: Routes = [
  { path: '',
    component: HomePageComponent,
  },
  { path: 'search',
    redirectTo: '/search/angular',
    pathMatch: 'full'
  },
  { path: 'search/:query',
    component: GitSearchTemplateComponent,
    data: {
      title: 'Git Search'
    }
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
