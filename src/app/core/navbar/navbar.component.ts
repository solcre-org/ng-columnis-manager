import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  state: boolean = false;

  constructor(
    private authService: AuthService,
    private translateSevice: TranslateService,
    private navbarService: NavbarService
  ) { }


  ngOnInit() {
    this.navbarService.onOpen.subscribe(() => {
      this.state = true      
    })
  }

  onLogout() {
    this.authService.logout();
  }

  onLanguageChange(language: string) {
    if (language) {
      this.translateSevice.use(language);
    }
  }

}
