import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardcomponentComponent } from '../cardcomponent/cardcomponent.component';

@Component({
  selector: 'app-contentcontainer',
  imports: [FormsModule, CardcomponentComponent],
  templateUrl: './contentcontainer.component.html',
  styleUrl: './contentcontainer.component.css',
})
export class ContentcontainerComponent {
  title: string = 'Dynamic card title';
  content: string = ' This is some projected content . Edit me';

  updateTitle() {
    this.title = 'Updated Title - ' + new Date().toLocaleTimeString();
  }
}
