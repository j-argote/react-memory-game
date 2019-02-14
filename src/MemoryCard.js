// MemoryCard component renders the function of each card


import React, {Component} from 'react';
import './MemoryCard.css'


//creates memory card component
class MemoryCard extends Component{
    constructor(){
        super();
        this.state = {isFlipped:false};
        this.clickHandler = this.clickHandler.bind(this)
    }

    //handles click event
    clickHandler(){
        this.setState({isFlipped: !this.state.isFlipped})
    }

    render(){
        var memoryCardInnerClass = "MemoryCardInner"; 
        if(this.state.isFlipped === true){
            memoryCardInnerClass += " flipped";

        }
        

        return(
            <div className="MemoryCard" onClick = {this.clickHandler}>
                <div className={memoryCardInnerClass}>
                {console.log(memoryCardInnerClass)}
                    <div className="MemoryCardBack">
                        <img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt="DigitalCrafts Logo"/>
                    </div>
                    <div className="MemoryCardFront">
                        ∆
                    </div>
                </div>
            </div>
        )
    }
}


export default MemoryCard;