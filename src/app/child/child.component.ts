import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
addToChild :string = '+';
subToChild :string = '-';
resetToChild :string = 'reset';
@Input() countToChild:number=80;
@Output() plusclicked = new  EventEmitter();

increment()
{
  this.countToChild=this.countToChild+1;
  this.plusclicked.emit(this.countToChild);
}
decrement()
{
  this.countToChild=this.countToChild - 1;
  this.plusclicked.emit(this.countToChild);
}
resetting()
{
  this.countToChild = 0;
  this.plusclicked.emit(this.countToChild);
}

getcolor()
{
  if(this.countToChild>0)
    return 'greencolor';
  else if(this.countToChild<0)
    return 'redcolor';
  else 
    return 'blackcolor'
}
}
