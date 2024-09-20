import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'devpr-root',
  template: `<router-outlet />`,
  styles: `:host {display:flex;height:100%;}`,
  imports: [RouterModule, CommonModule],
  standalone: true,
})
export class AppComponent {}
