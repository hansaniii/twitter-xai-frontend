import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { BadgeModule } from 'primeng/badge';
import { MessageModule } from 'primeng/message';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    ButtonModule,
    CardModule,
    ChartModule,
    BadgeModule,
    MessageModule
  ]
})
export class AppModule {}
