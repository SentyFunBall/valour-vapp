using System;
using Sytem.Collections.Generic;

namespace vapp
{
    public class Ttandkw{
        public string TT_INT	  = "INT";
        public string TT_FLOAT    = "FLOAT";
        public string TT_PLUS     = "PLUS";
        public string TT_MINUS    = "MINUS";
        public string TT_MUL      = "MUL";
        public string TT_DIV      = "DIV";
        public string TT_LPAREN   = "LPAREN";
        public string TT_RPAREN   = "RPAREN";
        public string digits      = "1234567890";
    }
    
    public class Token{
        private string type;
        private dynamic value;
        public Token(string type, dynamic value){
            this.type = type;
            this.value = value;
        }
        public Token(string type){
            this.type = type;
        }

        public override string ToString(){
            if (this.value){
                return $"{this.type}:{this.value}";
            }
            return $"{this.type}";
        }
    }
}