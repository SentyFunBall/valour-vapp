using System;
using System.Net;
using System.IO;

namespace wrapper_cs
{
    class Program
    {
        static void Main(string[] args)
        {
            string sysName = "sysname";
            string url = $"Valour.gg/{sysName}/api";
            WebRequest get = WebRequest.Create(url);
            Stream stream = get.GetResponse().GetResponseStream()
        }
    }
}
