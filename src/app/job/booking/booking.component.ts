import { Component, OnInit, DoCheck, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/components/common/api';
import { NotificationService } from '@app/core/services';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations'
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'sa-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']

})
export class BookingComponent implements OnInit, DoCheck {

  constructor(private messageService: MessageService, private notificationService: NotificationService) { }

  date9: Date;

  ngOnInit() {

  }

  public model = {
    email: '',
    firstname: '',
    lastname: '',
    country: '',
    city: '',
    postal: '',
    wphone: '',
    hphone: ''
  };

  @ViewChild('lgModal') public lgModal: ModalDirective;
  @ViewChild('lgDetentionModal') public lgDetentionModal: ModalDirective;
  @ViewChild('lgCargoModal') public lgCargoModal: ModalDirective;
  @ViewChild('lgLastCargoModel') public lgLastCargoModel: ModalDirective;
  @ViewChild('lgRouteModal') public lgRouteModal: ModalDirective;


  public showChildModal(): void {
    this.lgModal.show();
    this.lgDetentionModal.show();
    this.lgCargoModal.show();
    this.lgLastCargoModel.show();
    this.lgRouteModal.show();
  }

  public hideChildModal(): void {
    this.lgModal.hide();
    this.lgDetentionModal.hide();
    this.lgCargoModal.hide();
    this.lgLastCargoModel.hide();
    this.lgRouteModal.hide();
  }

  LastCargoBooking() {
    console.log('basic wizard complete', '')
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Booking Created in Draft.' });
  }

  saveBooking() {

    this.notificationService.smallBox({
      title: "Booking.",
      content: "Saved Successfully.",
      color: "#397D81",
      timeout: 2500,
      icon: "fa fa-check"
    });

  }

  public steps = [
    {
      key: 'step1',
      title: 'Booking information',
      valid: false,
      checked: false,
      submitted: false,
    },
    {
      key: 'step2',
      title: 'Shipment',
      valid: false,
      checked: false,
      submitted: false,
    },
    {
      key: 'step3',
      title: 'Rate',
      valid: true,
      checked: false,
      submitted: false,
    },
    {
      key: 'step4',
      title: 'Tank Allocation',
      valid: true,
      checked: false,
      submitted: false,
    }

  ];

  public activeStep = this.steps[0];

  setActiveStep(steo) {
    this.activeStep = steo
  }

  prevStep() {
    let idx = this.steps.indexOf(this.activeStep);
    if (idx > 0) {
      this.activeStep = this.steps[idx - 1]
    }
  }

  nextStep() {
    this.activeStep.submitted = true;
    if (!this.activeStep.valid) {
      return;
    }
    this.activeStep.checked = true;
    if (this.steps.every(it => (it.valid && it.checked))) {
      this.onWizardComplete(this.model)
    } else {
      let idx = this.steps.indexOf(this.activeStep);
      this.activeStep = null;
      while (!this.activeStep) {
        idx = idx == this.steps.length - 1 ? 0 : idx + 1;
        if (!this.steps[idx].valid || !this.steps[idx].checked) {
          this.activeStep = this.steps[idx]
        }
      }
    }
  }


  onWizardComplete(data) {
    console.log('basic wizard complete', data)
  }


  private lastModel;

  // custom change detection
  ngDoCheck() {
    if (!this.lastModel) {
      // backup model to compare further with
      this.lastModel = Object.assign({}, this.model)
    } else {
      if (Object.keys(this.model).some(it => this.model[it] != this.lastModel[it])) {
        // change detected
        this.steps.find(it => it.key == 'step1').valid = !!(this.model.email && this.model.firstname && this.model.lastname);
        this.steps.find(it => it.key == 'step2').valid = !!(this.model.country && this.model.city && this.model.postal);
        this.lastModel = Object.assign({}, this.model)
      }
    }
  }
  // saveBooking() {

  //   //just for an error message ..
  //   console.log('basic wizard complete', '')
  //   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Booking Created in Draft.' });
  //   // this.div_visible = false;


  // }

}