class Televisor {
    private brand: string;
    private volume: number = 0;
    private channel: number = 1;
    private isOn: boolean = false;
    private isMuted : boolean = false; // Si el volumen llega a 0 y damos al boton de bajar volumen
    public constructor(brand: string) {
        this.brand = brand;
    }
    public switchPower(): void {
        this.isOn = !this.isOn
    }

    public muteOnOff(): void {
        this.isMuted = !this.isMuted
    }

    private getTime(): string {
        const fullDate = new Date()
        return `${fullDate.getHours()}:${fullDate.getMinutes()}`


    }
    public info(): void {
        if (this.isOn === false) {
            return
        } else {
            console.log(`
                Channel: ${this.channel};
                Volume: ${this.volume};
                Hour: ${this.getTime()};
                Mute: ${this.isMuted};
                -----------\n`)
        }
    }
    public channelUp(): void {
        if (this.channel === 99) {
            this.channel = 1
        } else {
            this.channel += 1
        }
    }
    public channelDown(): void {
     if (this.isOn) {    
        if (this.channel === 1) {
            this.channel = 99
        } else {
            this.channel -= 1
        }
       }
    }
    public selectChannel(channelNumber: number) {
     if (this.isOn){
        if (channelNumber > 0 && channelNumber <= 99) {
            this.channel = channelNumber
        }
    }

    }

    public volumeUp(): void {
     if (this.isOn){
        if (this.isMuted){
            this.isMuted=false;
           } else {
          if (this.volume < 100) {
                this.volume = this.volume + 1;
                                 }
                  }
     }   
    }
    public volumeDown(): void {
     if (this.isOn) {
        if (this.isMuted){
            this.isMuted=false;
           } else {
          if (this.volume > 0) {
                this.volume = this.volume - 1;
                                 }
                  }  
      }   
     }
    }

const TV1 = new Televisor("TLC");   
TV1.switchPower(); 
TV1.info();
TV1.volumeUp();
TV1.volumeUp();
TV1.muteOnOff();
TV1.volumeUp();
TV1.volumeDown();
TV1.volumeDown();
TV1.volumeDown();
TV1.volumeDown();
TV1.volumeUp();
TV1.info();
TV1.switchPower(); 
TV1.info();
TV1.volumeUp();
TV1.volumeUp();
TV1.volumeUp();
TV1.volumeUp();
TV1.info();
TV1.switchPower();
TV1.volumeUp();
TV1.info();
TV1.switchPower();
console.log("estado actual");
TV1.info();
TV1.channelUp;
TV1.channelUp;
TV1.channelUp;
TV1.switchPower();
TV1.info();
TV1.channelDown();
TV1.channelDown();
TV1.info();

