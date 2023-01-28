import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRoutingModule } from './operators-routing.module';
import { OperatorsComponent } from './operators.component';
import { AccordionItemComponent } from 'src/app/shared/components/accordion-item/accordion-item.component';

@NgModule({
  declarations: [OperatorsComponent],
  imports: [CommonModule, OperatorsRoutingModule, AccordionItemComponent],
})
export class OperatorsModule {}
