"use strict";

function DayContent(message){
    
    this.getText = function(){
    
        return message;
    };
    
    this.setText = function(_text){
        
        message = _text; 
    };
    
    this.setText(message);
}
    
Message.prototype.getHTMLText = function(){
     return this.getText();  
};
