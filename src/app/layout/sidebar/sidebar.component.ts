import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { menuNodes } from '../menu-nodes';
import { RouterModule } from '@angular/router';
import { log } from 'node:console';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


  menuItems = menuNodes;

  toggleSidebar() {
    // Logic to toggle sidebar
  }

  onClick(event: Event, item: any) {
    this.menuItems.forEach(menuItem => {
      if (menuItem !== item) {
        menuItem.active = false;
        menuItem.subMenuHeight = '0px';
        console.log(menuItem.url);

      }
    });

    if (item.subMenu) {
      item.active = !item.active;
      item.subMenuHeight = item.active ? `${item.subMenu.length * 50}px` : '0px';
    } else {
      item.active = true;
    }
  }
}

