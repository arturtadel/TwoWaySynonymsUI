import { Component, OnInit } from '@angular/core';
import {SynonymsService} from '../../../services/synonyms.service';
import {Observable} from 'rxjs';
import {Synonym} from '../../../models/synonym';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  synonym: Synonym;
  constructor(private synonymsService: SynonymsService,
              private router: Router ) { }

  ngOnInit(): void {
    this.synonym = new Synonym();
  }

  onSubmit() {
    this.synonymsService.createNew(this.synonym);
    this.router.navigate(['/synonyms']);
  }
}
