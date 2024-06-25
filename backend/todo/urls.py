from django.urls import path
from .views import RegisterView
from .views import UserList, UserDetail, TaskList, TaskDetail

urlpatterns = [
    path('users/', UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),
    path('tasks/', TaskList.as_view(), name='task-list'),
    path('tasks/<int:pk>/', TaskDetail.as_view(), name='task-detail'),
    path('register/', RegisterView.as_view(), name='register'),
]
