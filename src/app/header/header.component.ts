import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../_services/logging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [LoggingService]

})
export class HeaderComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

  onLogout() {
    this.loggingService.logout();
  }

}
