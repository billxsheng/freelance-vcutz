import { Component, OnInit } from "../../../../node_modules/@angular/core";
import { FormGroup, FormControl, Validators } from "../../../../node_modules/@angular/forms";
import { BookingService } from "../booking.service";
import { Router, ActivatedRoute, Params } from "../../../../node_modules/@angular/router";

@Component({
    templateUrl: 'booking-inquiries.component.html',
    styleUrls: ['booking-inquiries.component.css']
})

export class BookingInquiriesComponent implements OnInit {


    phonelimit: number = 10;
    bookingForm: FormGroup;
    req: String = 'This field is required';
    emailReq: string = 'Please enter a valid email.'
    dateReq: string = 'Please schedule a valid date.';
    timeReq: string = 'Please schedule a valid time.';
    paymentTypes = ['Cash', 'eTransfer'];
    currentDate;
    formSubmitted = false;
    imagePreview: String;
    noPreview: Boolean = false;


    constructor(private bookingService: BookingService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        var now = new Date();
        now.setDate(now.getDate() + 14);
        window.scroll(0, 0);
        this.bookingForm = new FormGroup({
            'firstName': new FormControl(null, [Validators.required]),
            'lastName': new FormControl(null, [Validators.required]),
            'mobile': new FormControl(null, [Validators.required, this.phoneLengthValidator.bind(this)]),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'image': new FormControl(null),
            'message': new FormControl(null, [Validators.required])
        });
    }

    onImageUpload(event: Event) {
        const file = (event.target as HTMLInputElement).files[0];

        if (file === undefined) {
            this.noPreview = true;
            return 0;
        }
        this.bookingForm.patchValue({ image: file });
        this.bookingForm.get('image').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    }

    onSubmit() {
        console.log(this.bookingForm);
        this.bookingService.postForm(this.bookingForm.value.firstName, this.bookingForm.value.lastName, this.bookingForm.value.email, this.bookingForm.value.mobile, this.bookingForm.value.image, this.bookingForm.value.message);
        this.bookingForm.reset();
        this.router.navigate(["/booking/inquiries/success"]);
    }


    phoneLengthValidator(control: FormControl): { [s: string]: boolean } {
        if (control.value > 10000000000 || control.value < 999999999) {
            return { 'Not a valid phone number': true }
        }
        return null;
    }

}