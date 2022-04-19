from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment, Reply
from .serializers import CommentSerializer, ReplySerializer
from django.shortcuts import get_object_or_404




@permission_classes([AllowAny])
@api_view(['GET'])
def get_all_comments (request):
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_comment(request):
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)






# WIP BELOW
@api_view([ 'PUT'])
@permission_classes([IsAuthenticated])
def comment_detail(request, pk):
    comments = get_object_or_404(Comment, pk=pk)
    serializer = CommentSerializer(comments, data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)

@permission_classes([IsAuthenticated])
@api_view(['GET',])
def get_all_authcomments (request, pk):
        comments = get_object_or_404(Comment, pk=pk)
        serializer = CommentSerializer(comments, data=request.data)
        return Response(serializer.data)


@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def user_reply(request, pk):
    if request.method == 'GET':
        replies = Reply.objects.filter(comment_id=pk)
        serializer = ReplySerializer(replies,many=True)
        return Response(serializer.data, status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)               
    