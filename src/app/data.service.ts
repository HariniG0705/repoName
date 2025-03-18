import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  // Simulating an API call with a Promise
  getData(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data fetched successfully!');
      }, 2000);
    });
  }

  // Using async/await to fetch data
  async fetchData(): Promise<string> {
    try {
      const result = await this.getData();
      return result;
    } catch (error) {
      return 'Error fetching data';
    }
  }
}
