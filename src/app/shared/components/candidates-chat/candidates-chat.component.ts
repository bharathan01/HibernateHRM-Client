import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-candidates-chart',
  templateUrl: './candidates-chat.component.html',
  styleUrls: ['./candidates-chat.component.css'],
})
export class CandidatesChatComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.createChart();
  }

  createChart(): void {
    const ctx = document.getElementById('candidateChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Shortlisted',
          'Contacted',
          'Interviewed',
          'Offered',
          'Hired',
          'Rejected',
          'On-Hold',
        ],
        datasets: [
          {
            label: 'Candidates',
            data: [40, 35, 25, 8, 5, 15, 10],
            backgroundColor: ['#BEA042'],
            borderColor: ['#D3BA50'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
