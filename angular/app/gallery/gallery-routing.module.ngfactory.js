/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./gallery-routing.module";
import * as i2 from "./gallery.component.ngfactory";
import * as i3 from "./gallery-start/gallery-start.component.ngfactory";
import * as i4 from "./gallery-item-detail/gallery-item-detail.component.ngfactory";
import * as i5 from "@angular/router";
import * as i6 from "./gallery.component";
import * as i7 from "./gallery-start/gallery-start.component";
import * as i8 from "./gallery-item-detail/gallery-item-detail.component";
var GalleryRoutingModuleNgFactory = i0.ɵcmf(i1.GalleryRoutingModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.GalleryComponentNgFactory, i3.GalleryStartComponentNgFactory, i4.GalleryItemDetailComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(512, i5.RouterModule, i5.RouterModule, [[2, i5.ɵa], [2, i5.Router]]), i0.ɵmpd(512, i1.GalleryRoutingModule, i1.GalleryRoutingModule, []), i0.ɵmpd(1024, i5.ROUTES, function () { return [[{ path: "", component: i6.GalleryComponent, children: [{ path: "", component: i7.GalleryStartComponent }, { path: ":id", component: i8.GalleryItemDetailComponent }] }]]; }, [])]); });
export { GalleryRoutingModuleNgFactory as GalleryRoutingModuleNgFactory };
