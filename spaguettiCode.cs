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
#######################################
# TOKENS
#######################################

TT_INT		= 'INT'
TT_FLOAT    = 'FLOAT'
TT_PLUS     = 'PLUS'
TT_MINUS    = 'MINUS'
TT_MUL      = 'MUL'
TT_DIV      = 'DIV'
TT_LPAREN   = 'LPAREN'
TT_RPAREN   = 'RPAREN'

class Token:
    def __init__(self, type_, value=None):
        self.type = type_
        self.value = value
    
    def __repr__(self):
        if self.value: return f'{self.type}:{self.value}'
        return f'{self.type}'

#######################################
# LEXER
#######################################

class Lexer:
    def __init__(self, fn, text):
        self.fn = fn
        self.text = text
        self.pos = Position(-1, 0, -1, fn, text)
        self.current_char = None
        self.advance()
    
    def advance(self):
        self.pos.advance(self.current_char)
        self.current_char = self.text[self.pos.idx] if self.pos.idx < len(self.text) else None

    def make_tokens(self):
        tokens = []

        while self.current_char != None:
            if self.current_char in ' \t':
                self.advance()
            elif self.current_char in DIGITS:
                tokens.append(self.make_number())
            elif self.current_char == '+':
                tokens.append(Token(TT_PLUS))
                self.advance()
            elif self.current_char == '-':
                tokens.append(Token(TT_MINUS))
                self.advance()
            elif self.current_char == '*':
                tokens.append(Token(TT_MUL))
                self.advance()
            elif self.current_char == '/':
                tokens.append(Token(TT_DIV))
                self.advance()
            elif self.current_char == '(':
                tokens.append(Token(TT_LPAREN))
                self.advance()
            elif self.current_char == ')':
                tokens.append(Token(TT_RPAREN))
                self.advance()
            else:
                pos_start = self.pos.copy()
                char = self.current_char
                self.advance()
                return [], IllegalCharError(pos_start, self.pos, "'" + char + "'")

        return tokens, None

    def make_number(self):
        num_str = ''
        dot_count = 0

        while self.current_char != None and self.current_char in DIGITS + '.':
            if self.current_char == '.':
                if dot_count == 1: break
                dot_count += 1
                num_str += '.'
            else:
                num_str += self.current_char
            self.advance()

        if dot_count == 0:
            return Token(TT_INT, int(num_str))
        else:
            return Token(TT_FLOAT, float(num_str))

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
