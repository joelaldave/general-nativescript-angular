import { NativeScriptCommonModule } from '@nativescript/angular';
import { ChangeDetectionStrategy, Component, NO_ERRORS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'app-wrap-layout',
  imports: [NativeScriptCommonModule],
  templateUrl: './wrapLayout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas:[NO_ERRORS_SCHEMA]
})
export class WrapLayoutComponent { 
  list = ['example1','example2'];

  selectedIndex: number = 0;

  itemselected = signal<string>(this.list[this.selectedIndex]);


  onSelect(event){
        this.itemselected.set(this.list[event.value]);
  }
}
