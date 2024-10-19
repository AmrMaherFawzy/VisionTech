import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactusComponent } from "./contactus/contactus.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { WebProjectsComponent } from "./web-projects/web-projects.component";
import { DesktopapplicationComponent } from "./desktopapplication/desktopapplication.component";
import { ProgrammingComponent } from "./programming/programming.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactusComponent, NavComponent, HomeComponent, WebProjectsComponent, DesktopapplicationComponent, ProgrammingComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ResumeMaster';
  name:string="Amr Maher";
}
