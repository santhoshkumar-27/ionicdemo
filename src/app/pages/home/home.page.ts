import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
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
}
