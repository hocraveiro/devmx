import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'devpr-root',
  template: `<router-outlet />`,
  styles: `:host {display:flex;height:100%;}`,
  imports: [RouterModule],
  standalone: true,
})
export class AppComponent {}
