import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FlickrfeedsComponent } from './flickrfeeds.component';
import { FormsModule } from '@angular/forms';
import { StringToDate } from '../pipes/string-date.pipe';
import { FlickrfeedsService } from './flickrfeeds.service';
import { of } from 'rxjs';

describe('FlickrfeedsComponent', () => {
  let component: FlickrfeedsComponent;
  let fixture: ComponentFixture<FlickrfeedsComponent>;
  const flickrfeedsServiceStub = jasmine.createSpyObj('FlickrfeedsService', ['getFlickrfeeds']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlickrfeedsComponent, StringToDate],
      imports: [FormsModule],
      providers: [{ provide: FlickrfeedsService, useValue: flickrfeedsServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrfeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render search card title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.card-title').textContent).toContain('Flickr feeds');
  });

  it('should hide no found warning oninitial', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(component.emptyList).toBeFalsy();
  })

  it('should feeds list size be 0 oninitial', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(component.feeds).toBeTruthy()
    expect(component.feeds.length).toBe(0);
    expect(compiled.querySelector('#no-found-card')).toBeFalsy();
  })

  it('should feeds list size not be 0 after search', fakeAsync(() => {
    const compiled = fixture.debugElement.nativeElement;
    flickrfeedsServiceStub.getFlickrfeeds.and.returnValue(of({
      body: [{
        title: "The Peas Christmas",
        link: "https://www.flickr.com/photos/64208047@N06/24596060608/",
        pubDate: "2017-11-16T19:41:49.000Z",
        author: "Girly Toys",
        imageLink: "https://live.staticflickr.com/4579/24596060608_1f09f84360_m.jpg",
        content: "testcontent",
        contentSnippet: "Girly Toys posted a photo:"
      },
      {
        title: "Woody, Jesse, Buzz Lightyear - Toy Story",
        link: "https://www.flickr.com/photos/ddbphotography/32826470534/",
        pubDate: "2017-03-26T23:47:37.000Z",
        author: "DDB Photography",
        imageLink: "https://live.staticflickr.com/3781/32826470534_cea93a3448_m.jpg",
        content: "testcontent2",
        contentSnippet: "DDB Photography posted a photo:↵	↵↵↵Disney On Ice↵Follow Your Heart↵Rogers Centre↵Toronto, Ontario↵↵March 18th, 2017"

      }]
    }));

    component.submitSearch();
    fixture.detectChanges();
    tick();
    console.log(component.feeds);
    expect(component.feeds.length).toBe(2);
    expect(compiled.querySelector('#no-found-card')).toBeFalsy();
  }));

  it('should feeds list size be 0 after search and show not found', fakeAsync(() => {
    const compiled = fixture.debugElement.nativeElement;
    flickrfeedsServiceStub.getFlickrfeeds.and.returnValue(of({ body: [] }));
    component.submitSearch();
    fixture.detectChanges();
    tick();
    expect(component.feeds.length).toBe(0);
    expect(compiled.querySelector('#no-found-card')).toBeTruthy();
  }));

});
