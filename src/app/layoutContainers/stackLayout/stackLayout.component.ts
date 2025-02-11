import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

@Component({
  selector: 'ns-stack-layout',
  imports: [NativeScriptCommonModule, CommonModule],
  templateUrl: './stackLayout.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  schemas:[NO_ERRORS_SCHEMA]
})

export class StackLayoutComponent { 

  direction = signal<boolean>(false);


  changeDirection(){
    this.direction.update( value => !value);

  }
}
