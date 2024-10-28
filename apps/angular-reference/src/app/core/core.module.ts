import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core/core.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

@NgModule({
  imports: [CommonModule],
  exports: [ToDoListComponent],
  declarations: [CoreComponent, ToDoListComponent],
})
export class CoreModule {}
