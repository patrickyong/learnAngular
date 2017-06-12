import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit, OnDestroy {
  private name: string;
  private sub: any;
  routing$;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    // first method
    this.sub = this.route.params.subscribe((params: CustomerPageParam) => {
       this.name = params.name; // (+) converts string 'id' to a number

    });

    this.route.queryParams
      .subscribe(params => {
        console.log(params);

      })

    // second method
   /* this.routing$ = this.route.paramMap
      .subscribe(params => {
        if (params.has('name')) {
          this.name = params.get('name');
        }

      });*/

    // do not use this.route.snapshot.params because you are no subscribe
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

interface CustomerPageParam {
  name: string;
  nickName?: string;
}
