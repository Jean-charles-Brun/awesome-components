import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../../models/candidate.model';
import { CandidateService } from '../../services/candidates.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidateListComponent implements OnInit {

  loading$!: Observable<boolean>;
  candidates$!: Observable<Candidate[]>;

  constructor(private candidateService: CandidateService){}

  ngOnInit(): void {
    this.initObservable();
    this.candidateService.getCandidateFromServer();
  }

  private initObservable() {
    this.loading$ = this.candidateService.loading$;
    this.candidates$ = this.candidateService.candidates$;
  }

}
