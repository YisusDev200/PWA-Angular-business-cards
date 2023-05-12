import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { BusinessCardInfo } from '../info';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.css']
})
export class BusinessInfoComponent implements OnInit {
  businessInfo: BusinessCardInfo|undefined;
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // Obtén un valor específico del parámetro 'id'
      const id = params['id'];
      const name = params['name'];
      this.getBusinessInfo(id, name);
    });
  }
 
  async getBusinessInfo(id: string, name: string) {
    const response = await this.apiService.getBusinessInfo();
    const idABuscar = id; // ID que se desea buscar
    const nameBuscar = name;

    let objetoEncontrado;

    if (id) {
      response.forEach((obj: { id2: string; }) => {
        if (obj.id2 === idABuscar) {
          objetoEncontrado = obj;
        }
      });
    }
    if (name) {
      response.forEach((obj: { businessName: string; }) => {
        if (obj.businessName === nameBuscar) {
          objetoEncontrado = obj;
        }
      });
    }

    console.log(objetoEncontrado)


    this.businessInfo = objetoEncontrado;
  }
  
}


