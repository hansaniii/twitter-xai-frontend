import { Component } from '@angular/core';
import { Card } from "primeng/card";
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-status-badge',
  imports: [Card, BadgeModule],
  templateUrl: './status-badge.html',
  styleUrl: './status-badge.css',
})
export class StatusBadge {
status: any;
severity: any;
percentage: any;

}
