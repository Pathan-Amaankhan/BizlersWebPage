import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

export interface Elements {
  name: string;
  role: string;
}

let ELEMENT_DATA: Elements[] = [
];

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.css']
})

export class DisplayTableComponent implements OnInit {
  title: string = 'User list';
  displayed_columns: string[] = ['name', 'role', 'action'];
  data_source = new MatTableDataSource(ELEMENT_DATA);
  source: string = '';
  sendEmailConformation: boolean = false;
  currentSelectedFile: File;
  showSuccess: boolean = false;
  fadeOut:boolean = false;
  widthOfPage: number;

  constructor(public dialog: MatDialog) {
    this.widthOfPage = window.innerWidth;
  }

  ngOnInit(): void {
  }

  getWidth(val) {
    this.widthOfPage = val.target.innerWidth;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data_source.filter = filterValue.trim().toLowerCase();
  }

  checkAndUpdateSource($event: Event) {
    if (this.checkSize($event.target['files'][0])) {
      this.openDialog('File size should be less than 1mb');
      return;
    }
    this.projectImage($event.target['files'][0]);
  }


  checkSize(file: File) {
    return (Math.round(file.size / 1024) > 1024)
  }

  projectImage(file: File) {
    this.currentSelectedFile = file;
    let reader = new FileReader;
    reader.onload = (e: any) => {
      this.source = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  openDialog(err: string) {
    this.dialog.open(DialogElement,{data:err});
  }

  updateUser(user: Elements) {
    const dialogRef = this.dialog.open(UserUpdateDialog, {data: {name: user.name , role: user.role}});

    dialogRef.afterClosed().subscribe(result =>{
      if (result == undefined){
        return;
      }

      if(result.name.length==0) {
        this.openDialog('Name cannot be empty.');
        return;
      }

      for(let i in result.name){
        if(!((result.name.toLowerCase().charCodeAt(Number(i))>=48 && result.name.toLowerCase().charCodeAt(Number(i))<=57) || (result.name.toLowerCase().charCodeAt(Number(i))>=97 && result.name.toLowerCase().charCodeAt(Number(i))<=122))){
          this.openDialog('User Name should contain only alphabets or numbers.');
          return;
        }
      }

      user.name = result.name;
      user.role = result.role;
    });
  }
  addUser(userName: any, email:string, firstName: any, lastName: any, userRole: any){
    if(userName.length==0 || email.length==0 || firstName.length==0 || lastName.length==0 || userRole==undefined || this.currentSelectedFile==undefined) {
      this.openDialog('All the fields are mandatory and should be filled.');
      return;
    }

    for(let i in firstName){
      if(!((firstName.toLowerCase().charCodeAt(Number(i))>=48 && firstName.toLowerCase().charCodeAt(Number(i))<=57) || (firstName.toLowerCase().charCodeAt(Number(i))>=97 && firstName.toLowerCase().charCodeAt(Number(i))<=122))){
        this.openDialog('First Name should contain only alphabets or numbers.');
        return;
      }
    }

    for(let i in lastName){
      if(!((lastName.toLowerCase().charCodeAt(Number(i))>=48 && lastName.toLowerCase().charCodeAt(Number(i))<=57) || (lastName.toLowerCase().charCodeAt(Number(i))>=97 && lastName.toLowerCase().charCodeAt(Number(i))<=122))){
        this.openDialog('Last Name should contain only alphabets or numbers.');
        return;
      }
    }

    for(let i in userName){
      if(!((userName.toLowerCase().charCodeAt(Number(i))>=48 && userName.toLowerCase().charCodeAt(Number(i))<=57) || (userName.toLowerCase().charCodeAt(Number(i))>=97 && userName.toLowerCase().charCodeAt(Number(i))<=122))){
        this.openDialog('User Name should contain only alphabets or numbers.');
        return;
      }
    }

    if(!(email.includes('@'))){
      this.openDialog('Please enter a valid email address.');
      return;
    }

    ELEMENT_DATA.push({name: userName,role: userRole});
    this.data_source = new MatTableDataSource(ELEMENT_DATA);
    this.fadeOut = false;
    this.showSuccess = true;
  }

  startCountDown() {
    if(this.showSuccess){
      setTimeout(()=>this.showSuccess=false,4000);
      return true;
    }
    return false;
  }
}


@Component({
  selector: 'dialog-element',
  templateUrl: './display-dialog.component.html',
})
export class DialogElement {
  err: string;
  constructor(public dialogRef: MatDialogRef<DialogElement>, @Inject(MAT_DIALOG_DATA) public data: string) {
    this.err = this.data;
  }
}

@Component({
  selector: 'user-update-dialog',
  templateUrl:'./user-update-dialog.component.html',
})
export class UserUpdateDialog {
  constructor(public dialogRef: MatDialogRef<DialogElement>, @Inject(MAT_DIALOG_DATA) public data: Elements) { }

  onNoClick() {
    this.dialogRef.close();
  }
}
