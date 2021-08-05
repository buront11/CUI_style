
function display(element) {
  ReactDOM.render(element, document.getElementsByClassName("terminal")[0]);
}

function InitialMessageComponent() {
  return (
    <div>
      <div class="responce">Welcome to ComNets Lab CUI mode!!</div>
      <div class="responce">Copyright (c) ComNetsLab. All rights reserved.</div>
      <br />
      <br />
    </div>
  );
}

function InputComponent(props) {
  const [text, setText] = React.useState('')
  
  const HandleChange = (e) => {
    setText(() => e.target.value)
  }

  return (
    <div class="line">
      <span class="user">{props.name}:</span>
      <span class="location">{props.directory}</span>
      <span class="percent">%</span>
      <input type="text" value={text} class="latest-input" onChange={HandleChange} onKeyPress={props.enterFunction} autoFocus={true} 
      disabled={props.disableInput} />
    </div>
  );
}

function Terminal(props) {
  const [count, setCount] = React.useState([false])

  const OnEnterPressed = (e) => {
    if (e.key == 'Enter'){
      let newCount = []
      count.map(() => {
        newCount.push(true)
      })
      setCount([...newCount, false])
      console.log(count)
    }
  }

  const CommandLines = count.map((value, idx) => {
    return (
      <InputComponent
        name={props.userName}
        directory={props.currentDirectory}
        enterFunction={OnEnterPressed}
        disableInput={value}
      />
    );
  }); 
  
  return (
    <div>
      <InitialMessageComponent />
      {CommandLines}
    </div>
  );
}

display(<Terminal userName="guest@comnets" currentDirectory="~" />);
