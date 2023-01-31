import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MulticastingRoutingModule } from './multicasting-routing.module';
import { MulticastingComponent } from './multicasting.component';
import { ShareComponent } from './share/share.component';
import { ShareReplyComponent } from './share-reply/share-reply.component';
import { ContentComponent } from 'src/app/shared/components/content/content.component';

@NgModule({
  declarations: [MulticastingComponent, ShareComponent, ShareReplyComponent],
  imports: [CommonModule, MulticastingRoutingModule, ContentComponent],
})
export class MulticastingModule {}
