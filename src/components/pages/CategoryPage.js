import React, { Component } from 'react';
import ITEM_DATA from '../data/ItemData';
import Card from '../Boilerplate/Card'
import { withRouter } from 'react-router-dom'

class CategoryPage extends Component {
    constructor(props){
        super(props);
        this.state={data:ITEM_DATA}
    }

  render() {
    const data=this.state.data;
    const ctg=this.props.match.params.ctg;
    return (
    <div>
        <p class="text-5xl uppercase mt-10 ml-10" onClick={()=>{this.props.history.push('/shop')}} >{this.props.match.params.ctg}</p>
            <div class="flex flex-wrap mb-20 pl-10">
                {data[ctg].map((e)=>{return <Card name={e[0]} details={e[1]} price={e[2]} img={e[3]}/>})}
            </div>
    </div>
    );
  }
}

export default withRouter(CategoryPage)