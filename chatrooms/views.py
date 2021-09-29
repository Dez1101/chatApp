# from chatApp.chatrooms.models import Chat, ChatRoom
from django.shortcuts import render
from django.views import View
from . models import ChatRoom, Chat
from django.contrib.auth.mixins import LoginRequiredMixin
# Create your views here.


class   Index(LoginRequiredMixin, View):
    def get(self, request):
        roomName = Chat.objects.all()
        chatr ={
            'theRoom': roomName
        }
        
        return  render(request, 'chatrooms/index.html', chatr)


class Room(LoginRequiredMixin, View):
    def get(self, request, room_name):
        room = ChatRoom.objects.filter(name=room_name).first()#get room matching typed name
        chats = []

        if room:
            chats = Chat.objects.filter(room=room)
        else:
            room = ChatRoom(name=room_name)
            room.save()
        return render(request, 'chatrooms/room.html', {'room_name':room_name, 'chats': chats})