import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems = [
    { label: 'Home', icon: 'bx bx-home' },
    { label: 'Dashboard', icon: 'bx bxs-dashboard' },
    {
      label: 'Settings', icon: 'bx bx-cog', subMenu: ['Display', 'Appearance', 'Preferences'], active: false, subMenuHeight: '0px'
    },
    {
      label: 'Create', icon: 'bx bx-folder-plus', subMenu: ['Article', 'Document', 'Video', 'Presentation'], active: false, subMenuHeight: '0px'
    },
    {
      label: 'Profile', icon: 'bx bx-user', subMenu: ['Avatar', 'Theme'], active: false, subMenuHeight: '0px'
    },
    { label: 'Notifications', icon: 'bx bx-bell' },
    { label: 'Products', icon: 'bx bx-cart' },
    { label: 'Account', icon: 'bx bx-lock' }
  ];

  toggleSidebar() {
    // Logic to toggle sidebar
  }

  onClick(event: Event, item: any) {
    this.menuItems.forEach(menuItem => {
      if (menuItem !== item) {
        menuItem.active = false;
        menuItem.subMenuHeight = '0px';
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

