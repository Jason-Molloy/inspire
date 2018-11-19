import ImageService from "./image-service.js";

let is = new ImageService


export default class ImageController {
  constructor() {
    this.getImage()
  }

  getImage() {
    is.getImage(function (image) {
      console.log("What's the image", image)
    })
  }
}