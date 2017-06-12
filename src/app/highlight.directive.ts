import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective implements OnInit {

  @Input() appHighlight: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {

    this.el.nativeElement.style.backgroundColor = this.appHighlight || 'yellow';

  }

}


