import { Component, OnInit } from '@angular/core';
import { TweenMax , TweenLite, Linear, Sine} from 'gsap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  topTitle:string = '';
  bottomTitle:string = '';
  loadCount: number = 0;
  loading: boolean = false;
  falling = true;

  titles = [{
    topTile: 'Make Your Kids',
    bottomTitle: 'After School Time Much Better'
  },{
    topTile: 'Let US Remember',
    bottomTitle: 'One Book One Plan One Child'
  },{
    topTile: 'Children Must Be',
    bottomTitle: 'Thought How To Think'
  }]

  

  constructor() { }

  ngOnInit(): void {
    this.topTitle = this.titles[0].topTile;
    this.bottomTitle = this.titles[0].bottomTitle;
    this.loading = true;
    this.renderSliders(); 


    TweenLite.set("#container",{perspective:600})
    TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})

    var total = 30;
    const container = document.getElementById("container") as HTMLElement,	w = window.innerWidth , h = window.innerHeight;
 
    for (var i=0; i<total; i++){ 
      var Div = document.createElement('div');
      TweenLite.set(Div,{attr:{class:'dot'},x:this.R(0,w),y:this.R(-200,-150),z:this.R(-200,200)});
      container.appendChild(Div);
      this.animm(Div);
    }
  }

  animm(elm: any){   
    TweenMax.to(elm,this.R(6,15),{y:window.innerHeight+100,ease:Linear.easeNone,repeat:-1,delay:-15});
    //TweenMax.to(elm,this.R(4,8),{x:'+=100',rotationZ:this.R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
    //TweenMax.to(elm,this.R(2,8),{rotationX:this.R(0,360),rotationY:this.R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
  };

  renderSliders() {

    setTimeout(() => {

      this.loading = false;
      setTimeout(() => {
        this.loading = false;
        this.topTitle = this.titles[this.loadCount].topTile;
        this.bottomTitle = this.titles[this.loadCount].bottomTitle;
        setTimeout(() => {
          this.loading = true;
          if(this.loadCount === 2) {
            this.loadCount = 0;
          } else {
            this.loadCount = this.loadCount + 1;
          }
      
        })
        
      },2500)
     

      this.renderSliders();
    },7000); 

  } 
  R(min:any,max: any) {return min+Math.random()*(max-min)};
}
