import complete from '../img/complete.svg';
import remove from '../img/remove.svg';
import completeGreen from '../img/complete-green.svg';
import React , {Component} from 'react';
import classNames from 'classnames';
import './Todoitem.css';
class Todoitem extends React.Component{
    render(){
        const {item,onClick,onClickRemove} = this.props;
        let img = complete;
        if(item.isComplete){
            img= completeGreen;
        }        
        return(
            
            <div className={classNames('Todoitem',{'Todoitem-complete': item.isComplete})}>
                <img onClick={onClick} src={img}></img>
                <div className="item">
                    {this.props.item.title}
                </div> 
                <img onClick={onClickRemove} src={remove}></img>
            </div>
        )

        
    }
}
export default Todoitem;