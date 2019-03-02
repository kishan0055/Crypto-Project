import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';          
import { GotHttpService } from '../got-http-service.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details: Array<any> = [];
  constructor(private _route: ActivatedRoute, private router: Router, private gotHttpService: GotHttpService , private location: Location) { }

  ngOnInit() {
    let myId=this._route.snapshot.paramMap.get('id');

    this.gotHttpService.getSingleInformation(myId).subscribe(
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
          },
    
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }

    
    
    )}};
