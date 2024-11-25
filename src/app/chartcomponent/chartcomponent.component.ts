import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-chartcomponent',
  imports: [],
  templateUrl: './chartcomponent.component.html',
  styleUrl: './chartcomponent.component.css',
})
export class ChartcomponentComponent
  implements AfterViewChecked, AfterViewInit
{
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  lastRenderTime: string = 'Not Rendered';
  viewCheckCount: number = 0;
  data: number[] = [10, 45, 30, 25, 60, 20];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    console.log('7.AfterView Init Called');
    this.drawChart();
    this.lastRenderTime = new Date().toLocaleTimeString();
  }
  ngAfterViewChecked(): void {
    console.log(' 8 . After view checked is called');
    this.viewCheckCount++;
    this.cdr.detectChanges();
  }
  updateData() {
    this.data = this.data.map(() => Math.floor(Math.random() * 100));
    this.drawChart();
    this.lastRenderTime = new Date().toLocaleTimeString();
  }

  private drawChart() {
    if (!this.chartCanvas) return;

    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const barWidth = (ctx.canvas.width / this.data.length) * 0.8;
    const spacing = (ctx.canvas.width / this.data.length) * 0.2;

    ctx.fillStyle = '#3B82F6';
    this.data.forEach((value, index) => {
      const x = index * (barWidth + spacing);
      const height = (value / 100) * ctx.canvas.height;
      const y = ctx.canvas.height - height;
      ctx.fillRect(x, y, barWidth, height);
    });
  }
}
