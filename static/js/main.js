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

function InputComponent() {
  return (
      <div class="line">
        <span class="user">guest@comnets:</span>
        <span class="location"> ~ </span>
        <span class="percent">%</span>
        <input type="text" class="latest-input" autofocus />
      </div>
  )
}

function Terminal(){
  return (
    <div>
      <InitialMessageComponent />
      <InputComponent />
    </div>
  )
}

// var component=terminal("guest@comnets", "~")
display(<Terminal />)
