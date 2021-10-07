from django.urls import path
from . import views

app_name = 'dezzi'
urlpatterns = [
    path('signup/',views.RegistrationView.as_view(), name = 'signup' ),
    path('login/',views.LoginView.as_view(), name = 'login' ),
    path('logout/',views.LogoutView.as_view(), name = 'logout' ),
    path('activate/<uidb64>/<token>', views.ActivateAccountView.as_view(), name='activate'),
]