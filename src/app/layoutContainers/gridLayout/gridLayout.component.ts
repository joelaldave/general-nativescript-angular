import { ChangeDetectionStrategy, Component, computed, NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';


@Component({
  selector: 'ns-grid-layout',
  imports: [NativeScriptCommonModule],
  templateUrl: './gridLayout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas:[NO_ERRORS_SCHEMA]
})
export class GridLayoutComponent { 
  
  list = ['example1','example2', 'example3', 'example4'];

  selectedIndex: number = 0;

  itemselected = signal<string>(this.list[this.selectedIndex]);


  onSelect(event){
        this.itemselected.set(this.list[event.value]);
  }
}
