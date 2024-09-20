import { SafeUrl } from "@angular/platform-browser";

export interface MenuBar{
    label:string;
    route:string;
    logo:string;
}
export interface FileHandle {
    file: File,
    url: SafeUrl
  }

export interface FilePreview {
    file: File;
    url?: SafeUrl;
    type: string;
    name: string;
  }