import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MemesServiceService } from './memesService.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  DisplayMemes: any[] = [];

  constructor(private service: MemesServiceService) {}

  ngOnInit() {
    this.fetchNewMeme();
  }

  fetchNewMeme() {
    this.service.fetchMemes().subscribe((data) => {
      this.DisplayMemes = data;
    });
  }
}
