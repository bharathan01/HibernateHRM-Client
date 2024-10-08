import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements AfterViewInit {
  ratingStar: number[] = [1, 2, 3, 4, 5];
  currentSelectedStar: number = 3;
  
  ngAfterViewInit(): void {
    this.feedbackChart()
  }

  feedbackChart(): void {
    const ctx = document.getElementById('feedbackChart') as HTMLCanvasElement;
    console.log(ctx)
    new Chart(ctx, {
      type: 'doughnut',
      data: {

        datasets: [
          {
            label: 'My First Dataset',
            data: [300, 100],
            backgroundColor: ['#BEA042', '#ffffff52'],
            borderWidth: 0,
            hoverOffset: 4,
            circumference:180,
            rotation:270,
           
          },
        ],
      },
      options: {
        responsive: true,
        cutout: '90%',
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
          },
        },
      },
    });
  }




}
