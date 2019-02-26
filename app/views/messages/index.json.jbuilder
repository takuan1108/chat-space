json.array! @new_messages do |message|
  json.id message.id
  json.content message.content
  json.image message.image
  json.created_at message.created_at
end
