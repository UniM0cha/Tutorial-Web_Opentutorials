var Links = {
    setColor:function(color){
        $('a').css('color', color);
    //   var link = document.querySelectorAll('a');
    //   for(var i = 0; i < link.length; i++){
    //     link[i].style.color = color;
    //   }
    }
  }
  var Body = {
    setColor:function (color){
        $('body').css('color',color);
    //   document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function (color){
        $('body').css('backgroundColor', color);
    //   document.querySelector('body').style.backgroundColor = color;
    }
  }
  function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'Night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');
      Links.setColor('white');
      self.value = 'Day';
    } else {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      Links.setColor('black');
      self.value = 'Night';
    }
  }