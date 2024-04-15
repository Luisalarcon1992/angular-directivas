import { Component, effect, signal } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'signals-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {

  public user = signal<IUser>({
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  });

  public userChangedEffect = effect (() => {
    console.log('${user.first_name} ${user.last_name} has been updated')
  })


  onFieldUpdated( field: keyof IUser, value: string){

    this.user.update( current => {

      switch(field){
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;

        case 'last_name':
          current.last_name = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'id':
          current.id = +value;
          break;
        default:
          break;
      }

      return current;


    })

  }
}
