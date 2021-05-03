import check from './img/check.svg';
import './App.css';
import React ,{ Component } from "react";
import Todoitem from './components/Todoitem';
import classNames from 'classnames';
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
    
  ],
  filters :[
    {name : "All", isShow :true},
    {name : "Active", isShow :false},
    {name : "Completed", isShow :false},
  ]
} 
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
onFilterClicked =(indexFilter) =>{
  this.setState( state =>{
    const newFilter = state.filters.map((item,index) =>{
      if(indexFilter === index){
        let newItem = {};
        newItem = {...item,isShow : true}
        return newItem;
      }
      else{
        let newItem = {};
        newItem = {...item,isShow : false}
        return newItem;
      }
    })

    // let isShow = state.filters[indexFilter].isShow;
    // let nameFilter =  state.filters[indexFilter].name;
     
    // const newTodoitems = state.Todoitems.filter((item,index) =>{
    //     if(nameFilter === "Active"){
    //       return (item.isComplete !== true);
    //     }
    //     else if(nameFilter === "Completed"){
    //       return (item.isComplete !== false);
    //     }     
    //     else{
    //       return (item);
    //     }
    // })    
    return {
      // Todoitems :newTodoitems,
      filters : newFilter
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
    const {Todoitems, valueInput,filters} = this.state;
    let displayFilter =[];
    let filtersName = filters.find(item => item.isShow).name;
    console.log(filtersName)
    switch(filtersName) {
      case 'Completed':
        displayFilter = Todoitems.filter((item,index) =>{
          return (item.isComplete !== false); 
        }) 
        console.log(displayFilter)
        break;
      case 'Active':
        displayFilter = Todoitems.filter((item,index) =>{
          return (item.isComplete !== true); 
        }) 
        console.log(displayFilter)
        break;
        case 'All':
          displayFilter = Todoitems;
          console.log(displayFilter)
        break;
        // code block
    }
    
    return (
      
      <div className="App">
        <div className="Header">
            <img onClick={() => this.onCheckClicked()} src={check}></img>
            <input type="text" placeholder="What needs to be done?" onKeyUp={this.onKeyUp} onChange ={this.onChange} value={valueInput} >

            </input>
        </div>
        <div className="Main">
          {
            (displayFilter.length > 0 && displayFilter.map((item,index) =>
                <Todoitem key={index} item={item} onClickRemove={() => this.onItemClickedRemove(index)} onClick={() => this.onItemClicked(index)} ></Todoitem>
              ))
            }
            {displayFilter.length === 0 && 'Nothing Here'} 
        </div>
        <div class="Footer">
           {(Todoitems.length &&  <div>
                <span> {Todoitems.length}  Item Left</span>

           </div>)}
           <ul>
             {
                (filters.map((item,index) =>
                  <li className={classNames('',{'selected': item.isShow})}  onClick={() => this.onFilterClicked(index)}>{item.name}</li>
                ))             
             }

             
           </ul>
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


