import { Component } from '@angular/core';

@Component({
  selector: 'app-military',
  standalone: true,
  imports: [],
  template: `
    <h1>My Military Service</h1>
    <div class="grid">
      <section class="tablet-desktop">
        <img src="pictures/sheldon/bootcamp.jpg" alt="a picture of Sheldon as a naval recruit in dress blues" />
      </section>
      <section class="mobile">
        <img class="center-image" src="pictures/sheldon/bootcamp.jpg" alt="a picture of Sheldon as a naval recruit in dress blues" />
      </section>
      <section>
        <p class="dropCap">I was enlisted in the United States Navy from 1990 to 1996 as a <a href="https://www.navy.com/careers-benefits/careers/science-engineering/machinists-mate-nuclear" target="_blank">Nuclear Machinist Mate</a>.</p>

        <p>From 1990 through 1991, I attended boot camp, Nuclear Field A School, and Naval Nuclear Power School at the <a href="https://www.bracpmo.navy.mil/BRAC-Bases/Southeast/Former-Naval-Training-Center-Orlando/" target="_blank">Naval Training Center (NTC) Orlando</a>.  Sadly, the NTC is no longer there as it was closed in 1999 and has since been re-developed. For more information about its history and current status, please follow the link to <a href="https://www.baldwinparknetwork.com/index.cfm?fa=GetContainer&ApplicationTreeID=7AAE7C24-810F-4F6D-979B77155B88EB6D#History-Public" target="blank">Baldwin Park history</a>.</p>

        <p>Once I successfully graduated from the schools at NTC Orlando in 1991, I was transferred to the <a href="https://www.navsea.navy.mil/Home/NPTU/Charleston/" target="_blank">Nuclear Power Training Unit (NPTU) in Charleston, South Carolina</a>. The NPTU is where we would actively work and qualify on a real reactor and steam plant. The Navy only had a handful of these commands in the United States. As such, I am unaware if any of the other NPTU stations are still in operation.<p>

        <p>After successfully graduating from NPTU in 1992, I was transferred to the <a href="https://www.history.navy.mil/research/histories/ship-histories/danfs/v/virginia-v.html" target="_blank">USS Virginia (CGN-38)</a>, a <a href="https://naval-encyclopedia.com/cold-war/us/virginia-class-cruisers.php" target="_blank">Virginia class</a> nuclear-powered cruiser stationed in Norfolk, Virginia. To date, all of these great ships have been decommissioned. In fact, I was on the decommissioning crew of the Virginia at that time.</p>

        <p>In 1994 after the decommissioning of the USS Virginia, I was transferred to the <a href="https://www.airpac.navy.mil/Organization/USS-George-Washington-CVN-73/" target="_blank">USS George Washington (CVN-73)</a>, a <a href="https://www.navy.mil/Resources/Fact-Files/Display-FactFiles/article/2169795/" target="_blank">Nimitz class</a> nuclear-powered aircraft carrier, where I would serve out the remainder of my six year enlistment.</p>
      </section>
    </div>
  `,
  styles: `

  `
})
export class MilitaryComponent {

}
