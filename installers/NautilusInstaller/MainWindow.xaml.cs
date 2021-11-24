using System;
using System.Windows;
using System.Net;
using System.IO;
using System.IO.Compression;
using IWshRuntimeLibrary;
using System.Diagnostics;
using System.Windows.Threading;
using System.Threading.Tasks;

namespace NautilusInstaller
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        string pathWin32 = @"C:\Program Files (x86)\Nautilus";
        Uri uri = new Uri("https://github.com/SentyFunBall/vapp-test/releases/download/v0.7.3b1/nautWin32.zip");
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Button_Click(object sender, EventArgs e)
        {
            if(win32.IsChecked == true)
            {
                Task.Factory.StartNew(() => Download());

            } else if(osx.IsChecked == true)
            {
                status.Content = "How? You can't run this installer on MacOS!";
            } else
            {
                status.Content = "How? You can't run this installer on Debian!";
            }
        }

        private void Uninstall(object sender, EventArgs e)
        {
            Task.Factory.StartNew(() => doTheDel());
        }

        private void Download()
        {
            Dispatcher.BeginInvoke(new Action(() => {
                //checks for install dir
                status.Content = "Checking system";
                if (!Directory.Exists(pathWin32))
                {
                    Directory.CreateDirectory(pathWin32);
                }

                //downloads win32 zip file
                if (!Directory.Exists(pathWin32 + @"\Nautilus-win32-x64"))
                {
                    status.Content = "Downloading";
                    WebClient webClient = new WebClient();
                    webClient.DownloadFile(uri, pathWin32 + @"\Nautilus.zip");
                }

                //extracts and installs
                if (!Directory.Exists(pathWin32 + @"\Nautilus-win32-x64"))
                {
                    status.Content = "Extracting";
                    status.Content = "Extracting";
                    status.Content = "Extracting";
                    ZipFile.ExtractToDirectory(pathWin32 + @"\Nautilus.zip", pathWin32);
                }

                //deletes zip file
                status.Content = "Finalizing";
                System.IO.File.Delete(pathWin32 + @"\Nautilus.zip");

                //desktop shortcut (if checked)
                if (shortcut.IsChecked == true)
                {
                    status.Content = "Creating desktop icon";
                    object shDesktop = (object)"Desktop";
                    WshShell shell = new WshShell();
                    string shortcutAddress = (string)shell.SpecialFolders.Item(ref shDesktop) + @"\Nautilus.lnk";
                    IWshShortcut shortcut = (IWshShortcut)shell.CreateShortcut(shortcutAddress);
                    shortcut.Description = "Bots for Valour";
                    shortcut.TargetPath = pathWin32 + @"\Nautilus-win32-x64\Nautilus.exe";
                    shortcut.Save();
                }

                //launch
                if (launch.IsChecked == true)
                {
                    status.Content = "Launching Nautilus";
                    Process.Start(pathWin32 + @"\Nautilus-win32-x64\Nautilus.exe");
                }
                else
                {
                    status.Content = "Finshed";
                    Process.Start("explorer.exe", pathWin32);
                }
            }), DispatcherPriority.Normal);
        }

        private void doTheDel()
        {
            Dispatcher.BeginInvoke(new Action(() =>
            {
                string pathWin32 = @"C:\Program Files (x86)\Nautilus";

                if (Directory.Exists(pathWin32))
                {
                    Directory.Delete(pathWin32, true);
                    string desktopPath = Environment.GetFolderPath(Environment.SpecialFolder.Desktop);
                    System.IO.File.Delete(Path.Combine(desktopPath, "Nautilus.lnk"));
                    status.Content = "Nautilus Deleted";
                }
                else
                {
                    status.Content = "No install detected";
                }
            }), DispatcherPriority.Normal);
        }
    }
}
