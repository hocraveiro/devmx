import {
  inject,
  OnInit,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFacade } from '@devmx/account-data-access';

@Component({
  selector: 'account-feature-shell',
  templateUrl: './account-feature-shell.component.html',
  styleUrl: './account-feature-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  standalone: true,
})
export class AccountFeatureShellComponent implements OnInit {
  authFacade = inject(AuthFacade);

  ngOnInit() {
    this.authFacade.user$.subscribe(console.log);
    this.authFacade.getAuthUser();
  }
}
