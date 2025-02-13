import { NativeScriptCommonModule } from '@nativescript/angular';
import { ChangeDetectionStrategy, Component, NO_ERRORS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'app-dock-layout',
  imports: [NativeScriptCommonModule],
  templateUrl: './dockLayout.component.html',
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DockLayoutComponent {

  list = ['example1','example2','example3', 'example4'];
  
    selectedIndex: number = 0;
  
    itemselected = signal<string>(this.list[this.selectedIndex]);
  
  
    onSelect(event){
          this.itemselected.set(this.list[event.value]);
    }


 }
