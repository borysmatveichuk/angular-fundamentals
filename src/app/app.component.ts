import {Component, OnInit} from '@angular/core';
import {GitSearchService} from './git-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitSearchService]
})
export class AppComponent implements OnInit {
  title = 'GitHub Browser';

  constructor(private gitSearchService: GitSearchService) {}

  ngOnInit(): void {
    this.gitSearchService.gitSearch('angular').then( (response) => {
      alert('Total libraries found: ' + response.total_count);
    }, (error) => {
      alert('Error: ' + error.statusText);
    });

    this.gitSearchService.gitUsers('john').then( (response) => {
      alert('Total users found: ' + response.total_count);
    }, (error) => {
      alert('Error: ' + error.statusText);
    });
  }
}
