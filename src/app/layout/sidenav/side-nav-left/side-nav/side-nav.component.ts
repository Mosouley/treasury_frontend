import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../../material/material.module';
import { childRoutes } from '../../../child-routes';
import { MenuNode } from '../../../navbar/menu-node';



@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule,
     MaterialModule,
    RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit {

 // creating input and output variable for sidebar reduction
 @Input() isSidebarReduced = true;
 @Output () toggleSidebarReduce: EventEmitter<boolean> = new EventEmitter<boolean>();

 // creating input variable to toglle sidebar close/open
 @Input() isSidebarOpen = false;


 links = childRoutes

 currentSubMenuIndex: number | null = null;
 constructor() {}

 ngOnInit(): void {
   // this.isSidebarOpen = false
   this.isSidebarReduced = true
 }
 // component property to check if a menu has children
  hasChild = ( menu:MenuNode) => !!menu.children && menu.children.length > 0;

 // get the list of menus of any menu item
  getListofMenu(myAray: MenuNode[]): string[] {
     let output: string[] = [];
     myAray.forEach((element) => {
       output.push(element.name)
   });
   return output;
  }

  toggleSubMenu(index: number): void {
   if (this.currentSubMenuIndex === index) {
     // If the clicked submenu is already open, close it
     this.currentSubMenuIndex = null;
   } else {
     // Open the clicked submenu and close all others
     this.currentSubMenuIndex = index;
   }
 }

}
