import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-skins',
  templateUrl: './modal-skins.component.html',
  styleUrls: ['./modal-skins.component.css']
})
export class ModalSkinsComponent {

  @Input() champion: any;
  @Input() cham: any;
  @Input() loadingModal: any;

}
