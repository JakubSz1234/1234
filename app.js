'use strict';

const Homey = require('homey');


class App extends Homey.App {
    async onInit() {
      const myImage = await this.homey.images.createImage();
      // the URL must start with https://
      myImage.setUrl("https://store-images.s-microsoft.com/image/apps.4395.9007199266523734.81192ba9-4745-473a-b714-c079de6f196d.39f03b1e-4589-45c5-b2c1-6e1a0bca819b");
    }
  }