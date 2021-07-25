/*
  inputからfocusが消えてしまうようなケースを対処
  tabはautocompleteで別処理
*/

function focusLatestInput() {
  var latestInput = document.getElementsByClassName("latest-input")[0];
  latestInput.focus();
}

// 文字が選択されていないケースのclickの場合のみfocusするように
// https://qiita.com/uuuno/items/5a215d9bfeabec8adbc3 を参考に
var terminal = document.getElementsByClassName("terminal")[0];
function upListener(e){
  if (window.getSelection){
    var selectedStr = window.getSelection().toString();  //文章取得
    if(!(selectedStr !== '' && selectedStr !== '\n')){  //文章チェック
      focusLatestInput();
    }
  }else{
    /* getSelectionがないケースがわからないが念の為 */
    focusLatestInput();
  }
}
terminal.addEventListener("mouseup", upListener);
