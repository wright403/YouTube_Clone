from django.urls import path
from . import views

urlpatterns = [
	path('', views.get_all_comments),
	path('add/', views.add_comment),
	path('<int:pk>/', views.comment_detail),
	path('', views.get_all_authcomments)
]