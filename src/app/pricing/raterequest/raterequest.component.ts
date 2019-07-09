import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { ModalDirective } from 'ngx-bootstrap';
import { NotificationService } from '@app/core/services';

@Component({
  selector: 'sa-raterequest',
  templateUrl: './raterequest.component.html',
  styleUrls: ['./raterequest.component.css'],
  animations: [
    trigger('changePane', [
      state('out', style({
        height: 0,
      })),
      state('in', style({
        height: '*',
      })),
      transition('out => in', animate('250ms ease-out')),
      transition('in => out', animate('250ms 300ms ease-in'))
    ])
  ]
})
export class RaterequestComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }
  @ViewChild('lgModal') public lgModal:ModalDirective;
  @ViewChild('lgDetentionModal') public lgDetentionModal:ModalDirective;
  @ViewChild('lgRouteModal') public lgRouteModal:ModalDirective;
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

  public steps = [
    {
      key: 'step1',
      title: 'Basic Detail',
      valid: false,
      checked: false,
      submitted: false,
    },
    {
      key: 'step2',
      title: 'Shipment Detail',
      valid: false,
      checked: false,
      submitted: false,
    },
    {
      key: 'step3',
      title: 'Rate Detail',
      valid: true,
      checked: false,
      submitted: false,
    },
    {
      key: 'step4',
      title: 'Route Detail',
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

  saveBooking() {

    this.notificationService.smallBox({
      title: "Rate Request.",
      content: "Saved Successfully.",
      color: "#397D81",
      timeout: 2500,
      icon: "fa fa-check"
    });

  }

  onWizardComplete(data) {
    console.log('basic wizard complete', data)
  }

  private lastModel;
}
