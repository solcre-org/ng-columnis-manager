import { OnInit, Component } from '@angular/core';
import { DialogModel } from './dialog.model';
import { DialogService } from './dialog.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
	//Models
	model: DialogModel;
	isActive: boolean;

	//Inject services
	constructor(
		private dialogService: DialogService
	) { }

	//On component init
	ngOnInit() {
		//Watch on open
		this.dialogService.onOpen.subscribe((model: DialogModel) => {
			this.model = model;

			//Open
      		this.isActive = true;
		})
	}

	//Custom events
	onConfirm(){
		//Close
		this.isActive = false;

		if(this.model instanceof DialogModel){
			this.model.doConfirm();
		}
	}

	onCancel(){
		this.isActive = false;
	}

}
