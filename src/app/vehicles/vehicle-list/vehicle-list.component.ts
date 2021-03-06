import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";

import { Vehicle } from "../shared/vehicle.model";
import { VehicleService } from "../shared/vehicle.service";

@Component({
  selector: "app-vehicle-list",
  templateUrl: "./vehicle-list.component.html",
  styleUrls: ["./vehicle-list.component.css"]
})
export class VehicleListComponent implements OnDestroy, OnInit {
  private dbResetSubscription: Subscription;

  vehicles: Vehicle[];
  filteredVehicles = [];

  constructor(
    private vehicleService: VehicleService
  ) {}

  filterChanged(searchText: any) {
    // this.filteredVehicles = this.filterService.filter(
    //   searchText,
    //   ["id", "name", "type"],
    //   this.vehicles
    // );
  }

  getVehicles() {
    this.vehicles = [];
    this.vehicleService.getVehicles().subscribe(
      vehicles => {
        this.vehicles = this.filteredVehicles = vehicles;
      },
      error => {
        console.log("error occurred here");
        console.log(error);
      },
      () => {
        console.log("vehicle retrieval completed");
      }
    );
  }

  ngOnDestroy() {
    this.dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    this.getVehicles();
    this.dbResetSubscription = this.vehicleService.onDbReset.subscribe(() =>
      this.getVehicles()
    );
  }

  trackByVehicles(index: number, vehicle: Vehicle) {
    return vehicle.id;
  }
}
