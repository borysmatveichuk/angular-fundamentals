import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestInnerComponent } from './test-inner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TestInnerComponent
  ],
  exports: [
    TestInnerComponent
  ]
})
export class TestInnerModule { }
