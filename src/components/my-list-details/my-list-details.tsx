import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-list-details',
  styleUrl: 'my-list-details.css',
  
})
export class MyListDetails {

  @Prop() name: string;
  

  render() {
    return (
      <div>
        Hello, World! I'm {this.name}
      </div>
    );
  }
}
