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
  return (
    <div class="line">
      <span class="user">{props.name}:</span>
      <span class="location">{props.directory}</span>
      <span class="percent">%</span>
      <input type="text" class="latest-input" onKeyPress={OnEnterPressed} autoFocus={true} />
    </div>
  );
}

function OnEnterPressed(e) {
  if (e.key == 'Enter'){
    alert('Pressed Enter')
  }
}

function Terminal(props) {
  return (
    <div>
      <InitialMessageComponent />
      <InputComponent
        name={props.userName}
        directory={props.currentDirectory}
      />
    </div>
  );
}

display(<Terminal userName="guest@comnets" currentDirectory="~" />);
