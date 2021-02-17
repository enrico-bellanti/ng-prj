import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Apartment } from "src/app/models/apartment";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    @Input() infoApartment: Apartment;
    @Output() close = new EventEmitter<void>();

    onClose(){
        this.close.emit();
    }
}