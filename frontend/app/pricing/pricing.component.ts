import { Component, AfterViewInit, OnInit } from "@angular/core";


@Component({
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
    ngOnInit() {
        $("h1").css('color', 'red');
    }
}