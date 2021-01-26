using System;
using System.Collections.Generic;
namespace wrapper_cs{

    public class wrapper{
        private int e = 5;
        public Dictionary<string, string> lastState = null;
        public void start(string sysName, string[] planetpaths){
            Dictionary<string, string> toWrap = cswrap.Get(sysName);
            if(lastState == null){
                lastState = toWrap;
            } else if (lastState != toWrap){
                foreach (string planetpath in planetpaths)
                {
                    if (lastState[$"onPlanet{planetpath}"]){

                    }
                }
            }
        }
    }
}