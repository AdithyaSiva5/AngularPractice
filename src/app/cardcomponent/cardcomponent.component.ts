import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cardcomponent',
  imports: [],
  templateUrl: './cardcomponent.component.html',
  styleUrl: './cardcomponent.component.css',
})
export class CardcomponentComponent {
  contentStatus: string = ' Initializing....';

  @ContentChild('projectedText') projectedText: ElementRef | undefined;

  ngAfterContentInit() {
    console.log('5.After contentInit called');
    this.contentStatus =
      'content initailized at ' + new Date().toLocaleTimeString();

    if (this.projectedText) {
      console.log(
        'Projected Text content:',
        this.projectedText.nativeElement.textContent
      );
      
    }
  }
  ngAfterContentChecked() {
    console.log('6. Aftercontent checked called');
    this.contentStatus =
      'content checked at:' + new Date().toLocaleTimeString();
  }
}
