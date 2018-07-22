import { Component, OnInit , Input} from '@angular/core';
@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.css']
})
export class SocialButtonsComponent implements OnInit {
  @Input() provider: string;
  @Input() link: string;

  ngOnInit() {
  }


}
