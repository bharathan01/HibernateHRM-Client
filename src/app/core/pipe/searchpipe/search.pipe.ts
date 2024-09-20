import { Pipe, PipeTransform } from '@angular/core';
import { Job } from 'src/app/shared/intserfaces/users.intserfaces';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(jobs: Job[], searchTerm: string): Job[] {
    if (!jobs) {
      return [];
    }
  
    if (searchTerm === 'new' || searchTerm === 'closed') {
      return jobs.filter(job => job.status === searchTerm);
    }
  
    return jobs.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
}
