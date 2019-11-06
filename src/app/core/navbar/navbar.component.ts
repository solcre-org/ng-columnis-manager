import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private translateSevice: TranslateService
  ) { }

  ngOnInit() {
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
