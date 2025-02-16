import { Routes } from "@angular/router";
import { BodyComponent } from "./components/body/body.component";
import { CrudOpsComponent } from "./components/crud-ops/crud-ops.component";
import { Demo1Component } from "./components/demo1/demo1.component";
import { MemberComponent } from "./components/member/member.component";
import { PipeTesterComponent } from "./components/pipe-tester/pipe-tester.component";
import { ProductsComponent } from "./components/products/products.component";
import { TableCardComponent } from "./components/table-card/table-card.component";
import { PixelComponentComponent } from "./components/pixel-component/pixel-component.component";
import { MemberDetailsComponent } from "./components/member-details/member-details.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";

export const routes: Routes = [
  {
    path: "Pixel",
    component: PixelComponentComponent,
  },
  {
    path: "CrudOps",
    component: CrudOpsComponent,
  },
  {
    path: "Demo1",
    component: Demo1Component,
  },
  {
    path: "Member",
    component: MemberComponent,
  },
  {
    path: "Pipe-Testing",
    component: PipeTesterComponent,
  },
  {
    path: "Products",
    component: ProductsComponent,
  },
  { path: "Table-Card", component: TableCardComponent },
  {
    path: "memberDetails/:memberId",
    component: MemberDetailsComponent,
  },
  { path: "productdetails", component: ProductDetailsComponent },
];
