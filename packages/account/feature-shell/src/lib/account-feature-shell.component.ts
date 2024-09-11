import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-account-feature-shell',
  templateUrl: './account-feature-shell.component.html',
  styleUrl: './account-feature-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  standalone: true,
})
export class AccountFeatureShellComponent {}
