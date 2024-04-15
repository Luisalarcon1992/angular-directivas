import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UsersSericeService } from '../../service/users-serice.service';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'signals-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit {

  private userService = inject(UsersSericeService);

  public userId = signal<number>(1);

  // En un momento determinado, el usuario puede ser undefined, por lo que se inicializa con undefined
  public currenteUser = signal<IUser | undefined>(undefined);

  public userWasFound = signal(true);

  public fullName = computed<string>(() => {
    if (!this.currenteUser()) return 'Usuario No encontrado';

    return `${this.currenteUser()!.first_name} ${this.currenteUser()!.last_name}`;
  })

  ngOnInit(): void {
    this.loadUser( this.userId() );
  }

  loadUser(id: number) {
    if ( id <= 0 ) return;


    this.userId.set(id);
    this.currenteUser.set(undefined);

    this.userService.getUserById(id)
      .subscribe({
        next: (user) => {
          this.currenteUser.set(user),
          this.userWasFound.set(true);
        },
        error: () => {
          this.userWasFound.set(false);
          this.currenteUser.set(undefined);
        }
      })
  }
}
