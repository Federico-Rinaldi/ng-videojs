
# ng-videojs

A basic Angular library for videojs javascript plugin.



## Installation

Install ng-videojs with npm

```bash
  cd my-angular-project
  npm install ng-videojs
```
    
## Usage/Examples

```javascript
import { NgVideojsModule } from 'ng-videojs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgVideojsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

--------------------------------------------------

import { NgVideoJsOptions } from 'ng-videojs';

export class AppComponent implements OnInit {

videOption!:NgVideoJsOptions;

 //for youtube video change sources object with
 // src:'url-to-youtube-video'
 // type:'video/youtube'
  ngOnInit(): void {
    this.videOption = {} as NgVideoJsOptions;
    this.videOption.id = 'Prova';
    this.videOption.autoplay= true;
    this.videOption.fluid = true;
    this.videOption.controls = true;
    this.videOption.loop = true;
    this.videOption.width = 50;
    this.videOption.height = 50;
    this.videOption.liveui = false;
    this.videOption.sources = [{
      src:'url-to-video',
      type:'video/mp4'
    }];
  }
}
------------------------------------------------
Template:

<ng-videojs [options]="videOption"></ng-videojs>

```


## Roadmap

- Additional Options

- Add more integrations


## License

[Apache, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0)


## Authors

- [@Federico Rinaldi](https://www.github.com/Federico-Rinaldi)


## Follow me

![Mastodon Follow](https://img.shields.io/mastodon/follow/116879?domain=https%3A%2F%2Fmastodon.uno&link=https%3A%2F%2Fmastodon.uno%2F%40FedeRinaldi83)


