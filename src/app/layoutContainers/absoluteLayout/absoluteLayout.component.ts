import { NativeScriptCommonModule } from '@nativescript/angular';
import { ChangeDetectionStrategy, Component, NO_ERRORS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'app-absolute-layout',
  imports: [NativeScriptCommonModule],
  schemas:[NO_ERRORS_SCHEMA],
  templateUrl: './absoluteLayout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbsoluteLayoutComponent { 
  list = ['example1','example2','example3', 'example4'];
  
    selectedIndex: number = 0;
  
    itemselected = signal<string>(this.list[this.selectedIndex]);
  
  
    onSelect(event){
          this.itemselected.set(this.list[event.value]);
    }
}
