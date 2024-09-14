import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'account-account-feature-presentations',
  templateUrl: './account-feature-presentations.component.html',
  styleUrl: './account-feature-presentations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  standalone: true,
})
export class AccountFeaturePresentationsComponent {}
