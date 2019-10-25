import { EventEmitter } from '@angular/core';

export class LoaderService {

	public onOpen: EventEmitter<void> = new EventEmitter();
    public onClose: EventEmitter<void> = new EventEmitter();
  
    constructor(){
    }

	public open(){
		this.onOpen.emit();
    }
    public close() {
        this.onClose.emit();
    }
 
}