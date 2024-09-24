export interface Notification {
  message: string;
  user: string;
  time: string;
  date: string;
  button: string;
}
export interface TimelineEvent {
  datetime: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
}

export interface Candidates {
  candidate: string;
  job: string;
  interview: string;
  interviewer: string;
  date: string;
  time: string;
  status: string;
}
export interface Job {
  title: string;
  id: number;
  totalApplication: number;
  newApplication: number;
  activeApplication: number;
  status: 'new' | 'closed';
  responsibilities: string[];
  skills: string[];
  qualification: string;
  experience: string;
  jobLink: string;
}

export interface JobOption {
  department: string;
  jobs: string[];
}

export interface Location {
  city: string;
}
export interface ApplicationDetail {
  id:string,
  candidate: string;
  experience: string;
  noticePeriod: string;
  currentCTC: string;
  source: string;
  phone: string;
  email: string;
  status: string;
  resumeURL: string;
  screeningDetails?:[ScreeningDetails] ;
  interviewDetails?:[InterviewDetails];
  jobPosition:string,
  dob:string,
  education:string,
  skills:string,
  gender:string,
  profileCreatedOn?:string
}

export interface ScreeningDetails {
  currentlyWorking: string;
  experience: string;
  companyName: string;
  noticePeriod: string;
  currentCTC: string;
  expectedCTC: string;
  project: string;
}
interface InterviewDetails{
  date:string,
  time:string
  interviewer:string,
  interviewType:string
}


export interface UsersInfo {
  id:string
  userName: string;
  role: string;
  designation: string;
  phoneNumber: string;
  emailId: string;
  profileImage: string; 
}