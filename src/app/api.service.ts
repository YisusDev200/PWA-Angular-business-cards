import { Injectable } from '@angular/core';
import { BusinessCardInfo } from './info';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api5yis.fly.dev/api-yisus/clientes';

  constructor() { }

  async getBusinessInfo() {
    try {
     
      const response = await axios.get(this.apiUrl);
      
      return response.data;
    } catch (error) {
      console.error(error);
    }
    return undefined;
  }
}