import { Component, Input } from "@angular/core";
import { Apartment } from "src/app/models/apartment";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    @Input() infoApartment: Apartment;
}