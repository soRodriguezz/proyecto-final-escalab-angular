import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-skins',
  templateUrl: './modal-skins.component.html'
})
export class ModalSkinsComponent {

  @Input() champion: any;
  @Input() cham: any;
  @Input() loadingModal: any;

}
