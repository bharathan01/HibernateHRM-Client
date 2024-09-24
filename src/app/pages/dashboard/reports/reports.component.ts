import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements OnInit, AfterViewInit {
  selectedJob: string = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const status = params['job'];
       this.selectedJob = status ? status:'All'
    });
  }

  ngAfterViewInit() {
    this.candidatePipeLineChart();
    this.applicationSourceChart();
    this.candidateHiredChart();
  }

  candidatePipeLineChart(): void {
    const ctx = document.getElementById('pipelineChart') as HTMLCanvasElement;
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
  applicationSourceChart(): void {
    const ctx = document.getElementById('sourceChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Career Website',
          'Career Mail',
          'Linkdln',
          'Indeed',
          'Naukari',
        ],
        datasets: [
          {
            label: 'Candidates',
            data: [40, 35, 25, 8, 5],
            backgroundColor: ['#BEA042'],
            borderColor: ['#D3BA50'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
          },
        },
      },
    });
  }
  candidateHiredChart(): void {
    const ctx = document.getElementById('hiredChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Yellow'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [300, 100],
            backgroundColor: ['#BEA042', '#ffffff52'],
            borderWidth: 0,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
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
