import { NativeScriptCommonModule } from '@nativescript/angular';
import { ChangeDetectionStrategy, Component, NO_ERRORS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'app-flexbox-layout',
  imports: [NativeScriptCommonModule],
  templateUrl: './flexboxLayout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas:[NO_ERRORS_SCHEMA]
})
export class FlexboxLayoutComponent { 

  list = ['example1','example2', 'example3', 'example4', 'example5', 'example6'];

  selectedIndex: number = 0;

  itemselected = signal<string>(this.list[this.selectedIndex]);


  onSelect(event){
        this.itemselected.set(this.list[event.value]);
  }
  
}
