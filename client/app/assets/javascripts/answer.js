// $(document).on('page:change', function(){

//     ///// CREATE ANSWER \\\\\

//     $('body').on('submit', '#create-answer-form', function(e){
//     e.preventDefault();
//     // var form = $(e.target)
//     var answerTitle = $('#answer-title').val();
//     var answerContent = $('#answer-content').val();
//     $.ajax({
//       url: $(this).attr('action'),
//       type: 'POST',
//       dataType: 'JSON',
//       data: {answer: {title: answerTitle, content: answerContent}}
//     }).done(function(response){
//       debugger
//       var context = {};
//       var source = $('#render-new-answer').html();
//       var templatingFunction = Handlebars.compile(source);
//       console.log(response)
//       context.question = response;
//       $('.answers-right').append(templatingFunction(context));
//       $('#answer-title').val('');
//       $('#answer-content').val('');
//       alert('Your answer was succesfully created')
//     }).fail(function(){
//       alert('Request failed, please try again')
//     })
//   });


// });