import React from 'react';
import { Employee } from '../../redux/actions';
import { PaginatorConatiner } from './paginatorStyles';

interface HomeProps {
  list:Employee[];
  startIndex:number;
  decreaseFunc:Function;
  increaseFunc:Function;
  numPerPage:number;
}
export class Paginator extends React.Component<HomeProps> {
  renderMoveLeft():JSX.Element {
    const isAtListBeginning = (this.props.startIndex === 0);
    if (isAtListBeginning) {
      return <div>placeholder</div>
    }
    return <button onClick={() => this.props.decreaseFunc(this.props.numPerPage)}>left</button>
  }
  renderMoveRight():JSX.Element {
    const isAtListEnd = (this.props.startIndex + this.props.numPerPage >= this.props.list.length);
    if (isAtListEnd) {
      return <div>placeholder</div>
    }
    return <button onClick={() => this.props.increaseFunc(this.props.numPerPage)}>right</button>
  }
  render() {
    // if we've deleted the last employee on a page, go left.
    const hasDeletedLastEmployee = this.props.list.length === this.props.startIndex;
    if (hasDeletedLastEmployee) this.props.decreaseFunc(this.props.numPerPage);
    return (
      <PaginatorConatiner>
        {this.renderMoveLeft()}
        {this.renderMoveRight()}
      </PaginatorConatiner>
    )
  }
}
