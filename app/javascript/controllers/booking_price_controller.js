import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="booking-price"
export default class extends Controller {

  static values = { valor: Number }
  static targets = ["start", "end", "days", "price"]

  connect() {
  
  }

  calculate(){
    const end = !(isNaN(Date.parse(this.endTarget.value)))
    const start = !(isNaN(Date.parse(this.startTarget.value)));
    if(end){
      const days = (Date.parse(this.endTarget.value) - Date.parse(this.startTarget.value)) / 86400000;
      //console.log(`days: ${days / 86400000}`);
      this.daysTarget.innerText = days ;
      this.priceTarget.innerText = this.valorValue * days
    }
  }

}
