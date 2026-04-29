import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home";
import { ResumeComponent } from "./components/resume";
import { LoginComponent } from "./components/login";
import { AdminDashboardComponent } from "./components/admin";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "resume", component: ResumeComponent },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminDashboardComponent },
  { path: "**", redirectTo: "" },
];
