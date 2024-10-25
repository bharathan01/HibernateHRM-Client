import { Pipe, PipeTransform } from '@angular/core';
import { Job } from 'src/app/shared/intserfaces/users.intserfaces';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(jobs: Job[], jobFilterTerm: string): Job[] {
    if (!jobs || !jobFilterTerm) {
      return jobs;
    }

    const searchTerm = jobFilterTerm.toLowerCase();

    return jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm) ||
        job.status.toLowerCase().includes(searchTerm) ||
        job.experience.toLowerCase().includes(searchTerm) ||
        job.qualification.toLowerCase().includes(searchTerm) ||
        job.responsibilities.some((resp: string) =>
          resp.toLowerCase().includes(searchTerm)
        ) ||
        job.skills.some((skill: string) =>
          skill.toLowerCase().includes(searchTerm)
        )
    );
  }
}
