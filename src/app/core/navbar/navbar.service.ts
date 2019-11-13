import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root',
})
export class NavbarService{
	public onOpen: EventEmitter<void> = new EventEmitter();

    constructor(){}
    
	public open(){
		this.onOpen.emit();
	}
}