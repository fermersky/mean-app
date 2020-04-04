import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HintsService } from 'src/app/services/hints.service';
import { Hint } from 'src/app/models/hint';

@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {
  public hint: Hint;

  constructor(private route: ActivatedRoute, private hints: HintsService) {}

  ngOnInit() {
    this.route.params.subscribe(async p => {
      const slug = p.slug;

      try {
        this.hint = await this.hints.getBySlug(slug).toPromise();
      } catch (ex) {
        console.log(ex);
      }
    });
  }
}
