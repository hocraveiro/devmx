import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'account-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatToolbarModule],
  standalone: true,
})
export class ToolbarComponent {
  @HostBinding('attr.class')
  attrClass = 'account-toolbar';
}
