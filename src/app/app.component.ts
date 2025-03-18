import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'my-angular-app2';
  data: string = '';

  constructor(private dataService: DataService) {}

  async ngOnInit() {
    // Fetch data using async/await
    this.data = await this.dataService.fetchData();
  }

  // Fetch data using Promise with .then()
  fetchDataWithPromise() {
    this.dataService.getData().then((res) => {
      this.data = res;
    });
  }
}
