import { Component } from '@angular/core';
import { HeaderComponent } from "../../Components/header/header.component";
import { SectionContainerComponent } from "../../Components/section-container/section-container.component";
import { WorkExperienceComponent } from "../../Components/work-experience/work-experience.component";
import { HomeComponent } from "../../Components/home/home.component";
import { SkillsComponent } from "../../Components/skills/skills.component";
import { ContactformComponent } from "../../Components/contactform/contactform.component";
import { ProjectsComponent } from "../../Components/projects/projects.component";

@Component({
  selector: 'app-portfolio-home',
  standalone: true,
  imports: [HeaderComponent, SectionContainerComponent, WorkExperienceComponent, HomeComponent, ProjectsComponent, SkillsComponent, ContactformComponent, ProjectsComponent],
  templateUrl: './portfolio-home.component.html',
  styleUrl: './portfolio-home.component.css'
})
export class PortfolioHomeComponent {

}
