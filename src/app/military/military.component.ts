import { Component } from '@angular/core';

@Component({
  selector: 'app-military',
  standalone: true,
  imports: [],
  template: `
    <h1>My Military Service</h1>

    <p class="dropCap">I am a veteran of the United States Navy. I served from 1990 to 1996 as a
      <a href="https://www.navy.com/careers-benefits/careers/science-engineering/machinists-mate-nuclear" target="_blank">Nuclear Machinist Mate</a>.
      I served on the
      <a href="https://www.history.navy.mil/research/histories/ship-histories/danfs/v/virginia-v.html" target="_blank">USS Virginia (CGN-38)</a> and the
      <a href="https://www.airpac.navy.mil/Organization/USS-George-Washington-CVN-73/" target="_blank">USS George Washington (CVN-73)</a>.</p>
  `,
  styles: ``
})
export class MilitaryComponent {

}
