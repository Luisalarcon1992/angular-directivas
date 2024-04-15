import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string,
  router: string,
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems = signal<MenuItem[]>([
    { title: 'Counter', router: 'counter' },
    { title: 'User Info', router: 'user-info' },
    { title: 'Properties', router: 'properties' },
  ])
}
