import { Component } from '@angular/core';

import { VehicleService } from './shared/vehicle.service';

@Component({
  // selector: 'app-vehicles',
  template: `<router-outlet></router-outlet>`,
  providers: [VehicleService]
})
export class VehiclesComponent  {}
