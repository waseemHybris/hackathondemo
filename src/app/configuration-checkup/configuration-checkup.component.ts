import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-configuration-checkup',
  templateUrl: './configuration-checkup.component.html',
  styleUrls: ['./configuration-checkup.component.scss']
})
export class ConfigurationCheckupComponent implements OnInit {
configurations: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getNews().subscribe((data) => {
      console.log(data);
      this.configurations = data.configurations;
    });
  }

}
