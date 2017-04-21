import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ProductComponent } from "./pages/product/product.component";
import { PricingComponent } from "./pages/pricing/pricing.component";
import { GuidesComponent } from "./pages/guides/guides.component";

const APP_ROUTES: Routes = [
  {path: "", component: HomeComponent},
  {path: "product", component: ProductComponent},
  {path: "pricing", component: PricingComponent},
  {path: "guides", component: GuidesComponent},
]

export const router = RouterModule.forRoot(APP_ROUTES)
