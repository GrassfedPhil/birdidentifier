import {Component, OnInit, Inject, Input} from '@angular/core';


@Component({
    selector: 'my-app',
    template: `<input type="file" accept="image/*;capture=camera">`,

    styles: [`
  #mapid { height: 90%; }

`],

})
export class AppComponent {



}
