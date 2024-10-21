import { SafeUrl } from '@angular/platform-browser';

export interface MenuBar {
  label: string;
  route: string;
  logo: string;
}
export interface FileHandle {
  file: File;
  url: SafeUrl;
}

export interface FilePreview {
  file: File;
  url?: SafeUrl;
  type: string;
  name: string;
}

export interface FilterOptions {
  jobRole: { role: string }[];
  experience: { level: string }[];
  skills: { skill: string }[];
  noticePeriod: { period: string }[];
}
export interface applicationMenu {
  name: string;
}

export interface settingsMenu {
  manuBarName: string;
  icon: string;
  route:string
}
