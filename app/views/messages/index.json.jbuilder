json.array! @new_messages do |message|
  json.id message.id
  json.content message.content
  json.image_url message.image.url
  json.user_name message.user.name
  json.created_at message.created_at.strftime("%Y/%m/%d %H:%M")
end