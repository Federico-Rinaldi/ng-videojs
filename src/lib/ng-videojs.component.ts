import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import 'videojs-youtube';
import { NgVideoJsOptions } from './ng-videojs-options.model';

@Component({
  selector: 'ng-videojs',
  template: `
    <video #target class="video-js" controls muted playsinline preload="none"></video>
  `,
  styleUrls: [
    './ng-videojs.component.scss',
    '../../assets/css/video-js.css'
  ],
  encapsulation:ViewEncapsulation.None
})
export class NgVideojsComponent implements OnInit,OnDestroy {

  @ViewChild('target', { static: true})
  target!: ElementRef;

  @Input()
  options!: NgVideoJsOptions;
  
  player!: Player;

  constructor(
  ) { }

  ngOnInit(): void {
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
    });
  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
    }
  }

}
