import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'tst-sidenav',
    templateUrl: 'tst-sidenav.component.html',
    styleUrls: ['tst-sidenav.component.scss']
})

export class TstSidenavComponent implements OnInit {
    constructor() { }
    @Input() collapsed: boolean = false;

    ngOnInit() { }
}