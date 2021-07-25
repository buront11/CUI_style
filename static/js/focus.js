/*
  inputからfocusが消えてしまうようなケースを対処
  tabはautocompleteで別処理
*/

function forciblyFocus() {
  var latestInput = document.getElementsByClassName("latest-input")[0];
  latestInput.focus();
}
