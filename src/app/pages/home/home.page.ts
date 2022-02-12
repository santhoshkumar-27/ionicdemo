import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardI } from 'src/constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  lastCallList: CardI[] = [
    {
      icon : 'hourglass-outline',
      status: 'on hold',
      updated: '12/02/2022 10:30AM',
      created: '11/02/2022',
      notes: 'here this is very cool'
    },
  ];
  messagelist: any = [
    {
      username: 'santhoshkumar',
      messageCount: 3
    },
    {
      username: 'user1',
      messageCount: 5
    },
    // {
    //   username: 'user2',
    //   messageCount: 8
    // },
    // {
    //   username: 'user3',
    //   messageCount: 4
    // },
    // {
    //   username: 'user4',
    //   messageCount: 3
    // },
    // {
    //   username: 'user5',
    //   messageCount: 4
    // },
    // {
    //   username: 'user6',
    //   messageCount: 5
    // },
    // {
    //   username: 'user6',
    //   messageCount: 5
    // },
    // {
    //   username: 'user6',
    //   messageCount: 5
    // },
    // {
    //   username: 'user6',
    //   messageCount: 5
    // },
    // {
    //   username: 'user6',
    //   messageCount: 5
    // },
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotohome() {
    this.router.navigate(['/login']);
  }
  goToPickCall() {
    this.router.navigate(['pickup-call']);
  }
  goToMyPickCall() {
    this.router.navigate(['mypickupcall']);
}
}
