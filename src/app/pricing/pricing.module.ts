import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { RaterequestComponent } from './raterequest/raterequest.component';
import { SharedModule } from '@app/shared/shared.module';
import { SmartadminWizardsModule } from '@app/shared/forms/wizards/smartadmin-wizards.module';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { SmartadminInputModule } from '@app/shared/forms/input/smartadmin-input.module';
// import { DatatablesRestDemoComponent } from '@app/features/tables/datatables-case/datatables-rest-demo.component';
// import { DatatablesCaseComponent } from '@app/features/tables/datatables-case/datatables-case.component';
import { DatatablesCaseRoutingModule } from '@app/features/tables/datatables-case/datatables-case-routing.module';
import { SmartadminDatatableModule } from '@app/shared/ui/datatable/smartadmin-datatable.module';
import { TableModule } from 'primeng/table';
import { DatatablesCaseModule } from '@app/features/tables/datatables-case/datatables-case.module';


@NgModule({
  declarations: [RaterequestComponent],
  imports: [
    CommonModule,
    PricingRoutingModule,
    ToastModule,
    SharedModule,
    DropdownModule,
    CalendarModule,
    SmartadminWizardsModule,
    SmartadminInputModule,
    DatatablesCaseRoutingModule,
    SmartadminDatatableModule,
    TableModule,
    DatatablesCaseModule
  ]
})
export class PricingModule { }
