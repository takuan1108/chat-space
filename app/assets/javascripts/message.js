$(function(){

  function buildMessageHtml(message){
    var html = `<div class="message" value="${message.id}">
                  <div class="message__info">
                    <span class="message__info__name">
                      ${message.user_name}
                    </span>
                    <span class="message__info__date">
                      ${message.created_at}
                    </span>
                  </div>`;
    if(message.content){
      html = html + `<p class="message__text">${message.content}</p>`;
    }
    if(message.image_url){
      html = html + `<img src="${message.image_url}", class="message_image">`;
    }
    html = html + `</div>`;
    return html;
  }

  function scrollToButtom(){
    let speed = 400;
    let target = $(".message").last();
    let position = target.offset().top + $(".message-container").scrollTop();
    $('.message-container').animate({scrollTop: position}, speed, 'swing');
  }

  $("#new_message").on("submit", function(e){
    e.preventDefault();
    let input = new FormData(this);
    let url = $(this).attr("action");
    $.ajax({
      url: url,
      type: 'POST',
      data: input,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(message){
      let html = buildMessageHtml(message);
      $(".message-container").append(html);
      $(".form__box__text").val("");
      scrollToButtom();
    })
    .fail(function(){
      alert('投稿に失敗しました');
    })
    .always(function(){
      $(".form__submit-btn").removeAttr("disabled");
    });
  })

  setInterval(function(){
    let url = $(this).attr("location");
    let last_message_id = $(".message").last().attr("value");
    if (last_message_id == null){
      console.log("メッセージなし");
      return;
    }
    $.ajax({
      url: url,
      type: "GET",
      data: { last_message_id: last_message_id },
      dataType: "json",
    })
    .done(function(new_messages){
      new_messages.forEach(function(new_message){
        let html = buildMessageHtml(new_message);
        $(".message-container").append(html);
      });
    })
    .fail(function(){
      alert('コメントの取得に失敗しました');
    })
  },5000)

})
