   M S B A M L   `   `   `  ����L  HNautilusInstaller, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null5clr-namespace:NautilusInstallerNautilusInstaller  5   	   "    NautilusInstaller.MainWindow   5   	   \ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   1localclr-namespace:NautilusInstaller     5   	     � Title$  Nautilus Manager��5   	   $	��450��6"   $	��600��6/    � 
ResizeMode$ CanMinimize=�6;    � Icon$ /win_light.png��6T   .��5	      � ���	#FF272727.+�5
   
   �� -   5         ��Name$ 	mainLable��5
      $��We're almost there��6#   $��Center=�6@   $��0,32,0,0q�6]   $	��Top=�6o   ���	#FFFDFDE6$��Microsoft JhengHei)�6�   $��30(�6�   ��6�   Z� 6�   �� 5   
   -   5        $ osLable��5      $��What OS are you using?��6!   $��Center=�6B   $��0,87,0,0q�6_   $	��Top=�6q   $��22(�6�   ���	#FFFDFDE6$��Microsoft JhengHei)�6�   	� 5   
   -   5         	�Name$ win32��5      $��
Windows 10��6%   $��Center=�6:   $��	0,177,0,0q�6W   $	��Top=�6j   ���	#FFFDFDE6$��Microsoft JhengHei)�6�    d� 	IsChecked$
 TrueY�6�   	� 5   
   -   5        $	 osx��5      $��MacOS��6#   $
��Left=�63   $��101,177,0,0q�6N   $	��Top=�6c   ���	#FFFDFDE6$��Microsoft JhengHei)�6�   	� 5   
   -   5        $	 deb��5      $��Debian��6#   $
��Left=�64   $��438,177,0,0q�6O   $	��Top=�6d   ���	#FFFDFDE6$��Microsoft JhengHei)�6�   �� 5   
   -   5        $��Install Nautilus��5      $��Center=�6,   $��	0,257,0,0q�6I   $	��Top=�6\   $��Microsoft JhengHei)�6t   $��16(�6�   ���	#FF0606056�   �� 5   
   -   5        $ status��5      $�� ��6    $��Center=�6+   $��	0,355,0,0q�6H   $	��Top=�6[   ���	#FFFDFDE6$��Microsoft JhengHei)�6�   $��22(�6�   �� 5   
   -   5         ��Name$ shortcut��5      $��Create desktop shortcut��6%   $
��Left=�6G   $��131,205,0,0q�6b   $	��Top=�6w   ���	#FFFFFDF3$��Microsoft JhengHei)�6�   �� 5   
   -	   5        $ launch��5      $��Launch when done��6#   $
��Left=�6>   $��356,205,0,0q�6Y   $	��Top=�6n   ���	#FFFEFFF0$��Microsoft JhengHei)�6�   �� 5   
   -
   5        $��Uninstall Nautilus��5      $��Center=�6.   $��	0,306,0,0q�6K   $	��Top=�6^   $��Microsoft JhengHei)�6v   $��16(�6�   ���	#FF0606056�   5      5      