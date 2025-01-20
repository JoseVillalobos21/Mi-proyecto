import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.page.html',
  styleUrls: ['./action.page.scss'],
  standalone: false,
})
export class ActionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
}
