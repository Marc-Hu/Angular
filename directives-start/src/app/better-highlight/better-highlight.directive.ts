import { Directive, 
  Renderer2, 
  OnInit, 
  ElementRef, 
  HostListener, 
  HostBinding,
  Input 
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() default : string = 'transparent';
  @Input('appBetterHighlight') changeColor : string = 'lightblue';

  @HostBinding('style.backgroundColor') backgroundColor : string;

  constructor(private elRef : ElementRef, private renderer : Renderer2) { }

  ngOnInit(){
    this.backgroundColor=this.default;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
  }

  @HostListener('mouseenter') mouseover(eventdata : Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
    this.backgroundColor = this.changeColor;
  }

  @HostListener('mouseleave') mouseleave(eventdata : Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.default;
  }

}
