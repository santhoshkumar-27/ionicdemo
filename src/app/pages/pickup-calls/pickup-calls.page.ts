import { Component, OnInit } from '@angular/core';
import { CardI } from 'src/constant';

@Component({
  selector: 'app-pickup-calls',
  templateUrl: './pickup-calls.page.html',
  styleUrls: ['./pickup-calls.page.scss'],
})
export class PickupCallsPage implements OnInit {
  statusList: CardI[] = [
    {
      icon : 'hourglass-outline',
      status: 'on hold',
      updated: '12/02/2022 10:30AM',
      created: '11/02/2022',
      notes: 'here this is very cool'
    },
    {
      icon : 'archive-outline',
      status: 'Processing',
      updated: '12/03/2022 16:14:00 PM',
      created: '10/02/2022',
      notes: 'we have two bags that are full'
    },
    {
      icon : 'archive-outline',
      status: 'finished',
      updated: '12/03/2022 16:14:00 PM',
      created: '10/02/2022',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
