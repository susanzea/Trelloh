
@comments.each do |comment|
    json.set! comment.id do 
        json.extract! comment, :id, :body, :user_id, :card_id
    end
end