import { Component, OnInit } from '@angular/core';
import { ChatBotService } from '../../Service/chat-bot.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {

  constructor(private api: ChatBotService) { }
  answer = [];

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  message(message: string){
    (document.getElementById('form_input') as HTMLInputElement).value = '';

    this.data=message.split(' ');
    if (message === ''){
      alert('Please Enter Question');
    }

    this.api.getMessage()
    .subscribe(data => {
      console.log(data);
      this.answer = data,
      for(let i=0;i<this.data.length;i++)
      {
        for(let j=0;j<this.answer.length;j++)
        {
          if(this.data[i]==this.answer[j].question){
            var userinput=document.createElement('div');
            userinput.innerHTML=this.data[i];
            userinput.id="user";
            userinput.className="chatarea-inner user"
            document.getElementById('massage').appendChild(userinput);

            var answer=document.createElement('div');
            answer.innerHTML=this.answer[j].answer;
            answer.className="chatarea-inner chatbot"
            document.getElementById('massage').appendChild(answer);
          }
        } 
      }
  }

}
