import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-parents-testimonial',
  templateUrl: './parents-testimonial.component.html',
  styleUrls: ['./parents-testimonial.component.scss']
})
export class ParentsTestimonialComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  parentsComments: any = [
    {
      parentName: 'Parent Name',
      designation : 'Doctor',
      comments: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      parentImage: 'parent-1.jpg'
    },
    {
      parentName: 'Parent Name 1',
      designation : 'Software Engineer',
      comments: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      parentImage: 'parent-2.jpg'
    },
    {
      parentName: 'Parent Name 2',
      designation : 'Bussiness Man',
      comments: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      parentImage: 'parent-3.jpg'
    }
  ]

  parentName: string = '';
  designation: string = '';
  comments: string = '';
  photo: string = '';
  loading: boolean = false;
  loadCount: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.parentName = this.parentsComments[0].parentName;
    this.designation = this.parentsComments[0].designation;
    this.comments = this.parentsComments[0].comments;
    this.photo = this.parentsComments[0].parentImage;
    this.loading = true;
    this.renderSliders();
  }

  renderSliders() {

    setTimeout(() => {

      this.loading = false;
      setTimeout(() => {
        this.loading = false;
        this.parentName = this.parentsComments[this.loadCount].parentName;
        this.designation = this.parentsComments[this.loadCount].designation;
        this.comments = this.parentsComments[this.loadCount].comments;
        this.photo = this.parentsComments[this.loadCount].parentImage;
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

}
