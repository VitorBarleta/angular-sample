import { NgModule } from "@angular/core";
import { PrimaryButtonDirective } from './primary-button.directive';

@NgModule({
    declarations: [
        PrimaryButtonDirective
    ],
    exports: [
        PrimaryButtonDirective
    ]
})
export class PrimaryButtonModule { }