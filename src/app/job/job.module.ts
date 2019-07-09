
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobRoutingModule } from './job-routing.module';
import { BookingComponent } from './booking/booking.component';
import { SharedModule } from '@app/shared/shared.module';
import { SmartadminWizardsModule } from '@app/shared/forms/wizards/smartadmin-wizards.module';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import { SmartadminInputModule } from '@app/shared/forms/input/smartadmin-input.module';
//import { DatatablesRestDemoComponent } from '@app/features/tables/datatables-case/datatables-rest-demo.component';
//import { DatatablesCaseComponent } from '@app/features/tables/datatables-case/datatables-case.component';
import { DatatablesCaseRoutingModule } from '@app/features/tables/datatables-case/datatables-case-routing.module';
import { SmartadminDatatableModule } from '@app/shared/ui/datatable/smartadmin-datatable.module';
import {AccordionModule, CarouselModule, PopoverModule} from "ngx-bootstrap";
import { DatatablesCaseModule } from '@app/features/tables/datatables-case/datatables-case.module';


@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    JobRoutingModule,
    ToastModule,
    SharedModule,
    DropdownModule,
    CalendarModule,
    SmartadminWizardsModule,
    SmartadminInputModule,
    DatatablesCaseRoutingModule,
    SmartadminDatatableModule,
    AccordionModule.forRoot(),
    PopoverModule.forRoot(),
    CarouselModule.forRoot(),
    DatatablesCaseModule

  ]
})
export class JobModule {
  
 }
