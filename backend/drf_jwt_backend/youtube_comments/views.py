from operator import truediv
from django.shortcuts import render
from rest_framework.decorators import APIView
from backend.drf_jwt_backend.cars import serializers
from comments.models import Comment
from .serializers import CommentSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny



# Create your views here.
class CommentList(APIView, AllowAny):

    def get(self, request, video_id):
        comments = Comment.objects.filter(video_id=video_id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status = status.HTTP_200_OK)

