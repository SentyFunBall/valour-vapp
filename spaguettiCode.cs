using System;
using System.Collections.Generic;
/*
namespace vapp
{
    public class Vapp{
        public string TT_INT	  = "INT";
        public string TT_FLOAT    = "FLOAT";
        public string TT_PLUS     = "PLUS";
        public string TT_MINUS    = "MINUS";
        public string TT_MUL      = "MUL";
        public string TT_DIV      = "DIV";
        public string TT_LPAREN   = "LPAREN";
        public string TT_RPAREN   = "RPAREN";
        public string digits      = "1234567890";

        public class Error{
            private Position pos_start;
            private Position pos_end;
            private string error_name;
            private string details;

            public Error(Position pos_start, Position pos_end, string error_name, string details){
                this.pos_start = pos_start;
                this.pos_end = pos_end;
                this.error_name = error_name;
                this.details = details;
            }

            public string as_string(){
                return $"{error_name}: {details}\nFile {pos_start.fn}, line {pos_start.ln + 1}";
            }
        }

        public class IllegalCharError : Error{
            public IllegalCharError(Position pos_start, Position pos_end, string details) : base(pos_start, pos_end, "Illegal Character", details){

            }
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
                    } else if (digits.Contains(current_char)){
                        tokens.Add(make_number());
                    } else if ('+' == current_char){
                        tokens.Add(new Token(TT_PLUS));
                        advance();
                    } else if ('-' == current_char){
                        tokens.Add(new Token(TT_MINUS));
                        advance();
                    } else if ('*' == current_char){
                        tokens.Add(new Token(TT_MUL));
                        advance();
                    } else if ('/' == current_char){
                        tokens.Add(new Token(TT_DIV));
                        advance();
                    } else if ('(' == current_char){
                        tokens.Add(new Token(TT_LPAREN));
                        advance();
                    } else if (')' == current_char){
                        tokens.Add(new Token(TT_RPAREN));
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

                while ((current_char != '\0') && (digits + ".").Contains(current_char)){
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
                    return new Token(TT_FLOAT, double.Parse(numStr));
                } else {
                    return new Token(TT_INT, int.Parse(numStr));
                }
    
            }

        }

        public List<dynamic> run(text){
            lexer = new Lexer(text);
            message = lexer.make_tokens();

            return message
        }
    
    }

}
*/