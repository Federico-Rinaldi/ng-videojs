/**
 * NgVideoJsOptions
 * Option configuration for videojs library
 * see : https://videojs.com/guides/options/
 */
export interface NgVideoJsOptions {
    id?:string;
    fluid?: boolean;
    aspectRatio?: string;
    autoplay?: boolean;
    controls?:boolean;
    height?:number;
    width?:number;
    loop?:boolean;
    muted?:boolean;
    poster?:boolean;
    preload?:string;
    audioOnlyMode?:boolean;
    audioPosterMode?:boolean;
    autoSetup?:boolean;
    responsive?:boolean;
    breakpoints?:{};
    fullscreen?:{navigationUI?:string};
    liveui?:boolean;
    nativeControlsForTouch?:boolean;
    notSupportedMessage?:string;
    sources: {
      src: string;
      type: string;
      youtube?:{
        ytControls?:number,
        customVars?:{wmode:string}
      }
    }[];
}