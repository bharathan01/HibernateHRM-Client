import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { jobApplicants } from 'src/app/utils/demoData';

@Injectable({
  providedIn: 'root',
})
export class CandidateApplicationService {
  constructor() {}


  /* @@ application demo data on the src/app/utils/demoData
  */
  fetchApplicationDetails(id: string) {
    const application = jobApplicants.find((application) => application.id === id);
    // onverting the synchronous result into an observable, which allows you to use subscribe.
    return of(application)
  }
}
