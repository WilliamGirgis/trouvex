import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {BaseURL} from '../../../shared/basedurl'
import {User} from '../../../shared/user'
import { trigger ,style,state,transition,animate} from '@angular/animations';
import {  MatTableDataSource } from '@angular/material/table';
import { FileUploader } from 'ng2-file-upload';

const uploadURL = BaseURL + '/image/upload';
const getFilesURL = BaseURL + '/image/upload';

// src : https://material.angular.io/components/table/examples
@Component({
    selector: 'app-adminview',
    templateUrl: './adminview.component.html',
    styleUrls: ['./adminview.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
    standalone: false
})
export class AdminviewComponent implements OnInit {


  imageUrls:string[] =[]

  readonly getUserIdULR = 'http://localhost:4200/user/users/id';
  readonly getUser_IdULR = 'http://localhost:4200/user/users/_id';
  readonly postObjectUlr = 'http://localhost:4200/object/object/add'
  uploader: FileUploader = new FileUploader({ url: uploadURL});
  readonly delUserURL = 'http://localhost:4200/user/users/del'

  userListTest:User[] = [{id:'User1',firstname:'willy',lastname:'bg',tel:'0760650912',email:'btrnrt@gmail.com',possesions:null!,country:'France'}]
  userList:User[] = [];
  noUser?:boolean = false
  successMsgSaved?: string;
  isSuccess?: boolean;
  selectedAction = 'add_object'
  readonly registerUserURL = 'http://localhost:4200/user/users';
  subscribeForm: any;
  isOverDeleteButton = false

  global_ID?:string
  isEmptyTable:Boolean = false
  displayedColumns?:String[]
  dataSource = new MatTableDataSource(this.userList)

  constructor(private http:HttpClient,private route: ActivatedRoute,private router:Router) {
    this.uploader.onCompleteAll = () => {
      // When the upload queue is completely done, we refresh the page to output it correctly
      console.log("All Uploaded to : " + this.uploader.options.url)

    };

    this.uploader.onCompleteItem = (file) => {
      this.uploader.removeFromQueue(file)
      if(this.uploader.queue.length == 0) {

      }
    };




  }

  private formBuilder:FormBuilder = new FormBuilder()
  columnsToDisplay = ['ID', 'firstname', 'lastname', 'tel','email','country','Search'];
  saveUserForm:UntypedFormGroup = this.formBuilder.group({

    id : ['',[Validators.required]],
    fname: ['', [Validators.required]],
    lname: ['', [Validators.required]],
    tel : ['', [Validators.required],],
    email : ['', [Validators.required],],
    country : ['', [Validators.required],],
    password: ['',[Validators.required,Validators.minLength(1)]],
    isLost:['',[Validators.required]],
    objectName:['',[Validators.required]]

   }
   );

   saveObjectForm:UntypedFormGroup = this.formBuilder.group({
    user_id : ['',[Validators.required]],
    objectName: ['', [Validators.required]],
    isLost: [false, [Validators.required]],
    image:[null,[Validators.required]]

   })

   applyFilter(event: Event) {


    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
   save(id: string,firstname:string,lastname:string,tel:string,email:string,country:string, password: string) {
    let user = { id: id,firstname:firstname,lastname:lastname,tel:tel,email:email,country:country,password:password };
    console.log(user)
    return this.http
      .post(this.registerUserURL, user)
      .pipe(
        map((data) => {
         this.successMsgSaved =  "User saved successfuly !"
         this.isSuccess = true
         this.getUsers(' ');
        })
      )
      .subscribe((result) => {});
  }

  setUserview(input:string) {
    this.selectedAction = input
  }




    async addObject(id:string) {
    let user_Id = this.saveObjectForm.get('user_id')!.value
    let objectName = this.saveObjectForm.get('objectName')!.value
    let isLost = this.saveObjectForm.get('isLost')!.value
    let image =  this.saveObjectForm.get('image')!.value
   await this.getuser_ID(user_Id) // Set the global_ID

   let user_folder:string = "/image/upload" + "/" + this.global_ID
    this.uploader.setOptions({ url: user_folder});
    this.uploader.uploadAll()
      this.http
    .post(this.postObjectUlr, { ownerId:user_Id,lost:isLost,name:objectName,image:image, responseType: 'text' })
    .pipe(
      map((data) => {
        console.log("DATA = " +data)
      })
    )
    .subscribe((result) => {});
  }






  async getUsers(input: string) {
    this.userList = []
    const querParam = new HttpParams().set('id', input);
    this.http
      .get(this.getUserIdULR, { params: querParam, responseType: 'text' })
      .pipe(
        map((data) => {
         var parsed = JSON.parse(data)
         for(var i = 0;i < parsed.length;i++) {
        // this.userList.push(JSON.stringify({id:parsed[i].id,firstname:parsed[i].firstname,lastname:parsed[i].lastname,tel:parsed[i].tel,email:parsed[i].email,possesions:parsed[i].possesions,country:parsed[i].country}))
       let usertemp:User ={id:parsed[i].id,firstname:parsed[i].firstname,lastname:parsed[i].lastname,tel:parsed[i].tel,email:parsed[i].email,possesions:parsed[i].possesions,country:parsed[i].country}
        this.userList.push(usertemp)
      }

         this.dataSource = new MatTableDataSource(this.userList)

         console.log('this.userList = ' + this.userList[0])
        })
      )
      .subscribe((result) => {});
  }


   getuser_ID(id: string):Promise<any> {

    const querParam = new HttpParams().set('id', id);
     return this.http
      .get(this.getUser_IdULR, { params: querParam, responseType: 'text' })
      .pipe(
        map((data) => {

this.global_ID = data
console.log("data got for getuser_ID = " + this.global_ID)
        })
      )
      .toPromise();
  }


  deleteUser(id:string) {
    if(!window.confirm("Are you sure you wanna delete " + id + " ?")) {
      return
        }
    const querParam = new HttpParams().set('id', id);
    console.log(id)
    this.router.navigate(['/clientUpload'])
    this.http
      .get(this.delUserURL, { params: querParam, responseType: 'text' })
      .pipe(
        map((data) => {
        console.log("User deleted :" + data )
        window.location.reload();
        })
      )
      .subscribe((result) => {});
  }



   ngOnInit() {
    //this.dataSource = new MatTableDataSource(this.userListTest)
     this.getUsers(" ")
    this.displayedColumns =['ID', 'firstname', 'lastname', 'tel','email','country','Search'];

  }

  unsetDataRowAnimation() {
    console.log("IN")
this.isOverDeleteButton = true

  }

  setDataRownAnimation() {
    this.isOverDeleteButton = false
    console.log("OUT")
  }



}
