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
    });
  });

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
      var targetUL = $('[data-question-id='+response.question.id+']')
      $(targetUL).find('.upvote-count').text(response.question.upvotes)
      $(targetUL).find('.downvote-count').text(response.question.downvotes)
    });
  });

});
