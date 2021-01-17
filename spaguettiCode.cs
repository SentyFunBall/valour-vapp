using System;
using System.Collections.Generic;

namespace vapp
{
    public class Vapp{
        
        public string DIGITS = "0123456789";

        public class Error{
            public Position pos_start;
            public Position pos_end;
            public string error_name;
            public string details;
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

        public class Position{                        

            public int idx;
            public int ln;
            public int col;
            public string fn;
            public string ftxt;

            public Position(int idx, int ln, int col, string fn, string ftxt){
                this.idx = idx;
                this.ln = ln;
                this.col = col;
                this.fn = fn;
                this.ftxt = ftxt;
            }
            public Position advance(char current_char){
                idx += 1;
                col += 1;

                if (current_char == '\n'){
                    ln += 1;
                    col = 0;
                }
                return this;
            }
            public Position copy(){
                return new Position(idx, ln, col, fn, ftxt);
            }
        }

    string TT_INT	   = "INT";
    string TT_FLOAT    = "FLOAT";
    string TT_PLUS     = "PLUS";
    string TT_MINUS    = "MINUS";
    string TT_MUL      = "MUL";
    string TT_DIV      = "DIV";
    string TT_LPAREN   = "LPAREN";
    string TT_RPAREN   = "RPAREN";

    class Token{
        public string type;
        public dynamic value;
        public Token(string type, dynamic value=null){
            this.type = type;
            this.value = value;
        }
        public override string ToString(){
            if (this.value != null){
                return $"{this.type}:{this.value}";
            }
            return $"{this.type}";
        }    
    }

    class Lexer{
        public string fn;
        public string text;
        public Position pos;
        public char current_char;

        public Lexer(string fn, string text){
            this.fn = fn;
            this.text = text;
            this.pos = new Position(-1, 0, -1, fn, text);
            this.current_char = ' ';
            advance();
        }
        
        public void advance(){
            pos.advance(current_char);
            if (pos.idx < text.Length){
                current_char = text[pos.idx];
            } else {
                current_char = '\0';
            }
        }
        
        def make_tokens(this){
            tokens = []

            while this.current_char != None:
                if this.current_char in ' \t':
                    this.advance()
                elif this.current_char in DIGITS:
                    tokens.append(this.make_number())
                elif this.current_char == '+':
                    tokens.append(Token(TT_PLUS))
                    this.advance()
                elif this.current_char == '-':
                    tokens.append(Token(TT_MINUS))
                    this.advance()
                elif this.current_char == '*':
                    tokens.append(Token(TT_MUL))
                    this.advance()
                elif this.current_char == '/':
                    tokens.append(Token(TT_DIV))
                    this.advance()
                elif this.current_char == '(':
                    tokens.append(Token(TT_LPAREN))
                    this.advance()
                elif this.current_char == ')':
                    tokens.append(Token(TT_RPAREN))
                    this.advance()
                else:
                    pos_start = this.pos.copy()
                    char = this.current_char
                    this.advance()
                    return [], IllegalCharError(pos_start, this.pos, "'" + char + "'")

            return tokens, None
        }
        def make_number(this):
            num_str = ''
            dot_count = 0

            while this.current_char != None and this.current_char in DIGITS + '.':
                if this.current_char == '.':
                    if dot_count == 1: break
                    dot_count += 1
                    num_str += '.'
                else:
                    num_str += this.current_char
                this.advance()

            if dot_count == 0:
                return Token(TT_INT, int(num_str))
            else:
                return Token(TT_FLOAT, float(num_str))
    }
#######################################
# RUN
#######################################

def run(fn, text):
    lexer = Lexer(fn, text)
    tokens, error = lexer.make_tokens()

    return tokens, error
        /*
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
            public Position pos_start;
            public Position pos_end;
            public string error_name;
            public string details;

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
            public string type;
            public dynamic value;
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
            public string text;
            public Position pos;
            public char current_char;
            public string fn;

            public Lexer(string text, string fn){
                this.fn = fn;
                this.text = text;
                this.pos = new Position(-1, 0, -1, fn, text); 
                advance();
            }

            public void advance(){
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
            public Token make_number(){
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
        */
    }

}
