import { Component, inject, NO_ERRORS_SCHEMA } from '@angular/core'
import { Router } from '@angular/router'
import { NativeScriptCommonModule } from '@nativescript/angular'


@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ItemsComponent {

  route = inject(Router)

  onItemTap( text: string){
    if (text === 'stack-layout') {
      this.route.navigateByUrl('/stack-layout')
    }
    if (text === 'grid-layout') {
      this.route.navigateByUrl('/grid-layout')
    }
    if (text === 'flexbox-layout') {
      this.route.navigateByUrl('/flexbox-layout')
    }
    if (text === 'wrap-layout') {
      this.route.navigateByUrl('/wrap-layout')
    }
  }
}
