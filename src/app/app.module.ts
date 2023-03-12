import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { CreateFormComponent } from './components/create-form/create-form.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ObjectKeysPipe } from './pipes/object-keys/object-keys.pipe';
import { DeviceKeyPipe } from './pipes/device-key/device-key.pipe';
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component';
import { CheckboxSwitchComponent } from './components/checkbox-switch/checkbox-switch.component';
import { EditableListComponent } from './components/editable-list/editable-list.component';
import { MultipleInputComponent } from './components/multiple-input/multiple-input.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFormComponent,
    ItemsListComponent,
    ObjectKeysPipe,
    DeviceKeyPipe,
    DropdownListComponent,
    CheckboxSwitchComponent,
    EditableListComponent,
    MultipleInputComponent,
    ModalWindowComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
