using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Net;
using System.IO;
using System.IO.Compression;
using IWshRuntimeLibrary;

namespace NautilusInstaller
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        string pathWin32 = @"E:\Program Files (x86)\Nautilus";
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Button_Click(object sender, EventArgs e)
        {
            status.Content = " ";
            if(win32.IsChecked == true)
            {
                //checks for install dir
                status.Content = "Checking system";
                System.Threading.Thread.Sleep(3000);
                if (!Directory.Exists(pathWin32))
                {
                    Directory.CreateDirectory(pathWin32);
                }

                //sleep
                System.Threading.Thread.Sleep(1000);

                //downloads win32 zip file
                status.Content = "Downloading";
                System.Threading.Thread.Sleep(1000);
                WebClient webClient = new WebClient();
                webClient.DownloadFile("https://github.com/SentyFunBall/valour-vapp/releases/download/v0.7/NautilusSetup.exe", pathWin32 + @"\Nautilus.zip");

                //extracts and installs
                status.Content = "Extracting";
                ZipFile.ExtractToDirectory(pathWin32 + @".\Nautilus.zip", pathWin32);

                //deletes zip file
                status.Content = "Finalizing";
                System.IO.File.Delete(pathWin32 + @".\Nautilus.zip");

                //desktop shortcut (if checked)
                if(shortcut.IsChecked == true)
                {
                    object shDesktop = (object)"Desktop";
                    WshShell shell = new WshShell();
                    string shortcutAddress = (string)shell.SpecialFolders.Item(ref shDesktop) + @"\Nautilus.lnk";
                    IWshShortcut shortcut = (IWshShortcut)shell.CreateShortcut(shortcutAddress);
                    shortcut.Description = "Bots for Valour";
                    shortcut.TargetPath = pathWin32 + @"\Nautilus.exe";
                    shortcut.Save();
                }
                
                //launch
                if(launch.IsChecked == true)
                {
                    System.Diagnostics.Process.Start(pathWin32 + @"\Nautilus.exe");
                } else
                {
                    System.Diagnostics.Process.Start("explorer.exe", pathWin32);
                }

            } else if(osx.IsChecked == true)
            {

            } else
            {

            }
        }



        private void Completed(object sender)
        {
            if (win32.IsChecked == true)
            {
                MessageBox.Show("Nautilus for Windows was installed");
            }
            else if (osx.IsChecked == true)
            {
                MessageBox.Show("Nautilus for MacOS was installed");
            }
            else
            {
                MessageBox.Show("Nautilus for Debian was installed");
            }
        }
    }
}
