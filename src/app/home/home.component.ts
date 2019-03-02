import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';          
import { GotHttpService } from '../got-http-service.service';
import { Pipe, PipeTransform } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  details: Array<any> = [];
  constructor(private _route: ActivatedRoute, private router: Router, private gotHttpService: GotHttpService , private location: Location) { }

  ngOnInit() {
    this.gotHttpService.getDetails().subscribe(
      data => {

        // Step 1. Get all the object keys.
        let tmpAllKeys = Object.keys(data.data);
        // Step 2. Create an empty array.
        let tmpArray = [];
        // Step 3. Iterate throw all keys.
        for (let prop of tmpAllKeys) { 
            tmpArray.push(data.data[prop]);
        }
        this.details = tmpArray;
          
      })}};
