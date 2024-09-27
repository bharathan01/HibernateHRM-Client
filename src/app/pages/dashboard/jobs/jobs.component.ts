import { Component, OnInit } from '@angular/core';
import { SearchJobService } from 'src/app/core/services/search-job/search-job.service';
import { Job } from 'src/app/shared/intserfaces/users.intserfaces';
import { jobs } from 'src/app/utils/demoData';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  jobFilterTerm: string = 'new';
  jobs:Job[] = jobs
  constructor(private searchService: SearchJobService) {}
   
  ngOnInit() {
    this.searchService.searchTerm$.subscribe((term) => {
      this.jobFilterTerm = term;
    });
  }

  //   {
  //     title: "Robotic Engineer",
  //     id: 4112,
  //     totalApplication: 5,
  //     newApplication: 2,
  //     activeApplication: 1,
  //     status: 'new',
  //     experience: "2-3 years",
  //     qualification: "B-Tech Mechanical Engineering/Mechatronics/Robotics",
  //     responsibilities: [
  //       'Conduct detailed dynamic analysis of robotic systems to understand the effects of forces, torques, and loads on motion and stability.',
  //       'Apply principles of kinematics and dynamics to optimize the performance and efficiency of robotic manipulators and mobile platforms.',
  //       'Contribute to the mechanical design process, focusing on static force calculations, stress analysis, and robust structural design.',
  //       'Utilize software tools like MATLAB, and ROS to create, simulate, and validate robotic systems.'
  //     ],
  //     skills: [
  //       'Experience in MATLAB, Python, or equivalent tools for modeling and analysis.',
  //       'Background in linear systems analysis, stability, and controller design.',
  //       'Understanding and intuition for the physics of basic motion control systems, kinematics, dynamics, etc.',
  //       'Excellent problem-solving skills, attention to detail, and strong mathematical abilities.',
  //       'Proficiency in designing parts and assemblies using 3D modeling software.'
  //     ],
  //     jobLink: "https://www.genrobotics.org/career/roboticengineer"
  //   },
  //   {
  //     title: "Game Developer",
  //     id: 4113,
  //     totalApplication: 15,
  //     newApplication: 7,
  //     activeApplication: 3,
  //     status: 'closed',
  //     experience: "1-2 years",
  //     qualification: "B-Tech in Computer Science or related field",
  //     responsibilities: [
  //       'Develop and maintain game code in C++ or similar language.',
  //       'Work with artists and designers to implement game features.',
  //       'Optimize game performance for different platforms.',
  //       'Troubleshoot and debug issues in game code.'
  //     ],
  //     skills: [
  //       'Proficiency in C++ or similar programming languages.',
  //       'Experience with game engines like Unity or Unreal Engine.',
  //       'Strong problem-solving and debugging skills.',
  //       'Knowledge of 3D graphics and game physics.'
  //     ],
  //     jobLink: "https://www.example.com/game-developer"
  //   },
  //   {
  //     title: "AI/ML Engineer",
  //     id: 4114,
  //     totalApplication: 10,
  //     newApplication: 3,
  //     activeApplication: 2,
  //     status: 'new',
  //     experience: "3-5 years",
  //     qualification: "M.Tech in AI/ML or related field",
  //     responsibilities: [
  //       'Develop machine learning models and algorithms.',
  //       'Analyze large datasets to extract meaningful insights.',
  //       'Collaborate with data scientists and engineers on model implementation.',
  //       'Stay updated with the latest trends in AI and ML technology.'
  //     ],
  //     skills: [
  //       'Strong programming skills in Python or R.',
  //       'Experience with machine learning frameworks like TensorFlow or PyTorch.',
  //       'Solid understanding of algorithms and data structures.',
  //       'Experience with data analysis and visualization tools.'
  //     ],
  //     jobLink: "https://www.example.com/ai-ml-engineer"
  //   },
  //   {
  //     title: "Android Developer",
  //     id: 4115,
  //     totalApplication: 20,
  //     newApplication: 10,
  //     activeApplication: 5,
  //     status: 'closed',
  //     experience: "2-4 years",
  //     qualification: "B-Tech in Computer Science or related field",
  //     responsibilities: [
  //       'Develop and maintain Android applications.',
  //       'Work with designers to implement user interfaces.',
  //       'Optimize applications for performance and stability.',
  //       'Debug and troubleshoot issues in Android applications.'
  //     ],
  //     skills: [
  //       'Proficiency in Java or Kotlin programming languages.',
  //       'Experience with Android SDK and Android Studio.',
  //       'Understanding of Android UI/UX principles.',
  //       'Knowledge of RESTful APIs and integration.'
  //     ],
  //     jobLink: "https://www.example.com/android-developer"
  //   },
  //   {
  //     title: "Flutter Developer",
  //     id: 4116,
  //     totalApplication: 8,
  //     newApplication: 4,
  //     activeApplication: 2,
  //     status: 'new',
  //     experience: "1-2 years",
  //     qualification: "B-Tech in Computer Science or related field",
  //     responsibilities: [
  //       'Develop cross-platform mobile applications using Flutter.',
  //       'Work closely with UI/UX designers to create responsive and attractive interfaces.',
  //       'Collaborate with backend developers to integrate APIs and services.',
  //       'Perform code reviews and maintain application quality.'
  //     ],
  //     skills: [
  //       'Proficiency in Dart programming language.',
  //       'Experience with Flutter SDK and Dart packages.',
  //       'Knowledge of mobile app development principles and best practices.',
  //       'Experience with version control systems like Git.'
  //     ],
  //     jobLink: "https://www.example.com/flutter-developer"
  //   },
  //   {
  //     title: "Linux-Kernel Engineer",
  //     id: 4117,
  //     totalApplication: 12,
  //     newApplication: 6,
  //     activeApplication: 3,
  //     status: 'new',
  //     experience: "2-3 years",
  //     qualification: "B-Tech in Computer Science or related field",
  //     responsibilities: [
  //       'Develop and maintain Linux kernel modules and drivers.',
  //       'Optimize kernel performance and stability.',
  //       'Work with the open-source community to contribute to kernel development.',
  //       'Troubleshoot and debug kernel-related issues.'
  //     ],
  //     skills: [
  //       'Proficiency in C programming language.',
  //       'Experience with Linux kernel development and debugging.',
  //       'Strong understanding of operating system concepts.',
  //       'Knowledge of hardware-software interactions and driver development.'
  //     ],
  //     jobLink: "https://www.example.com/linux-kernel-engineer"
  //   }

  //   ,{
  //     title: 'Robotic Engineer',
  //     id: 4112,
  //     totalApplication: 0,
  //     newApplication: 0,
  //     activeApplication: 0,
  //     status: 'new',
  //     experience: '2-3 years',
  //     qualification: 'B-Tech Mechanical Engineering/Mechatronics/Robotics',
  //     responsibilities: [
  //       'Conduct detailed dynamic analysis of robotic systems to understand the effects of forces,torques and loadson motion and stability.',
  //       'Apply principles of kinematics and dynamics to optimize the performance and efficiency of robotic manipulators and mobile platforms.',
  //       'Contribute to the mechanical design process, focusing on static force calculations, stress analysis, and robust structural design.',
  //       'Utilize software tools like MATLAB, and ROS to create, simulate, and validate robotic system.',
  //     ],
  //     skills: [
  //       ' Experience in MATLAB, Python, or equivalent tools for modeling and analysis.',
  //       'Background in linear systems analysis, stability, and controller design.',
  //       'Understanding, and intuition for the physics of basic motion control systems, kinematics, dynamics etc.',
  //       'Excellent problem-solving skills, attention to detail, and strong mathematical abilities.',
  //       ' Proficiency in designing parts and assemblies using 3D modeling software. ',
  //     ],
  //     jobLink: 'https://www.genrobotics.org/career/roboticengineer',
  //   },
  //   {
  //     title: 'Game Developer',
  //     id: 4112,
  //     totalApplication: 0,
  //     newApplication: 0,
  //     activeApplication: 0,
  //     status: 'closed',
  //     experience: '',
  //     qualification: 'B-Tech Mechanical Engineering/Mechatronics/Robotics',
  //     responsibilities: [],
  //     skills: [],
  //     jobLink: '',
  //   },
  //   {
  //     title: 'AI/ML Engineer',
  //     id: 4112,
  //     totalApplication: 0,
  //     newApplication: 0,
  //     activeApplication: 0,
  //     status: 'closed',
  //     experience: '',
  //     qualification: 'B-Tech Mechanical Engineering/Mechatronics/Robotics',
  //     responsibilities: [],
  //     skills: [],
  //     jobLink: '',
  //   },
  //   {
  //     title: 'Android Developer',
  //     id: 4112,
  //     totalApplication: 30,
  //     newApplication: 4,
  //     activeApplication: 10,
  //     status: 'closed',
  //     experience: '',
  //     qualification: 'B-Tech Mechanical Engineering/Mechatronics/Robotics',
  //     responsibilities: [],
  //     skills: [],
  //     jobLink: '',
  //   },
  //   {
  //     title: 'Flutter Developer',
  //     id: 4112,
  //     totalApplication: 30,
  //     newApplication: 4,
  //     activeApplication: 10,
  //     status: 'new',
  //     experience: '1-2 years',
  //     qualification: 'B-Tech Mechanical Engineering/Mechatronics/Robotics',
  //     responsibilities: [],
  //     skills: [],
  //     jobLink: '',
  //   },
  //   {
  //     title: 'Linux-Kernel Engineer',
  //     id: 4112,
  //     totalApplication: 30,
  //     newApplication: 4,
  //     activeApplication: 10,
  //     status: 'new',
  //     experience: '2-3 years',
  //     qualification: 'B-Tech Mechanical Engineering/Mechatronics/Robotics',
  //     responsibilities: [],
  //     skills: [],
  //     jobLink: '',
  //   },
  //   {
  //     title: 'UI/UX Designer',
  //     id: 4112,
  //     totalApplication: 30,
  //     newApplication: 4,
  //     activeApplication: 10,
  //     status: 'new',
  //     experience: 'Fresher',
  //     qualification: 'B-Tech Mechanical Engineering/Mechatronics/Robotics',
  //     responsibilities: [],
  //     skills: [],
  //     jobLink: '',
  //   },
  //   {
  //     title: 'AR/VR Developer',
  //     id: 4112,
  //     totalApplication: 0,
  //     newApplication: 0,
  //     activeApplication: 0,
  //     status: 'closed',
  //     experience: '',
  //     qualification: 'B-Tech Mechanical Engineering/Mechatronics/Robotics',
  //     responsibilities: [],
  //     skills: [],
  //     jobLink: '',
  //   },
  //   {
  //     title: 'Fullstack Developer',
  //     id: 4112,
  //     totalApplication: 30,
  //     newApplication: 4,
  //     activeApplication: 10,
  //     status: 'new',
  //     experience: '1-2years',
  //     qualification: 'B-Tech Mechanical Engineering/Mechatronics/Robotics',
  //     responsibilities: [],
  //     skills: [],
  //     jobLink: '',
  //   },
  //   {
  //     title: 'Software Engineer',
  //     id: 4112,
  //     totalApplication: 30,
  //     newApplication: 4,
  //     activeApplication: 10,
  //     status: 'new',
  //     experience: 'Fresher',
  //     qualification: 'B-Tech Mechanical Engineering/Mechatronics/Robotics',
  //     responsibilities: [],
  //     skills: [],
  //     jobLink: '',
  //   },
  //   {
  //     title: 'Mechanical Design Engineer',
  //     id: 4112,
  //     totalApplication: 30,
  //     newApplication: 4,
  //     activeApplication: 10,
  //     status: 'new',
  //     experience: '2-3 years',
  //     qualification: 'B-Tech Mechanical Engineering/Mechatronics/Robotics',
  //     responsibilities: [],
  //     skills: [],
  //     jobLink: '',
  //   },
  //   {
  //     title: 'Production Engineer',
  //     id: 4112,
  //     totalApplication: 30,
  //     newApplication: 4,
  //     activeApplication: 10,
  //     status: 'new',
  //     experience: '1-2 years',
  //     qualification: 'B-Tech Mechanical Engineering/Mechatronics/Robotics',
  //     responsibilities: [],
  //     skills: [],
  //     jobLink: '',
  //   },
  //   {
  //     title: 'Simulation Engineer',
  //     id: 4112,
  //     totalApplication: 30,
  //     newApplication: 4,
  //     activeApplication: 10,
  //     status: 'new',
  //     experience: '2-3 years',
  //     qualification: 'B-Tech Mechanical Engineering/Mechatronics/Robotics',
  //     responsibilities: [],
  //     skills: [],
  //     jobLink: '',
  //   },
  //   {
  //     title: 'Senior Mechanical Design Engineer',
  //     id: 4112,
  //     totalApplication: 0,
  //     newApplication: 0,
  //     activeApplication: 0,
  //     status: 'closed',
  //     experience: '',
  //     qualification: 'B-Tech Mechanical Engineering/Mechatronics/Robotics',
  //     responsibilities: [],
  //     skills: [],
  //     jobLink: '',
  //   },
  // ];
}
