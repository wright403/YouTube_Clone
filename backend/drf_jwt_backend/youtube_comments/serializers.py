from rest_framework import serializers
from .models import Comment
from .models import Reply



class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'video_id', 'text', 'likes', 'dislikes', 'user_id']
        depth = 1


class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model= Reply
        fields = ['id', 'user_id', 'comment_id','text']
        depth = 1  