import { Component, OnInit , Input, ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialButtonsComponent implements OnChanges {
  @Input() provider: string;
  @Input() link: string;
  public providerLink:string;

  ngOnChanges() {
    this.providerLink = `fab fa-${this.provider}`;
  }


}
