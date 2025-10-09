import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import {BaseURL} from '../shared/basedurl'

@Component({
    selector: 'app-secureView',
    templateUrl: './secureView.component.html',
    styleUrls: ['./secureView.component.scss'],
    standalone: false
})
export class SecureViewComponent implements OnInit {
  url2 = BaseURL + "/object/object"

  objectList:JSON
  objectTestList:JSON[] = []
  //objListTest:Possesions[] = [{ ownerId: "625b12a789b0d2d00ee51cb6", lost: false, id: 1, name: "Stylo", code: "erherhes", image: null }]
  //objTest
  constructor( public dialog:MatDialog,private http:HttpClient) { 
this.objectTestList.push(JSON.parse('{"ownerId":"6574839HBNGJG8353","lost" : false,"id":1,"name":"Stylo","code": "ERHZ765","image":null}'))
   //this.objTest = JSON.stringify(this.objListTest).split(/"|\[|\]|,|\\|{|:|}/).filter(Boolean)
 
  }

  attachmentList;
getUserObject() {
  this.http
  .get(this.url2 + '/' + localStorage.getItem('user-id'), {
    responseType: 'text'})
  .pipe(
    map((data2) => {
      this.attachmentList = JSON.stringify(data2)
        .split(/"|\[|\]|,|\\/)
        .filter(Boolean);
    })
  )
  .subscribe((result) => {});
}


getObject() {

let header = new HttpHeaders().set('_id', localStorage.getItem('user-id'))
  this.http.get(this.url2,{headers:header,responseType:'text'}).pipe((map((data) => {
    data.split(/"|\[|\]|,|\\/).filter(Boolean)
    this.objectList = JSON.parse(data)
    
    
    console.log(this.objectList)
    

  }))).subscribe((result) => {})
  
}

  ngOnInit() {
    this.getObject()


  }

}
