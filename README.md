# MMM-MagicDash
Use your MagicMirror2 as a dashboard.

## Screenshots
![Screenshot 1](screenshot-1.jpg)

Customized Alert Module with Sounds

![Screenshot 2](screenshot-2.jpg)

## Modules Used
* [MMM-BackgroundSlideshow](https://github.com/darickc/MMM-BackgroundSlideshow)
* [MMM-iFrame](https://github.com/alberttwong/MMM-iFrame)
* [MMM-MyCalendar](https://github.com/jclarke0000/MMM-MyCalendar)
* [MMM-NowPlayingOnSpotify](https://github.com/raywo/MMM-NowPlayingOnSpotify)
* [MMM-PlexNowPlaying](https://github.com/glitch452/MMM-PlexNowPlaying)
* [MMM-Sounds2](https://github.com/sigel/MMM-Sounds2) _(Optional)_

## Custom CSS
The `css/custom.css` contains customizations such as removing module headers and changing the MyCalendar default layout.

## Config
The `config/config.js` contains my setup for each module.

_My collection of backgrounds used is available for download [here](https://drive.google.com/file/d/1pKJM75EsiSegkv3AJiF6Wgw1kcQ0xOI5/view?usp=sharing)_

### Status Page
If you want to use the widget showing online/offline status of services such as sabnzbd, plex, etc. You'll have to edit `status/index.php` and upload it all to a webserver and use the [MMM-iFrame](https://github.com/alberttwong/MMM-iFrame) module to show it on your dashboard.

As I wrote this, I decided it would be a fun idea to convert that to an actual module, so stay tuned!
