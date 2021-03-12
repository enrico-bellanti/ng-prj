import { Component, EventEmitter, Input, Output, Inject } from "@angular/core";
import { Apartment } from "src/app/models/apartment";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    @Input() infoApartment: Apartment;
    @Output() close = new EventEmitter<void>();

    constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

    onClose(){
        this.close.emit();
    }
}