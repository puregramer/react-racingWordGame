/***
 * file name : Audio/index.js
 * description : Audio/index class script
 * create date : 2018-10-19
 * creator : saltgamer
 ***/

export default class SoundEffector {
    constructor(srcList) {
        this.srcList = srcList;
        this.soundList = new Map();

        this.initSoundList();
    }

    initSoundList() {
        this.srcList.forEach((value, idx) => {
            const sound = new Audio();
            sound.src = value;

            switch (idx) {
                case 0:
                    sound.autoplay = true;
                    sound.volume = 1;

                    sound.addEventListener('ended', (e) => {
                        sound.play();
                    });
                    break;
                case 5:
                    sound.addEventListener('ended', (e) => {
                        sound.play();
                    });
                    break;
                default:
                    break;
            }
            /*    if (idx === 0) {
                    sound.autoplay = true;
                    sound.volume = 0.3;

                    sound.addEventListener('ended', (e) => {
                        sound.play();
                    });
                }*/


            /* sound.addEventListener('canplay', () => {
                 sound.play();
             });*/

            this.soundList.set(idx, sound);
        });
    }

    play(idx) {
        const sound = this.soundList.get(idx);
        if (!sound) {
            alert('[!] 해당 사운드가 없습니다!');
            return;
        }
        // if (idx === 0) sound.loop = true;

        /*  if (idx === 0) {
              sound.play()
                  .then(() => {
                      console.log('~~~> sound play!!!');
                  }).catch(error => {
                  console.log('play error: ', error);
              });
          }*/
        this.soundList.forEach((value, idx) => {
            /*  if (idx !== 0 ) {
                  value.pause();
                  if (!isNaN(value.duration)) {
                      value.currentTime = 0;
                  }
              }*/

            switch (idx) {
                case 0:
                case 5:
                case 6:
                case 8:
                case 9:

                    break;
                default:
                    value.pause();
                    if (!isNaN(value.duration)) {
                        value.currentTime = 0;
                    }
                    break;
            }

            /* if (isNaN(value.duration)) {
                 value.addEventListener('loadedmetadata', () => {
                     value.currentTime = 0;
                 });
             } else {
                 value.currentTime = 0;
             }*/

        });

        console.log('~~~~~~~> play sound: ', idx);
        console.log('~~~~~~~> sound buffered: ', sound.buffered.length);
        if (sound.buffered.length > 0) {
            sound.play();

        } else {
            sound.load();
            // sound.play();
        }

    }

    playByName(name) {
        switch (name) {
            case 'bgm':
                this.play(0);
                break;
            case 'correct':
                this.play(1);
                break;
            case 'inCorrect':
                this.play(2);
                break;
            case 'click':
                this.play(3);
                break;
            case 'clock':
                this.play(4);
                break;
        }
    }

    stopByName(name) {
        let sound;
        switch (name) {

            case 'stopWatch':
                sound = this.soundList.get(5);
                break;

            case 'bgm':
                sound = this.soundList.get(0);
                break;
        }

        sound.pause();
        if (!isNaN(sound.duration)) {
            sound.currentTime = 0;
        }
    }

}