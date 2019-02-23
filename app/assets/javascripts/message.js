$(function(){

  function buildHtml(message){
    var html = `<div class="message">
                  <div class="message__info">
                    <span class="message__info__name">
                      ${message.user_name}
                    </span>
                    <span class="message__info__date">
                      ${message.created_at}
                    </span>
                  </div>`
    if(message.content){
      html = html + `<p class="message__text">${message.content}</p>`
    }
    if(message.image_url){
      html = html + `<img src="${message.image_url}", class="message_image">`
    }
    html = html + `</div>`
    return html;
  }

  $("#new_message").on("submit", function(e){
    e.preventDefault();
    var input = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({
      url: url,
      type: 'POST',
      data: input,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      html = buildHtml(data);
      $(".message-container").append(html);
      $(".form__box__text").val("");
      var speed = 400;
      var target = $(".message").last();
      var position = target.offset().top + $(".message-container").scrollTop();
      $('.message-container').animate({scrollTop: position}, speed, 'swing');
    })
    .fail(function(){
      alert('投稿に失敗しました');
    })
    .always(function(){
      $(".form__submit-btn").removeAttr("disabled");
    });
  })

})
