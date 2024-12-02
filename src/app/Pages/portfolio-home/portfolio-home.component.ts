import { Component } from '@angular/core';
import { HeaderComponent } from "../../Components/header/header.component";

@Component({
  selector: 'app-portfolio-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './portfolio-home.component.html',
  styleUrl: './portfolio-home.component.css'
})
export class PortfolioHomeComponent {

}
