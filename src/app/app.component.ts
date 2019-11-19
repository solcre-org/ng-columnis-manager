import { Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UiEventsService } from './shared/ui-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'columnis-manager';
  constructor(
    private translate: TranslateService,
    private uiEventsService: UiEventsService,
    private renderer: Renderer2
    ) {
    translate.use('es');
  }

  ngOnInit() {
    let htmlElement = document.documentElement;

		this.uiEventsService.internalModalStateChange.subscribe((state: boolean)=>{
			//Check state
			if(state){
				this.renderer.addClass(htmlElement, 'activeInternalModal');
			}else{
				this.renderer.removeClass(htmlElement, 'activeInternalModal');
			}
		});
    
  }
}
