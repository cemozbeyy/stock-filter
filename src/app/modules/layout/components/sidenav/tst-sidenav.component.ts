import { Component, Input, OnInit } from '@angular/core';
import icRadioButtonChecked from '@iconify/icons-ic/twotone-radio-button-checked';
import icRadioButtonUnchecked from '@iconify/icons-ic/twotone-radio-button-unchecked';

@Component({
    selector: 'tst-sidenav',
    templateUrl: 'tst-sidenav.component.html',
    styleUrls: ['tst-sidenav.component.scss']
})

export class TstSidenavComponent implements OnInit {
    constructor() { }
    @Input() collapsed: boolean = false;
    icRadioButtonChecked = icRadioButtonChecked;
    icRadioButtonUnchecked = icRadioButtonUnchecked;
    ngOnInit() { }
}