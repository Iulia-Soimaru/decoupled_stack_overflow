$(document).on('page:change', function(){

  ///// RENDER PAGE \\\\\
  $.ajax({
    url: 'http://localhost:3001/',
    type: 'GET',
    dataType: 'JSON',
  }).done(function(response){
    var context = {};
    console.log(response)
    var source = $('#render-index-page').html();
    var templatingFunction = Handlebars.compile(source);
    context.questions = response;
    $('body').append(templatingFunction(context));
  });



  ///// CREATE QUESTION \\\\\

  $('body').on('submit', '#create-question-form', function(e){
    e.preventDefault();
    // var form = $(e.target)
    var questionTitle = $('#question-title').val();
    var questionContent = $('#question-content').val();
    $.ajax({
      url: 'http://localhost:3001/questions',
      type: 'POST',
      dataType: 'JSON',
      data: {question: {title: questionTitle, content: questionContent}}
    }).done(function(response){
      var context = {};
      var source = $('#render-new-question').html();
      var templatingFunction = Handlebars.compile(source);
      context.question = response;
      $('.question-container').append(templatingFunction(context));
      $('#question-title').val('');
      $('#question-content').val('');
      alert('Your question was succesfully created')
    }).fail(function(){
      alert('Request failed, please try again')
    })
  });



  ///// SCROLL TO QUESTIONS \\\\\

  // $('.scroll-down').on('click', function(){
  //   $('body').animate({
  //     scrollTop: $(window).height();
  //   }, 1000);
  // });



  ///// RENDER VOTES \\\\\
  $('body').on('click', '.question-vote', function(e){
    e.preventDefault();
    // var form = $(e.target)
    var questionTitle = $('#question-title').val();
    var questionContent = $('#question-content').val();
    $.ajax({
      url: $(this).attr('href'),
      type: 'GET',
      dataType: 'JSON',
    }).done(function(response){
      // debugger
      var targetUL = $('[data-question-id='+response.question.id+']')
      $(targetUL).find('.upvote-count').text(response.question.upvotes)
      $(targetUL).find('.downvote-count').text(response.question.downvotes)
    });
  });




  ///// DELETE QUESTION \\\\\
  $('body').on('click', '.delete-button', function(evt){
    evt.preventDefault();
    console.log($(this))

    $.ajax({
      url: 'http://localhost:3001' + $(this).attr('href'),
      type: "DELETE",
      data: {'_method': "delete"}
    }).done(function(response){
      console.log('success');
    }).fail(function(){
      alert('FAILS')
    })
  })



  ///// RENDER QUESTION PAGE \\\\\
  $('body').on('click', '.specific-question', function(evt){
    evt.preventDefault();
    $('.overlay').fadeIn('2000', function(){});
    var source = $('#render-question-page').html();
    var templatingFunction = Handlebars.compile(source);

    $.ajax({
      url: $(this).attr('href'),
      type: 'GET',
      dataType: 'JSON',
    }).done(function(response){
      $('body').append(templatingFunction(response))
    });
  });

  $(document).on('click', '.overlay',function() {
        $('.overlay, .question-page').fadeOut('2000',function(){});
        return false;
    });
  $(document).on('click', '.close',function() {
        $('.overlay, .question-page').fadeOut('2000',function(){});
        return false;
    });





      ///// CREATE ANSWER \\\\\

    $('body').on('submit', '#create-answer-form', function(e){
    e.preventDefault();
    // var form = $(e.target)
    var answerTitle = $('#answer-title').val();
    var answerContent = $('#answer-content').val();
    // debugger
    $.ajax({
      url: 'http://localhost:3001' + $(this).attr('action'),
      type: 'POST',
      dataType: 'JSON',
      data: {answer: {title: answerTitle, content: answerContent}}
    }).done(function(response){
      var context = {}
      var source = $('#render-new-answer').html();
      var templatingFunction = Handlebars.compile(source);
      console.log(response)
      context.answer = response
      $('body .answers-right').append(templatingFunction(context));
      $('#answer-title').val('');
      $('#answer-content').val('');
      alert('Your answer was succesfully created')
    }).fail(function(){
      alert('Request failed, please try again')
    })
  });

});
