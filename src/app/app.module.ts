import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
// import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./page-not-found.component";

/* Feature Modules */
// import { CoreModule } from "./core/core.module";
// import { LoginModule } from "./login/login.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
    // LoginModule,
    // Routes get loaded in order. It is important that login
    // come before AppRoutingModule, as
    // AppRoutingModule defines the catch-all ** route
    // CoreModule
  ],
  declarations: [AppComponent, PageNotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
