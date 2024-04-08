import { Component, OnInit } from '@angular/core';
import { DataService } from '/Users/asadfathima/dashboard-project/src/app/data.service'; // Adjust the path as necessary

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}

/*export class DashboardComponent implements OnInit {
  summary: any;
  chartData: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const data = this.dataService.getDashboardData();
    this.summary = data.summary;
    this.chartData = data.chartData;
  }
}*/
