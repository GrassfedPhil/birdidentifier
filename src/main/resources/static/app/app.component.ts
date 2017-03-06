import {Component, OnInit, Inject, Input} from '@angular/core';
import {BirdIdentifierService} from "./birdidentifier.service"

@Component({
    selector: 'my-app',
    template: `<input type="file" accept="image/*;capture=camera"  (change)="onChange($event)">`,

    styles: [`
  #mapid { height: 90%; }

`],

})
export class AppComponent {
    constructor(private birdIdentifierService: BirdIdentifierService) {}

    file: File;

    onChange(event: EventTarget) {
        let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
        let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
        let files: FileList = target.files;
        this.file = files[0];

        let uploadResult = this.birdIdentifierService.uploadPhoto(this.file);
    }

}
