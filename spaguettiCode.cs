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

    public class Lexer
    {
        private string text;
        private Position pos;
        private char current_char;
        private Ttandkw tk;
        private string fn;

        public Lexer(string text, string fn){
            this.fn = fn;
            this.text = text;
            this.pos = new Position(-1, 0, -1, fn, text); 
            advance();
        }

        private void advance(){
            pos.advance(current_char);
            if (pos.idx < text.Length){
                current_char = text[pos.idx];
            } else {
                current_char = '\0';
            }
        }

        public List<dynamic> make_tokens(){
            var tokens = new List<Token>();
            while (current_char != '\0')
            {
                if (" \t\n".Contains(current_char)){
                    advance();
                } else if (tk.digits.Contains(current_char)){
                    tokens.Add(make_number());
                } else if ('+' == current_char){
                    tokens.Add(new Token(tk.TT_PLUS));
                    advance();
                } else if ('-' == current_char){
                    tokens.Add(new Token(tk.TT_MINUS));
                    advance();
                } else if ('*' == current_char){
                    tokens.Add(new Token(tk.TT_MUL));
                    advance();
                } else if ('/' == current_char){
                    tokens.Add(new Token(tk.TT_DIV));
                    advance();
                } else if ('(' == current_char){
                    tokens.Add(new Token(tk.TT_LPAREN));
                    advance();
                } else if (')' == current_char){
                    tokens.Add(new Token(tk.TT_RPAREN));
                    advance();
                } else {
                    Position pos_start = pos.copy();
                    char chr = current_char;
                    return new List<dynamic>{1, new IllegalCharError(pos_start, pos, $"'{chr}'")};
                }
            }
            return new List<dynamic>{0, tokens};
        }
        private Token make_number(){
            string numStr = "";
            bool dot_count = false;

            while ((current_char != '\0') && (tk.digits + ".").Contains(current_char)){
                if (current_char == '.'){
                    if (dot_count){
                        break;
                    }
                    dot_count = true;
                    numStr += ".";
                } else {
                    numStr += current_char;
                }
                advance();
            }

            if(dot_count){
                return new Token(tk.TT_FLOAT, double.Parse(numStr));
            } else {
                return new Token(tk.TT_INT, int.Parse(numStr));
            }
        }

    }
}