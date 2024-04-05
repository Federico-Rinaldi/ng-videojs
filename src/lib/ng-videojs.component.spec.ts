import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgVideojsComponent } from './ng-videojs.component';

describe('NgVideojsComponent', () => {
  let component: NgVideojsComponent;
  let fixture: ComponentFixture<NgVideojsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgVideojsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgVideojsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize videojs', () => {
    component.options = {
      id:'test',
      autoplay:true,
      sources: [{
        src:'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
        type:'video/mp4'
      }]
    }


    component.ngOnInit();
    fixture.detectChanges();
    expect(component.player).toBeDefined();
  });


});
