import check from './img/check.svg';
import './App.css';
import React ,{ Component } from "react";
import Todoitem from './components/Todoitem';
class App extends React.Component {
constructor(){
  super();
  this.state ={
    isAllTodoChecked: false,
    // checked : true,
    valueInput:'',
    Todoitems : [
      {title : "GPU", isComplete :true},
      {title : "CPU", isComplete :false},
      {title : "RAM", isComplete :true},
    
  ]} 
  this.onKeyUp = this.onKeyUp.bind(this);
  this.onChange = this.onChange.bind(this);
}
onItemClicked = (indexItemClicked) =>{
  this.setState( state =>{
      const Todoitems = state.Todoitems.map((item,index) =>{
        if(indexItemClicked === index){
              let newItem={};
              newItem = {...item,isComplete : !item.isComplete}
              return newItem;
          
        }
        return item;
      })
      console.log(Todoitems)
      return {
        Todoitems
      }      
  })

  
}
onItemClickedRemove = (indexItemClicked) =>{
  this.setState( state =>{
    const newTodoitems = state.Todoitems.filter((item,index) =>{
      return  (index !== indexItemClicked)
    })
    return {
      Todoitems: newTodoitems
    }      
}) 
}
onCheckClicked = () =>{
  this.setState( state =>{
    let isAllTodoChecked = !state.isAllTodoChecked ;
    const Todoitems = state.Todoitems.map((item) =>{
        let newItem = {};
        newItem = {...item,isComplete : isAllTodoChecked}
        return newItem;
    })
    return {
      Todoitems,isAllTodoChecked
    }       
  })
}
onChange(event){
  this.setState({
    valueInput:event.target.value,

 })  
}
onKeyUp(event){
  const {valueInput} = this.state;
  if(event.keyCode === 13){ // Enter Key
      this.setState({
         valueInput:'',
        Todoitems : [          
          ...this.state.Todoitems,
          {title : valueInput, isComplete :false},
      ]
 
      })
  }

}

  render(){
    const {Todoitems, valueInput} = this.state;
    
    return (
      
      <div className="App">
        <div className="Header">
            <img onClick={() => this.onCheckClicked()} src={check}></img>
            <input type="text" placeholder="What needs to be done?" onKeyUp={this.onKeyUp} onChange ={this.onChange} value={valueInput} >

            </input>
        </div>
        <div className="Main">
        {
            (Todoitems.length > 0 && Todoitems.map((item,index) =>
                <Todoitem key={index} item={item} onClickRemove={() => this.onItemClickedRemove(index)} onClick={() => this.onItemClicked(index)} ></Todoitem>
              ))
            }
            {Todoitems.length === 0 && 'Nothing Here'} 
        </div>
        <div class="Footer">
           {(Todoitems.length &&  <div>
                <span> {Todoitems.length}  Item Left</span>

           </div>)}
        </div>
      </div>
    );
  }

}


export default App;


// function test() {

// }

// var test = (state) => {

// }

// class Test {
//   x = 1;
// }

// property

// var huy = [1,2,3]

// spread operator
// class trong
// arrow function
// ES6

// la 1 cach update property cua object HAY HON.

// immutabilty: tinh KHONG thay doi. (immutable)

// let huy = { x : 1, y: 3};
// let trieu = { ...huy,x : 2};

// state = {
//   name: 'Huy' // Trieu (hanh dong nay goi la change state, update state)
// }

// // QUY DINH

// state.name = 'trieu'; // VI PHAM CHINH SACH.

// // CHINH SACH O DAY LA NTN?
// // minh KO dc thay doi property cua object (state) 1 cach TRUC TIEP.

// let objec1 = { x: 1}; // dia chi o nho trong RAM: 0100
// let object2 = { x: 1}; // dia chi o nho trong RAM: 0101


// this.setState(currentState => {
//   let newState = { ...currentState, name: 'Trieu'};
//   return newState;
// })


let huyArr = [1,2,3];

let newHuyArray =huyArr.filter((item, index) => {
  return (index !== 1);
})

console.log(newHuyArray)


