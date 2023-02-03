import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter-app';
  count:number=0;
  // color='black';
// increment()
// {
//   this.count=this.count + 1;
// }
// decrement()
// {
//   this.count=this.count - 1;
// }
// resetting()
// {
//   this.count=0;
// }

getcolor()
{
  if(this.count>0)
    return 'greencolor';
  else if(this.count<0)
    return 'redcolor';
  else 
    return 'blackcolor'
}
receiveMessage(event: number) {
  this.count = event;
}

}