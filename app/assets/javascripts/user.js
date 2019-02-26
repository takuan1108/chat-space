$(function(){

  var result_user = $("#user-search-result")
  var group_user = $("#chat-group-users");
  var user = {}

  function searchUser(input){
    let url = "/users"
    $.ajax({
      url: url,
      type: "GET",
      data: { keyword: input },
      dataType: "json",
    })
    .done(function(users){
      result_user.empty();
      if(users.length !== 0){
        users.forEach(function(user){
          appendUser(user);
        })
      }else{
        appendNoUser(result_user);
      }
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    })
  }

  function appendUser(user){
    let html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name="${user.name}">追加</a>
                </div>`
    result_user.append(html)
  }

  function appendNoUser(result_user){
    let html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">ユーザーは見つかりません</p>
                </div>`
    result_user.append(html)
  }

  $(".chat-group-form__input").on("keyup", function(e){
    e.preventDefault();
    let input = $(this).val();
    if(input){
      searchUser(input);
    }else{
      result_user.empty();
    }
  })

  $(document).on("click", ".user-search-add", function(e){
    e.preventDefault();
    user.id = $(this).attr("data-user-id");
    user.name = $(this).attr("data-user-name");
    let html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                  <input name='group[user_ids][]' type='hidden' value='${user.id}'>
                  <p class='chat-group-user__name'>${user.name}</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn' data-user-id=${user.id} data-user-name="${user.name}">削除</a>
                  </div>`
    group_user.append(html);
    $(this).parent().remove();
  })

  $(document).on("click", ".user-search-remove", function(e){
    e.preventDefault();
    user.id = $(this).attr("data-user-id");
    user.name = $(this).attr("data-user-name");
    appendUser(user);
    $(this).parent().remove();
  })

})
