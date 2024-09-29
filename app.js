
function pressme(e){
    document.getElementById("inp").value += e
  }
  function eq(e){
      var a = document.getElementById("inp")
      a.value=eval(a.value)
  
  }
  function del() {
      document.getElementById("inp").value = "";
  }
  
  function clr() {
      let input = document.getElementById("inp");
      input.value = input.value.slice(0, -1);
  }