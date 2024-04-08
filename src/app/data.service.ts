import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  
  constructor() { }

  getDashboardData() {
    return {
      summary: { sales: 100, customers: 50 },
      chartData: [70, 80, 65, 89],
    };
  }
}
