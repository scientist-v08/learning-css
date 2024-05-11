import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  standalone:true,
  imports:[CommonModule],
  selector:'lcss-chapter-02',
  templateUrl:'./chapter-02.component.html',
  styleUrl:'./chapter-02.component.css'
})
export class Chapter02{
  h1:string="css selectors";
  h21:string="Article 1";
  h22:string="Article 2";
  h23:string="Article 3";
}
