using System;
using System.Net;
using System.IO;
using System.Collections.Generic;
namespace wrapper_cs
{
    class cswrap
    {
        public static Dictionary<string, string> Get(string sysName)
        {
            Dictionary<string, string> ads = null;
            string url = $"Valour.gg/{sysName}/api";
            WebRequest get = WebRequest.Create(url);
            Stream stream = get.GetResponse().GetResponseStream();
            
            return ads;
        }
    }
}
